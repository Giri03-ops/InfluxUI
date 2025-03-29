// app/api/influxDbConnect/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { url, token, bucketName } = await req.json();
  console.log("link:", `${url}/query?db=${bucketName}&q=SHOW%20FIELD%20KEYS`);
  try {
    const response = await fetch(
      `${url}/query?db=${bucketName}&q=SHOW%20FIELD%20KEYS`,
      {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch Fields from InfluxDB" },
        { status: response.status },
      );
    }

    const data = await response.json();
    const fieldMap: { [measurementName: string]: string[] } = {};
    data.results[0].series.forEach((series: any) => {
      fieldMap[series.name] = series.values.map((value: any[]) => value[0]);
    });

    console.log("fieldMap:", fieldMap);
    return NextResponse.json(
      { success: true, fieldMap: fieldMap },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: "Internal Server Error",
          error: error.message,
        },
        { status: 500 },
      );
    } else {
      return NextResponse.json(
        { success: false, message: "Unknown error occurred" },
        { status: 500 },
      );
    }
  }
}
