package repos

import (
	"os"

	"github.com/go-redis/redis/v7"
)

var Client *redis.Client

func init() {
	dsn := os.Getenv("REDIS_DSN")
	if len(dsn) == 0 {
		dsn = "localhost:6379"
	}

	Client = redis.NewClient(&redis.Options{
		Addr:     dsn,
		DB:       0,
		Username: os.Getenv("REDIS_USERNAME"),
		Password: os.Getenv("REDIS_PASSWORD"),
	})
	_, err := Client.Ping().Result()
	if err != nil {
		panic(err)
	}
}
