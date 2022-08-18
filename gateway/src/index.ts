import "reflect-metadata";
import Express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import { HelloResolver } from "./resolvers/HelloResolver";
import { buildSchema } from "type-graphql";
import { LoginResolver } from "./resolvers/AuthService";

const main = async () => {
  const app = Express();

  app.use(cors({ credentials: true }));

  const schema = await buildSchema({
    resolvers: [HelloResolver, LoginResolver],
    validate: false,
  });

  const apollo = new ApolloServer({
    schema,
  });
  await apollo.start();
  apollo.applyMiddleware({ app });

  app.listen({ port: 5050 }, () => {
    console.log(
      "GRAPHQL SERVER IS ACTIVE ON http:localhost:5050" + apollo.graphqlPath,
    );
  });
};

main().catch((e) => console.log(e.message));
