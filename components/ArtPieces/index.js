import ArtPiecePreview from "../ArtPiecePreview";
import styled from "styled-components";

export default function ArtPieces({ pieces }) {
  const StyledList = styled.ul`
    list-style-type: none;
  `;

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
              ></ArtPiecePreview>
            </li>
          );
        })}
      </StyledList>
    </>
  );
}
