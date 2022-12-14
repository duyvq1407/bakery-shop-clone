import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://127.0.0.1:3001/api/',
  // credentials: 'include',
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.token;
//     if (token) {
//       headers.set('Authorization', `Bearer ${token}`);
//       headers.set('Content-Type', 'application/json');
//       headers.set('Accept', 'application/json');
//     }
//     return headers;
//   },
});

// const baseQueryWithReAuth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);
//   if (result?.error?.originalStatus === 403) {
//     console.log('re-authenticating');
//     const refreshResult = await baseQuery('auth/refresh', api, extraOptions);
//     console.log('refreshResult', refreshResult);
//     if (refreshResult?.data) {
//       const user = api.getState().auth.user;
//       api.dispatch(setCredentials({user, token: refreshResult.data.token}));
//       result = await baseQuery(args, api, extraOptions);
//     }else {
//       api.dispatch(logOut());
//     }
//     return result;
//   }
// }

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});