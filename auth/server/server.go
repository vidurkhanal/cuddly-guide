package server

import (
	"context"
	"hmanAuth/functions"
	gen "hmanAuth/gen/protos"
	"log"

	"google.golang.org/grpc"
)

type AuthServer struct {
	gen.UnimplementedAuthServer
}

func (s *AuthServer) Login(ctx context.Context, in *gen.LoginInput) (*gen.Tokens, error) {

	log.Printf("Login from : Username :%s, Password :%s", in.Username, in.Password)

	return functions.Login(in)
}

func NewGRPCServer() *grpc.Server {
	gsrv := grpc.NewServer()
	gen.RegisterAuthServer(gsrv, new(AuthServer))
	return gsrv
}
