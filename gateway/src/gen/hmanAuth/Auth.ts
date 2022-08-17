// Original file: protos/login.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { LoginInput as _hmanAuth_LoginInput, LoginInput__Output as _hmanAuth_LoginInput__Output } from '../hmanAuth/LoginInput';
import type { Tokens as _hmanAuth_Tokens, Tokens__Output as _hmanAuth_Tokens__Output } from '../hmanAuth/Tokens';

export interface AuthClient extends grpc.Client {
  Login(argument: _hmanAuth_LoginInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_hmanAuth_Tokens__Output>): grpc.ClientUnaryCall;
  Login(argument: _hmanAuth_LoginInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_hmanAuth_Tokens__Output>): grpc.ClientUnaryCall;
  Login(argument: _hmanAuth_LoginInput, options: grpc.CallOptions, callback: grpc.requestCallback<_hmanAuth_Tokens__Output>): grpc.ClientUnaryCall;
  Login(argument: _hmanAuth_LoginInput, callback: grpc.requestCallback<_hmanAuth_Tokens__Output>): grpc.ClientUnaryCall;
  login(argument: _hmanAuth_LoginInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_hmanAuth_Tokens__Output>): grpc.ClientUnaryCall;
  login(argument: _hmanAuth_LoginInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_hmanAuth_Tokens__Output>): grpc.ClientUnaryCall;
  login(argument: _hmanAuth_LoginInput, options: grpc.CallOptions, callback: grpc.requestCallback<_hmanAuth_Tokens__Output>): grpc.ClientUnaryCall;
  login(argument: _hmanAuth_LoginInput, callback: grpc.requestCallback<_hmanAuth_Tokens__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_hmanAuth_LoginInput__Output, _hmanAuth_Tokens>;
  
}

export interface AuthDefinition extends grpc.ServiceDefinition {
  Login: MethodDefinition<_hmanAuth_LoginInput, _hmanAuth_Tokens, _hmanAuth_LoginInput__Output, _hmanAuth_Tokens__Output>
}
