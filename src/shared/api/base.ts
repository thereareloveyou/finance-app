import axios, { AxiosResponse } from "axios";
import { API_URL } from "../config";

export class ApiClient {
  private baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  async handleResponce<TResult>(response: AxiosResponse): Promise<TResult> {
    if (response.statusText !== "OK") {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    try {
      return await response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  public async get<TResult = unknown>(value: string): Promise<TResult> {
    const responce = await axios.get(this.baseUrl + value, {});

    return this.handleResponce<TResult>(responce);
  }

  public async getWithParams<TResult = unknown, TParams = unknown>(
    id: string,
    params: TParams
  ): Promise<TResult> {

   
    const responce = await axios.get(this.baseUrl + id, {
      params: params
    });

    console.log(responce)


    return this.handleResponce<TResult>(responce);
  }
}

export const apiClient = new ApiClient(API_URL);
