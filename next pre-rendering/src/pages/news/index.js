function NewsArticleList({ articles }) {
  return (
    <>
      <div className="text-3xl">List of News Article </div>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <p>
              {article.id} :- {article.title} | {article.category}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
