import { QueryData, columns } from "./columns";
import { DataTable } from "./datatable";

export default function Table() {
  //transfer the fetch data from main page file later
  const data: QueryData[] = [
    {
      id: "728ed52f",
      bucket: "AO",
      measurement: "airsensor",
      field: "co",
      value: 0.6546,
      start: new Date(Date.now()),
      stop: new Date(Date.now()),
    },
    {
      id: "728ed52f",
      bucket: "AO",
      measurement: "airsensor",
      field: "co",
      value: 0.23340046,
      start: new Date(Date.now()),
      stop: new Date(Date.now()),
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
