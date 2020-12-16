# The Gluten Free Cookbook

Milestone Project # 3 - The Gluten Free Cookbook

The purpose of the site is to create a community for those who feel restricted to the Gluten Free diet. Some by choice,
but others as a dietary requirement. The site is to share your favorite gluten free recipes, creating a community of other
gluten free lovers. 

Users are able to view recipes, whether a registered user or not. But, if you want to get the full community access,
users are able to register as a member and then are able to create and share their own recipes.

## Table of Contents
- [UX](#ux)
  - [Project Goals](#project-goals)


## UX and Elements of User Experiences

### Strategy: 
The purpose of this site is to provide a single place for users to view and add their favorite gluten free recipes

### User Stories:
- As a user, I want to preview the available recipes and select the recipe that I want to view
- As a new user, I want to register as a member to the community for full access
- As a current user, I want to log into my personal account to use all features of the site
- As a user, I want to view my portfolio of recipes that I have already added to the community

### Scope:
Functional Requirements
- The site is easy to navigate with a simple naviagation bar at top, a footer and links throughout the page to redirect users to correct page
- The design of the site is simple, nothing too complicating or visually unappealing

Content Requirements
- Content on all pages are clearly labelled and it is easy to understand each of the pages purposes

### Structure
Information Architecture: Visual representation of the product's infustructure







Wireframes

Database Design:
Using the NoSQL database of MongoDB, I was able to clearly utilise the following collections:

Recipe Collection
Title Key in Collection Data Type


Users Collection

## Technologies Used

### Languages
1. [HTML5](https://en.wikipedia.org/wiki/HTML5)
    * The markup language used for structuring and presenting content of the site
2. [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    * The Cascading Style Sheet used to to design the site
4. [Javascript](https://en.wikipedia.org/wiki/JavaScript)
    * The programming langauge to program specific behaviors for the application
6. [Python](https://www.gitpod.io/)
    * The code editing sowftware that was used for the creation of this project

### Libraries and Tools 
6. [JQuery](https://jquery.com/)
    * JavaScript library
6. [Flask](https://flask.palletsprojects.com/en/1.1.x/)
    * Flask is a micro web framework written in Python
6. [Jinja](https://jinja.palletsprojects.com/en/2.11.x/)
    * Jinja is a modern and designer-friendly templating language for Python
6. [Font Awesome](https://fontawesome.com/)
    * Library of icon and vecotor items that are easy to use and integrate into this project
6. [Heroku](https://dashboard.heroku.com/)
    * Heroku is a cloud platform as a service supporting several programming languages
6. [GitHub](https://github.com/)
    *
6. [PyMongo](https://pymongo.readthedocs.io/en/stable/)
    * PyMongo is a Python distribution containing tools for working with MongoDB, and is the recommended way to work with MongoDB from Python.
6. [MongoDb](https://www.mongodb.com/)
    * MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.
6. [GitPod](https://www.gitpod.io/)
    * The code editing sowftware that was used for the creation of this project
3. [Materialize CSS](https://materializecss.com/)
    * 
5. [Google Fonts](https://fonts.google.com/)
    * Sourced fonts required for site


### Features: 

Features Implemented
- Redirection to the desired page for users - so user naviagation is easy and clearly labelled
- Account Registration from
- Existing User is able to Sign in and Log out of their personal accounts
- Search Functionality - user is able to search keywords from recipe titles and descriptions - using MongoDb Indexing


Future Features to Implement
- Users are able to like recipes and add these to a seperate section of their Cookbook 
- Users are able to change their password
- Site administraot - to monitor and remove any recipes that seem inapproriate for the sites purposes
- Users that have an account would be able to leave comments/reviews of each of the recipes they liked of disliked
- Users are able to add a URL image to recipes that they are adding


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

Code for the repeatable buttons on adding new ingredients and instructions from stack overflow:
https://stackoverflow.com/questions/21135520/repeat-a-div-when-clicking-a-button

Code to remove the previous entered values removed when using the clone function. Bug that was after each onclick
to clone the input the previous text values were copied as well:
https://stackoverflow.com/questions/6845058/clear-text-field-value-in-clone-object