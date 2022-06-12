const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require("graphql")
const UserType = require("./TypeDefs/UserType")

const userData = require("../mock-data")

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: { id: { type: GraphQLInt } },
            resolve(parentValue, args) {
                return userData
            }
        },
        getUserById: {
            type: UserType,
            args: { id: { type: GraphQLInt } },
            resolve(parentValue, args) {
                return userData.find(user => user.id === args.id)
            }
        }
    }
})
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
                email: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                userData.push({ id: userData.length + 1, name: args.name, age: args.age, email: args.email })
                return args
            }
        },
        updateUser: {
            type: UserType,
            args: {
                id: { type: GraphQLInt },
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
                email: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                const user = userData.find(user => user.id === args.id)
                user.name = args.name
            }
        },
        deleteUser: {
            type: UserType,
            args: { id: { type: GraphQLInt } },
            resolve(parentValue, args) {
                const user = userData.find(user => user.id === args.id)
                userData.splice(userData.indexOf(user), 1)
            }
        }
    }
})

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })