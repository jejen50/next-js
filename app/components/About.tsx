import Link from "next/link";

type AboutProps = {
  searchParams: { name: string };
  age: number;
};

export default function About({ searchParams, age }: AboutProps) {
  const { name } = searchParams;
  return (
    <>
      <h1>hello my name is {name}</h1>
      <h1>my age is {age}</h1>
      <Link href="/">Home</Link>
    </>
  );
}
