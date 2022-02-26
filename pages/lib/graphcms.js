import { GraphQLClient } from 'graphql-request'
const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
export const graphcmsClient = new GraphQLClient(endpoint,{
    headers : {
        Authorization : `Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
});
