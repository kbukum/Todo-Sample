## TODO Example React & Es6 & Babel & Webpack

### Create TODO Project Step by Step 

#### node && npm

* download from https://nodejs.org/en/download/
* install node && npm
* check node  && npm
```ssh
node -v
v...
npm -v
...
```

##### documentation
* Node Website: https://nodejs.org
* NPM Repository : https://www.npmjs.com/
* Npm usage : https://docs.npmjs.com/cli/install

#### create web project

```ssh
mkdir todo-example
cd todo-example
```

Note : execute next commands in todo-example folder.

#### Babel Transformer
* install babel core && cli
```ssh
npm install --save-dev babel-cli babel-core
```
##### Usage: https://babeljs.io/docs/usage/cli/
##### create .babelrc file in root folder.
##### ES6 Features
* ES6 Documentations : http://es6-features.org/
* ES6 import export -> http://www.2ality.com/2014/09/es6-modules-final.html
* add es6 features to babel transformer
```ssh
npm install --save-dev babel-preset-es2015 babel-preset-stage-0
```

##### React Feature
* documentation : https://facebook.github.io/react/docs/react-api.html
* Examples : https://toddmotto.com/react-create-class-versus-component/
* add react feature to babel transformer
```ssh
npm install --save-dev babel-preset-react
```

#### Webpack

##### Webpack 2 Beta
* https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.j474cp9nv
* install webpack 2 beta
```ssh
npm install --save-dev webpack@beta
```

##### Webpack Dev Server 2 Beta
* https://webpack.github.io/docs/webpack-dev-server.html
* install webpack 2 beta
```ssh
npm install --save-dev webpack-dev-server@beta
```

##### Babel-Loader 
* install 
```ssh
npm install --save-dev babel-loader
```
* https://github.com/babel/babel-loader

##### Copy Webpack Plugin 
* install 
```ssh
npm install --save-dev copy-webpack-plugin
```
* https://github.com/kevlened/copy-webpack-plugin


#### install robe-json-server
```ssh
npm install --save-dev robe-json-server app-root-path
```


#### TODO Example
* download project from github
* install project
```ssh
cd project folder
npm install
```

##### DEVELOPMENT MODE on JSON Server 
* You can find `start` script in package.json file -> scripts tag.
* Development Mode is working on robe-json-server.
* robe-json-server is a mock server and it serves `config/data/db.json` as database.
* [more information](https://github.com/typicode/json-server) about the json-server.
* start development mode.
```ssh
    npm start
```
* open http://localhost:8080
    
    
##### DEVELOPMENT MODE on Robe Server : 
* You can find `start-todo` script in package.json file -> scripts tag.
* Development Mode is working on robe-todo-server.
* download todo-server from [https://github.com/kbukum/robe-todo-server](https://github.com/kbukum/robe-todo-server)
* Start Todo Server : [todo dev](https://github.com/kbukum/robe-todo-server#start_dev)
* start development mode.
```ssh
npm start-todo
```
* [open site](http://localhost:8081/todo/ui/)
     
##### PRODUCTION MODE on Robe Server : 
* You can find `build` script in package.json file -> scripts tag.
* Production Mode is working on robe-todo-server.
* download todo-server from [https://github.com/kbukum/robe-todo-server](https://github.com/kbukum/robe-todo-server)
* build ui code
```ssh
npm build
```
* Start Todo Server as Production Mode : [todo prod](https://github.com/kbukum/robe-todo-server#start_prod)
* [open site](http://localhost:8181/todo/ui/)