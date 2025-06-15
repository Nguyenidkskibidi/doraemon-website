import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import charactersData from '../data/characters'; // Đã sửa đường dẫn
import { motion } from 'framer-motion';

const DetailContainer = styled(motion.div)`
  padding: 4rem 2rem;
  font-family: 'Comic Sans MS', cursive;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.background || 'linear-gradient(135deg, #f0f2f5, #e9ecef)'};
  text-align: center;
`;

const DetailCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 25px;
  padding: 3rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 5px solid ${props => props.borderColor || '#ccc'};
`;

const CharacterImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  border: 8px solid ${props => props.borderColor || '#eee'};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
`;

const CharacterName = styled.h2`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: ${props => props.textColor || '#333'};
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
`;

const FullDescription = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2rem;
  text-align: justify;
`;

const StorySection = styled.div`
  background-color: rgba(240, 240, 240, 0.8);
  border-radius: 15px;
  padding: 2rem;
  margin-top: 2rem;
  width: 100%;
  h3 {
    font-size: 2.5rem;
    color: #444;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.15rem;
    line-height: 1.7;
    color: #666;
    text-align: justify;
  }
`;

const BackButton = styled(motion.button)`
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 3rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #5a6268;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const character = charactersData.find(char => char.id === parseInt(id));

  // Effect để thêm event listener cho từ khóa troll
  useEffect(() => {
    if (character && character.fullDescription) {
      // Vì dangerouslySetInnerHTML sẽ render HTML, chúng ta phải querySelector sau khi render
      const trollElements = document.querySelectorAll('.highlight-troll');
      const handleClick = (event) => {
        if (event.target.dataset.trollTarget === 'nobita') {
          navigate('/lebron-troll');
        }
      };

      trollElements.forEach(el => {
        el.addEventListener('click', handleClick);
        // Thêm style trực tiếp cho an toàn nếu styled-components không nhận dạng được span
        el.style.cursor = 'pointer';
        el.style.color = '#e63946'; // Đỏ
        el.style.fontWeight = 'bold';
        el.style.textDecoration = 'underline';
      });

      return () => { // Cleanup function
        trollElements.forEach(el => {
          el.removeEventListener('click', handleClick);
        });
      };
    }
  }, [character, navigate]);

  if (!character) {
    return (
      <DetailContainer>
        <DetailCard>
          <CharacterName>Oops! Không tìm thấy nhân vật này! 😭</CharacterName>
          <BackButton onClick={() => navigate('/')}>Quay về trang chủ</BackButton>
        </DetailCard>
      </DetailContainer>
    );
  }

  const renderFullDescription = () => {
    return { __html: character.fullDescription };
  };

  return (
    <DetailContainer
      background={character.background}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <DetailCard
        borderColor={character.color}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
      >
        <CharacterImage src={character.image} alt={character.name} borderColor={character.color} />
        <CharacterName textColor={character.color}>{character.name}</CharacterName>
        <FullDescription dangerouslySetInnerHTML={renderFullDescription()} />
        <StorySection>
          <h3>Câu chuyện về {character.name}</h3>
          <p>{character.story}</p>
        </StorySection>
        <BackButton
          onClick={() => navigate('/#characters')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Quay về danh sách nhân vật ⏪
        </BackButton>
      </DetailCard>
    </DetailContainer>
  );
}

export default CharacterDetail;