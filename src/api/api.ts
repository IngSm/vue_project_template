import axios, { Axios, AxiosResponse } from "axios"

import { RequestType } from "../helpers/types"

class ApiService {
  private static instance: ApiService

  private axios: Axios

  private constructor() {
    this.axios = axios
    this.axios.defaults.headers.common["Content-Type"] = "application/json"
    this.axios.defaults.timeout = 10000
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService()
    }

    return ApiService.instance
  }

  public async send(type: RequestType, url: string, body?: any): Promise<AxiosResponse | null> {
    try {
      return await axios[type](url, body)
    } catch (e) {
      console.error(e)
      return null
    }
  }
}

export const api = ApiService.getInstance()
