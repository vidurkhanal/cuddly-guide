# syntax=docker/dockerfile:1

FROM golang:1.16-alpine

WORKDIR /app

COPY . ./

RUN go mod download

RUN go build -o .

RUN chmod +x ./hmanAuth

EXPOSE 50052

CMD [ "./hmanAuth" ]