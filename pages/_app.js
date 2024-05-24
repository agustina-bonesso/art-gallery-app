import GlobalStyle from "../styles";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  console.log(data);
  if (error) {
    return <h2>{error.message("error")}</h2>;
  }
  if (isLoading) {
    return <h2>Loading .... </h2>;
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} />
    </>
  );
}
