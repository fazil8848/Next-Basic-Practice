import Link from "next/link";

function Blog() {
  return (
    <>
      <h1 className="text-3xl">Blog Page</h1>
      <br />
      <Link href={"/"}>Go Back</Link>
    </>
  );
}

export default Blog;
