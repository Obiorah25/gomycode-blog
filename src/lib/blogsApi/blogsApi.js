import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3001";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    //get all blogs api function
    getAllBlogs: builder.mutation({
      query: (page) => ({
        url: `/blogspage=$(page)&limit=5`,
        method: "GET",
      }),
    }),  

    // get single blog by id api function
    getBlogById: builder.mutation({
      query: (blogId) => ({
        url: `/blogs/${blogId}`,
        method: "GET",
      }),
    }),
    // get new blog id api function
    createNewBlog: builder.mutation({
      query: (blogData) => ({
        url: "/blogs",
        method: "POST",
        body: JSON.stringify(blogData),
        credentials: true,
      }),
    }),
  }),
});

export const {
  useGetAllBlogsMutation,
  useGetBlogByIdMutation,
  useCreateNewBlogMutation,
} = blogApi;
