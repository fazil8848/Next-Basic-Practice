function PostDetails({ post }) {
  console.log(post);

  return (
    <>
      <div className="w-[32rem]">
        <div className="text-3xl">
          {post.id} :- {post.title}
        </div>
        <p className="">{post.body}</p>
      </div>
    </>
  );
}

export default PostDetails;

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { postid: "1" },
      },
      {
        params: { postid: "2" },
      },
      {
        params: { postid: "3" },
      },
      {
        params: { postid: "4" },
      },
      {
        params: { postid: "5" },
      },
      {
        params: { postid: "6" },
      },
      {
        params: { postid: "7" },
      },
      {
        params: { postid: "8" },
      },
      {
        params: { postid: "9" },
      },
      {
        params: { postid: "10" },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const data = await response.json();
  console.log(data);

  return {
    props: {
      post: data,
    },
  };
};
