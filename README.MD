# Blog Web Application

## Project Description

This project is a simple Blog Web Application built using **Node.js**, **Express.js**, and **EJS**.
The application allows users to create, view, edit, and delete blog posts.

Posts are stored temporarily in memory and do not persist between sessions since no database is used.

The project demonstrates basic server-side web development concepts such as routing, templating, and form handling.

---

## Features

### Create Posts

Users can create new blog posts using a form.

### View Posts

All created posts are displayed on the homepage.

### Edit Posts

Users can edit existing blog posts.

### Delete Posts

Users can remove posts from the blog.

### Responsive Styling

The application includes basic CSS styling for a clean and readable layout.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- HTML5
- CSS3

## Installation

1. Clone or download the project.

2. Install dependencies:

```
npm install
```

3. Start the server:

```
node app.js
```

4. Open your browser and go to:

```
http://localhost:3000
```

---

## How the Application Works

1. The server is created using Express.js.
2. EJS is used as the templating engine to generate dynamic HTML pages.
3. Blog posts are stored in a temporary array on the server.
4. Users interact with the application through forms to create and edit posts.
5. Routes handle displaying pages and processing form submissions.
