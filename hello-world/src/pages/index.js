import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.replace("/product");
    //        OR
    // router.push("/product");
  };

  return (
    <div>
      <h1 className="text-xl cursor-default">Home Page</h1>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/product">Product</Link>
      <br />
      <button onClick={handleClick}> Place order</button>
    </div>
  );
}

export default Home;
