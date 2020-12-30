const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require('./data')

const server = express()


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    
    return res.render("home", {items: recipes})
})

server.get("/about", function(req, res) {
    const about = {

    }
   return res.render("about", {about})
})

server.get("/recipes", function(req, res) {

   return res.render("recipes", {items: recipes})
})

server.get("/recipes/:index", function (req, res) {
        

        const recipe = [...recipes];
        const recipeIndex = req.params.index;
       
    
        return res.render("recipe", {item: recipe[recipeIndex]})
        
        
})



server.listen(5000, function () {
    console.log('server is running')
})