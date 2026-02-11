package services

import (
	"context"
	"errors"
	"jira_test/models"
	"jira_test/repositories"
)

type UserService struct {
	repo *repositories.UserRepository
}

func NewUserService(repo *repositories.UserRepository) *UserService {
	return &UserService{
		repo: repo,
	}
}

// CreateUser creates a new user
func (s *UserService) CreateUser(ctx context.Context, req *models.CreateUserRequest) (*models.User, error) {
	user := &models.User{
		Name:  req.Name,
		Email: req.Email,
		Age:   req.Age,
	}

	err := s.repo.Create(ctx, user)
	if err != nil {
		return nil, err
	}

	return user, nil
}

// GetUserByID retrieves a user by ID
func (s *UserService) GetUserByID(ctx context.Context, id string) (*models.User, error) {
	return s.repo.GetByID(ctx, id)
}

// GetAllUsers retrieves all users
func (s *UserService) GetAllUsers(ctx context.Context) ([]models.User, error) {
	return s.repo.GetAll(ctx)
}

// UpdateUser updates an existing user
func (s *UserService) UpdateUser(ctx context.Context, id string, req *models.UpdateUserRequest) error {
	if req.Name == nil && req.Email == nil && req.Age == nil {
		return errors.New("at least one field must be provided for update")
	}

	return s.repo.Update(ctx, id, req)
}

// DeleteUser deletes a user by ID
func (s *UserService) DeleteUser(ctx context.Context, id string) error {
	return s.repo.Delete(ctx, id)
}

