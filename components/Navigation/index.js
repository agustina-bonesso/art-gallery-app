import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNav>
      <StyledNavLinks>
        <Link href="/">Spotlight</Link>
        <Link href="/art-pieces">Pieces</Link>
      </StyledNavLinks>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background: #333;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavLinks = styled.div`
  a {
    color: #fff;
    padding: 0 1rem;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #4caf50;
    }
  }
`;
