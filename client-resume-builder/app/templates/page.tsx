"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "@/components/common/custom-button";
import TemplateOne from "@/components/page-sections/templates/template-one";
import { sendResume } from "@/api/sendResume";

function Template() {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Convert the image to a data URL
        const imgFile = await fetch("./assets/templates/profile.jpg");
        const imgData = await imgFile.blob();
        const reader = new FileReader();
        reader.onloadend = function () {
          const imgDataURL = reader.result as string;
          setImageSrc(imgDataURL); // Set the image data URL
        };
        reader.readAsDataURL(imgData);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  const html = TemplateOne({ imageSrc });
  const handleGeneratePDF = async () => {
    // Render the TemplateOne component to an HTML string
    const templateHtml = html
   
    const templateCss = ""; // If you need to pass additional CSS, you can add it here

    try {
      const pdfData = await sendResume({
        html: templateHtml,
        css: templateCss,
      });
      // Handle the PDF data, e.g., trigger a download
      const blob = new Blob([pdfData]);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="px-11 py-6">
      <h1 className="text-center font-bold text-[3.2rem] leading-[4rem] text-[#333]">
        Choose Your Template
      </h1>

      <CustomButton text="generate resume" clicked={handleGeneratePDF} />
    </div>
  );
}

export default Template;
