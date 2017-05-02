# React hCard Generator

> Simple hCard generator using ReactJS


[hCard](http://microformats.org/wiki/hCard) is a simple, open format for publishing people, companies and organizations on the web.

This is the current [Browser compatibily list](http://browserl.ist/?q=last+2+versions%2C+Safari+8%2C+ios+7%2C+ie+10).


## Frameworks, Libraries and Tools

- ReactJS;
- React DOM;
- Webpack as module bundler;
- Mocha as test framework;
- Sinon as Standalone test spies, stubs and mocks;
- Chai as BDD/TDD assertion library;
- ESLint as lint tool;
- Guetzli as image optimization tool;
- Enzyme as JavaScript Testing utilities for React;
- React CSS Modules as CSS modules integration for React apps;
- Offline support using node package `offline-plugin`;
- Optional: Docker and Docker compose for application provisioning;


## How to install

### Via Dockerfile


Please make sure that you have Docker and Docker compose installed in your machine. If you are using Windows or OSX, you can download the [Docker toolbox](https://www.docker.com/products/docker-toolbox), install and your docker setup is finished.

After that, just run the command

```bash
$ docker-compose build
$ docker-compose up
```

And access locally via `http://0.0.0.0:3000`

PS:

- If you change any part of the code, please stop the container and run the commands again. If you don't do that you can run a current image without your changes; 


### Manual installation

Make sure that you are using the NodeJS version is the same as `.nvmrc` file version. If you don't have this version please use a version manager such as `nvm` or `n` to manage your local nodejs versions.

> Please make sure that you are using NodeJS version 6.10.2

Assuming that you are using `nvm`, please run the commands inside this folder:

```bash
$ nvm install $(cat .nvmrc); # install required nodejs version
$ nvm use $(cat .nvmrc); # use nodejs version
$ npm install # or `yarn install`
```

In Windows, please install NodeJS using one of these options:

Via `NVM Windows` package: Dowload via [this link](https://github.com/coreybutler/nvm-windows). After that, run the commands:

```bash
$ nvm install $(cat .nvmrc); # install required nodejs version
$ nvm use $(cat .nvmrc); # use nodejs version
$ npm install # or `yarn install`
```

Via Chocolatey:

```bash
$ choco install nodejs.install -version 6.9.4
```


## Run the app

```bash
$ npm start
```


## Run the tests

```bash
$ npm test # run the tests
```


## hCard validation

When you add all the informations inside the form, please click on `Create hCard` button and copy the content of the downloaded file or take a look in your console via browser Devtools, copy the printed content and paste inside the [hCard microformat validator](http://hcard.geekhood.net/).


## Author

**Wilson Mendes (willmendesneto)**
+ <https://plus.google.com/+WilsonMendes>
+ <https://twitter.com/willmendesneto>
+ <http://github.com/willmendesneto>

