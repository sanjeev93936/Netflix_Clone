
# Netflix Clone

- **Netflix Clone made with  React, Redux Toolkit, Firebase, Styled Components, Axios, Node.js, Express and MongoDB**

---

## Quick Links

[Configuration and Setup](#configuration-and-setup)

[Tech Stack](#tech-stack)

[Implementation Hightlights](#implementation-hightlights) 

[📸 Screenshots](#screenshots)

[Author](#author)


---

## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the Frontend on one terminal Netflix-ui and the Backend on the other terminal netflix-api)

In the first terminal

```
# --- Terminal ---

$ cd Netflix-ui
$ npm install (to install frontend-side dependencies)
$ npm start (to start the frontend)
```

In the second terminal

- Create your mongoDB connection url, which you'll use as your MONGO_URI
- Supply the following credentials

```
# --- Terminal ---

$ npm install (to install backend-side dependencies)
$ npm start (to start the backend)
```
---
## Tech Stack

- [React](https://github.com/facebook/react) 
  - Create-react-app with highly complex frontend structure
- [Redux](https://redux.js.org/) 
  - State management and redux thunk for asynchronous api calls
- [Firebase](https://firebase.google.com/) 
  - Backend and database with firestore for users
- [TMDB API](https://developer.themoviedb.org/docs/getting-started)
  - Movie service API
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) 
  - Complex and dynamic route generation 
- [React Reveal](https://www.react-reveal.com/)
  - For fade animation effect

---

## Implementation Hightlights

Netflix clone made with advanced react, redux & firebase which uses redux thunk to asynchronously fetch movie data of over 30 thousand movies from Tmdb api. Features include a multi-active searchbar, user signup and signin, add to list option for each user, trailer links, dynamically generated movie and tv show pages and an interactive UI replicated from the original netflix app.

### User Stories

- Users can safely sign up and sign in, google sign in enabled with firebase
- Collections of popular movies and tvshows for recommendations
- A searchbar to search through TMDB database of over 30000 movies
- Movie and TV Pages dynamically generated for every single movie
- Add to list feature active throughout the app
- We use mongoose to store the list of movies that we liked
- Original netflix UI replicated with highly organized and advanced sass styling

### Current Plans for Expansion

- Implement more features as a personal practice project
- Add user profile data, profile picture and personal data setup
- Add payment section using stripe
- Deploying the web site.

---
 ##  Screenshots 

 ### This is the Authentication Section
### Register
![Screenshot 2023-09-16 231216](https://github.com/sanjeev93936/Netflix_Clone/assets/108318474/6c4f3f35-70f8-4bd0-98e7-07732bda020c)
![Screenshot 2023-09-16 231521](https://github.com/sanjeev93936/Netflix_Clone/assets/108318474/4e0343a4-aa6d-4687-a4e3-fbdc2de17109)
### Login
![Screenshot 2023-09-16 231700](https://github.com/sanjeev93936/Netflix_Clone/assets/108318474/70b7723a-b62e-413a-adfe-f758519eaadb)
### This is the Home Section
![Screenshot 2023-09-16 231727](https://github.com/sanjeev93936/Netflix_Clone/assets/108318474/ba6a451a-aa3e-4add-86a2-18d106643690)
![Screenshot 2023-09-16 231921](https://github.com/sanjeev93936/Netflix_Clone/assets/108318474/b969c13a-88f0-4a9d-89c6-492ccbe9a6cb)

### This is the Player Section
![Screenshot 2023-09-16 231859](https://github.com/sanjeev93936/Netflix_Clone/assets/108318474/427aef82-eded-40c3-a3fd-5bbf42e2951a)
### This is the TV shows Section
![Screenshot 2023-09-16 231942](https://github.com/sanjeev93936/Netflix_Clone/assets/108318474/27e5f549-6d0c-4c5f-b8f4-099a406db7fc)
### This is the  Movies Section
![Screenshot 2023-09-16 232007](https://github.com/sanjeev93936/Netflix_Clone/assets/108318474/ac0938d2-884d-4825-bb75-0052138b803f)
### This is the My list Section
![Screenshot 2023-09-16 232045](https://github.com/sanjeev93936/Netflix_Clone/assets/108318474/ab893bed-530e-41a3-ad4b-b3284ab2c4e8)


## Author

### Sanjeev Madhavarapu

<a href="https://linkedin.com/in/sanjeev-madhavarapu-92a389237/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="payalpatra105" height="30" width="40" /></a>
<a href="https://instagram.com/
sanjeev_madhavarapu" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="p_iconic_" height="30" width="40" /></a>

---
