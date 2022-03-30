import httpClientInstance from "../services/HttpClient";
import { AxiosPromise } from "axios";
import { FormValues } from "../models/EligibilityModel";

export const checkElegibility = (values: FormValues): AxiosPromise => {
  const response = httpClientInstance.post("http://localhost:8080/apply", {
    data: values,
  });
  return response;
};
