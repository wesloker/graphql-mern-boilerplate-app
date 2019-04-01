const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID
} = require('graphql')

const NoteType = new GraphQLObjectType({
  name: 'Note',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    note: {
      type: NoteType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        // Getting data from db
        return notes.filter(note => {
          return note.id == args.id
        })[0]
      }
    },
    message: {
      type: GraphQLString,
      resolve() {
        return 'Hello World!';
      }
    },
    hide: {
      type: GraphQLString,
      resolve() {
        return 'on bush'
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})