FROM ubuntu:16.04

RUN apt-get update && apt-get install -y \
    python3 \
    curl

RUN rm -rf /var/lib/apt/lists/*

RUN mkdir /home/chalk
COPY frontend/* /home/chalk/
EXPOSE 8080
WORKDIR /home/chalk/
CMD ["python3", "-m", "http.server", "8080"]
