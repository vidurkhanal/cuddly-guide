import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class LoginReturn {
  @Field()
  accessToken?: string;

  @Field()
  refreshToken?: string;
}
