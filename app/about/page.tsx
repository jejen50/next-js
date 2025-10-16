import AboutComponent from "../components/About";

// Page-level component for /about route. It receives `searchParams` from Next.js
// and forwards them to the presentational AboutComponent.
export default function Page({ searchParams }: { searchParams: { name?: string } }) {
  const name = searchParams?.name ?? "jejen";
  return <AboutComponent searchParams={{ name }} age={20} />;
}