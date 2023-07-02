"use client";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          cache: "no-store",
        }
      );

      if (!response.ok) setError(true);

      const res = await response.json();
      setData(res);
      setLoading(false);
    }
    getData();
  }, []);
  console.log(data);
  return <div>Dashboard</div>;
};

export default Dashboard;
