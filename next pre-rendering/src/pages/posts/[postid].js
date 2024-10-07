function PostDetails({ post }) {
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
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      params: {
        postid: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
