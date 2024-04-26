# Wild-link API
Wild Link is a groundbreaking web application designed to harness the power of collective goodwill for the conservation of wildlife. Much like popular crowdfunding platforms, Wild Link provides a seamless interface for users to create and support campaigns dedicated solely to wildlife causes.

Wild Link is a groundbreaking web application designed to harness the power of collective goodwill for the conservation of wildlife. Much like popular crowdfunding platforms, Wild Link provides a seamless interface for users to create and support campaigns dedicated solely to wildlife causes. Whether it's protecting endangered species, preserving vital habitats, or funding research initiatives, Wild Link empowers users to directly contribute to the well-being of our planet's diverse flora and fauna. With its intuitive design and robust features, Wild Link serves as a virtual hub where passionate individuals, organizations, and wildlife enthusiasts unite to make a tangible difference in the conservation efforts worldwide. Join the Wild Link community today and be a part of the movement to safeguard our planet's natural treasures for generations to come.

!["Home Page"]()

!["Organizations Page "]()

!["Patients Page"]()

!["Users Dashboard"]()

!["Admin Dashboard"]()

!["Donation Page"]()

!["Organizations Patients List"]()

!["Patients List "]()

!["Adding a New Patient and Generating a Story "]()



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