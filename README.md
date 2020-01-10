# cv

## Requisitos
- Docker.
- Docker Compose.

## Empezando
Elija un directorio y ejecute
```
git clone https://github.com/Nacimiento98/cv.git cv

cd cv/

docker-compose up
```
Una vez finalizado en su navegador entre a http://localhost:8006/

## Vue-Cli
Si desea tener acceso a Vue Cli ejecute
```
docker exec -it cv_node_1 bash

vue ui -H 0.0.0.0 --port 8005
```
Y en su navegador entre a http://localhost:8005/