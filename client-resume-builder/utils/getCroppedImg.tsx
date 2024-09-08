import { Area } from "react-easy-crop";
import { RcFile } from "antd/es/upload";

export default async function getCroppedImg(
  imageSrc: string,
  croppedAreaPixels: Area
): Promise<string> {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = croppedAreaPixels.width;
  canvas.height = croppedAreaPixels.height;

  ctx?.drawImage(
    image,
    croppedAreaPixels.x,
    croppedAreaPixels.y,
    croppedAreaPixels.width,
    croppedAreaPixels.height,
    0,
    0,
    croppedAreaPixels.width,
    croppedAreaPixels.height
  );

  return new Promise<string>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        resolve(url);
      } else {
        reject(new Error("Failed to crop the image"));
      }
    }, "image/jpeg");
  });
}

const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.setAttribute("crossOrigin", "anonymous"); // This is needed for CORS
    image.onload = () => resolve(image);
    image.onerror = (error) => reject(error);
  });
