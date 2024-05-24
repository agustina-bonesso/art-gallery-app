import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  console.log(data);
  if (error) {
    return <h2>{error.message("error")}</h2>;
  }
  if (isLoading) {
    return <h2>Loading .... </h2>;
  }

  return <ArtPieces pieces={data}></ArtPieces>;
}

