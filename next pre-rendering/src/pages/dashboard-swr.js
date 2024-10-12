// import { useEffect, useState } from "react";

import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

function DashboardSWR() {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) {
    return <div className="text-3xl">An Error has occured</div>;
  }
  if (!data) {
    return <div className="text-3xl">Loading...</div>;
  } else {
    return (
      <>
        <div className="text-2xl"> Dashboard</div>
        <h2 className="text-xl">Posts - {data.posts}</h2>
        <h2 className="text-xl">Likes - {data.likes}</h2>
        <h2 className="text-xl">Followers - {data.followers}</h2>
        <h2 className="text-xl">Following - {data.following}</h2>
      </>
    );
  }
}

export default DashboardSWR;
