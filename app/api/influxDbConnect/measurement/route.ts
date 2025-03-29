// app/api/influxDbConnect/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { url, token, bucketName } = await req.json();
  console.log("link:", `${url}/query?db=${bucketName}&q=SHOW%20MEASUREMENTS`);
  try {
    const response = await fetch(
      `${url}/query?db=${bucketName}&q=SHOW%20MEASUREMENTS`,
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
        {
          success: false,
          message: "Failed to fetch measurements from InfluxDB",
        },
        { status: response.status },
      );
    }

    const data = await response.json();
    console.log("data:", data);
    const measurements = data.results[0].series[0].values.map(
      (item: any[]) => item[0],
    );
    console.log("measurements:", measurements);
    return NextResponse.json(
      { success: true, measurements: measurements },
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
