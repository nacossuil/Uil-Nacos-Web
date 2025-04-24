import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../utils/constant";

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
        const { data } = await axios.get(`${baseURL}/api/events`, {
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
