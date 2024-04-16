import { useEffect, useState } from "react";

function useAllOrganizations() {
  const [orgData, setOrgData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = "/api/organizations/";
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          // This line will catch any response that is not a 2xx success code
          throw new Error(`Error fetching: ${response.statusText}`);
        }
        const text = await response.text();
        if (text) {
          const fetchedData = JSON.parse(text);
          setOrgData(fetchedData);
        } else {
          console.error("Response is empty");
        }
      } catch (error) {
        console.error("Failed to fetch initial data:", error);
      }
    };
    fetchData();
  }, []);

  return orgData;
}

export default useAllOrganizations;
