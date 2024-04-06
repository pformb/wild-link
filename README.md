# Wild-link API

## Setup

Install dependencies with `npm install`.

## Creating The DB

Use the `psql -U linker` command to login to the PostgreSQL server with the username `linker` and the password `linker`. 

Create a database with the command `CREATE DATABASE wildlink_development;`.

Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. 

```
PGHOST=localhost
PGUSER=linker
PGDATABASE=wildlink_development
PGPASSWORD=linker
PGPORT=5432
```

## Seeding

Run a the development server with `npm start` in the Host environment.

- Make a `GET` request to `/api/debug/reset` with `curl http://localhost:8001/api/debug/reset`.
- Use the browser to navigate to `http://localhost:8001/api/debug/reset`.

## Run The Server

Running the server normally
```sh
npm start
```

Running the server so it returns an error when saving/deleting for testing the client's error handling capabilities
```sh
npm run error
```