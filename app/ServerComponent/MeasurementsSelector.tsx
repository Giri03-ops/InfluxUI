"use client";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { BucketMeasurements } from "../types/types";

interface MeasurementsSelectorProps {
  bucketMeasurements: BucketMeasurements;
  selectedBucket: string | null;
  selectedMeasurement: string | null;
  onSelectMeasurement: (measurement: string | null) => void;
}

const MeasurementsSelector: React.FC<MeasurementsSelectorProps> = ({
  bucketMeasurements,
  selectedBucket,
  selectedMeasurement,
  onSelectMeasurement,
}) => {
  const [search, setSearch] = useState("");
  const measurements = selectedBucket
    ? bucketMeasurements[selectedBucket] || []
    : [];
  const filteredMeasurements = measurements.filter((m) =>
    m.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col space-y-2 relative p-4 bg-[#1D191A] rounded-lg mt-5">
      <label className="block text-white text-sm">Measurements</label>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-2 text-black"
      />
      <div className="relative">
        <div className="h-40 overflow-y-auto">
          {filteredMeasurements.map((measurement) => (
            <div
              key={measurement}
              className={`p-2 border rounded mb-1 cursor-pointer ${
                measurement === selectedMeasurement ? "bg-blue-500" : ""
              }`}
              onClick={() => onSelectMeasurement(measurement)}
            >
              {measurement}
            </div>
          ))}
        </div>
        <div className="absolute cursor-pointer inset-x-0 bottom-0 flex justify-center items-center bg-gradient-to-t from-[#1D191A] to-transparent h-8">
          <FaAngleDoubleDown className="text-white" />
        </div>
      </div>
    </div>
  );
};
export default MeasurementsSelector;
