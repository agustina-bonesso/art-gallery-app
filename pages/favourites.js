import ArtPieces from "@/components/ArtPieces";

export default function FavouritePage({
  pieces,
  artPiecesInfo,
  onToggleFavourite,
}) {
  const favouritePieces = artPiecesInfo
    .filter((piece) => piece.isFavourite)
    .map((piece) => {
      return piece.slug;
    });

  const favPiecesInfo = pieces.filter((piece) => {
    return favouritePieces.includes(piece.slug);
  });

  console.log("Art Pieces Info:" + artPiecesInfo);
  console.log(pieces);
  console.log(favouritePieces);
  console.log(favPiecesInfo);

  return (
    <ArtPieces pieces={favPiecesInfo} onToggleFavourite={onToggleFavourite} />
  );
}
