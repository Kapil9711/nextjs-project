import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1 className="text-5xl mb-8 font-bold">Nextjs Tutorial</h1>
      <Link className="btn btn-accent" href="/client">
        Client
      </Link>
    </>
  );
}
