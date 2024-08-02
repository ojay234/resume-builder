// // components/TemplateOne.tsx

// import React from "react";
// import styled from "styled-components";
// import { IoCall } from "react-icons/io5";
// import { IoIosMail } from "react-icons/io";
// import { FaLocationDot } from "react-icons/fa6";
// import { resumeFormProps } from "@/app/types/formTypes";
// import { useAppSelector } from "@/app/hooks/redux-hooks";

// const TemplateOne = () => {
//   const formData = useAppSelector((state) => state);

//   const { photo, firstName, lastName } = formData.personalDetails;

//   return `
//  <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <style>
//      *{
//     padding: 0;
//     margin: 0;
//     }
//      body {
//   position: relative;
//   width: 595px;
//   margin: 0 auto;
//   background-color: white;
//   padding: 20px;
//      }

//   .header {
//     display: flex;
//     justify-content: space-between;
//     position: relative;
//   }

//   .header-left-col {
//     margin-top: 20px;

//   }
//     .header-left-col h1 {
//         font-weight: 700;
//         font-size: 30px;
//         line-height: 4px;
//     }

//      .header-left-col .sub-head {
//         font-size: 15px;
//         color: #717171
//       }

//       .header-socials {
//         display: flex;
//         gap: 15px;
//         margin-top: 15px;
//       }

//         .social {
//           display: flex;
//           padding: 6px 10px ;
//           align-items: center;
//           gap: 10px;
//           background-color: #f1efefcc;
//           border-radius: 5px;
//           font-size: 12px;

//         }

//           .social-icon {
//             background-color: white;
//             border-radius: 50%;
//             padding: 2px;
//           }

//     .header-image-container {
//       position: absolute;
//       right: 0;
//     }
//      .header-image-container img {
//         width: 65px;
//         height: 65px;
//         border-radius: 5px;
//      }

//      .prof-sum {
//         margin-top: 25px;
//      }

//      .prof-sum h1 {
//         padding: 5px 0;
//         font-size: 18px;
//         font-weight: 600;
//         width: fit-content;
//         border-bottom: 1px solid #ccc ;
//      }

//      .prof-sum p {
//         text-align: justify;
//         font-size: 15px;
//         margin-top: 10px;
//      }

//       .skills {
//         margin-top: 20px;
//      }

//      .skills h1 {
//         padding: 5px 0;
//         font-size: 18px;
//         font-weight: 600;
//         width: fit-content;
//         border-bottom: 1px solid #ccc ;
//      }

//      .skills .skills-container {
//         font-size: 15px;
//         margin-top: 10px;
//         display: flex;
//         gap: 15px;
//         flex-wrap: wrap;
//      }

//      .skill {
//           padding:  10px ;
//           background-color: #f1efefcc;
//           border-radius: 5px;
//           font-size: 12px;

//      }

//       .experiences {
//         margin-top: 20px;
//      }

//      .experiences h1 {
//         padding: 5px 0;
//         font-size: 18px;
//         font-weight: 600;
//         width: fit-content;
//         border-bottom: 1px solid #ccc ;
//      }

//      .prof-sum p {
//         text-align: justify;
//         font-size: 15px;
//         margin-top: 10px;
//      }

//      .experiences-container {
//         margin-top: 5px;
//         display: flex;
//         flex-direction: column;
//         gap: 15px
//      }

//      .experience .experience-header {
//         border-bottom: none;
//         font-size: 16px;
//      }

//       .experience .experience-sub-header {
//         color: #908e8e;
//         font-size: 15px;
//       }

//       .experience ul {
//         margin-top: 8px;
//         list-style-position: inside;
//         display: flex;
//         flex-direction: column;
//         gap: 5px;
//       }

// </style>
// <body>
//     <div class="header">
//         <div class="header-left-col">
//             <h1>${firstName} ${lastName}</h1>
//             <p class="header-left-col sub-head">Administrative Assistant</p>
//             <div class="header-socials">
//                 <div class="social">
//                     <p class="social-icon">
//                 <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <g id="style=fill">
//                         <g id="call">
//                             <path id="vector"
//                                 d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.6258 19.6195 21.5163 19.8128 21.388 20C21.3433 20.0651 21.2964 20.1295 21.2471 20.1931C21.1824 20.2767 21.1134 20.359 21.04 20.44C20.8504 20.6489 20.6534 20.8354 20.4476 21C20.1217 21.2608 19.774 21.4667 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
//                                 fill="#000000" />
//                             <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd"
//                                 d="M2.98958 2.39989C3.74153 1.66198 4.62059 1.25 5.59 1.25C5.97318 1.25 6.36311 1.33138 6.71941 1.5014C7.08755 1.67229 7.42309 1.93393 7.68396 2.30922L10.0003 5.574C10.2053 5.85906 10.3657 6.13796 10.4818 6.42035C10.5997 6.6971 10.68 7.00644 10.68 7.32C10.68 7.70687 10.5673 8.07663 10.367 8.40939C10.1968 8.70784 9.96427 8.99567 9.69563 9.26502L9.00688 9.98096C9.01385 9.99743 9.02321 10.0197 9.03333 10.0455C9.183 10.3079 9.44802 10.6772 9.84989 11.1524C10.29 11.6609 10.7568 12.1761 11.2604 12.6897C11.7923 13.2116 12.2961 13.6858 12.8048 14.1178C13.2858 14.5247 13.6606 14.7841 13.933 14.9322C13.955 14.9417 13.9753 14.9509 13.9918 14.9584L14.6815 14.2778C14.955 14.0046 15.2482 13.7638 15.5612 13.5966C15.8882 13.4019 16.2447 13.29 16.64 13.29C16.9399 13.29 17.2362 13.354 17.534 13.4758C17.8169 13.5916 18.0939 13.7509 18.3717 13.9398L18.378 13.9441L21.6909 16.2961C22.0455 16.5425 22.3234 16.8545 22.4965 17.2479L22.5016 17.2596L22.5064 17.2715C22.6338 17.59 22.72 17.9351 22.72 18.33C22.72 18.8025 22.6147 19.2817 22.3982 19.7403C22.2879 19.9738 22.1587 20.2021 22.0066 20.424C21.9538 20.5011 21.8983 20.5773 21.84 20.6525C21.7634 20.7514 21.682 20.8484 21.5957 20.9436C21.3815 21.1797 21.1554 21.3943 20.9162 21.5856C20.537 21.8891 20.1283 22.1318 19.6865 22.3131C18.9922 22.6021 18.2445 22.75 17.45 22.75C16.3114 22.75 15.1213 22.4821 13.896 21.96C12.6885 21.4455 11.4895 20.7561 10.3086 19.8963L10.3076 19.8956C9.12671 19.0331 8.00824 18.0786 6.94224 17.0229L6.93709 17.0178C5.88147 15.9519 4.92677 14.8332 4.07368 13.6614L4.07114 13.658C3.22474 12.4813 2.5351 11.293 2.0297 10.1032L2.02877 10.101C1.51719 8.88605 1.25 7.69701 1.25 6.54C1.25 5.77184 1.3856 5.02732 1.66286 4.33342C1.94487 3.61753 2.38783 2.96904 2.98958 2.39989Z"
//                                 fill="#000000" />
//                         </g>
//                     </g>
//                 </svg>
//                     </p>
//                     <p>210 286 164</p>
//                 </div>
//                 <div class="social">
//                     <p class="social-icon">
//                     <svg fill="#000000" width="10px" height="10px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
//                             fill-rule="evenodd" />
//                     </svg>
//                     </p>
//                     <p>kelly.blackwell@gmail.com</p>
//                 </div>
//                 <div class="social">
//                     <p class="social-icon">
//                     <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
//                         width="10px" height="10px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
//                         <path fill="#231F20" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
//                     	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
//                     	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z" />
//                     </svg>
//                     </p>
//                     <p>Chikakore Kubwa</p>
//                 </div>
//             </div>
//         </div>
//         <div class="header-image-container">
//               <img
//             src=${photo}
//             alt="profile"

//           />
//         </div>
//     </div>
//     <div class="prof-sum">
//         <h1>PROFESSIONAL SUMMARY</h1>
//         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
//         dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
//         book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
//         unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
//         recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//     </div>
//     <div class="skills">
//      <h1>SKILLS</h1>
//      <div class="skills-container">
//          <div class="skill">React</div>
//         <p class="skill">Node js</p>
//         <p class="skill">Javascript</p>
//         <p class="skill">Python</p>
//         <p class="skill">Typescript</p>
//         <p class="skill">Sql</p>
//         <p class="skill">React</p>
//      </div>
//     </div>
//     <div class="experiences">
//      <h1>EXPERIENCE</h1>
//      <div class="experiences-container">
//       <div class="experience">
//       <h1 class="experience-header">
//         <span>
//             Administrative Assistant
//         </span>
//         <span>
//             Boston, MA
//         </span>
//     </h1>
//     <p class="experience-sub-header">
//         <span>RedFord & sons</span>
//         <span>September 2017 - present</span>
//     </p>
//     <ul>
//         <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
//             standard dummy text ever since</li>
//         <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
//             standard dummy text ever since</li>
//         <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
//             standarddummy text ever since</li>
//     </ul>
//     </div>
//     <div class="experience">
//         <h1 class="experience-header">
//             <span>
//                 Administrative Assistant
//             </span>
//             <span>
//                 Boston, MA
//             </span>
//         </h1>
//         <p class="experience-sub-header">
//             <span>RedFord & sons</span>
//             <span>September 2017 - present</span>
//         </p>
//         <ul>
//             <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                 industry's
//                 standard dummy text ever since</li>
//             <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                 industry's
//                 standard dummy text ever since</li>
//             <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                 industry's
//                 standarddummy text ever since</li>
//         </ul>
//     </div>
//     </div>
// </body>
// </html>
//   `;
// };

// export default TemplateOne;

import React from "react";
import { useAppSelector } from "@/app/hooks/redux-hooks";
import styled from "styled-components";

const TemplateOne = () => {
  const formData = useAppSelector((state) => state);
  const { photo, firstName, lastName } = formData.personalDetails || {};

  return (
    <StyledTemplate>
      <div className="content">
        <div className="header">
          <div className="header-left-col">
            <span className="name">
              {firstName} {lastName}
            </span>
            <p className="job">Administrative Assistant</p>
            <div className="header-socials">
              <div className="social">
                <span className="social-icon">
                  <svg
                    width="10px"
                    height="10px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="style=fill">
                      <g id="call">
                        <path
                          id="vector"
                          d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.6258 19.6195 21.5163 19.8128 21.388 20C21.3433 20.0651 21.2964 20.1295 21.2471 20.1931C21.1824 20.2767 21.1134 20.359 21.04 20.44C20.8504 20.6489 20.6534 20.8354 20.4476 21C20.1217 21.2608 19.774 21.4667 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                          fill="#000000"
                        />
                        <path
                          id="vector (Stroke)"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.98958 2.39989C3.74153 1.66198 4.62059 1.25 5.59 1.25C5.97318 1.25 6.36311 1.33138 6.71941 1.5014C7.08755 1.67229 7.42309 1.93393 7.68396 2.30922L10.0003 5.574C10.2053 5.85906 10.3657 6.13796 10.4818 6.42035C10.5997 6.6971 10.68 7.00644 10.68 7.32C10.68 7.70687 10.5673 8.07663 10.367 8.40939C10.1968 8.70784 9.96427 8.99567 9.69563 9.26502L9.00688 9.98096C9.01385 9.99743 9.02321 10.0197 9.03333 10.0455C9.183 10.3079 9.44802 10.6772 9.84989 11.1524C10.29 11.6609 10.7568 12.1761 11.2604 12.6897C11.7923 13.2116 12.2961 13.6858 12.8048 14.1178C13.2858 14.5247 13.6606 14.7841 13.933 14.9322C13.955 14.9417 13.9753 14.9509 13.9918 14.9584L14.6815 14.2778C14.955 14.0046 15.2482 13.7638 15.5612 13.5966C15.8882 13.4019 16.2447 13.29 16.64 13.29C16.9399 13.29 17.2362 13.354 17.534 13.4758C17.8169 13.5916 18.0939 13.7509 18.3717 13.9398L18.378 13.9441L21.6909 16.2961C22.0455 16.5425 22.3234 16.8545 22.4965 17.2479L22.5016 17.2596L22.5064 17.2715C22.6338 17.59 22.72 17.9351 22.72 18.33C22.72 18.8025 22.6147 19.2817 22.3982 19.7403C22.2879 19.9738 22.1587 20.2021 22.0066 20.424C21.9538 20.5011 21.8983 20.5773 21.84 20.6525C21.7634 20.7514 21.682 20.8484 21.5957 20.9436C21.3815 21.1797 21.1554 21.3943 20.9162 21.5856C20.537 21.8891 20.1283 22.1318 19.6865 22.3131C18.9922 22.6021 18.2445 22.75 17.45 22.75C16.3114 22.75 15.1213 22.4821 13.896 21.96C12.6885 21.4455 11.4895 20.7561 10.3086 19.8963L10.3076 19.8956C9.12671 19.0331 8.00824 18.0786 6.94224 17.0229L6.93709 17.0178C5.88147 15.9519 4.92677 14.8332 4.07368 13.6614L4.07114 13.658C3.22474 12.4813 2.5351 11.293 2.0297 10.1032L2.02877 10.101C1.51719 8.88605 1.25 7.69701 1.25 6.54C1.25 5.77184 1.3856 5.02732 1.66286 4.33342C1.94487 3.61753 2.38783 2.96904 2.98958 2.39989Z"
                          fill="#000000"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
                <span>210 286 164</span>
              </div>
              <div className="social">
                <span className="social-icon">
                  <svg
                    fill="#000000"
                    width="10px"
                    height="10px"
                    viewBox="0 0 1920 1920"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                </span>
                <span>kelly.blackwell@gmail.com</span>
              </div>
              <div className="social">
                <span className="social-icon">
                  <svg
                    version="1.0"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10px"
                    height="10px"
                    viewBox="0 0 64 64"
                    enable-background="new 0 0 64 64"
                  >
                    <path
                      fill="#231F20"
                      d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
                    	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
                    	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                    />
                  </svg>
                </span>
                <span>Chikakore Kubwa</span>
              </div>
            </div>
          </div>
          <div className="header-img-container">
            <img src={photo} alt="profile" />
          </div>
        </div>
        <div className="prof-sum">
          <p className="prof-sum-header">PROFESSIONAL SUMMARY</p>
          <div className="prof-sum-line" />
          <p className="prof-sum-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem...
          </p>
        </div>
      </div>
    </StyledTemplate>
  );
};
const StyledTemplate = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  size: A4;
  /* margin: 10mm; */
  padding: 0;
  box-sizing: border-box;
  /* border: 1px solid black; */

  .content {
    width: calc(100% - 10mm);
    margin: 0 auto;
    padding: 10mm 0;
  }

  /* h1,
  h2,
  h3,
  p {
    page-break-inside: avoid; 
  } */

  /* p {
    font-size: 14pt; 
    line-height: 1.5; 
  } */

  /* img {
    max-width: 100%;
    height: auto;
    page-break-inside: avoid; 
  } */

  /* 
  .break-before-page {
    page-break-before: always;
  } */

  .header {
    display: flex;
    gap: 20px;
    justify-content: space-between;

    .header-left-col {
      .name {
        font-size: 28px;
        line-height: 42px;
        padding-top: 5px;
        font-weight: 700;
        color: #050505;
      }
      .job {
        font-size: 16px;
      }
      .header-socials {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #2b2d2f;
        margin-top: 10px;
        font-size: 14px;

        .social {
          display: flex;
          align-items: center;
          padding: 6px 8px;
          background-color: #e0e0e0;
          gap: 10px;
          border-radius: 4px;

          .social-icon {
            padding: 4px;
            border-radius: 50%;
            background-color: white;
          }
        }
      }
    }

    .header-img-container {
      height: 80px;
      width: 80px;
      background-color: #eeeded;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .prof-sum {
    margin-top: 20px;

    .prof-sum-header {
      font-size: 20px;
      font-weight: 700;
      color: #050505;
    }
    .prof-sum-line {
      height: 2px;
      width: 260px;
      background-color: #e0e0e0;
      margin: 3px 0;
    }
    .prof-sum-text {
      margin-top: 15px;
    }
  }
`;

export default TemplateOne;
