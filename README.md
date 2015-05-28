Frontend Test Project
=====================

Evaluation for Etops Web App Developer with Javascript and AngularJS.
This challenge is intendend to be developed in a pair programming session within an hour of time.

Prerequisites
-------------

* [Git](http://git-scm.com/)
* [npm](https://www.npmjs.org/)
* [Bower](http://bower.io/)

Installation
------------

Clone the project

```bash
git clone https://github.com/etops/frontend-test-project.git && cd frontend-test-project/
```

Install the dependencies

```bash
cd etopsapp
npm install
```

```bash
cd frontendapp
npm install
bower install
```

Start the backend server

```bash
cd etopsapp
node ./bin/www
```

Start the frontend server

```bash
cd frontendapp
gulp serve
```

Frontend App should open in browser.
Backend runs on http://localhost:3000

REST API for users
http://localhost:3000/users

Project description
-------------------

We want to build a simple user management system with a single page application.
The goal is to show a list with all users in the system.
By clicking on the user we show the detail information of the user.
We can add/edit/remove a user.


Evaluation
----------

We want to test

* if you have a basic understanding of AngularJS
* if you have a basic understanding of HTML5 and CSS3
* how you work (mastering working environment)

We do not need to have a complete working solution in the end.
The Application has to run only in the newest version of a modern browser.



