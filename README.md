# AI Agent Skills Repository

A full-stack CRUD application for managing skills used by AI agents. Built with the MEN stack (MongoDB, Express, Node.js) and EJS templating.

## What It Does

- Create, Read, Update, and Delete skills for AI agents
- Each skill has a name, description, and image URL
- Data persists in MongoDB Atlas (cloud database)

## Tech Stack

- Node.js / Express.js
- MongoDB Atlas / Mongoose
- EJS (server-side templating)
- method-override (PUT/DELETE from forms)

## RESTful Routes

| HTTP Method | Route             | Action  |
|-------------|-------------------|---------|
| GET         | /skills           | Index   |
| GET         | /skills/new       | New     |
| POST        | /skills           | Create  |
| GET         | /skills/:id       | Show    |
| GET         | /skills/:id/edit  | Edit    |
| PUT         | /skills/:id       | Update  |
| DELETE      | /skills/:id       | Delete  |

## How I Built It (Step by Step)

- Initialized project, installed dependencies (express, mongoose, ejs, dotenv, method-override)
- Set up Express server with middleware and test route
- Defined Skill model and Mongoose schema
- Created MongoDB Atlas cluster, configured database access and network access
- Connected app to MongoDB Atlas via .env connection string
- Built NEW route and form to create skills
- Built CREATE route to save skills to database
- Built INDEX route to display all skills
- Built SHOW route to display individual skill details
- Built EDIT route and pre-filled form for updating skills
- Built UPDATE route to save edits to database
- Built DELETE route with inline form button on show page
- Tested each route in the browser before moving to the next

## Schema
```js
{
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
  video: String,
  aiSummary: String
}
```

## Roadmap

- **YouTube Video Integration** - Use the `video` field to store YouTube URLs and display video thumbnails or embedded players on the show page. AI agents can be trained with video content too.
- **AI Summary via API** - Use the `aiSummary` field to store responses from a web search API (like Perplexity). When a skill is created, auto-fetch an AI-generated summary based on the skill name and description.
- **Postman Testing** - Set up Postman to test API endpoints directly, useful for the AI summary integration.
- **Styling** - Add CSS to improve the UI (deferred to prioritize functionality first).

## Setup

1. Clone the repo
2. Run `npm install`
3. Create a `.env` file with your MongoDB connection string: `MONGODB_URI=your_connection_string`
4. Run `node server.js`
5. Visit `http://localhost:3000`