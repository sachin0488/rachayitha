import React from "react";
import FooterStyle from "./FooterStyle";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  const {
    Wrapper,
    Heading,
    ImpSection,
    ImpSectionButton,
    SocialMediaIconContainer,
  } = FooterStyle();
  return (
    <>
      <Wrapper>
        <ImpSection>
          <Heading>Discover</Heading>
          <ImpSectionButton>Home</ImpSectionButton>
          <ImpSectionButton>Novels</ImpSectionButton>
          <ImpSectionButton>Authors</ImpSectionButton>
          <ImpSectionButton>Subjects</ImpSectionButton>
          <ImpSectionButton>Collections</ImpSectionButton>
          <ImpSectionButton>Advanced Search</ImpSectionButton>
          <ImpSectionButton>Return to Top</ImpSectionButton>
        </ImpSection>
        <ImpSection>
          <Heading>Resources</Heading>
          <ImpSectionButton>Tags</ImpSectionButton>
          <ImpSectionButton>Download Apps</ImpSectionButton>
          <ImpSectionButton>Be an Author</ImpSectionButton>
          <ImpSectionButton>Help Center</ImpSectionButton>
          <ImpSectionButton>Privacy Policy</ImpSectionButton>
          <ImpSectionButton>Terms of Service</ImpSectionButton>
          <ImpSectionButton>Keywords</ImpSectionButton>
        </ImpSection>
        <ImpSection>
          <Heading>Help</Heading>
          <ImpSectionButton>Help Center</ImpSectionButton>
          <ImpSectionButton>Report a Problem</ImpSectionButton>
          <ImpSectionButton>Suggesting Edits</ImpSectionButton>
        </ImpSection>
        <ImpSection>
          <Heading>Change Website Language</Heading>
          <ImpSectionButton>English</ImpSectionButton>
          <ImpSectionButton>Hindi</ImpSectionButton>
        </ImpSection>
        <ImpSection>
          <Heading>Change Website Language</Heading>
          <SocialMediaIconContainer>
            <BsFacebook size={35} color="#673CCB" />
            <FaInstagramSquare size={35} color="#673CCB" />
            <AiFillTwitterCircle size={37} color="#673CCB" />
          </SocialMediaIconContainer>
        </ImpSection>
      </Wrapper>
    </>
  );
};

export default Footer;
