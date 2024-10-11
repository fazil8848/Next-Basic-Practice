function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <div className="text-3xl">
        {" "}
        Showing News for Category -{" "}
        <i>
          <u>{category}</u>
        </i>{" "}
      </div>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <p>
              {article.id} :- {article.title}
              <br />
              {article.description}
            </p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );

  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
