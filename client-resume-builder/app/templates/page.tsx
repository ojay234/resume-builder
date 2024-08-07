"use client";
import ReactDOMServer from "react-dom/server";
import React, { useEffect, useState } from "react";
import { ServerStyleSheet } from "styled-components";
import CustomButton from "@/components/common/CustomButton";
import TemplateOne from "@/templates/template-one";
import { sendResume } from "@/api/sendResume";
import { Provider } from "react-redux";
import { store } from "@/store";
import TemplateTwo from "@/templates/template-two";

function Template() {
  const handleGeneratePDF = async () => {
    // Render the TemplateOne component to an HTML string
    const sheet = new ServerStyleSheet();

    try {
      const templateHtml = ReactDOMServer.renderToString(
        sheet.collectStyles(
          <Provider store={store}>
            <TemplateOne />
          </Provider>
        )
      );

      // Extract the CSS from the sheet
      const templateCss = sheet.getStyleTags(); // or sheet.getStyleElements() for React elements

      console.log(templateHtml, "templateOne");
      console.log(templateCss, "templateCss");

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
      <div className="mt-10">
        <TemplateTwo />
      </div>
    </div>
  );
}

export default Template;
