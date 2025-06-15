import React, { useState } // Đừng quên useState
from 'react';
import styled from 'styled-components'; // Đừng quên import styled!
import { motion, AnimatePresence } from 'framer-motion';
import anywhereDoor from '../assets/images/anywhere-door.png'; // Cánh cửa thần kỳ
import lightBeam from '../assets/images/light-beam.png'; // Bạn tự tạo hoặc tìm ảnh chùm sáng đơn giản nhé!

const GadgetSection = styled.section`
  background: linear-gradient(135deg, #f8f8f8, #e0e0e0);
  padding: 8rem 2rem;
  text-align: center;
  font-family: 'Comic Sans MS', cursive;
  overflow: hidden; /* Quan trọng để animation không bị tràn */
`;

const Title = styled.h2`
  font-size: 4rem;
  color: #34495e;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const GadgetContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px; /* Đặt chiều cao để animation dễ nhìn */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const Door = styled(motion.img)`
  width: 300px;
  height: auto;
  cursor: pointer;
  z-index: 20;
`;

const LightBeam = styled(motion.img)`
  position: absolute;
  width: 150px;
  height: 400px; /* Chiều cao của chùm sáng */
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
  opacity: 0.8;
  z-index: 15;
`;

const PopUpMessage = styled(motion.div)`
  position: absolute;
  background-color: #ffde00; /* Màu chuông Doraemon */
  color: #333;
  padding: 1.5rem 2.5rem;
  border-radius: 20px;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 25;
  font-family: 'Comic Sans MS', cursive;
`;

function GadgetAnimation() {
  const [showBeam, setShowBeam] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleDoorClick = () => {
    setShowBeam(true);
    setShowMessage(true);
    setTimeout(() => {
      setShowBeam(false);
      setShowMessage(false);
    }, 3000); // Chùm sáng và tin nhắn biến mất sau 3 giây
  };

  return (
    <GadgetSection id="gadgets">
      <Title>Bảo bối thần kỳ của Doraemon! 🪄</Title>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>Nhấn vào cánh cửa để khám phá điều bất ngờ!</p>
      <GadgetContainer>
        <Door
          src={anywhereDoor}
          alt="Cánh cửa thần kỳ"
          onClick={handleDoorClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ rotateY: 0 }}
          animate={showBeam ? { rotateY: 360 } : { rotateY: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <AnimatePresence>
          {showBeam && (
            <LightBeam
              src={lightBeam}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showMessage && (
            <PopUpMessage
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              "Tới bất cứ đâu bạn muốn!" 💫
            </PopUpMessage>
          )}
        </AnimatePresence>
      </GadgetContainer>
    </GadgetSection>
  );
}

export default GadgetAnimation;