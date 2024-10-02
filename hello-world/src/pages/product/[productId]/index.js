import Link from "next/link";
import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <>
      <h1 className="text-xl">Details about the product {productId}</h1>
      <Link href={"/product"}> GO Back </Link>
    </>
  );
}

export default ProductDetails;
