import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1>Welcome to crypto</h1>
      <button onClick={() => router.push("/favorites")}>Favorites</button>
    </>
  );
}
