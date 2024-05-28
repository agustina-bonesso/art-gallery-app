import ArtPieces from "@/components/ArtPieces";

export default function FavouritePage({ pieces, artPieceInfo }) {
  const favouritePieces = artPieceInfo
    .filter((piece) => piece.isFavourite)
    .map((piece) => piece.slug);

  const setUpPiece = pieces.map((piece) => {
    if (piece.slug !== slug) {
      return piece;
    }
    return { ...piece, isFavourite: !piece.isFavourite };
  });

  return <ArtPieces pieces={favouritePieces} />;
}
