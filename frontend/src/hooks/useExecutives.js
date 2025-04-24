import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl =
  import.meta.env.VITE_API_BASE_URL || "https://nacoss-backend.onrender.com";
const BASE_API_URL = `${baseUrl}/api/execs`;

export const useExecutives = (activeTab) => {
  const [executives, setExecutives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const session = activeTab === "current" ? "2024-2025" : "2022-2023";

  useEffect(() => {
    const fetchExecutives = async (retryCount = 0) => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${BASE_API_URL}?session=${session}`, {
          timeout: 10000,
        });

        if (Array.isArray(response.data.execs)) {
          setExecutives(response.data.execs);
        } else {
          throw new Error("Unexpected API response structure");
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.code === "ECONNABORTED") {
            setError("Request timed out.");
          } else if (err.response) {
            setError(`Server error: ${err.response.status}`);
          } else {
            setError(err.message);
          }
        } else {
          setError("An unexpected error occurred.");
        }

        if (retryCount < 2) {
          setTimeout(() => fetchExecutives(retryCount + 1), 2000);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchExecutives();
  }, [activeTab]);

  return { executives, loading, error, session };
};
