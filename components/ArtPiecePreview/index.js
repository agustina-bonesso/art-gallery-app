import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavouriteButton from "../FavouriteButton";

export default function ArtPiecePreview({ image, artist, title, slug, onToggleFavourite }) {
  return (
    <StyledSection>
      <FavouriteButton onToggleFavourite={onToggleFavourite} slug={slug}/>
      <Link href={`/art-pieces/${slug}`}>
        <StyledImage
          src={image}
          alt={title}
          width={500}
          height={500}
          priority={true}
        ></StyledImage>
      </Link>

      <StyledDescription>
        <h3>{title}</h3>
        <p>Artist: {artist}</p>
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
