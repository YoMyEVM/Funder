// components/CardRow.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const gooes = [
  ['#FDEB71', '#F8D800'],
  ['#ABDCFF', '#0396FF'],
  ['#FEB692', '#EA5455'],
  ['#CE9FFC', '#7367F0'],
  ['#90F7EC', '#32CCBC'],
  ['#FFF6B7', '#F6416C'],
  ['#81FBB8', '#28C76F'],
  ['#E2B0FF', '#9F44D3'],

];

const CardRow: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <PaletteContainer>
      {gooes.map(([start, end], index) => (
        <ColorCard
          key={`${start}-${end}`}
          start={start}
          end={end}
          isSelected={index === selectedIndex}
          onClick={() => handleSelect(index)}
        />
      ))}
    </PaletteContainer>
  );
};

export default CardRow;

// Styled components for layout and styling
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
  height: 100px;
  margin: 5px;
  background-image: linear-gradient(135deg, ${({ start }) => start} 0%, ${({ end }) => end} 100%);
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
  outline: ${({ isSelected, start }) => (isSelected ? `2px solid ${start}` : 'none')};

  &:hover {
    transform: scale(1.05);
  }
`;
