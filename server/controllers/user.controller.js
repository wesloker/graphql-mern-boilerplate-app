// To Execute GraphQL Queries
const executeQuery = require('../models/execute-query');
// Creating And Exporting User Controller
module.exports = class UserController {
  constructor() {
    this.callback = function json(res) {
      return res.json();
    };
  }

  static getUser(req, res) {
    const { query, variables } = req.body;
    executeQuery(
      query,
      this.callback(res),
      variables,
    );
  }

  static getUsers(req, res) {
    const { query, variables } = req.body;
    executeQuery(
      query,
      this.callback(res),
      variables,
    );
  }

  static createUser(req, res) {
    const { query, variables } = req.body;
    executeQuery(
      query,
      this.callback(res),
      variables,
    );
  }

  static updateUser(req, res) {
    const { query, variables } = req.body;
    executeQuery(
      query,
      this.callback(res),
      variables,
    );
  }
};

/* const axios = require('axios')

setTimeout(() => {
  axios({
    method: 'post',
    url: 'http://localhost:4000/api/new-user',
    data: {
      query: `mutation CreateUser($email: String!, $password: String!){
        createUser(input: {
          email: $email,
          password: $password
        }) {
          email
          password
          }
        }`,
      variables: {
        email: "estefano@gmail.com",
        password: "micontraseña"
      }
    }
  }).then(res => console.log(res.data))
}, 2000) */
