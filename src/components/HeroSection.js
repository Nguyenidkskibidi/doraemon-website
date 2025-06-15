import React from 'react';
import styled from 'styled-components'; // Đừng quên import styled!
import { useSpring, animated } from 'react-spring';
import doraemonFlying from '../assets/images/doraemon-flying.png'; // Nhớ đường dẫn chính xác nha!

const HeroWrapper = styled.section`
  background: linear-gradient(135deg, #a8dadc, #457b9d); /* Màu trời xanh mơ màng */
  color: white;
  text-align: center;
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Comic Sans MS', cursive;
`;

const HeroContent = styled.div`
  z-index: 10;
  position: relative;
  h2 {
    font-size: 4.5rem;
    margin-bottom: 1.5rem;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
    background: linear-gradient(45deg, #ffde00, #ff8c00); /* Chữ vàng cam rực rỡ */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 1.8rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto 3rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const CallToActionButton = styled.button`
  background-color: #e63946; /* Màu đỏ nổi bật */
  color: white;
  border: none;
  padding: 1.2rem 2.8rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #c9303c;
    transform: translateY(-5px) scale(1.05); /* Nhấn vào là nhún nhảy! */
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const DoraemonFlyingImage = styled(animated.img)`
  position: absolute;
  bottom: -10%; /* Bắt đầu từ dưới màn hình */
  left: -20%; /* Bay từ ngoài vào */
  width: 250px; /* Kích thước Doraemon */
  z-index: 5;
  animation: bounce 2s infinite alternate; /* Doraemon bay nhún nhảy */

  @keyframes bounce {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
  }
`;

function HeroSection() {
  // Animation Doraemon bay từ trái sang phải, xong rồi quay lại
  const flyingAnimation = useSpring({
    from: { left: '-20%' },
    to: async (next, cancel) => {
      while (true) {
        await next({ left: '100%', config: { duration: 15000, easing: t => t } }); // Bay sang phải
        await next({ left: '-20%', config: { duration: 0 } }); // Reset về trái ngay lập tức
      }
    },
    loop: true, // Lặp lại vô hạn
    config: { duration: 15000 }, // Thời gian bay hết màn hình
  });

  return (
    <HeroWrapper id="home">
      <DoraemonFlyingImage src={doraemonFlying} alt="Doraemon đang bay" style={flyingAnimation} />
      <HeroContent>
        <h2>Chào mừng đến với Thế giới của Doraemon! ✨</h2>
        <p>Khám phá những cuộc phiêu lưu bất tận cùng Doraemon, Nobita và những bảo bối thần kỳ!</p>
        <CallToActionButton>Khám phá ngay! 🚀</CallToActionButton>
      </HeroContent>
    </HeroWrapper>
  );
}

export default HeroSection;