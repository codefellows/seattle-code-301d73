# Updating Resources

## Overview

Today is the final buildout of the book collection app. Our final step is to normalize our database and remove duplicates while persisting the books we have already saved.

Also, the Code 301 final exam will become available today and is due at the end of lab time. This exam also serves as the Code 401 entrance exam. However, it is a pass/fail graded portion of this course, regardless of your intent to advance to a Code 401 course.

The exam is open book, open Google, open Stack Overflow, whatever resources you want to use, but it must be completed individually. You may not get help from anyone else, except from your instructor. The exam is designed to cover the full range of what was taught in this course. The intent is to measure not your memorization skills, but your resourcefulness and your ability to adapt and problem-solve. Give yourself adequate time for the exam.


## Daily Plan

- Warm-up exercise
- Review code challenges
- Code review of lab assignment
- Updating Resources
- Code demo
- Lab preview
- Exam prep

## Learning Objectives

As a result of completing lecture 14 of Code 301, students will:

- Be able to update a resources in a mongo database
- Be able to update a resource instantly in a React application and have that resource state persist on reload


### Hosted Mongo Databases: Atlas

While you can run Mongo on your own machines, it's quite common to run an instance of Mongo in the cloud so that you can take advantage of better hardware, more memory and higher speed networks. Mongo offers a hosted cloud database service called "Atlas" ... once you've got this setup, it's easy to connect your API servers from anywhere in the world to use it.

1. Sign Up
1. Setup the organization
   - Name your organization and project
   - These can be whatever you want to call them
   - Set Preferred Language (Javascript)
1. Pick the "Free" (Shared Cluster) option
1. Create Cluster
   - Choose AWS
   - Choose the closest region to your location (i.e. Oregon)
1. Create a DB User
   - Click the "Database Access" link
   - Add a new user
     - Choose Password Authentication
     - Choose a username and password
     - For access rights, choose "Atlas Admin"
1. Enable Network Access
   - Click Network Access Button
   - Click "Add IP Address"
   - Choose the "Allow Access from Anywhere" option
   - Click "Confirm"
1. Get your connection string
   - Click "Clusters" button on the left
   - Click on the "Connect" button on the cluster screen
   - To connect to your new database with the command line:
     - Choose the "Connect with Mongo Shell" option
     - Copy out the connection string
     - This will look something like this:
     - `mongo "mongodb+srv://cluster0.xtrut.mongodb.net/<dbname>" --username dba`
     - Replace `<dbname>` with the name of the database you want to use for your application, for example 'people'
   - To connect your Node or Express application:
     - Choose the "Connect your Application" option
     - This will look something like this:
     - `mongodb+srv://dba:<password>@cluster0.xtrut.mongodb.net/<dbname>?retryWrites=true&w=majority`
     - Replace `<password>` with the password you created earlier
     - Replace `<dbname>` with the name of the database you want to use for your application, for example 'people'
     - Use this as  `MONGODB_URI` in your .env file or at Heroku when you deploy

![Account Setup](assets/atlas-setup.png)

![Choose Plan](assets/atlas-choose-plan.png)

![Cluster](assets/atlas-cluster-screen.png)

![Network Options](assets/atlas-network.png)

![Connect](assets/atlas-connect-options.png)

![Heroku Setup](assets/heroku-mongo.png)

