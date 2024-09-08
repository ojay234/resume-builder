import React, { useState, useRef } from "react";
import { Modal, Upload } from "antd";
import { FaRegUserCircle } from "react-icons/fa";
import { RcFile } from "antd/es/upload";
import styled from "styled-components";
import CustomButton from "../CustomButton";
import Image from "next/image";
import Cropper from "react-easy-crop";

import { GoInbox } from "react-icons/go";
import getCroppedImg from "@/utils/getCroppedImg";

interface ImageInputProps {
  image: string;
  imageChangeHandler: (image: string) => void;
}

function ImageInput({ image, imageChangeHandler }: ImageInputProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const handleFileChange = async ({ file }: { file: RcFile }) => {
    const reader = new FileReader();
    reader.onload = () => setImageSrc(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleUploadClick = async () => {
    try {
      const croppedImg = await getCroppedImg(imageSrc!, croppedAreaPixels);
      setCroppedImage(croppedImg);

      // Convert the cropped image to a Blob and then to a File
      const blob = await fetch(croppedImg).then((res) => res.blob());
      const file = new File([blob], "cropped-image.jpeg", {
        type: "image/jpeg",
      });

      // Simulate an event object
      const event = {
        target: {
          files: [file],
        },
      };

      imageChangeHandler(event);
      setIsModalVisible(false); // Close modal after upload
    } catch (error) {
      console.error("Error cropping image:", error);
    }
  };

  const handleModalOpen = () => setIsModalVisible(true);
  const handleModalClose = () => setIsModalVisible(false);

  return (
    <>
      <div className="flex gap-7 items-center mt-8">
        <div>
          {image ? (
            <Image src={image} alt="photo" width={120} height={80} />
          ) : (
            <div className="border-2 border-[#ccc] rounded-md p-7 bg-white border-dashed">
              <FaRegUserCircle size="2.5rem" />
            </div>
          )}
        </div>
        <StyledInputContainer>
          <p className="text-sm mb-2">Add a photo to Your Resume (optional)</p>
          <CustomButton
            text="Add Photo"
            clicked={handleModalOpen}
            color="transparent"
            width="60%"
            type="button"
          />
        </StyledInputContainer>
      </div>

      <Modal
        title="Upload and Crop Image"
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        <StyledModalContainer className="flex flex-col justify-between relative min-h-[300px]">
          {!imageSrc ? (
            <Upload
              accept="image/*"
              beforeUpload={(file) => {
                handleFileChange({ file });
                return false;
              }}
              showUploadList={false}
            >
              <Upload
                accept="image/*"
                beforeUpload={(file) => {
                  handleFileChange({ file });
                  return false;
                }}
                showUploadList={false}
              >
                <div className="h-[250px] flex flex-col border-2 border-gray-400 w-full my-3 items-center px-4 py-3 border-dashed">
                  <div className="flex flex-col my-auto gap-4 items-center">
                    <p>
                      <GoInbox size="3rem" />
                    </p>
                    <p>Drag and drop an image or click to browse files</p>
                  </div>
                </div>
              </Upload>
            </Upload>
          ) : (
            <div>
              <div className="crop-container ">
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  zoom={zoom}
                  aspect={4 / 3}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={handleCropComplete}
                />
              </div>
            </div>
          )}
          <div className="footer">
            <div className="controls">
              <input
                type="range"
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                onChange={(e) => {
                  setZoom(e.target.value);
                }}
                className="zoom-range"
              />
            </div>
            <div className="flex items-center gap-5">
              <CustomButton
                key="cancel"
                text="Cancel"
                clicked={handleModalClose}
                color="transparent"
                width="80px"
              />
              <CustomButton
                key="upload"
                text="Upload"
                clicked={handleUploadClick}
                width="80px"
                // disabled={!imageSrc}
              />
            </div>
          </div>
        </StyledModalContainer>
      </Modal>
    </>
  );
}

const StyledInputContainer = styled.div`
  input {
    display: none;
  }
  button {
    font-size: 14px;
    padding: 5px !important;
  }
`;

const StyledModalContainer = styled.div`
  .crop-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 60px;
  }

  .footer {
    position: absolute;
    bottom: 0px;
    display: flex;
    left: auto;
    display: flex;
    justify-content: space-between;
    width: 100%;
    right: auto;
  }

  .controls {
    left: 50%;
    width: 50;
    display: flex;
    align-items: center;
  }

  .slider {
    padding: 22px 0px;
  }

  .zoom-range {
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 2px;
    border-top: 5px solid #fff;
    border-bottom: 5px solid #fff;
    background: #3f51b5;
    width: 100%;
  }

  .zoom-range::-moz-range-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 1px solid #3f51b5;
    background: #3f51b5;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .zoom-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 1px solid #3f51b5;
    background: #3f51b5;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .controls:hover input[type="range"]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px 8px rgba(63, 81, 181, 0.16);
    border-radius: 50%;
  }

  .controls:hover input[type="range"]::-moz-range-thumb {
    box-shadow: 0px 0px 0px 8px rgba(63, 81, 181, 0.16);
  }

  .ant-upload {
    /* display: flex !important;
    flex-direction: column; */
    width: 100%;
  }
`;
export default ImageInput;
