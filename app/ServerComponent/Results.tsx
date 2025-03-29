"use client";
import React, { useState } from "react";
import Tab from "../../components/ui/tabs";
import Code from "./ResultsTab/code";
import Table from "./ResultsTab/Table/table";
import { Visualisation } from "./ResultsTab/visualisation";

const Results = () => {
  // Results Tab selection area
  const [currentTab, setCurrentTab] = useState("Visualisation");
  const tabs = [
    { name: "Code", href: "#", current: currentTab === "Code" },
    { name: "Table", href: "#", current: currentTab === "Table" },
    {
      name: "Visualisation",
      href: "#",
      current: currentTab === "Visualisation",
    },
  ];

  const handleTabClick = (tab: { name: string; href: string }) => {
    setCurrentTab(tab.name);
  };

  //Code display area
  //use UseState later to convey measurement to generate query for the code snippet later， just put sample here
  const codeSnippet = `from(bucket: "AO")
            |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
            |> filter(fn: (r) => r["_measurement"] == "airSensors")
            |> filter(fn: (r) => r["_field"] == "co")
            |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)
            |> yield(name: "mean")`;

  return (
    <div className="p-6 bg-[#1D191A] rounded-lg mt-4 ml-12 w-[1200px] h-auto flex flex-col">
      <div className="flex justify-between w-full">
        <div className="text-white text-lg font-semibold">Results</div>
        <div className="p-2 bg-[#4D494A] rounded-lg h-13">
          <Tab tabs={tabs} onTabClick={handleTabClick} />
        </div>
      </div>

      <div className="flex flex-col items-center w-full mt-4 space-y-4">
        {currentTab === "Code" && <Code codeSnippet={codeSnippet} />}
        {currentTab === "Table" && <Table />}
        {currentTab === "Visualisation" && (
          <div className="w-full">
            <Visualisation />
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
