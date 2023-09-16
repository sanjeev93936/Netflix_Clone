
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
- [TMDB API](https://www.themoviedb.org/?language=en-US)
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
![Screenshot 2023-09-16 223125](https://github.com/sanjeev93936/Blog_Application/assets/108318474/f8899220-f80f-4bf4-b4a0-dcc2ea72217a)
### Login
![Screenshot 2023-09-16 223149](https://github.com/sanjeev93936/Blog_Application/assets/108318474/b82b437a-8549-4a9c-9818-95052eda35a4)
### This is the Home Section
![Screenshot 2023-09-16 223213](https://github.com/sanjeev93936/Blog_Application/assets/108318474/4512e6b7-b5dc-4bbf-8a4e-1a655449a43a)
![Screenshot 2023-09-16 223514](https://github.com/sanjeev93936/Blog_Application/assets/108318474/b500055f-0141-48bd-bf92-5eb476040a19)
### This is the Create new Post Section
![Screenshot 2023-09-16 223257](https://github.com/sanjeev93936/Blog_Application/assets/108318474/c998fc06-3e8d-406c-bc7b-ab739b6cb09b)
### This is the   Post Section
![Screenshot 2023-09-16 223420](https://github.com/sanjeev93936/Blog_Application/assets/108318474/900aadc2-fd03-4948-943c-75831553f618)
### This is the Update Post Section
![Screenshot 2023-09-16 223438](https://github.com/sanjeev93936/Blog_Application/assets/108318474/9df841a3-3740-421b-9317-b2bbdeaa4889)
![Screenshot 2023-09-16 223451](https://github.com/sanjeev93936/Blog_Application/assets/108318474/7de6cfd1-ed3b-484b-8e05-984ee96f6c30)


## Author

### Sanjeev Madhavarapu

<a href="https://linkedin.com/in/sanjeev-madhavarapu-92a389237/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="payalpatra105" height="30" width="40" /></a>
<a href="https://instagram.com/
sanjeev_madhavarapu" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="p_iconic_" height="30" width="40" /></a>

---
