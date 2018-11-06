# Tech Proof-of-Concept - Puppeteer & Mocha

> The goal of this POC is to be able to test .js on a webpage using Mocha and Puppeteer.

## Instructions to Reproduce the POC 

> Prerequisites: [docker](https://store.docker.com/editions/community/docker-ce-desktop-mac)

**1. Build the docker image and container:**
  `. build.sh`

**2. Start the container and attach to it:**
  `docker start puppeteer-mocha-poc && docker attach puppeteer-mocha-poc`
 
**3. Install dependencies**
  `npm install` or just `npm i`

**4. Start the server**
  `npm run forever`

**3. Run the test script:**
  `npm run test` or just `npm test`

## Acceptance Criteria

- [x] Project includes an empty `custom element` in the `src` directory. It needs some dummy logic to make it testable.
- [x] Project has an `index.html` file in the `test` directory that references the custom element.
- [ ] Project needs a mocha test spec to run 2-3 tests on the element.
- [x] All 3rd party deps need to be managed via `npm`. No copy/pasted libs in `src` or `test`
- [x] All setup and teardown of the tests should be able to run via `npm run test`
- [ ] Document all steps to setup and reproduce the POC
- [x] Use the Dockerfile (see instructions below)

---

## References
**Custom Elements**
* https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements

**Mocha & Puppeteer**
* https://mochajs.org/
* https://medium.com/@ankit_m/ui-testing-with-puppeteer-and-mocha-part-1-getting-started-b141b2f9e21
* https://medium.com/@dpark/ui-testing-with-puppeteer-and-mocha-8a5c6feb3407
* https://www.npmjs.com/package/mocha-puppeteer

---

## Getting started with Docker
The Dockerfile includes node and Puppeteer.

**1. Build the Docker image**

```sh
docker build --no-cache -t web-image .
```

**2. Build a container for the POC**

```sh
CONTAINER=puppeteer-mocha-poc; PORT=3030; docker run -it -d --name=$CONTAINER -p $PORT:3000 -v $(pwd):/www/ web-image
```

**3. Start the container and attach to it**
```
docker start puppeteer-mocha-poc && docker attach puppeteer-mocha-poc
```

Now your terminal is attached to the container and you can do your work.

**Helpful Docker Commands **

Start a container
`docker start {container-name} eg.`

Attach to a container
`Similar to ssh-ing into a server. docker attach {container-name}`

Exiting a container
`exit`

Stop the container
`docker stop {container-name}`

List running containers
`docker ps`

List all containers
`docker ps -a`

Delete a container
`docker rm -r {container-name}`

List all images
`docker images`
