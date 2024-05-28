import ArtPiecePreview from "../ArtPiecePreview";
import styled from "styled-components";

export default function ArtPieces({ pieces, onToggleFavourite }) {
  return (
    <>
      <StyledList>
        {pieces.map((piece) => {
          return (
            <li key={piece.slug}>
              <ArtPiecePreview
                image={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
                slug={piece.slug}
                onToggleFavourite={onToggleFavourite}
              ></ArtPiecePreview>
              <hr />
            </li>
          );
        })}
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
`;
