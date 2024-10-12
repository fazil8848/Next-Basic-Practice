import { useEffect, useState } from "react";
function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }

    fetchDashboardData();
  }, []);

  return isLoading ? (
    <div className="text-3xl">Loading...</div>
  ) : (
    <>
      <div className="text-2xl"> Dashboard</div>
      <h2 className="text-xl">Posts - {dashboardData.posts}</h2>
      <h2 className="text-xl">Likes - {dashboardData.likes}</h2>
      <h2 className="text-xl">Followers - {dashboardData.followers}</h2>
      <h2 className="text-xl">Following - {dashboardData.following}</h2>
    </>
  );
}

export default Dashboard;
