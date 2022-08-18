package models

import (
	"hmanAuth/repos"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID       uint64 `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
}

func AutoMigrate() {
	repos.PostClient.AutoMigrate(&User{})
}

func FindUserByUsername(username string) (User, error) {
	var result User
	err := repos.PostClient.Model(User{Username: username}).First(&result).Error
	return result, err
}

func CreateUser(username string) (User, error) {
	var result User
	err := repos.PostClient.Model(User{Username: username}).First(&result).Error
	return result, err
}

func ModifyUser(username string) (User, error) {
	var result User
	err := repos.PostClient.Model(User{Username: username}).First(&result).Error
	return result, err
}

func DeleteUser(username string) (User, error) {
	var result User
	err := repos.PostClient.Model(User{Username: username}).First(&result).Error
	return result, err
}
