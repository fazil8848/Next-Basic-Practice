import Link from "next/link";

function Home() {
  return (
    <>
      <div className="text-3xl">
        <u>Next JS Practice</u>{" "}
      </div>
      <br />
      <Link href={"/users"}> User List</Link>
      <br /> <hr />
      <Link href={"/posts"}> Post List</Link>
      <br /> <hr />
      <Link href={"/products"}> Product List</Link>
      <br /> <hr />
      <Link href={"/news"}> News List</Link>
      <br /> <hr />
      <Link href={"/dashboard"}> Dashboard</Link>
      <br /> <hr />
      <Link href={"/dashboard-swr"}> Dashboard SWR</Link>
      <br /> <hr />
      <Link href={"/event"}> Event List</Link>
      <br /> <hr />
    </>
  );
}

export default Home;
