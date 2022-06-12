const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const app = express()
const port = 3000

app.get("/", (req, res) => res.redirect("/graphql"))

const schema = require("./Schemas")
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))