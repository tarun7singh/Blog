# Kaitongo Blogging Platform
## Functionality 

All posts are fetched from server on load and displayed on the blog.

Pagination is achieved using separately storing part of the posts and switching the posts from all posts when a page is changed.

Ideal condition would be to ask the server for parts of the posts and then display them on the blog but as this api doesn't support pagination so it is handled on the frontend side.

Search is achieved by searching the title of posts and filtering the all posts to show the results, this is done by using the search box on the top of the blog.
Search happens as you type and when search box is cleared, search is cancelled and all posts are shown.

## State Management
React context API is used for managing the read counts for each posts, it shared with all the routes to make it possible to update the read counts from post page and show it on the home page.

Ideally i would use Redux for managing the state but as the problem statement mentions, so i used React context API.


## Styling
Only basic styling is done in the whole repo as all the functionality is achieved.

## Instructions

Install dependencies:
`npm install`

Start the development server:
`npm start`

Build and  serve the project for production:
```
npm run build
npm i -g serve
serve -s build
```
