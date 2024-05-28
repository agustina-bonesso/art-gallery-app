import Image from "next/image";
import styled from "styled-components";
import FavouriteButton from "../FavouriteButton";

export default function Spotlight({ slug, image, artist, title, onToggleFavourite }) {
  return (
    <SpotlightSection>
      <FavouriteButton onToggleFavourite={onToggleFavourite} slug={slug} />
      <StyledImage
        src={image}
        alt={title}
        width={500}
        height={500}
        priority={true}
      ></StyledImage>
      <div>
        <Title>{title}</Title>
        <Artist>Artist: {artist}</Artist>
      </div>
    </SpotlightSection>
  );
}

const SpotlightSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 2rem;
  color: #333;
  margin-top: 20px;
`;

const Artist = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const StyledImage = styled(Image)`
  box-shadow: 0.625rem 0.1875rem 0.1875rem black;
`;
