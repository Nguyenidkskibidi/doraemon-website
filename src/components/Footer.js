import React from 'react';
import styled from 'styled-components'; // Đừng quên import styled!

const FooterContainer = styled.footer`
  background-color: #2c3e50; /* Một màu tối cho footer */
  color: white;
  text-align: center;
  padding: 2rem 0;
  font-family: 'Comic Sans MS', cursive;
  font-size: 1.1rem;
  margin-top: 5rem;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  a {
    color: white;
    margin: 0 1rem;
    font-size: 1.8rem;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #ffde00;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2025 Thế giới Doraemon. Được tạo ra với ❤️ và tình yêu tuổi thơ.</p>
      <SocialLinks>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X</a>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;