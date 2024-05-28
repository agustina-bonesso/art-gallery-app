import Spotlight from "@/components/Spotlight";

function randomArtPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function SpotlightPage({ pieces, onToggleFavourite, artPiecesInfo }) {
  const randomPiece = randomArtPiece(pieces);

  return (
    <>
      <h1>Spotlight</h1>
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        title={randomPiece.name}
        slug={randomPiece.slug}
        onToggleFavourite={onToggleFavourite}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
