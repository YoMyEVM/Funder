// components/CardRow.tsx
import React, { useState } from 'react';
import styled from 'styled-components';



const gooes = [
  { start: '#81FBB8', end: '#28C76F', title: 'Top Inflows' },
  { start: '#FFF6B7', end: '#F6416C', title: 'Top Outflows' },
  { start: '#FEB692', end: '#EA5455', title: 'Most Active' },
  { start: '#CE9FFC', end: '#7367F0', title: 'Top Voted' },
  { start: '#90F7EC', end: '#32CCBC', title: 'Best Performer' },
  { start: '#E2B0FF', end: '#9F44D3', title: 'Recent Deposited' },
];

const CardRow: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <PaletteContainer>
      {gooes.map(({ start, end, title }, index) => (
        <ColorCard
          key={`${start}-${end}`}
          start={start}
          end={end}
          isSelected={index === selectedIndex}
          onClick={() => handleSelect(index)}
        >

          <CardTitle>{title}</CardTitle>
        </ColorCard>
      ))}
    </PaletteContainer>
  );
};

export default CardRow;

interface ColorCardProps {
  start: string;
  end: string;
  isSelected: boolean;
}

const PaletteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;
`;

const ColorCard = styled.div<ColorCardProps>`
  flex: 1 1 8%;
  height: 130px;
  width: 100px;
  margin: 7px;
  background-image: linear-gradient(135deg, ${({ start }) => start} 0%, ${({ end }) => end} 100%);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;  // Change flex direction to column to stack logo and title
  align-items: center;
  justify-content: center;
  color: black;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  transition: transform 0.2s ease;
  outline: ${({ isSelected, start }) => (isSelected ? `2px solid ${start}` : 'none')};

  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;  // Add some space between the logo and the title
`;

// Style for the logo
const Logo = styled.img`
  width: 40px;    // Adjust size as needed
  height: auto;
  margin-bottom: 5px;  // Add some space below the logo
`;
