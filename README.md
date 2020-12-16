# The Gluten Free Cookbook

Milestone Project # 3 - The Gluten Free Cookbook

The purpose of the site is to create a community for those who feel restricted to the Gluten Free diet. Some by choice,
but others as a dietary requirement. The site is to share your favorite gluten free recipes, creating a community of other
gluten free lovers. 

Users are able to view recipes, whether a registered user or not. But, if you want to get the full community access,
users are able to register as a member and then are able to create and share their own recipes.

## UX and Elements of User Experiences

### Strategy: 
The purpose of this site is to provide a single place for users to view and add their favorite gluten free recipes.

### Scope:
Functional Requirements
- The site is easy to navigate with a simple naviagation bar at top, a footer and links throughout the page to redirect users to their desired page
- The design of the site is simple, nothing too complicating or visually unappealing

Content Requirements
- Content on all pages are clearly labelled and it is easy to understand each of the pages purposes

### Structure
Information Architecture: Visual representation of the product's infustructure

<img src="https://github.com/aprilha3097/The-Gluten-Free-Blog/blob/master/wireframes/flowchart/Information%20Architecture.png" width="600">

- When user enters site, the hero container will welcome, introduce and redirect user to Register for a new account
- When user scrolls through the home page, details of the sites purpose are explained
- If user selects on the example recipes, they will be redirected to the 'View Recipes' page to preview existing recipes
- The navigation bar will include directions to the About, View Recipes, Login and Register pages for users that are not registered 

- View Recipes - Users will preview existing recipes. They will be able to select a recipe to view in full detail
    * Registered users are able to edit and delete their own recipes

- Login - Users will be able to log into their personal accounts via a simple form 
    * If user is not registered, they can easily redirect themselves to the Sign Up page
    * If user incorrectly enters their username or password they will be promted with a message that what they entered is incorrect
    * When user logs in successfully, they will be redirected to the Home page with new page links visable

- Register - Users will be able to register for a new account via a simple form
    * If users are already registered they can easily redirect to the Login page
    * When user is able to register successfully, they will be redirected to the Home page with new page links visable

- Navagation links for registered users will contain the About, View Recipes, Add Recipe, My Cookbook and SignOut pages

### Skeleton

#### Wireframes
* Wireframes for the initial structural design of the site was created using Adobe XD.

Home Page:


<img src="https://github.com/aprilha3097/The-Gluten-Free-Blog/blob/master/wireframes/site-wireframes/home.png" width="400">


About Page:


<img src="https://github.com/aprilha3097/The-Gluten-Free-Blog/blob/master/wireframes/site-wireframes/about.png" width="400">


Adding & Editing Recipes Form:


<img src="https://github.com/aprilha3097/The-Gluten-Free-Blog/blob/master/wireframes/site-wireframes/add_edit_recipes.png" width="400">


Login & Registration Form:


<img src="https://github.com/aprilha3097/The-Gluten-Free-Blog/blob/master/wireframes/site-wireframes/login_register_form.png" width="400">


Viewing Exiting Recipes:


<img src="https://github.com/aprilha3097/The-Gluten-Free-Blog/blob/master/wireframes/site-wireframes/preview_recipes.png" width="400">


### User Stories:
- As a user, I want to preview the available recipes and select the recipe that I want to view
- As a new user, I want to register as a member to the community for full access
- As a registered user, I want to log into my personal account to use all features of the site
- As a user, I want to view my portfolio of recipes that I have already added to the community
- As a user, I want to amend details of a recipe that I have added 
- As a user, I want to log out of my personal account once I have completed using the site

### Features: 

#### Features Implemented

Home Page: 
- Navigation bar at top of page clearly labelled for easy use
- Hero image that encourages users to register for a new account
- Footer at bottom of pages with copyright information and footer naviagation to other pages

Preview All Recipes:
- User is able to search through existing recipes with Search Bar function
- Users that have successfully logged in are able to edit their recipes by selecting the 'Edit Recipe' button
- Users that have successfully logged in are able to delete their own recipes by selecting the 'Delete Recipe' button

Login:
- User is able to log into account using a simple form of 'Username' and 'Password'
- User can submit form once details have been entered
- If either Username or Password is incorrect - flash message will display and user can re-enter details
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
- Site administrator - to monitor and remove any recipes that seem inapproriate for the sites purposes
- Users that have an account would be able to leave comments/reviews of each of the recipes they liked or disliked
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

Users 

| Title                     | Key in Collection      | Data Type  |
| ------------------------- |:----------------------:| :---------:|
| Username                  | username               | String     |
| Password                  | password               | String     |


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
You can view more in depth the testing required for this project in the following documentation: [Testing Document](https://github.com/aprilha3097/The_Gluten_Free_Cookbook/blob/master/wireframes/testing/TestingDoc.png)

## Deployment

*The Gluten Free Cookbook* was developed using GitPod, using GitHub to host the repository.

### Cloning *The Gluten Free Cookbook* from GitHub ###

**Make sure you have an account at [MongoDB](https://www.mongodb.com/) in order to construct the database.**

1: **Clone** the *The_Gluten_Free_Cookbook* repository by downloading from [source](https://github.com/aprilha3097/The_Gluten_Free_Cookbook.git),

2: **Navigate** to this folder in your terminal window and **install** required modules to run the application using the following command:

```bash
python -m pip -r requirements.txt
```

3: **Initialize** virtual environment by typing the following command into the terminal:

```
py -m venv virtual
```

4: In MongoDB, create a new database called *gfOnlineCookbook* with two collections: *users* and *recipes*.

5: Create a file to hold your environment variables and call it *env.py*.

5: Your env.py file should contain the following:

```
import os

os.environ.setdefault("IP", "0.0.0.0")
os.environ.setdefault("PORT", "5000")
os.environ.setdefault("SECRET_KEY", "YOUR_SECRET_KEY")
os.environ.setdefault("MONGO_URI", "YOUR_MONGODB_URI")
os.environ.setdefault("MONGO_DBNAME", "YOUR_DATABASE_NAME")
os.environ.setdefault("DEBUG", "1")
```

- Please make sure you update your **SECRET_KEY**, **password**, **database_name**, and **DATABASE_NAME**.

- Before pushing the project to a public repository, your env.py file should be added to .gitignore.

6: You can now run your application locally by typing the following command in your terminal:

```
python run.py
```

### Deploying The Gluten Free Cookbook to Heroku ###

1: **Login** to Heroku and create a new app.

2: **Create** a requirements.txt file using the following command:

```
pip3 freeze --local > requirements.txt
```

3: **Create** a Procfile with the following command:

```
echo web: python run.py > Procfile
```

4: **Push** these newly created files to your repository master.

5: **Add heroku remote** to your git repository by getting the heroku git URL from the heroku account settings. Then type the following: 

```
git remote add heroku https://git.heroku.com/your-heroku-repo
```

6: Push *The_Gluten_Free_Cookbook* to your heroku:

```
git push heroku master
```

7: In your heroku app, **set** the following variables:

**Key**|**Value**
:-----:|:-----:
HOSTNAME|0.0.0.0
PORT|5000
MONGO_URI|YOUR_MONGODB_URI
SECRET_KEY|YOUR_SECRET_KEY

  ** Please make sure you enter your own *SECRET_KEY*, and *MONGO_URL*.

8: Click the deploy button on the Heroku dashboard.
9: The site has been deployed the Heroku.


### Credit

#### Code
1. The code for the repeatable buttons on adding new ingredients and instructions from [Stack Overflow](https://stackoverflow.com/questions/21135520/repeat-a-div-when-clicking-a-button)

2. Code to remove the previous entered values removed when using the clone function. Bug that was after each onclick
to clone the input the previous text values were copied as well from [Stack Overflow](https://stackoverflow.com/questions/6845058/clear-text-field-value-in-clone-object)

#### Media
1. [Image of Couple Cooking](https://i.pinimg.com/originals/cb/22/de/cb22deb9811d2b76411f7b79a160ba14.jpg)

2. [Image of Pizza](https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg)

3. [Image of Naan Bread](https://therecipecritic.com/wp-content/uploads/2020/01/naan_bread_hero.jpg)

4. [Image of Cassarole](https://www.eatingbirdfood.com/wp-content/uploads/2019/05/confetti-chicken-casserole-2.jpg)

