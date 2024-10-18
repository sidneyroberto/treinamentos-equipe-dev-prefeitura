/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";
import { Show } from "../models/Show";

export class ShowService {
  private _http: AxiosInstance;

  constructor() {
    this._http = axios.create({
      baseURL: import.meta.env.VITE_APP_API_URL,
    });
  }

  async find(query: string): Promise<Show[]> {
    const filter = query.trim();

    const shows: Show[] = [];

    if (filter) {
      const response = await this._http.get(
        import.meta.env.VITE_APP_SEARCH_ENDPOINT,
        {
          params: {
            q: filter,
          },
        }
      );

      const { data } = response;
      data.forEach((obj: any) => {
        const newShow = Show.getInstance(obj.show);
        shows.push(newShow);
      });
    }

    return shows;
  }
}
