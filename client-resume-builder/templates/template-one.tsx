import React from "react";
import { useAppSelector } from "@/app/hooks/redux-hooks";
import styled from "styled-components";
import { FaLinkedinIn, FaPhone } from "react-icons/fa";
import { BsCursorFill, BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { formatDate, ulToArray } from "@/utils/methods";

const TemplateOne = () => {
  const formData = useAppSelector((state) => state);
  const {
    experiences,
    summary,
    skills,
    certificates,
    educationList,
    personalDetails,
  } = formData || {};
  const {
    photo,
    firstName,
    lastName,
    phone,
    country,
    city,
    state,
    email,
    desiredJob,
    linkedin,
    twitter,
    website,
    zipCode,
  } = personalDetails || {};

  return (
    <StyledTemplate>
      <div className="content">
        <div className="header">
          <div className="header-left-col">
            <span className="name">
              {firstName} {lastName}
            </span>
            <p className="job">{desiredJob}</p>
            <div className="header-socials">
              <div className="social">
                <span className="social-icon">
                  <BsTelephoneFill size="0.7rem" />
                </span>
                <span>{phone}</span>
              </div>
              <div className="social">
                <span className="social-icon">
                  <MdEmail size="0.7rem" />
                </span>
                <span>{email}</span>
              </div>
              <div className="social">
                <span className="social-icon">
                  <MdLocationPin size="0.7rem" />
                </span>
                <span>{`${state} ${city} ${zipCode}`}</span>
              </div>
              {linkedin && (
                <div className="social">
                  <span className="social-icon">
                    <FaLinkedinIn size="0.7rem" />
                  </span>
                  <a href={linkedin}>LinkedIn</a>
                </div>
              )}
              {twitter && (
                <div className="social">
                  <span className="social-icon">
                    <FaXTwitter size="0.7rem" />
                  </span>
                  <a href={twitter}>X</a>
                </div>
              )}
              {website && (
                <div className="social">
                  <span className="social-icon">
                    <BsCursorFill size="0.7rem" />
                  </span>
                  <a href={website}>Website</a>
                </div>
              )}
            </div>
          </div>

          <div className="header-img-container">
            <img src={photo} alt="profile" />
          </div>
        </div>
        <div className="prof-sum">
          <p className="prof-sum-header">PROFESSIONAL SUMMARY</p>
          <div className="sum-line" />
          <p className="prof-sum-text">{summary}</p>
        </div>
        <div className="skills-sum">
          <p className="skills-sum-header">Skills</p>
          <div className="sum-line" />
          <div className="skills">
            {skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
        <div className="exp-sum">
          <p className="exp-sum-header">Experience</p>
          <div className="sum-line" />
          <div className="exps">
            {experiences.map((experience, index) => (
              <div className="experience" key={index}>
                <p className="exp-job-title">
                  <span>{experience.jobTitle},</span>
                  <span>{`${experience.state} ${experience.city}`}</span>
                </p>
                <p className="exp-company">
                  <span>{experience.company},</span>
                  <span>{`${formatDate(experience.startDate)} - ${
                    experience.present
                      ? "present"
                      : formatDate(experience.endDate)
                  }`}</span>
                </p>
                <ul className="exp-list">
                  {ulToArray(experience.experience).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="edu-sum">
          <p className="edu-sum-header">Education</p>
          <div className="sum-line" />
          <div className="edu-list">
            {educationList.map((edu, index) => (
              <div className="edu" key={index}>
                <p className="edu-header">
                  <span>{`${edu.degree} in ${edu.fieldOfStudy}`},</span>
                  <span>{`${edu.location}`}</span>
                </p>
                <p className="edu-school">
                  <span>{edu.schoolName},</span>{" "}
                  <span>{`${formatDate(edu.endDate)}`}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        {certificates && (
          <div className="cert-sum">
            <p className="cert-sum-header">Certifications</p>
            <div className="sum-line" />
            <ul className="cert-list">
              {certificates.map((cert, index) => (
                <li key={index} className="cert">
                  <a href={cert.link}>{cert.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
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
        flex-wrap: wrap;

        .social {
          display: flex;
          align-items: center;
          padding: 6px 8px;
          background-color: #e0e0e0;
          gap: 10px;
          border-radius: 4px;
          width: fit-content;

          a {
            text-decoration: none;
            color: #4a4a4a;
          }

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

    .sum-line {
      height: 2px;
      padding: 0 !important;
      width: 260px;
      background-color: #e0e0e0;
      margin: 3px 0;
    }

    .prof-sum-header {
      font-size: 20px;
      font-weight: 700;
      color: #050505;
    }

    .prof-sum-text {
      margin-top: 15px;
    }
  }

  .skills-sum {
    margin-top: 20px;

    .sum-line {
      height: 2px;
      padding: 0 !important;
      width: 55px;
      background-color: #e0e0e0;
      margin: 3px 0;
    }
    .skills-sum-header {
      font-size: 20px;
      font-weight: 700;
      color: #050505;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 15px;
      span {
        background-color: #e0e0e0;
        padding: 6px 8px;
        border-radius: 4px;
        font-size: 14px;
      }
    }
  }

  .exp-sum {
    margin-top: 20px;

    .sum-line {
      height: 2px;
      padding: 0 !important;
      width: 110px;
      background-color: #e0e0e0;
      margin: 3px 0;
    }
    .exp-sum-header {
      font-size: 20px;
      font-weight: 700;
      color: #050505;
    }
    .exps {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      .experience {
        display: flex;
        flex-direction: column;
        .exp-job-title {
          font-weight: 700;
          display: flex;
          gap: 10px;
        }
        .exp-company {
          display: flex;
          gap: 10px;
          font-size: 14px;
          color: #909090;
          font-weight: 500;
        }
        .exp-list {
          list-style: disc;
          padding-left: 50px;
        }
      }
    }
  }

  .edu-sum {
    margin-top: 20px;

    .sum-line {
      height: 2px;
      padding: 0 !important;
      width: 100px;
      background-color: #e0e0e0;
      margin: 3px 0;
    }
    .edu-sum-header {
      font-size: 20px;
      font-weight: 700;
      color: #050505;
    }
    .edu-list {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      gap: 15px;

      .edu {
        .edu-header {
          font-weight: 700;
          display: flex;
          gap: 10px;
        }
        .edu-school {
          display: flex;
          gap: 10px;
          font-size: 14px;
          color: #909090;
          font-weight: 500;
        }
      }
    }
  }

  .cert-sum {
    margin-top: 20px;

    .sum-line {
      height: 2px;
      padding: 0 !important;
      width: 130px;
      background-color: #e0e0e0;
      margin: 3px 0;
    }
    .cert-sum-header {
      font-size: 20px;
      font-weight: 700;
      color: #050505;
    }
    .cert-list {
      margin-top: 15px;
      display: flex;
      gap: 35px;
      flex-wrap: wrap;
      list-style: disc;
      padding-left: 50px;

      .cert a {
        text-decoration: none;
        color: #4a4a4a;
      }
    }
  }
`;

export default TemplateOne;
