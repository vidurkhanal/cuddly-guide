package main

import (
	"hmanAuth/functions"
	gen "hmanAuth/gen/protos"
	"log"

	"github.com/gin-gonic/gin"
	"google.golang.org/grpc"

	_ "github.com/joho/godotenv/autoload"
)

var (
	router = gin.Default()
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

func main() {
	router.POST("/login", functions.Login)
	if err := router.Run(":5050"); err != nil {
		log.Fatalf("FAILED TO START THE SERVER")
	}
	srv := NewGRPCServer()
	if err := srv.Serve(); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

}
