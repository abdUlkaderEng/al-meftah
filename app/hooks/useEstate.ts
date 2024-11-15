"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const useEstate = <T>(endpoint: string): { data: T[]; loading: boolean } => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T[]>("/api/"+endpoint);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching new estates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading }; 
};

export default useEstate;