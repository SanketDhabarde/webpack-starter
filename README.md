# webpack-starter

## 📑 About
> This is the starter project for vanillaJs App.

## 🛠 Technologies used
- Webpack
- Webpack-cli
- Webpack-dev-server


## 😎 Features
- Babel loader
- Can use `.css` files
- Can use images in format `(png|svg|jpeg|jpg|gif)`
- HTML webpack plugin
- Code splitting (vendor bundle and main bundle)
- Caching
- ES6 fully supported
- `import/export` (ES Modules support)

## 🤯 How to get starter project locally
### 1. Install `degit`
```cmd
npm install -g degit
```
### 2. Run degit command to get starter pack and give your app name
```cmd
degit SanketDhabarde/webpack-starter#develop your-app-name
```
### 4. Go inside your app's directory
```cmd
cd your-app-name
```
### 3. Install dependencies
```cmd
npm i
```
### 4. Run the starter kit
```cmd
npm start
```
With that you can see your app running on `localhost:3000`


## 👩🏾‍💻 `mode: "development"`
When we run `npm start` the mode is development. So, the files will not have code splitting and caching. And if you open `dist/main.js` you will see lot of information


## 👩🏾‍💻 `mode: "production"`
When you want optimize build you need to run 
```
npm run build
```
This will give you the optimized build with code splitting (vendor bundle and main bundle) and caching. And the `dist/main.[somehash].js` file will be optimized


## 👨‍💻 Connect with me 

<a href="https://twitter.com/SanketDhabarde1"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/sanket-dhabarde-91b028166/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
