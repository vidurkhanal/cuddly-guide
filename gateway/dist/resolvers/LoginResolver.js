"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResolver = void 0;
const type_graphql_1 = require("type-graphql");
const grpc_js_1 = require("@grpc/grpc-js");
const proto_loader_1 = require("@grpc/proto-loader");
const path_1 = __importDefault(require("path"));
let UserInput = class UserInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "password", void 0);
UserInput = __decorate([
    (0, type_graphql_1.InputType)()
], UserInput);
let LoginReturn = class LoginReturn {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], LoginReturn.prototype, "accessToken", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], LoginReturn.prototype, "refreshToken", void 0);
LoginReturn = __decorate([
    (0, type_graphql_1.ObjectType)()
], LoginReturn);
const PROTO_PATH = path_1.default.join(__dirname, "../../protos/login.proto");
const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};
let grpcObj = (0, proto_loader_1.loadSync)(PROTO_PATH, options);
const { hmanAuth } = (0, grpc_js_1.loadPackageDefinition)(grpcObj);
const auth_client = new hmanAuth.Auth("hman-auth", grpc_js_1.credentials.createInsecure());
let LoginResolver = class LoginResolver {
    async Login(userInput) {
        const LoginPromise = () => {
            return new Promise((resolve, reject) => {
                auth_client.Login({ username: userInput.username, password: userInput.password }, (err, res) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(res);
                });
            });
        };
        return LoginPromise();
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => LoginReturn),
    __param(0, (0, type_graphql_1.Arg)("ui")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput]),
    __metadata("design:returntype", Promise)
], LoginResolver.prototype, "Login", null);
LoginResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], LoginResolver);
exports.LoginResolver = LoginResolver;
//# sourceMappingURL=LoginResolver.js.map