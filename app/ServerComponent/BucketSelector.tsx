import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoDatabase } from "react-icons/go";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BucketSelectorProps {
  buckets: string[];
  selectedBucket: string | null;
  onSelectBucket: (bucket: string | null) => void;
}

const BucketsSelector: React.FC<BucketSelectorProps> = ({
  buckets,
  selectedBucket,
  onSelectBucket,
}) => {
  //On select dropdown button needs to be written and pass the selected value to MeasurementSelector
  //and fieldsSelector
  // console.log("buckets selector buckets:",  buckets);
  return (
    <div className="flex flex-col space-y-2 relative p-4 bg-[#1D191A] rounded-lg">
      <h2 className="font-inter text-sm leading-6 text-[#E9E8E8] mb-2">
        Buckets
      </h2>
      <div className="relative">
        <Select onValueChange={(value) => onSelectBucket(value)}>
          <SelectTrigger className="w-full rounded bg-[#4D494A] text-white appearance-none">
            <SelectValue placeholder="Select a bucket" />
          </SelectTrigger>
          <SelectContent className="max-h-60 overflow-y-auto bg-[#1D191A]">
            {buckets.map((bucket) => (
              <SelectItem key={bucket} value={bucket}>
                {bucket}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BucketsSelector;
