import ArtPieces from "@/components/ArtPieces";
import Link from "next/link";
import Spotlight from "@/components/Spotlight";

function randomArtPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function HomePage({ pieces }) {
  const randomPiece = randomArtPiece(pieces);

  return (
    <>
      <h1>Spotlight</h1>
      <Spotlight image={randomPiece.imageSource} artist={randomPiece.artist} />
      <Link href="/art-pieces">All Piece Gallery</Link>
    </>
  );
}
