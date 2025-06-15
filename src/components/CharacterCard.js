import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = styled(motion.div)`
  background-color: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 1.5rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border: 3px solid ${props => props.borderColor || '#ccc'};

  &:hover {
    transform: translateY(-10px) rotate(2deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const CharacterImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 5px solid ${props => props.borderColor || '#eee'};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const CharacterName = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: ${props => props.textColor || '#333'};
  font-family: 'Comic Sans MS', cursive;
`;

const CharacterDescription = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  font-family: Arial, sans-serif;
`;

function CharacterCard({ character }) {
  return (
    <Link to={`/character/${character.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card
        borderColor={character.color}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <CharacterImage src={character.image} alt={character.name} borderColor={character.color} />
        <CharacterName textColor={character.color}>{character.name}</CharacterName>
        <CharacterDescription>{character.description}</CharacterDescription>
      </Card>
    </Link>
  );
}

export default CharacterCard;