import Image from "next/image";
import styled from "styled-components";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <StyledSection>
      <StyledImage
        src={image}
        alt={title}
        width={500}
        height={500}
        priority={true}
      ></StyledImage>
      <StyledDescription>
        <h3>{title}</h3>
        <p>
          Artist: {artist} <br /> Years: {year}
          <br /> Genre: {genre}
        </p>
      </StyledDescription>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.25rem;
`;
const StyledDescription = styled.div``;
const StyledImage = styled(Image)`
  box-shadow: 0.625rem 0.1875rem 0.1875rem black;
`;
