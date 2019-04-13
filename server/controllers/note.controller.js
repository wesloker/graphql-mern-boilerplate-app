const executeQuery = require('../models/execute-query');

module.exports = class NoteController {
  constructor() {
    this.callback = function json(res) {
      return res.json();
    };
  }

  static getNote(req, res) {
    const {
      query,
      variables,
    } = req.body;
    executeQuery(query, this.callback(res), variables);
  }

  static getNotes(req, res) {
    const {
      query,
      variables,
    } = req.body;
    executeQuery(query, this.callback(res), variables);
  }

  static createNote(req, res) {
    const {
      query,
      variables,
    } = req.body;
    executeQuery(query, this.callback(res), variables);
  }

  static updateNote(req, res) {
    const {
      query,
      variables,
    } = req.body;
    executeQuery(query, this.callback(res), variables);
  }
};
