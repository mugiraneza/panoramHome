
import api_interface from "./api_interface";
import {API_URL} from "../constants/API_URL";

export const reqGetCities = () => api_interface(API_URL + 'api_ahome_service/city/', {},'GET')
export const reqGetPropertiesForSales = () => api_interface(API_URL + 'api_ahome_service/property/', {},'GET')