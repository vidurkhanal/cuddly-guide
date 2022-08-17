import path from "path";
import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  async hello(@Arg("name") name: string): Promise<string> {
    console.log(path.join(__dirname, "../../protos/login.proto"));
    return "Hello " + name;
  }
}
