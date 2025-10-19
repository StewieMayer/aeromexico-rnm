import { ResultData } from "@/types/characterTypes";
import { baseApi } from "./baseApi";

export const charactersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCharacters: build.query<ResultData, void>({
      query: () => ({
        url: "characters",
        method: "GET",
      }),
    }),
  }),
});

export const { useLazyGetCharactersQuery } = charactersApi;