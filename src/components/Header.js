import React from 'react';
import styled from 'styled-components'; // DÒNG NÀY RẤT QUAN TRỌNG VÀ ĐÃ ĐƯỢC THÊM VÀO!

const HeaderContainer = styled.header`
  background-color: #007bff; /* Màu xanh Doraemon nè! */
  padding: 1.5rem 2rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: 'Comic Sans MS', cursive; /* Nhớ đổi font nếu bạn dùng font khác nha! */
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  span {
    color: #ffde00; /* Màu chuông Doraemon */
    font-size: 3rem;
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  li {
    margin-left: 2.5rem;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: bold;
    transition: color 0.3s ease-in-out, transform 0.2s ease-in-out;
    &:hover {
      color: #ffde00;
      transform: translateY(-3px); /* Nhún nhảy khi hover */
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        Dora<span>emon</span>
      </Logo>
      <Nav>
        <ul>
          <li><a href="#home">Trang chủ</a></li>
          <li><a href="#characters">Nhân vật</a></li>
          <li><a href="#gadgets">Bảo bối</a></li>
          <li><a href="#about">Về chúng tôi</a></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;