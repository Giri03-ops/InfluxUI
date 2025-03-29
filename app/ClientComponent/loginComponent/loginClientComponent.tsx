/* eslint-disable @next/next/no-img-element */
// components/LoginClientComponent.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../../contexts/UserContext";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginClientComponent: React.FC = () => {
  const [url, setUrl] = useState<string>(""); // Changed from email to url
  const [orgId, setOrgId] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [showToken, setShowToken] = useState(false);
  const router = useRouter();
  const { setUserCredentials } = useUser();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(url, orgId, token);
    const response = await fetch("/api/influxDbConnect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, orgId, token }), // Adjusted to send url
    });

    const data = await response.json();

    if (data.success) {
      // Set user credentials in the global context
      setUserCredentials(url, orgId, token);

      // Convert buckets data to query parameters
      const params = new URLSearchParams({
        buckets: JSON.stringify(data.buckets),
      });

      // Use router.push with constructed query string
      //router.push(`/success?${params.toString()}`);
      router.push("/main");

      console.log(data);
    } else {
      alert("Failed to connect to InfluxDB. Please try again.");
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center mt-20 bg-black">
        <div className="w-full max-w-md p-8 bg-white rounded-3xl">
          <h1 className="text-3xl font-bold text-center text-gray-900 tracking-wide">
            Connect InfluxDB
          </h1>
          <h1 className="text-sm text-center text-gray-500 tracking-wide mt-2 mb-6">
            Enter Your InfluxDB Crendential
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="influxdb-url" className="text-[#0D0C0C]">
                InfluxDB URL
              </Label>
              <Input
                type="string" // Changed from email to url
                id="influxdb-url"
                placeholder="http://000.00.000.00:0000"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="text-black bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization-name" className="text-[#0D0C0C]">
                Organization Name
              </Label>
              <Input
                id="organization-name"
                placeholder="Organisation name"
                value={orgId}
                onChange={(e) => setOrgId(e.target.value)}
                className="text-black bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="token" className="text-[#0D0C0C]">
                Token
              </Label>
              <div className="relative">
                <Input
                  id="token"
                  type={showToken ? "text" : "password"}
                  placeholder="Enter your token here"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  className="text-black bg-white"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setShowToken(!showToken)}
                >
                  {showToken ? (
                    <EyeOffIcon className="h-4 w-4 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-gray-500" />
                  )}
                  <span className="sr-only">
                    {showToken ? "Hide token" : "Show token"}
                  </span>
                </Button>
              </div>
            </div>
            <Button className="w-full bg-black text-white hover:text-black mt-8">
              Connect
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginClientComponent;
