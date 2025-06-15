import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import ảnh LeBron James
import lebronMain from '../assets/images/lebron_main.jpg'; // Ảnh nền lớn
import lebronSmall from '../assets/images/lebron_small.png'; // Ảnh nhỏ di chuyển

// 💖💖💖 KHÔNG DÙNG GLITCH ANIMATION VÀ GLITCH EFFECT NỮA - CÁC DÒNG NÀY SẼ BỊ COMMENT HOẶC XÓA 💖💖💖
//   0% {
//     transform: translate(0);
//   }
//   20% {
//     transform: translate(-5px, 5px);
//   }
//   40% {
//     transform: translate(-5px, -5px);
//   }
//   60% {
//     transform: translate(5px, 5px);
//   }
//   80% {
//     transform: translate(5px, -5px);
//   }
//   100% {
//     transform: translate(0);
//   }
// `;

const TrollContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${lebronMain}); /* Nền là ảnh lớn của LeBron */
  background-size: cover;
  background-position: center;
  font-family: 'Comic Sans MS', cursive;
  color: white;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7);
  background-color: #000; /* Màu nền dự phòng */
`;

const TrollMessage = styled(motion.h1)`
  font-size: 5rem; /* Rất lớn để "hù dọa" */
  text-align: center;
  margin-bottom: 50px;
  line-height: 1.2;
  color: #ff0000; /* Màu đỏ nổi bật */
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const MovingLebron = styled(motion.img)`
  position: absolute;
  width: 150px; /* Kích thước ảnh LeBron nhỏ */
  height: auto;
  border-radius: 50%; /* Tròn như trong You Are The Idiot */
  border: 5px solid yellow; /* Viền vàng nổi bật */
  box-shadow: 0 0 20px 10px rgba(255, 255, 0, 0.5); /* Hiệu ứng sáng */
  z-index: 10;
  pointer-events: none; /* Để không chặn click */
`;

const BackButton = styled(motion.button)`
  background-color: #e63946; /* Màu đỏ */
  color: white;
  border: none;
  padding: 1.5rem 3rem;
  font-size: 1.8rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  z-index: 10;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #c9303c;
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;

function LebronTrollPage() {
  const navigate = useNavigate();
  const [movingLebrons, setMovingLebrons] = useState([]); // Mảng để lưu trữ vị trí của nhiều LeBron nhỏ
  const containerRef = useRef(null); // Ref để lấy kích thước container

  useEffect(() => {
    const spawnInterval = setInterval(() => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;

        const newX = Math.random() * (containerWidth - 150); // 150 là chiều rộng ảnh
        const newY = Math.random() * (containerHeight - 150); // 150 là chiều cao ảnh

        // Thêm một LeBron mới vào mảng
        setMovingLebrons(prevLebrons => [
          ...prevLebrons,
          { id: Date.now(), x: newX, y: newY, opacity: 1 } // Thêm opacity để có thể fade out sau này
        ]);

        // Giới hạn số lượng LeBron nhỏ trên màn hình (ví dụ 30 con)
        setMovingLebrons(prevLebrons => prevLebrons.slice(Math.max(0, prevLebrons.length - 30)));
      }
    }, 100); // Mỗi 0.1 giây spawn một LeBron mới

    return () => clearInterval(spawnInterval); // Dọn dẹp interval
  }, []);

  return (
    <TrollContainer ref={containerRef}> {/* Gán ref vào container */}
      {/* 💖💖💖 KHÔNG DÙNG GLITCH OVERLAY NỮA - XÓA DÒNG NÀY 💖💖💖 */}
      {/* {glitchEffect && <GlitchOverlay />} */}
      <TrollMessage
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        LeBron James rất thất vọng về bạn! 😡
      </TrollMessage>

      {/* Render nhiều ảnh LeBron nhỏ di chuyển */}
      {movingLebrons.map(lebron => (
        <MovingLebron
          key={lebron.id}
          src={lebronSmall}
          alt="Lebron James thất vọng nhỏ"
          initial={{ opacity: 0, x: lebron.x, y: lebron.y, scale: 0.8 }}
          animate={{ opacity: 1, x: lebron.x, y: lebron.y, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.5 }}
        />
      ))}

      <BackButton onClick={() => navigate('/')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Thoát khỏi sự thất vọng! 🏃‍♂️💨
      </BackButton>
    </TrollContainer>
  );
}

export default LebronTrollPage;