import Image from "next/image";
import styled from "styled-components";

export default function ArtPiecePreview({ image, artist, title }) {
  const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const StyledDescription = styled.div`
  `;
  const StyledImage = styled(Image)`
    box-shadow: .625rem .1875rem .1875rem black;
  `;
  return (
    <StyledSection>
      <StyledImage src={image} alt={title} width={500} height={500}></StyledImage>
      <StyledDescription>
        <h3>{title}</h3>
        <p>Artist: {artist}</p>
      </StyledDescription>
    </StyledSection>
  );
}
