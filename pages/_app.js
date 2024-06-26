import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  if (error) {
    return <h2>{error.message("error")}</h2>;
  }
  if (isLoading) {
    return <h2>Loading .... </h2>;
  }
  function handleToggleFavourite(slug) {
    console.log(slug);
    const isSaved = artPiecesInfo.find((piece) => piece.slug === slug);

    if (isSaved) {
      const setUpPiece = artPiecesInfo.map((piece) => {
        if (piece.slug !== slug) {
          return piece;
        }
        return { ...piece, isFavourite: !piece.isFavourite };
      });
      setArtPiecesInfo(setUpPiece);
    } else {
      const newPiece = { slug: slug, isFavourite: true };
      setArtPiecesInfo([newPiece, ...artPiecesInfo]);
    }
  }

  function handleSubmitComment(data) {
    const isSaved = artPiecesInfo.find((piece) => piece.slug === data.slug);
    if (isSaved) {
      const setUpComment = artPiecesInfo.map((piece) => {
        if (piece.slug !== data.slug) {
          return piece;
        }
        if (piece.comments) {
          return { ...piece, comments: [piece.comments.push(data.comment)] };
        }
        return { ...piece, comments: [data.comment] };
      });
    } else {
      const newPiece = {
        slug: data.slug,
        isFavourite: false,
        comments: [data.comment],
      };
      setArtPiecesInfo([newPiece, ...artPiecesInfo]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          pieces={data}
          artPiecesInfo={artPiecesInfo}
          onToggleFavourite={handleToggleFavourite}
          onSubmitComment={handleSubmitComment}
        />
      </Layout>
    </>
  );
}
