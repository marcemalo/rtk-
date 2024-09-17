import { api } from "./index";

const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: "/admin/users"
      }),
    })
  }),
});

export const { useGetUsersQuery } = usersApi;