import { ApolloServer } from "apollo-server";

import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import typeDefs from "./SchemaGql.js";
import resolvers from "./resolver.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
