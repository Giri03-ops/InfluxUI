"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface UserContextType {
  url: string;
  orgId: string;
  token: string;
  setUserCredentials: (url: string, orgId: string, token: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [url, setUrl] = useState("");
  const [orgId, setOrgId] = useState("");
  const [token, setToken] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedUrl = localStorage.getItem("influxUrl");
    const storedOrgId = localStorage.getItem("influxOrgId");
    const storedToken = localStorage.getItem("influxToken");
    if (storedUrl) setUrl(storedUrl);
    if (storedOrgId) setOrgId(storedOrgId);
    if (storedToken) setToken(storedToken);
    setIsLoaded(true);
  }, []);

  const setUserCredentials = (
    newUrl: string,
    newOrgId: string,
    newToken: string,
  ) => {
    setUrl(newUrl);
    setOrgId(newOrgId);
    setToken(newToken);
    if (typeof window !== "undefined") {
      localStorage.setItem("influxUrl", newUrl);
      localStorage.setItem("influxOrgId", newOrgId);
      localStorage.setItem("influxToken", newToken);
    }
  };

  if (!isLoaded) {
    return null; // or a loading spinner
  }
  return (
    <UserContext.Provider value={{ url, orgId, token, setUserCredentials }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
