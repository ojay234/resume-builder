// components/TemplateOne.tsx

import React from "react";
import styled from "styled-components";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const StyledTemplate = styled.div`
  position: relative;
  width: 595px;
  margin: 0 auto;
  background-color: white;
  padding: 12px;
  border: 1px solid black;

  .header {
    display: flex;
    justify-content: space-between;
    position: relative;

    .header-left-col {
      h1 {
        font-weight: 700;
        font-size: 20px;
      }
      p {
        font-size: 15px;
      }

      .header-socials {
        display: flex;
        gap: 15px;

        .social {
          display: flex;
          padding: 0px 10px;
          align-items: center;
          gap: 5px;
          background-color: #f1efefcc;
          border-radius: 5px;
          p {
            font-size: 12px;
          }

          .social-icon {
            background-color: white;
            border-radius: 50%;
            padding: 2px;
          }
        }
      }
    }
    .header-image-container {
      position: absolute;
      right: 0;
    }
  }
`;

interface templateProps {
  imageSrc: string;
}

const TemplateOne = ({ imageSrc }: templateProps) => {
  return `
  <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resume</title>
        <style>
           h1 {
            font-size: 10px;
           }
          .header {
            display: flex;
            justify-content: space-between;
          }
          
          .socials {
          display: flex;
          gap: 10px
          }
          img {
            width: 50px;
            height: 50px;
          }
        </style>
      </head>
      <body>
        <div class="header">
        <div>
          <h1>Kelly Blackwell</h1>
          <p>Administrative Assistant</p>
          <div class="socials">
            <div className="social">
              <p className="social-icon">
                <IoIosMail size="1rem" />
              </p>
              <p>210 286 164</p>
            </div>
            <div className="social">
              <p className="social-icon">
                <IoCall size="1rem" />
              </p>
              <p>kelly.blackwell@gmail.com</p>
            </div>
            <div className="social">
              <p className="social-icon">
                <FaLocationDot size="1rem" />
              </p>
              <p>Chikakore Kubwa</p>
            </div>
          </div>
        </div>
        <div className="header-image-container">
          <img
            src=${imageSrc}
            alt="profile"
          
          />
        </div>
      </div>
   </div>
      </body>
      </html>
      <div>
    
  `;
};

export default TemplateOne;
