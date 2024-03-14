import { useRouter } from "next/router";
import useSWR from "swr";

export default function Home() {
  const router = useRouter();

  const { data, error, isLoading } = useSWR(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);
  return (
    <>
      <h1>KKs Cryptotracker</h1>
      <button onClick={() => router.push("/favorites")}>Favorites</button>
    </>
  );
}
