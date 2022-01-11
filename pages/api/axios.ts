import Axios from "axios";
import { publicRuntimeConfig } from "..";

export const axios = Axios.create({
    baseURL: publicRuntimeConfig.serverHost
})