const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    descritpion: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

 

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: String!): User
    removeBook(bookId: ID!): User
  }
`

module.exports = typeDefs;

// type InputBook {
//   bookId: String
//   authors: [String]
//   descritpion: String
//   title: String
//   image: String
//   link: String
// }