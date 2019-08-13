**Burger is a Node.JS, Express, MySQL and Handlebars application that demonstrates using ORM to create a MySQL query template and implement using the Models, Views Controller method.

The application allows users to add burgers they want to eat to a list of burgers waiting to be eaten. Users can then choose to "eat" a burger which will then move the buregr to a devoured list. The application also tracks the restaurant that made the burger and displays a leaderboard for most devoured burgers by restaurant via a Stats page

***Fully developed by Kevin Steele for GWU Full Stack Web Development BootCamp* 

**Github Repo**: https://github.com/kevdsteele/Burger

**Heroku hosted website**: https://whispering-shelf-84706.herokuapp.com/

**Dependencies**:

- [Node.JS](https://nodejs.org/en/), [Express](https://www.npmjs.com/package/express), [MySQL](https://www.npmjs.com/package/my-sql), and [Express Handlebars](https://www.npmjs.com/package/my-sql)  must me installed to run locally 

**Organization**: 

- *Server.js*

  Contains the core Node modules to lunch the web server, set Handlebars as the view engine and declares and use the routes controllers as well as setting the static public folder path for CSS and Javascript

- Config folder 

  connections.js configures the MySQL connection to either a Heroku JAWSDB or local database 

  Orm.js contains the template query functions invoked by the Burger model file

- Controllers

  Burger_controllers.js process API requests and calls Burgerquery functions and returns to the website for processing by Handlebars

- DB

  Contains the database schema and seed data 

- Models

  Burger.js contains the burger specific query implementations based on the ORM template 

- Public

  Contains the CSS, Image and Javascript files for the website
  
- Views

  Contains the index ans stats handlebars view pages. It also contains the layouts folder which holds the main handlebars page 