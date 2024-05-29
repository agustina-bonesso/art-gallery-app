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


  return (
    <ArtPieces pieces={favPiecesInfo} onToggleFavourite={onToggleFavourite} artPiecesInfo={artPiecesInfo}/>
  );
}
