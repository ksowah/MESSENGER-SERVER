const { gql } = require('apollo-server-express');

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

type Message {
    id: ID!
    sender: ID!
    body: String!
    createdAt: String!
    chatId: ID!
  }

type Chat {
    id: ID!
    createdAt: String!
    users: [ID!]!
  }

input MessageInput {
    body: String!
    chatId: ID!
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

input CreateChatInput {
    chatMembers: [ID!]!
  }

type Query {
    getUsers: [ClientUser]
    getMe: ClientUser
    getChats: [Chat!]!
}

type Mutation {
    register(registerInput: RegisterInput): User!
    login(loginInput: LoginInput): User!
    updateUser(ID: ID!, field: String!, value: String!): ClientUser!
    newMessage(messageInput: MessageInput): Message!
    createChat(createChatInput: CreateChatInput!): Chat!
}

type Subscription {
    newMessage(chatId: ID!): Message!
}

`
