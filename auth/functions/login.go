package functions

import (
	"errors"
	gen "hmanAuth/gen/protos"
	"hmanAuth/models"
	"hmanAuth/utils"
)

var user = models.User{
	ID:       122,
	Username: "vidurkhanal",
	Password: "vidur",
}

func Login(in *gen.LoginInput) (*gen.Tokens, error) {

	//compare the user from the request, with the one we defined:
	if user.Username != in.Username || user.Password != in.Password {
		// c.JSON(http.StatusUnauthorized, "Please provide valid login details")
		return nil, errors.New("please provide valid login details")
	}
	token, err := utils.CreateToken(user.ID)
	if err != nil {
		// c.JSON(http.StatusUnprocessableEntity, err.Error())
		return nil, errors.New(err.Error())
	}
	saveErr := utils.CreateAuth(user.ID, token)
	if saveErr != nil {
		// c.JSON(http.Sta sßtusUnprocessableEntity, saveErr.Error())
		return nil, errors.New(err.Error())

	}
	// tokens := map[string]string{
	// 	"access_token":  token.AccessToken,
	// 	"refresh_token": token.RefreshToken,
	// }
	return &gen.Tokens{
		AccessToken:  token.AccessToken,
		RefreshToken: token.RefreshToken,
	}, nil
}
