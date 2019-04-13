const executeQuery = require('../models/execute-query');

module.exports = class UserController {
  constructor() {
    this.callback = function json(res) {
      return res.json();
    };
  }

  static getUser(req, res) {
    const {
      query,
      variables,
    } = req.body;
    executeQuery(query, this.callback(res), variables);
  }

  static getUsers(req, res) {
    const {
      query,
      variables,
    } = req.body;
    executeQuery(query, this.callback(res), variables);
  }

  static createUser(req, res) {
    const {
      query,
      variables,
    } = req.body;
    executeQuery(query, this.callback(res), variables);
  }

  static updateUser(req, res) {
    const {
      query,
      variables,
    } = req.body;
    executeQuery(query, this.callback(res), variables);
  }
};
