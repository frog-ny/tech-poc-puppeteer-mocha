#!/bin/bash
imageName=web-image
containerName=puppeteer-mocha-poc

docker build -t $imageName -f Dockerfile  .

echo Delete old container...
docker rm -f $containerName

echo Run new container...
docker run -it -d -p 3000:3000 --name $containerName -v $(pwd):/www/ $imageName
