"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
const HelloResolver_1 = require("./resolvers/HelloResolver");
const type_graphql_1 = require("type-graphql");
const LoginResolver_1 = require("./resolvers/LoginResolver");
const main = async () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({ credentials: true }));
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [HelloResolver_1.HelloResolver, LoginResolver_1.LoginResolver],
        validate: false,
    });
    const apollo = new apollo_server_express_1.ApolloServer({
        schema,
    });
    await apollo.start();
    apollo.applyMiddleware({ app });
    app.listen({ port: 5050 }, () => {
        console.log("GRAPHQL SERVER IS ACTIVE ON http:localhost:5050" + apollo.graphqlPath);
    });
};
main().catch((e) => console.log(e.message));
//# sourceMappingURL=index.js.map