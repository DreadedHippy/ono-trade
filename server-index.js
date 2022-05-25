const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql').graphqlHTTP;
const { buildSchema } = require('graphql');

const User = require('./src/app/backend/models/user');

const app = express();
const events = [];

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHttp({
    schema: buildSchema(`
      type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        friends: [String!]
        token: String!
        password_token: String!
      }
      input UserInput {
        username: String!
        email: String!
        password: String!
        friends: [String!]
        token: String!
        password_token: String!
      }
      type RootQuery {
        users: [User!]!
      }
      type RootMutation {
        createUser(userInput: UserInput): User
      }
      schema {
        query: RootQuery
        mutation: RootMutation
      }
    `),
    rootValue: {
      users: () => {
        return users;
      },
      createUser: args => {
        const user = {
          _id: Math.random().toString(),
          username: args.eventInput.username,
          email: args.eventInput.email,
          password: args.eventInput.password,
          friends: args.eventInput.friends,
          token: args.eventInput.token,
          password_token: args.eventInput.password_token
        };
        users.push(user);
        return user;
      }
    },
    graphiql: true
  })
);

app.listen(5000., () => console.log('Server Running!'));