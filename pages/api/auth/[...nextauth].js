import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from 'bcrypt'

import { graphcmsClient } from '../../lib/graphcms'
import { gql } from "graphql-request";
const token = process.env.NEXTAUTH_SECRET
const GetNextAuthUserByEmail = gql`
    query GetNextAuthUserByEmail($email : String!){
        author : nextAuthor(where : {email :$email}, stage : PUBLISHED){
            id ,
            name,
            password
        }
    }
`
const CreateNextAuthUserByEmail = gql`
    mutation CreateNextAuthUserByEmail($name : String! , $email : String!, $password : String!){
        newAuthor : createNextAuthByEmail(data : {name : $name ,email : $email, password: $password}){
            id, 
            name 
        }
    }
`
export default NextAuth({
    secret : token,
    jwt: {
        secret : token
    },
    session:{
        strategy : 'jwt'
    },
    debug: process.env.NODE_ENV === 'development',
    providers : [
        CredentialsProvider({
            name : '',
            credentials : {
                username : {
                    label : 'Username',
                    type : 'username',
                    placeholder : 'Username'
                },
                email : {
                    label :'Email',
                    type : 'email',
                    placeholder : 'email'
                },
                password : {
                    label : 'Password',
                    type : 'password',
                    placeholder : 'password'
                }
            },
            authorize : async({name ,email, password})=>{
                const {author} = await graphcmsClient.request(GetNextAuthUserByEmail, {
                    email,
                }) 
                console.log(author);
                if (!author) {
                    const {newAuthor} = await graphcmsClient.request(CreateNextAuthUserByEmail,
                        {
                        name,
                        email, 
                        password: await hash(password,12)  
                    } )
                    return {
                        id : newAuthor.id,
                        username : newAuthor.name,
                        email
                    }
                }
                const isValid = compare(password,author.password)
                if (!isValid) {
                    
                    throw new Error("Wrong credentials, try again!")
                }
                return {
                    id : author.id,
                    username : author.name,
                    email,
                }
            }
        })
    ],
    callbacks : {
        async session({session, token}){
            session.userId = token.sub;
            return new Promise.resolve(session)
        }
    }
})