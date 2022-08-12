# syntax=docker/dockerfile:1

FROM golang:1.16-alpine

WORKDIR /app

COPY go.mod ./
COPY go.sum ./



COPY */**/*.go ./
COPY */**/*.proto ./
RUN go mod download

RUN go build -o /hmanAuth

RUN chmod +X ./app/hmanAuth


EXPOSE 50052

CMD [ "/hmanAuth" ]