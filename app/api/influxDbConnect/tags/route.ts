import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { url, token, bucketName } = await req.json();
  try {
    // Fetch tag keys
    const tagKeysResponse = await fetch(
      `${url}/query?db=${bucketName}&q=SHOW%20TAG%20KEYS`,
      {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );

    if (!tagKeysResponse.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch Tag Keys from InfluxDB" },
        { status: tagKeysResponse.status },
      );
    }

    const tagKeysData = await tagKeysResponse.json();
    const tagMap: {
      [measurementName: string]: { [tagKey: string]: string[] };
    } = {};

    for (const series of tagKeysData.results[0].series) {
      const measurementName = series.name;
      tagMap[measurementName] = {};

      for (const [tagKey] of series.values) {
        // Fetch tag values for each tag key
        const tagValuesResponse = await fetch(
          `${url}/query?db=${bucketName}&q=SHOW%20TAG%20VALUES%20FROM%20"${measurementName}"%20WITH%20KEY%20%3D%20"${tagKey}"`,
          {
            method: "GET",
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        );

        if (!tagValuesResponse.ok) {
          console.error(
            `Failed to fetch Tag Values for ${tagKey} from InfluxDB`,
          );
          continue;
        }

        const tagValuesData = await tagValuesResponse.json();
        tagMap[measurementName][tagKey] =
          tagValuesData.results[0].series[0].values.map(
            ([_, value]: [any, any]) => value,
          );
      }
    }

    return NextResponse.json(
      { success: true, tagMap: tagMap },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in /api/tags:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
        error: String(error),
      },
      { status: 500 },
    );
  }
}
