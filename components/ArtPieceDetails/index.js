import Image from "next/image";
import styled from "styled-components";
import FavouriteButton from "../FavouriteButton";
import CommentForm from "../CommentForm";
import Comments from "../Comments";
import { useState } from "react";

export default function ArtPieceDetails({
  slug,
  image,
  title,
  artist,
  year,
  genre,
  onToggleFavourite,
  artPiecesInfo,
  onSubmitComment,
}) {
  const isFavourite = artPiecesInfo.find(
    (piece) => piece.slug === slug
  )?.isFavourite;

  const comments = artPiecesInfo.find((piece) => piece.slug === slug)?.comments;

  let displayState = "false";
  if (comments) {
    displayState = "true";
  }

  return (
    <StyledSection>
      <FavouriteButton
        slug={slug}
        onToggleFavourite={onToggleFavourite}
        isFavourite={isFavourite}
      />
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
      <CommentForm onSubmitComment={onSubmitComment} slug={slug} />
      
      {displayState === "true" && <Comments comments={comments} />}
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
