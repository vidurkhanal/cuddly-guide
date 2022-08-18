"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthClient = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const proto_loader_1 = require("@grpc/proto-loader");
const path_1 = __importDefault(require("path"));
const PROTO_PATH = path_1.default.join(__dirname, "../../protos/authService.proto");
const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};
let grpcObj = (0, proto_loader_1.loadSync)(PROTO_PATH, options);
const { hmanAuth } = (0, grpc_js_1.loadPackageDefinition)(grpcObj);
exports.AuthClient = new hmanAuth.Auth("localhost:50052", grpc_js_1.credentials.createInsecure());
//# sourceMappingURL=authClient.js.map