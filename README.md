# Pint-Pirate

## Team Members

Dan, Kwasi, Wala

## Project Overview

For the third project of the SEI, the task was to make a full stack application. This was to be a desktop app that uses an Express API and must consume our API on a separate front-end. This was my first time building a full-stack application - as well as my first group project!

Explore [here](https://pint-pirate.herokuapp.com/).

<img width="1438" alt="Screenshot 2021-12-03 at 21 19 53" src="https://user-images.githubusercontent.com/87997491/144674201-94b61477-812f-49f0-834a-0c67a2d4e012.png">

## Goal

* Build a full-stack application.
* Use an express API.
* Consume your API with a separate frontend.
* Be a complete product.
* Have a visually impressive design.
* Timeline: 10 days.

## Languages/Technologies Used

* HTML5
* CSS3
* SASS
* Bootstrap
* JavaScript ES6+
* React
* Node
* Express
* MongoDB
* Axios
* Mapbox GL
* Yarn
* NPM
* Git
* GitHub
* Font Awesome
* Google Fonts

## Project Overview 🍺

We decided to build an application that shows UK travel destinations via each cities cheapest pint of beer! Users can sort all cities (on our database) either high-low or low-high. For added user immersion users can also search directly for a city through a search bar.

Additional features include the ability for users to post reviews on each of the cities (only authors of the reviews may delete them), we also added a Map page, where users can discover different UK destinations on a fully interactive map. Users have access to a 'My Profile' page where they can view personal login details. On each selected city page users can also find locations on our to find a certain beer.

All research relating to prices/brand of beer was researched and collated by us.

## Approach

Promptly after deciding our theme for the full-stack app, we firstly drew wire-frames of what our intended finish product may look like. This helped us to understand how we might break-down different parts of the app into several React components.

Through the use of pseudo-code, we were able to map out the logic/functionality that would bring our design to life.

To kick-off the project, we wanted to build out most of our back-end. We first decided to tackle making the seeds for our database. This was a crucial step, as we needed to populate our API with default data in order to build/test the whole application. An example seed is shown below.
![enter image description here](https://i.imgur.com/KpV2Cwj.png)
Following on from this, we defined all the schemas we would need for the app; cities, users and reviews. In coding these, we used 'referenced ' and 'embedded' relationships in order to link data between the different schemas.
![enter image description here](https://i.imgur.com/WBYmAym.png)

For the User schema, we used the `transform()` method for 'password' as we didn't want this information to be returned on a potentially un-secure connection.
![enter image description here](https://i.imgur.com/UVysRVw.png)
Furthermore, using 'bcrypt' we designed a function that will 'hash' a users plain-text password, enhancing account security.
![enter image description here](https://i.imgur.com/W3fITUW.png)

Once all of our schemas had been defined, we next turned our attention to connecting to our MongoDB database and in turn, seeding our database with default user and city information. Through dropping the database and repopulating, we have the control to reset our data to default if a certain situation arises.
![enter image description here](https://i.imgur.com/O9h8xwf.png)
Next, we define functions to handle Axios requests on the back end. These were either `.get` , `.post` or `.delete` requests.

Below is an example of how we handled a user posting a review. We spread in the request JSON body whilst also supplying the API with the current users ID. This proved useful further along the project for displaying who had written each review.
![enter image description here](https://i.imgur.com/CTCnSEa.png)

Once the backend was set up, we quickly got started building the front end. This included styling which we used SASS and Bootstrap for. The navigation bar and main homepage were quickly built and styled out by my teammates. My job was to map out all the cities for the index page and build the search function. We worked together to build a function that displays the cities from most expensive to least expensive pints. Next, I decided to start developing the registration, login, and review forms.

<img width="1437" alt="Screenshot 2021-12-03 at 21 24 21" src="https://user-images.githubusercontent.com/87997491/144674661-391a8f9f-b274-41f3-8b2f-12f898fb20cf.png">

## Wins and Challenges

* This was my first FullStack Application - though initially intimidated by the task I’m surprised by how much fun this was.
* There’s a much more exciting and dynamic energy to working as a team - bouncing ideas off one another and working together to solve difficult problems made the whole experience very enjoyable.
* We had some initial problems using git to merge our work but communicating throughout helped everything go a bit smoother.

## Bugs 
* The app is not yet mobile-friendly.

## Key Learning
Building the backend for the first time was daunting but once we began working on it, it all seemed to come together smoothly! Working as a team taught me about the importance of communicating and of taking into consideration the thoughts and opinions of others on your team!










