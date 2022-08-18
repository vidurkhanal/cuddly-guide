import { credentials, loadPackageDefinition } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import path from "path";
import { ProtoGrpcType } from "src/gen/login";

const PROTO_PATH = path.join(__dirname, "../../protos/authService.proto");

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

let grpcObj = loadSync(PROTO_PATH, options);

const { hmanAuth } = loadPackageDefinition(grpcObj) as unknown as ProtoGrpcType;

export const AuthClient = new hmanAuth.Auth(
  "localhost:50052",
  credentials.createInsecure(),
);
