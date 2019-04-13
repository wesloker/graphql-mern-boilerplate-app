// GraphQL
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType,
} = require('graphql');
// Import Resolvers
const resolvers = require('../resolvers/index');
// GraphQLObjectTypes
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastname: {
      type: new GraphQLNonNull(GraphQLString),
    },
    nickname: {
      type: new GraphQLNonNull(GraphQLString),
    },
    birthdate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: GraphQLString,
    },
    createdNotes: {
      type: new GraphQLList(NoteType),
      description: 'Get createdNotes field from database',
      resolve(parent, args, context) {
        return resolvers.createdNotes(parent, args, context);
      },
    },
  }),
});

const NoteType = new GraphQLObjectType({
  name: 'Note',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    date: {
      type: new GraphQLNonNull(GraphQLString),
    },
    creator: {
      type: new GraphQLNonNull(UserType),
      description: 'Get creator field from database',
      resolve(parent, args, context) {
        return resolvers.creator(parent, args, context);
      },
    },
  }),
});
// GraphQLInputObjectTypes
const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastname: {
      type: new GraphQLNonNull(GraphQLString),
    },
    nickname: {
      type: new GraphQLNonNull(GraphQLString),
    },
    birthdate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});
const NoteInputType = new GraphQLInputObjectType({
  name: 'NoteInput',
  fields: () => ({
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    creator: {
      type: new GraphQLNonNull(GraphQLID),
    },
  }),
});
// GraphQLRootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    note: {
      type: NoteType,
      description: 'Find one note on database',
      args: {
        id: {
          type: GraphQLID,
        },
        title: {
          type: GraphQLString,
        },
      },
      resolve(parent, args, context) {
        return resolvers.note(parent, args, context);
      },
    },
    user: {
      type: UserType,
      description: 'Find one user on database',
      args: {
        id: {
          type: GraphQLID,
        },
        name: {
          type: GraphQLString,
        },
        lastname: {
          type: GraphQLString,
        },
        nickname: {
          type: GraphQLString,
        },
        birthdate: {
          type: GraphQLString,
        },
        age: {
          type: GraphQLInt,
        },
        email: {
          type: GraphQLString,
        },
      },
      resolve(parent, args, context) {
        return resolvers.user(parent, args, context);
      },
    },
    notes: {
      type: new GraphQLList(NoteType),
      description: 'Get all notes from database',
      resolve(parent, args, context) {
        return resolvers.notes(parent, args, context);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      description: 'Get all users from database',
      async resolve(parent, args, context) {
        return resolvers.users(parent, args, context);
      },
    },
  }),
});

// GraphQLMutations
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createUser: {
      type: UserType,
      description: 'Create and save new user on database',
      args: {
        input: {
          type: new GraphQLNonNull(UserInputType),
        },
      },
      resolve(parent, args, context) {
        return resolvers.createUser(parent, args, context);
      },
    },
    createNote: {
      type: NoteType,
      description: 'Create and save new note on database',
      args: {
        input: {
          type: new GraphQLNonNull(NoteInputType),
        },
      },
      resolve(parent, args, context) {
        return resolvers.createNote(parent, args, context);
      },
    },
    updateUser: {
      type: UserType,
      description: 'Update user data on database',
      args: {
        id: {
          type: GraphQLID,
        },
        name: {
          type: GraphQLString,
        },
        lastname: {
          type: GraphQLString,
        },
        nickname: {
          type: GraphQLString,
        },
        email: {
          type: GraphQLString,
        },
        password: {
          type: GraphQLString,
        },
        newPassword: {
          type: GraphQLString,
        },
      },
      resolve(parent, args, context) {
        return resolvers.updateUser(parent, args, context);
      },
    },
    updateNote: {
      type: NoteType,
      description: 'Update note data on database',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
        title: {
          type: GraphQLString,
        },
        description: {
          type: GraphQLString,
        },
      },
      resolve(parent, args, context) {
        return resolvers.updateNote(parent, args, context);
      },
    },
  }),
});
// Export GraphQL Queries And Mutations
module.exports = {
  RootQuery,
  Mutation,
};
