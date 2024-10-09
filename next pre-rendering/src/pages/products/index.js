import Link from "next/link";

function PostList({ products }) {
  return (
    <>
      <div className="text-3xl">Products</div>
      <hr />
      {products.map((product) => {
        return (
          <div key={product.id} className="w-[32rem]">
            <Link
              href={`/products/${product.id}`}
              className="text-xl text-slate-50"
            >
              {product.id} | {product.title}
              <br />
              {product.price}
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
