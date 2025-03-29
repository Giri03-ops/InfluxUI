"use client"; // Add this line to make the component a Client Component
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/app/ClientComponent/loginComponent/header";
import Sidebar from "@/app/ServerComponent/Sidebar";

const SuccessPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [bucketsData, setBucketsData] = useState<{ buckets: any[] }>({
    buckets: [],
  }); // Initialize with empty object having buckets as an array

  useEffect(() => {
    // Extract query parameter and parse buckets
    const bucketsParam = searchParams.get("buckets");
    if (bucketsParam) {
      setBucketsData(JSON.parse(bucketsParam));
    }
  }, [searchParams]);
  console.log(bucketsData);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar buckets={bucketsData.buckets} />
        <div className="flex flex-col items-center justify-center flex-1">
          <h1 className="text-3xl font-bold mb-6">Connection Successful!</h1>
          <h2 className="text-xl mb-4">Available Buckets:</h2>
          <ul className="list-disc list-inside">
            {bucketsData.buckets.map((bucket, index) => (
              <li key={index} className="text-lg">
                {bucket.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
