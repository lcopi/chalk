# Chalk

Mockup for pages: https://mockflow.com/app/#Wireframe

# Steps for building and running project locally
In the top directory of the project to build
the docker container for the project
```
docker build -t=chalk .
```
To spin up a simple python server that hosts the
webpages
```
docker run -p 8080:8080 -i -t chalk
```

Webpage hosted at: http://localhost:8080/

# Build for Deployment
After building the docker image (must be signed in)
```
docker tag <hash-of-build> lcopi/chalk
docker push lcopi/chalk
```
To pull image from docker (no sign-in - public repo)
```
docker pull lcopi/chalk
```

# Hosting information
The application is being hosted on a kubernetes
cluster through IBM Cloud (Bluemix)

Address for application: http://169.60.25.148:31513/
