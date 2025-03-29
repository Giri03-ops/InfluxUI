export async function fetchBuckets(url: string, orgId: string, token: string) {
  try {
    const response = await fetch("/api/influxDbConnect/buckets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, orgId, token }),
    });
    const data = await response.json();
    if (data.success) {
      return data.buckets;
    } else {
      console.error("Failed to fetch buckets:", data.message);
      return [];
    }
  } catch (error) {
    console.error("Error fetching buckets:", error);
    return [];
  }
}

export async function fetchMeasurements(
  url: string,
  token: string,
  bucketName: string,
) {
  try {
    const response = await fetch("/api/influxDbConnect/measurement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, token, bucketName }),
    });
    const data = await response.json();
    if (data.success) {
      return data.measurements;
    } else {
      console.error("Failed to fetch measurements:", data.message);
      return [];
    }
  } catch (error) {
    console.error("Error fetching measurements:", error);
    return [];
  }
}

export async function fetchFields(
  url: string,
  token: string,
  bucketName: string,
) {
  try {
    const response = await fetch("/api/influxDbConnect/fields", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, token, bucketName }),
    });
    const data = await response.json();
    if (data.success) {
      return data.fieldMap;
    } else {
      console.error("Failed to fetch fields:", data.message);
      return [];
    }
  } catch (error) {
    console.error("Error fetching fields:", error);
    return [];
  }
}

export async function fetchTags(
  url: string,
  token: string,
  bucketName: string,
) {
  try {
    const response = await fetch("/api/influxDbConnect/tags", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, token, bucketName }),
    });
    const data = await response.json();
    if (data.success) {
      return data.tagMap;
    } else {
      console.error("Failed to fetch tags:", data.message);
      return [];
    }
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
}

export async function fetchTagsKeys(
  url: string,
  token: string,
  bucketName: string,
) {
  try {
    const response = await fetch("/api/influxDbConnect/tags/keys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, token, bucketName }),
    });
    const data = await response.json();
    if (data.success) {
      return data.tagMap;
    } else {
      console.error("Failed to fetch tags:", data.message);
      return [];
    }
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
}
