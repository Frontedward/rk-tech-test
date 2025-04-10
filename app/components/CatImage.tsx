'use client';

import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

interface CatImageProps {
  imageUrl: string;
}

const CatImage = ({ imageUrl }: CatImageProps) => {
  return (
    <ImageContainer>
      <Image src={imageUrl} alt="Cat" />
    </ImageContainer>
  );
};

export default CatImage; 