##Build the Docker image:
docker build -t my-express-app .

##Run the Docker container:
docker run -p my-express-app

##Run the Docker container with port mapping:
docker run -p 3000:3000 my-express-app


##Run the Docker container with environment variables:
docker run -p 3000:3000 -e DOCKER2=SINGH my-express-app
