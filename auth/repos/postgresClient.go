package repos

import (
	"fmt"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var PostClient *gorm.DB

func init() {
	dsn := os.Getenv("POSTGRES_URI")

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Println("db err: (Init) ", err)
	}

	PostClient = db
}
