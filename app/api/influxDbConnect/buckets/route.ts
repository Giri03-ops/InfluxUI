import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { url, orgId, token } = await req.json();

  try {
    const response = await fetch(`${url}/api/v2/buckets?orgID=${orgId}`, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch buckets from InfluxDB" },
        { status: response.status },
      );
    }

    const data = await response.json();
    // Extract bucket names from the data
    const bucketNames = data.buckets.map(
      (bucket: { name: string }) => bucket.name,
    );

    return NextResponse.json(
      { success: true, buckets: bucketNames },
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
