package functions

import (
	"errors"
	gen "hmanAuth/gen/protos"
	"hmanAuth/models"
	"hmanAuth/utils"
)

func Login(query *gen.LoginInput) (*gen.Tokens, error) {

	user, err := models.FindUserByUsername(query.Username)

	if err != nil {
		return nil, errors.New(err.Error())
	}

	if user.Password != query.Password {
		return nil, errors.New("please provide valid login details")
	}

	token, err := utils.CreateToken(user.ID)

	if err != nil {
		return nil, errors.New(err.Error())
	}

	saveErr := utils.CreateAuth(user.ID, token)

	if saveErr != nil {
		return nil, errors.New(err.Error())

	}
	return &gen.Tokens{
		AccessToken:  token.AccessToken,
		RefreshToken: token.RefreshToken,
	}, nil
}
