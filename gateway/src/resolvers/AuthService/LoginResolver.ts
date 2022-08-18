import { Arg, Query, Resolver } from "type-graphql";
import { AuthClient } from "../../protoCilents";
import { UserInput } from "./input-types/LoginInput";
import { LoginReturn } from "./output-types/LoginOutput";

@Resolver()
export class LoginResolver {
  @Query(() => LoginReturn)
  async Login(
    @Arg("ui") userInput: UserInput,
  ): Promise<LoginReturn | undefined> {
    const LoginPromise = () => {
      return new Promise((resolve, reject) => {
        AuthClient.Login(
          { username: userInput.username, password: userInput.password },
          (err, res) => {
            if (err) {
              reject(err);
            }
            resolve(res);
          },
        );
      });
    };

    return LoginPromise() as LoginReturn;
  }
}
