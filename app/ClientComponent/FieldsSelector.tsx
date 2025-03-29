"use client";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { BucketFields } from "@/app/types/types";

interface FieldsSelectorProps {
  bucketFields: BucketFields;
  selectedBucket: string | null;
  selectedMeasurement: string | null;
}

const FieldsSelector: React.FC<FieldsSelectorProps> = ({
  bucketFields,
  selectedBucket,
  selectedMeasurement,
}) => {
  const [search, setSearch] = useState<string>("");
  const fields =
    selectedBucket && selectedMeasurement
      ? bucketFields[selectedBucket]?.[selectedMeasurement] || []
      : [];

  const filteredFields = fields.filter((field) =>
    field.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="flex flex-col space-y-2 relative p-4 bg-[#1D191A] rounded-lg mt-5">
      <label className="block text-white text-sm">Fields</label>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-2 text-black"
      />
      <div className="h-40 overflow-y-auto">
        {filteredFields.map((field) => (
          <div key={field} className="p-2 border rounded mb-1 cursor-pointer">
            {field}
          </div>
        ))}
      </div>
      <div className="absolute cursor-pointer inset-x-0 bottom-0 flex justify-center items-center bg-gradient-to-t from-[#1D191A] to-transparent h-8">
        <FaAngleDoubleDown className="text-white" />
      </div>
    </div>
  );
};

export default FieldsSelector;
