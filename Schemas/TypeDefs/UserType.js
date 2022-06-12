const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql")

module.exports = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        email: { type: GraphQLString }
    })
})