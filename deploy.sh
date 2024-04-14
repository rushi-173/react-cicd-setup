#!/bin/bash

# Stop and remove existing containers
docker stop frontend_container || true && docker rm frontend_container || true
docker stop backend_container || true && docker rm backend_container || true

# Pull the latest images from ECR
docker pull $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/frontend:latest
docker pull $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/backend:latest

# Run frontend container
docker run -d --name frontend_container -p 8080:80 $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/frontend:latest

# Run backend container
docker run -d --name backend_container -p 3000:3000 $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/backend:latest
