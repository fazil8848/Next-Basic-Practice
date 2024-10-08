import { useRouter } from "next/router";

function PostDetails({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div className="">Loading...!!</div>;
  } else {
    return (
      <>
        <div className="w-[32rem]">
          <div className="text-3xl">
            {product.id} :- {product.title}
          </div>
          <p className="">{product.price}</p>
          <br />
          <p>{product.description}</p>
        </div>
      </>
    );
  }
}

export default PostDetails;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(params);

  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();

  console.log("--------");
  console.log(data);
  console.log("--------");

  return {
    props: {
      product: data,
    },
  };
};
