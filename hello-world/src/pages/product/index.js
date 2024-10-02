import Link from "next/link";

function Product() {
  return (
    <>
      <h1 className="text-3xl"> Products</h1>
      <h1 className="text-xl">
        <Link href="/product/1"> Product 1</Link>
      </h1>
      <h1 className="text-xl">
        <Link href="/product/2"> Product 2</Link>
      </h1>
      <h1 className="text-xl">
        <Link href="/product/3" replace>
          Product 3
        </Link>
      </h1>
      <Link href="/">Go Back</Link>
    </>
  );
}

export default Product;
