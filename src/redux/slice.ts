
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = () => localStorage.getItem('token');

export const apiSlice = createApi({
    reducerPath: 'transaction',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://integrations.getravenbank.com',
        prepareHeaders: (headers) => {
            const getToken = token();
            if (getToken) {
                headers.set('authorization', `Bearer ${getToken}`);
            }
            headers.set('accept', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTransactions: builder.query({
            query: () => '/v1/accounts/transactions',
        }),

        // getPayments: builder.query({
        //     query: () => '/v1/accounts/payment',
        // })
    }),


});

export const { useGetTransactionsQuery } = apiSlice;


