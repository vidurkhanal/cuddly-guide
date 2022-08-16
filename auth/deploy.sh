#!/bin/bash

docker build -t vidurkhanal/hman-auth:latest .
docker push vidurkhanal/hman-auth:latest
kubectl delete -f manifests/
kubectl apply -f manifests/