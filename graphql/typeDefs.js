const { gql } = require('apollo-server');

module.exports = gql`
type User {
    id: ID!
    username: String!
    email: String!
    token: String!
    avatar: String!
    password: String!
}

type ClientUser {
    id: ID!
    username: String!
    email: String!
    avatar: String!
}

input RegisterInput {
    username: String!
    email: String!
    password: String!
    avatar: String
}

input LoginInput {
    username: String!
    password: String!
}

type Query {
    getUsers: [ClientUser]
    getUser(ID: ID!): ClientUser
}

type Mutation {
    register(registerInput: RegisterInput): User!
    login(loginInput: LoginInput): User!
    updateUser(ID: ID!, field: String!, value: String!): ClientUser!
}

`
