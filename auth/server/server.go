package server

import (
	"context"
	gen "hmanAuth/gen/protos"

	"google.golang.org/grpc"
)

type AuthServer struct {
	gen.UnimplementedAuthServer
}

func (s *AuthServer) Login(ctx context.Context, in *gen.LoginInput) (*gen.Tokens, error) {
	return &gen.Tokens{
		AccessToken:  in.Username,
		RefreshToken: in.Password,
	}, nil
}

func NewGRPCServer() *grpc.Server {
	gsrv := grpc.NewServer()
	gen.RegisterAuthServer(gsrv, new(AuthServer))
	return gsrv
}
