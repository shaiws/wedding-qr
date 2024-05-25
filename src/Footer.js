import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Footer = styled.footer`
  background-color: #282c34;
  color: #ffffff;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const IconLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  margin: 0 10px;
  font-size: 24px;

  &:hover {
    color: #21a1f1;
  }
`;

const CopyrightText = styled.p`
  margin: 0;
`;

const AppFooter = () => (
  <Footer>
    <Content>
    <CopyrightText>© {new Date().getFullYear()} Shai Michaeli. All Rights Reserved.</CopyrightText>
      <IconContainer>
      <IconLink href="https://wa.me/972505833558" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </IconLink>
        <IconLink href="mailto:shaiws2@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </IconLink>
        <IconLink href="https://github.com/shaiws" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/shai-michaeli-85b298171/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
      </IconContainer>
    </Content>
  </Footer>
);

export default AppFooter;