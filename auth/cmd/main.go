package cmd

import (
	"hmanAuth/models"
	"hmanAuth/server"
	"log"
	"net"
)

func Init() {
	port := ":50052"
	lis, err := net.Listen("tcp", port)

	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	srv := server.NewGRPCServer()

	models.AutoMigrate()

	log.Println("starting auth service on", port)

	if err := srv.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
