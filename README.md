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

* documentation
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
* Usage: https://babeljs.io/docs/usage/cli/
* create .babelrc file in root folder.
* ES6 Features
    * ES6 Documentations : http://es6-features.org/
    * ES6 import export -> http://www.2ality.com/2014/09/es6-modules-final.html
    * add es6 features to babel transformer
    ```ssh
    npm install --save-dev babel-preset-es2015 babel-preset-stage-0
    ```
* React Feature
    * documentation : https://facebook.github.io/react/docs/react-api.html
    * Examples : https://toddmotto.com/react-create-class-versus-component/
    * add react feature to babel transformer
    ```ssh
    npm install --save-dev babel-preset-react
    ```

#### Webpack

* Webpack 2 Beta
    * https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.j474cp9nv
    * install webpack 2 beta
    ```ssh
    npm install --save-dev webpack@beta
    ```
* Webpack Dev Server 2 Beta
    * https://webpack.github.io/docs/webpack-dev-server.html
    * install webpack 2 beta
    ```ssh
    npm install --save-dev webpack-dev-server@beta
    ```

* Babel-Loader 
    * install 
    ```ssh
    npm install --save-dev babel-loader
    ```
    * https://github.com/babel/babel-loader

* Copy Webpack Plugin 
 * install 
    ```ssh
    npm install --save-dev copy-webpack-plugin
    ```
    * https://github.com/kevlened/copy-webpack-plugin

#### TODO Example
* download project from github
    ```ssh
    cd project folder
    npm install
    npm start
    ```
