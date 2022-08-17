import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthClient as _hmanAuth_AuthClient, AuthDefinition as _hmanAuth_AuthDefinition } from './hmanAuth/Auth';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  hmanAuth: {
    Auth: SubtypeConstructor<typeof grpc.Client, _hmanAuth_AuthClient> & { service: _hmanAuth_AuthDefinition }
    LoginInput: MessageTypeDefinition
    Tokens: MessageTypeDefinition
  }
}

