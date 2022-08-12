package server

import (
	gen "hmanAuth/gen/protos"

	"google.golang.org/grpc"
)

type grpcServer struct {
	gen.UnimplementedAuthServer
}

func NewGRPCServer() *grpc.Server {
	gsrv := grpc.NewServer()
	srv := grpcServer{}
	gen.RegisterAuthServer(gsrv, &srv)
	return gsrv
}
