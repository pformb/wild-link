import { useEffect, useState } from "react";

function useAllPatientsByOrg(orgId) {
  
  const [patData, setPatData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log(`on Hook orgId:`, orgId);
      const endpoint = `/api/organizations/${orgId}/patients`;
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          // This line will catch any response that is not a 2xx success code
          throw new Error(`Error fetching: ${response.statusText}`);
        }
        const text = await response.text();
        if (text) {
          const fetchedData = JSON.parse(text);
          setPatData(fetchedData);
        } else {
          console.error("Response is empty");
        }
      } catch (error) {
        console.error("Failed to fetch initial data:", error);
      }
    };
    fetchData();
  }, [orgId]); // <-- orgData is added to the dependency array

  return patData;
}

export default useAllPatientsByOrg;
