# The Gluten Free Cookbook

Milestone Project # 3 - The Gluten Free Cookbook

The purpose of the site is to create a community for those who feel restricted to the Gluten Free diet. Some by choice,
but others as a dietary requirement. The site is to share your favorite gluten free recipes, creating a community of other
gluten free lovers. 

Users are able to view recipes, whether a registered user or not. But, if you want to get the full community access,
users are able to register as a member and then are able to create and share their own recipes.

## Table of Contents
- [UX](#UX and Elements of User Experiences)
  - [Project Goals](#project-goals)


## UX and Elements of User Experiences

### Strategy: 
The purpose of this site is to provide a single place for users to view and add their favorite gluten free recipes

### Scope:
Functional Requirements
- The site is easy to navigate with a simple naviagation bar at top, a footer and links throughout the page to redirect users to correct page
- The design of the site is simple, nothing too complicating or visually unappealing

Content Requirements
- Content on all pages are clearly labelled and it is easy to understand each of the pages purposes

### Structure
Information Architecture: Visual representation of the product's infustructure

<img src="https://github.com/aprilha3097/The-Gluten-Free-Blog/blob/master/wireframes/flowchart/Information%20Architecture.png" width="500">

- When user enters site, the hero container will welcome, introduce and redirect user to Register for a new account
- When user scrolls through the home page, details of the site's purpose are explained
- If user selects on the example recipes, they will be redirected to the View Recipes page to preview existing recipes

- Navigation Bar will include directions to the About, View Recipes, Login and Register pages
- View Recipes - Users will preview existing recipes. They will be able to select a recipe to view
    * Registered users are able to edit and delete their own recipe
- Login - Users will be able to log into their personal accounts via a simple form 
    * If user is not registered, they can easily redirect themselves to the Registration page
    * If user incorrectly enters their username or password they will be promted with a message that what they entered is incorrectly
    * when user registers successfully, they will be redirected to the Home page with new page links visable

- Register - Users will be able to register for a new account via a simple form
    * If users are already registered they can easily redirect to the Login page
    * When user is able to register successfully, they will be redirected to the Home page with new page links visable
- Navagation Link for registered users will containe About, View Recipes, Add Recipe, My Cookbook and SignOut


### Skeleton

#### Wireframes
* Wireframes for the initial structural design of the site was created using Adobe XD.

Home Page:
<img src="https://github.com/aprilha3097/The-Gluten-Free-Blog/blob/master/wireframes/site-wireframes/home.png" width="500">

About Page:
<img src="https://github.com/aprilha3097/The-Gluten-Free-Blog/blob/master/wireframes/site-wireframes/about.png" width="500">

Adding & Editing Recipes Form:
<img src="https://github.com/aprilha3097/The-Gluten-Free-Blog/blob/master/wireframes/site-wireframes/add_edit_recipes.png" width="500">

Login & Registration Form:
<img src="https://github.com/aprilha3097/The-Gluten-Free-Blog/blob/master/wireframes/site-wireframes/login_register_form.png" width="500">

Viewing Exiting Recipes:
<img src="https://github.com/aprilha3097/The-Gluten-Free-Blog/blob/master/wireframes/site-wireframes/preview_recipes.png" width="500">

### User Stories:
- As a user, I want to preview the available recipes and select the recipe that I want to view
- As a new user, I want to register as a member to the community for full access
- As a current user, I want to log into my personal account to use all features of the site
- As a user, I want to view my portfolio of recipes that I have already added to the community
- As a user, I want to amend details of a recipe that I have added 
- As a user, I want to log out of my personal account once I have completed using the site

### Features: 

#### Features Implemented
Home Page: 
- Navigation bar at top of page clearly labelled for easy use
- Hero image that encourages users to register for a new account
- Footer at bottom of pages with copyright information and footer naviagation to other links

Preview All Recipes:
- User is able to search through existing recipes with 'View Recipe' button
- Users that have successfully logged in are able to edit their recipes by selecting the 'Edit Recipe' button
- Users that have successfully logged in are able to delete their own recipes by selecting the 'Delete Recipe' button

Login:
- User is able to log into account using a simple form of 'Username' and 'Password'
- User can submit form once details have been entered
- If either Username or Password is incorrect - flash message will display and user will can re-enter details
- If either input fields are not filled in - an error will display to notify users to enter details in required input field
- If user has not created an account, user can select 'Register Here' hyperlink to redirect to the Sign Up page

Register: 
- User is able to sign up using a simple form by inputing a 'Username' and 'Password'
- If username already exists, user will be notified username has been taken
- If either input fields are not filled in - an error will display to notify users to enter details in required input field
- If user has already registered, user can select 'Log In Here' hyperlink to redirect to the Login Page


#### Future Features to Implement
- Users are able to like recipes and add these to a seperate section of their Cookbook 
- Users are able to change their password
- Site administraot - to monitor and remove any recipes that seem inapproriate for the sites purposes
- Users that have an account would be able to leave comments/reviews of each of the recipes they liked of disliked
- Users are able to add a URL image to recipes that they are adding


### Database design

Recipes

| Title                     | Key in Collection      | Data Type  |
| ------------------------- |:----------------------:| :---------:|
| Name of Recipe            | recipe_name            | String     |
| Description of Recipe     | recipe_description     | String     |
| Ingredients               | ingredients            | Array      |
| Directions                | directions             | Array      |
| Serving Size              | serves                 | String     |
| Total Duration            | time                   | String     |
| Created By                | created_by             | String     |






## Technologies Used

### Languages
1. [HTML5](https://en.wikipedia.org/wiki/HTML5)
    * The markup language used for structuring and presenting content of the site
2. [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    * The Cascading Style Sheet used to to design the site
4. [Javascript](https://en.wikipedia.org/wiki/JavaScript)
    * The programming langauge to program specific behaviors for the application
6. [Python](https://www.python.org/)
    * The programming language to program the backend behaviors for the site

### Libraries and Tools 
6. [JQuery](https://jquery.com/)
    * JavaScript library
6. [Flask](https://flask.palletsprojects.com/en/1.1.x/)
    * Flask is a micro web framework written in Python
6. [Jinja](https://jinja.palletsprojects.com/en/2.11.x/)
    * Jinja is a modern and designer-friendly templating language for Python
6. [Font Awesome](https://fontawesome.com/)
    * Library of icon and vector items that are easy to use and integrate into this project
6. [Heroku](https://dashboard.heroku.com/)
    * Heroku is a cloud platform as a service supporting several programming languages
6. [GitHub](https://github.com/)
    * The code hosting platform and used for easy version control via Git
6. [PyMongo](https://pymongo.readthedocs.io/en/stable/)
    * PyMongo is a Python distribution containing tools for working with MongoDB
6. [MongoDb](https://www.mongodb.com/)
    * MongoDB is a general purpose, document-based, distributed database built for modern application developers
6. [GitPod](https://www.gitpod.io/)
    * The code editing sowftware that was used for the creation of this project
3. [Materialize CSS](https://materializecss.com/)
    * Responsive Front-End framework
5. [Google Fonts](https://fonts.google.com/)
    * Sourced fonts required for site

### Testing 
You can view more in depth the testing required for this project in the following documentation: Testing Document

## Deployment
#### To deploy The Gluten Free Cookbook with Github Pages, follow these steps:

1. When accessing Github, scroll to the top of the repository
2. From the top horizontol menu, select <strong>Settings</strong>
3. Select <strong>Options</strong> on the left menu if not already selected
4. Scroll down to the <strong>GitHub Pages</strong> section
5. Under <strong>Source</strong> select the <strong>Master branch</strong>
6. On selecting the <strong>Master branch</strong> the page will automtically refresh, with the site now deployed
7. The link to access the deployed site will be at the top of the <strong>GitHub Pages</strong> section

It can take up to 20 minutes for changes to the site to be published after pushing to GitHub. For more information on deploying your site with GitHub Pages, go [here](https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site)

#### How to Clone Porject

1. On the [repository page](https://github.com/aprilha3097/BlackJack), click on the Clone or Download button

    <img src="https://github.com/aprilha3097/BlackJack/blob/master/README_imgs/button.png" width="400">

2. To clone the site with HTTPS, copy the following URL

    <img src="https://github.com/aprilha3097/BlackJack/blob/master/README_imgs/clone_or_download.png" width="400">

3. Open Terminal and change the directory to where you want the cloned directory to be
4. Type git clone and then paste the previous URL from earlier into your terminal

    <img src="https://github.com/aprilha3097/BlackJack/blob/master/README_imgs/git_clone.png" width="500">

5. Press Enter to download all of the material from the respository locally to your machine 

For more information on cloning repositories, go [here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)


How to Deploy to heroku
1. Login to Heroku and Create a new application
2. Create requirements.txt field


### Credit

#### Code
1. The code for the repeatable buttons on adding new ingredients and instructions from stack overflow:
https://stackoverflow.com/questions/21135520/repeat-a-div-when-clicking-a-button

Code to remove the previous entered values removed when using the clone function. Bug that was after each onclick
to clone the input the previous text values were copied as well:
https://stackoverflow.com/questions/6845058/clear-text-field-value-in-clone-object

#### Media
