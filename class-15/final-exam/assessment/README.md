# Code 301 Final Assessment

This assessment comes in 2 parts (applications), a **client** and a **server** that together, will allow a user to create a list of things.

Each application is intended to be operated and tested independently, while also working together.

- The server, written in express, when started, will be the API that the react application uses for data retrieval and storage

## Feature Tasks

- Fix the bug in the server
- Fix the bug in the client
- Add **DELETE** functionality on both the server and client
  - The client app has a "Delete Button" that is there but is not wired up. Wire it up.
- Change the styling of the items list.

### The API Server

Located in the `/server` folder, this is an express server designed to perform CRUD (Create, Read, Update, Delete) operations on a mongo/mongoose data model: `items`. Note that this server does not require you to install or configure MongoDB, it will take care of that for you.

> However, this server is broken. Your task is to fix the bugs.

How will you know that you've found them all? The tests will all pass!

#### Server: Running the tests

- Make sure the server is NOT running
- From the root directory of the server in the terminal, run the command `npm test`
- You should receive a list of the tests that are passing and failing just like you have seen in your code challenges

#### Server: Getting Started

- create an empty private repo on GitHub
- Invite your instructor to the repo
- Connect it to your server:
  - run `git init`
  - run `git remote add origin <url-of-the-repo-you-just-created>`

- Install your dependencies
- Run the tests
  - with the server turned off run the command: `npm test`
- There is one bug. Find the bug and fix it - 20 POINTS
- You will know you have found the bug when the tests pass
- Deploy to Heroku - 5 POINTS

#### Server: Notes

- You may inspect the tests, but do not change them.
- Once you have this working, keep it running. The React app will be using it to save and retrieve data

### The React App

The React application will allow a user to:

- Add a new item
- Delete an item from the list
- Display current items

#### React App: Getting Started

- create an empty private repo on GitHub
- Invite your instructor to the repo
- connect it to your React app:
  - run `git init`
  - run `git remote add origin <url-of-the-repo-you-just-created>`

- Install your dependencies
- Run the tests
  - with the React App turned off run `npm test`
- A "bug" is defect or missing feature. Find the bugs and fix them - 20 POINTS
  - You will know you have found the bugs when the tests all pass
- Deploy to Netlify - 5 POINTS

#### React App: Change Styling - 25 POINTS

- Using React Bootstrap, change the list from a `Table` to an `Accordion` for showing the items in the list

#### React App Notes

- Throughout the application code, you will see that some components/markup have a prop called **data-testid** that look like the below -- **Do not remove or change these, they are required for the tests and grading**
  - ```data-testid="---"```
- When you are running the application and manually testing in the browser, it'll use your server and will not operate unless it is running
- However, it's not sufficiently set up at first to reach the API.
  - You'll need to properly configure the app in order to reach the server.
- When you are running the tests with `npm test` the application will simulate having a server, so it's not necessary to have it running while doing your pure testing/bug-fixing work

## Rubric

- 20 Points: Fix the Express API Server (all tests passing)
- 20 Points: Fix the React App (all tests passing)
- 25 Points: Add DELETE functionality to both server and client
- 25 Points: Style the application with Bootstrap
- 10 Points: Deployed and Tested in the cloud
  - Server running at Heroku
  - React App running at Netlify, configured to talk to the deployed server
  - Tests for both running in the green at GitHub

## STRETCH GOAL: Add Auth0
