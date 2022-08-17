import {
  Arg,
  Field,
  InputType,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { loadPackageDefinition, credentials } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType } from "src/gen/login";
import path from "path";

@InputType()
class UserInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@ObjectType()
class LoginReturn {
  @Field()
  accessToken?: string;
  @Field()
  refreshToken?: string;
}

const PROTO_PATH = path.join(__dirname, "../../protos/login.proto");
const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

let grpcObj = loadSync(PROTO_PATH, options);
const { hmanAuth } = loadPackageDefinition(grpcObj) as unknown as ProtoGrpcType;
const auth_client = new hmanAuth.Auth(
  "hman-auth",
  credentials.createInsecure()
);

@Resolver()
export class LoginResolver {
  @Query(() => LoginReturn)
  async Login(
    @Arg("ui") userInput: UserInput
  ): Promise<LoginReturn | undefined> {
    const LoginPromise = () => {
      return new Promise((resolve, reject) => {
        auth_client.Login(
          { username: userInput.username, password: userInput.password },
          (err, res) => {
            if (err) {
              reject(err);
            }
            resolve(res);
          }
        );
      });
    };

    return LoginPromise() as LoginReturn;
  }
}
