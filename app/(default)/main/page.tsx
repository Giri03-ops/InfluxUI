"use client";
import { SetStateAction, useEffect, useState } from "react";
import Header from "@/app/ClientComponent/loginComponent/header";
import NavBar from "@/app/ServerComponent/Dashboard/navbar";
import Sidebar from "@/app/ServerComponent/Sidebar";
import QueryBuilder from "@/app/ServerComponent/QueryBuilder";
import Results from "@/app/ServerComponent/Results";
import { useUser } from "@/app/contexts/UserContext";
import { useRouter } from "next/navigation";
import {
  fetchBuckets,
  fetchMeasurements,
  fetchFields,
  fetchTags,
  fetchTagsKeys,
} from "@/app/utils/api";
import {
  BucketMeasurements,
  BucketFields,
  BucketTags,
  BucketTagsKeys,
} from "@/app/types/types";

export default function Main() {
  const { url, orgId, token } = useUser();
  const router = useRouter();

  //Data fetching area
  const [bucketMeasurements, setBucketMeasurements] =
    useState<BucketMeasurements>({});
  const [bucketFields, setBucketFields] = useState<BucketFields>({});
  const [bucketTags, setBucketTags] = useState<BucketTags>({});
  const [bucketTagsKeys, setBucketTagsKeys] = useState<BucketTagsKeys>({});
  const [isLoading, setIsLoading] = useState(true);

  const [selectedBucket, setSelectedBucket] = useState<string | null>(null);
  const [selectedMeasurement, setSelectedMeasurement] = useState<string | null>(
    null,
  );

  useEffect(() => {
    if (!url || !orgId || !token) {
      router.push("/");
    } else {
      setIsLoading(true);
      fetchBuckets(url, orgId, token).then(async (buckets) => {
        try {
          const measurements: BucketMeasurements = {};
          const fields: BucketFields = {};
          const tags: BucketTags = {};
          const tagsKeys: BucketTagsKeys = {};

          for (const bucket of buckets) {
            measurements[bucket] = await fetchMeasurements(url, token, bucket);
            fields[bucket] = await fetchFields(url, token, bucket);
            //tags[bucket] = await fetchTags(url, token, bucket);
            tagsKeys[bucket] = await fetchTagsKeys(url, token, bucket);
          }

          setBucketMeasurements(measurements);
          setBucketFields(fields);
          setBucketTags(tags);
          setBucketTagsKeys(tagsKeys);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false);
        }
      });
    }
  }, [url, orgId, token, router]);

  console.log("bucketMeasurements:", bucketMeasurements);
  console.log("bucketFields:", bucketFields);
  console.log("bucketTags:", bucketTags);
  console.log("bucketTagsKeys:", bucketTagsKeys);
  // console.log("url:", url);
  // console.log("orgId:", orgId);
  // console.log("token:", token);

  return (
    <>
      <Header />
      <NavBar />
      <div className="flex flex-col min-h-screen bg-[#0B090A]">
        <div className="flex flex-1">
          {isLoading ? (
            <div className="flex items-center justify-center w-full">
              <p>Loading...</p>
            </div>
          ) : (
            <>
              <Sidebar
                buckets={Object.keys(bucketMeasurements)}
                bucketMeasurements={bucketMeasurements}
                bucketFields={bucketFields}
                selectedBucket={selectedBucket}
                selectedMeasurement={selectedMeasurement}
                onSelectBucket={setSelectedBucket}
                onSelectMeasurement={setSelectedMeasurement}
              />
              <div className="flex flex-col w-full space-y-4">
                <QueryBuilder />
                <Results />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
