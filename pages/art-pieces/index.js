import ArtPieces from "@/components/ArtPieces";

export default function Art({ pieces, onToggleFavourite }) {
  return <ArtPieces pieces={pieces} onToggleFavourite={onToggleFavourite} />;
}
