"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.

export type QueryData = {
  id: string;
  bucket: string;
  measurement: string;
  field: string;
  value: number;
  start: Date;
  stop: Date;
};

export const columns: ColumnDef<QueryData>[] = [
  {
    accessorKey: "bucket",
    header: "Bucket",
  },
  {
    accessorKey: "measurement",
    header: "Measurement",
  },
  {
    accessorKey: "field",
    header: "Field",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
  {
    accessorKey: "start",
    header: "Start",
  },
  {
    accessorKey: "stop",
    header: "Stop",
  },
];
