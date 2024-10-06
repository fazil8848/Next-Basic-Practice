import Link from "next/link";
// import { useRouter } from "next/router";

function Home() {
  // const router = useRouter();
  // const handleClick = () => {
  //   router.push("/users");
  // };
  return (
    <>
      <div className="text-3xl">Next JS pre-rendering</div>
      <Link href={"/users"}> User List</Link>
      <br />
      <Link href={"/posts"}> Post List</Link>
      {/* <button onClick={handleClick}>User List</button> */}
    </>
    
  );
}

export default Home;
