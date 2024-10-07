import Link from "next/link";

function PostList({ posts }) {
  return (
    <>
      <div className="text-3xl">Posts</div>
      {posts.map((post) => {
        return (
          <div key={post.id} className="w-[32rem]">
            <Link href={`/posts/${post.id}`} className="text-xl text-slate-50">
              {post.id} | {post.title}
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
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  //   console.log(posts);

  return {
    props: {
      posts,
    },
  };
}
