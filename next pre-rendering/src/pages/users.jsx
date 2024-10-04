import User from "../../components/user";

function UserList({ users }) {
  return (
    <>
      <div className="text-3xl"> List of users</div>
      {users.map((user) => {
        return (
          <>
            <div key={user.id}>
              <User user={user} />
            </div>
            <br />
          </>
        );
      })}
    </>
    
  );
}

export default UserList;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  }; 
}
