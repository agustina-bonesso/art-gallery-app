import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
import Link from "next/link";

export default function PieceDetail({ pieces, onToggleFavourite }) {
  const router = useRouter();
  const { slug } = router.query;

  const pieceIndex = pieces.findIndex((piece) => piece.slug === slug);
  const piece = pieces[pieceIndex];

  console.log(pieceIndex);
  console.log(piece);

  return (
    <>
      <ArtPieceDetails
        image={piece.imageSource}
        title={piece.name}
        artist={piece.artist}
        year={piece.year}
        genre={piece.genre}
        slug={piece.slug}
        onToggleFavourite={onToggleFavourite}
      />
      <Link href="/art-pieces">Back to all pieces</Link>
    </>
  );
}
