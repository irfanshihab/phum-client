import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GETs",
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery } = academicSemesterApi;
