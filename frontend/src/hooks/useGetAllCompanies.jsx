import { COMPANY_API_END_POINT, JOB_API_END_POINT } from "@/constants/data";
import { setCompanies } from "@/redux/company.slice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setCompanies(res.data.companies));
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCompanies();
  }, []);
};

export default useGetAllCompanies;
