import Link from "next/link"


export default function Home() {
  return (
    <div>
      <Link href="/blog">blog</Link>
      <br />
      <Link href="/products">products</Link>
      <h1>This is home page</h1>
    </div>
  );
}
