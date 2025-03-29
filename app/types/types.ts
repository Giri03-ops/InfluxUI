export interface BucketMeasurements {
  [bucketName: string]: string[];
}

export interface BucketFields {
  [bucketName: string]: {
    [measurementName: string]: string[];
  };
}

export interface BucketTags {
  [bucketName: string]: {
    [measurementName: string]: {
      [tagKey: string]: string[];
    };
  };
}

export interface BucketTagsKeys {
  [bucketName: string]: {
    [measurementName: string]: string[];
  };
}
