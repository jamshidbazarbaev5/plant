import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const plantApi = createApi({
  reducerPath: 'plantApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api/',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ3MTU5NTM5LCJpYXQiOjE3NDcxNTU5MzksImp0aSI6IjM4NTQ1MjFiM2NiMjQwNWFiMDE5NmNiN2YyMTgwMGRjIiwidXNlcl9pZCI6Mn0.JnRvAWGXjnF9tBymw8baIblHjJcuca-spLU7rMfyUJU`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    classifyPlant: builder.mutation({
      query: (imageFile) => {
        const formData = new FormData();
        formData.append('image', imageFile);

        return {
          url: 'plants/predict/',
          method: 'POST',
          body: formData,
        };
      },
    }),
  }),
});

export const { useClassifyPlantMutation } = plantApi;
