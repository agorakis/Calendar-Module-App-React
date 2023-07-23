import axios from "axios";
import { useEffect, useState } from "react";

export interface Event {
  ID: number;
  Title: string;
  Category: string;
  BannerUrl: string;
  Description: string;
  AddressLine1: string;
  AddressLine2: string;
  PostCode: string;
  City: string;
  Country: string;
  EventStartDate: string;
  EventEndDate: string;
  FullDayEvent: string;
  Author: string;
  Editor: string;
  Created: string;
  Modified: string;
}
interface Response {
  value: Event[];
}

const useEvents = () => {
  const [data, setData] = useState<Event[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const request = axios.post<Response>(
      "https://prod-179.westeurope.logic.azure.com:443/workflows/7c84997dd6894507a60796acb06e5c43/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=6hFoizfo2w62d0iQK_Zyt7a3Ycr9akAkXdCPAG0ecwQ&usr=416e746f6e697347"
    );

    request
      .then((res) => {
        setData(res.data.value);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrors(error.message);
        setIsLoading(false);
      });
  }, []);

  return { data, errors, isLoading };
};

export default useEvents;
