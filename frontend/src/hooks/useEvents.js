import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl =
  import.meta.env.VITE_API_BASE_URL || "https://uil-nacos-web.onrender.com";

export const useEvents = (activeTab) => {
  const [eventInfo, setEventInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      const session = activeTab === "upcoming" ? "2024-2025" : "2022-2023";

      try {
        const { data } = await axios.get(`${baseUrl}/api/events`, {
          params: { session },
          timeout: 10000,
        });
        setEventInfo(data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "Server error occurred.");
        } else {
          setError("Failed to fetch events.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [activeTab]);

  return { eventInfo, loading, error };
};
