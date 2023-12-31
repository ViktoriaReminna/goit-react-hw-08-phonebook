import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com/",
    
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `contacts`,
      providesTags: ["Contacts"],
    }),
    deleteContacts: builder.mutation({
      query: (contactId) => ({
        url: `contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
    addContact: builder.mutation({
      query: (newContact) => ({
        url: `contacts`,
        method: "POST",
        body: newContact,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  useAddContactMutation,
} = contactsApi;