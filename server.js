import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { readFileSync } from "fs"
import { resolvers } from "./resolvers.js"

const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" })

function startServer(port) {
	const server = new ApolloServer({ typeDefs, resolvers })

	startStandaloneServer(server, {
		listen: { port },
	}).then(({ url }) => {
		console.log(`Server GraphQL corriendo en: ${url}`)
	})
}

export default startServer
