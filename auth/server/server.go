package server

import (
	"context"
	"hmanAuth/functions"
	gen "hmanAuth/gen/protos"

	"google.golang.org/grpc"
)

type AuthServer struct {
	gen.UnimplementedAuthServer
}

func (s *AuthServer) Login(ctx context.Context, in *gen.LoginInput) (*gen.Tokens, error) {
	return functions.Login(in)
}

func NewGRPCServer() *grpc.Server {
	gsrv := grpc.NewServer()
	gen.RegisterAuthServer(gsrv, new(AuthServer))
	return gsrv
}
