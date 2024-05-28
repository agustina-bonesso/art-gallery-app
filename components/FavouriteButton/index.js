import styled from "styled-components";
import Image from "next/image";

export default function FavouriteButton({
  slug,
  isFavourite,
  onToggleFavourite,
}) {
  return (
    <StyledButton onClick={() => onToggleFavourite(slug)}>
      <Image src="/heart.svg" width={50} height={50} alt=""/>
    </StyledButton>
  );
}
const StyledButton = styled.button`
  width: 3.75rem;
`;
