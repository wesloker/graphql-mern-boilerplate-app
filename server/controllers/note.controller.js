const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
  GraphQLNonNull
} = require('graphql')

const schema = require('../graphql/index')

module.exports = class NoteController {
  // Aquí irán las consultas. Si el archivo se vuelve más grande es recomendable separar el código en módulos
  getNote(req, res) {
    const func = cb => {
      const query = `
        query {
          note(id: 2) {
            name
            id
          }
        }
      `
      graphql(schema, query)
        .then(response => {
          console.log(response)
          return response
        })
        .then(res => cb(res))
    }
    func(data => {
      res.json(data)
    })
  }

  getNotes() {

  }

  updateNote() {

  }
}