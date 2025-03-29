import React from "react";
import BucketSelector from "./BucketSelector";
import MeasurementsSelector from "./MeasurementsSelector";
import FieldsSelector from "../ClientComponent/FieldsSelector";
import TagsSelector from "../ClientComponent/TagsSelector";
import {
  BucketMeasurements,
  BucketFields,
  BucketTags,
  BucketTagsKeys,
} from "@/app/types/types";
interface SidebarProps {
  buckets: string[];
  bucketMeasurements: BucketMeasurements;
  bucketFields: BucketFields;
  selectedBucket: string | null;
  selectedMeasurement: string | null;
  onSelectBucket: (bucket: string | null) => void;
  onSelectMeasurement: (measurement: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  buckets,
  bucketMeasurements,
  bucketFields,
  selectedBucket,
  selectedMeasurement,
  onSelectBucket,
  onSelectMeasurement,
}) => {
  // Process the bucket objects because currently it is in a object format
  console.log(buckets);
  console.log(bucketMeasurements);
  console.log(bucketFields);
  return (
    <aside className="w-64 bg-gray-950 p-4">
      <BucketSelector
        buckets={buckets}
        selectedBucket={selectedBucket}
        onSelectBucket={onSelectBucket}
      />
      <MeasurementsSelector
        bucketMeasurements={bucketMeasurements}
        selectedBucket={selectedBucket}
        selectedMeasurement={selectedMeasurement}
        onSelectMeasurement={onSelectMeasurement}
      />
      <FieldsSelector
        bucketFields={bucketFields}
        selectedBucket={selectedBucket}
        selectedMeasurement={selectedMeasurement}
      />
    </aside>
  );
};

export default Sidebar;
