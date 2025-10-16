import Link from "next/link";
import About from "./components/About";

const Home = () => {
  const link = "/about";
  return (
    <>
      <h1>This is home</h1>
      <Link href={{ pathname: link, query: { name: "jejen" } }}>About</Link>
      <About searchParams={{ name: "jejen" }} age={20} />
    </>
  );
};

export default Home;