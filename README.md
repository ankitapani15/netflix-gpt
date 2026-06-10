# Netflix gpt

- created react app using vite
- configured tailwind
- header
- routing of app
- login form
- signup form
- form validation
- useRef hook
- firebase setup
- deploying app to prod
- create signUp user account
- implemented sign in user api
- created redux store for userSlice
- implemented sign out
- Update profile displayName
- bugfix : Sign up user displayName and profile pic update
- bugfix : if a user is not loggedIn, redirect /browse to signIn page and vice-versa
- unSubscribe to onAuthStateChanged callback
- moved hardcoded values to constants
- register TMDB API & create an app & get access token
- get data from TMBD now playing movie list API.
- create custome hooks for fetching api.
- create movieSlice and update store with movie data.
- plaining for main and secondary container
- fetch and update trailer video
- get embedded youtube link and make it autoplay and mute
- added tailwind css to make main container look awesome.

# Feature

- login/sign up
  - sign in or sign up form
  - redirect to browser page
- Browse (after authentication)
  - Header
  - main movie
    - trailer in the background
    - title, description and play button
    - movie suggestions
      - movie lists \* n
- netflix GPT
  - searchbar
  - movie suggestions
