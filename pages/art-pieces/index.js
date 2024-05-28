import ArtPieces from "@/components/ArtPieces";

export default function Art({ pieces, artPiecesInfo, onToggleFavourite }) {
  return <ArtPieces pieces={pieces} onToggleFavourite={onToggleFavourite} artPiecesInfo={artPiecesInfo}/>;
}
