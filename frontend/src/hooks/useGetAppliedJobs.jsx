import { APPLICATION_API_END_POINT } from "@/constants/data";
import { setAllAppiedJobs } from "@/redux/job.slice";
import axios from "axios";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedjobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllAppiedJobs(res.data.application));
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAppliedJobs();
  }, []);
};

export default useGetAppliedjobs;