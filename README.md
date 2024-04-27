# Wild-link API
Wild Link is a groundbreaking web application designed to harness the power of collective goodwill for the conservation of wildlife. Much like popular crowdfunding platforms, Wild Link provides a seamless interface for users to create and support campaigns dedicated solely to wildlife causes.

Wild Link is a groundbreaking web application designed to harness the power of collective goodwill for the conservation of wildlife. Much like popular crowdfunding platforms, Wild Link provides a seamless interface for users to create and support campaigns dedicated solely to wildlife causes. Whether it's protecting endangered species, preserving vital habitats, or funding research initiatives, Wild Link empowers users to directly contribute to the well-being of our planet's diverse flora and fauna. With its intuitive design and robust features, Wild Link serves as a virtual hub where passionate individuals, organizations, and wildlife enthusiasts unite to make a tangible difference in the conservation efforts worldwide. Join the Wild Link community today and be a part of the movement to safeguard our planet's natural treasures for generations to come.

## Our Dev Team 

### David Charmicheal
David is our lead student developer. He is passionate about wildlife and volunteers at a local wildlife rehabilitation hospital. He dreams of a future where technology is combined with nature to ensure healthy thriving ecosystems for all living things that call them home. You can often find him exploring the forests, mountains and beaches of Vancouver Island

David can be reached at LinkedIn (https://www.linkedin.com/in/davidb-carmichael/), Github (https://github.com/Carmichaeldb/), and via email at (carmichael.db88@gmail.com)

### Desiree Ingram 
Desiree is our UX/UI designer. They have a keen eye for detail, focused on creating intuitive user interfaces that enhance user experience. When not coding, reading new documentation, and then trying new experiments. They can be found out in their vegtable garden, hiking, and knitting on a beautiful Vancouver Island beach. 

Desiree can be reached at Github (https://github.com/Kershia1), LinkedIn (www.linkedin.com/in/desiree-ingram-0b32b0282) and via email at (dmi.bedard@outlook.com)

### Paul Fromby
A web development student at LightHouse Labs bootcamp. I'm passionate about coding and enjoy crafting immersive web experiences. I thrive on challenges and believe in the power of collaboration. Outside of coding, I love exploring new technologies and the outdoors.

Paul can be reached at on Gitbub at (https://github.com/pformb) and via email at (paulformby@icloud.com)

!["Home Page"](https://github.com/pformb/wild-link/blob/master/frontend/public/WL-Home.png?raw=true)

!["Organizations Page "](https://github.com/pformb/wild-link/blob/master/frontend/public/WL-Orgs.png?raw=true)

!["Patients Page"](https://github.com/pformb/wild-link/blob/master/frontend/public/WL-OrgPatients.png?raw=true)

!["Users Dashboard"](https://github.com/pformb/wild-link/blob/master/frontend/public/WL-UserDashboard.png?raw=true)

!["Admin Dashboard"](https://github.com/pformb/wild-link/blob/master/frontend/public/WL-AdminDashboard.png?raw=true)

!["Donation Page"](https://github.com/pformb/wild-link/blob/master/frontend/public/WL-Donation.png?raw=true)

!["Patients List "](https://github.com/pformb/wild-link/blob/master/frontend/public/WL-AdminPatientList.png?raw=true)

!["Patients Story"](https://github.com/pformb/wild-link/blob/master/frontend/public/WL-PatientModal.png?raw=true)

!["Adding a New Patient and Generating a Story "](https://github.com/pformb/wild-link/blob/master/frontend/public/WL-NewPatient.png?raw=true)

## Setup

Install dependencies with `npm install`.

## Creating The DB

Use the `psql -U linker` command to login to the PostgreSQL server with the username `linker` and the password `linker`. 

Create a database with the command `CREATE DATABASE wildlink_development;`.

Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. To be able to use the OPEN AI story generation you must supply an OPEN AI API Key.

```
PGHOST=localhost
PGUSER=linker
PGDATABASE=wildlink_development
PGPASSWORD=linker
PGPORT=5432

ACCESS_TOKEN_SECRET=supersecrettoken
OPENAI_API_KEY= *INSERT OPEN AI API KEY HERE*
```

## Seeding

Ensure database wildlife_development is set up with the correct user and the .env.development file is created. From the wildlink directory enter `cd backend` in terminal to navigate into the backend directory. Use `npm run dbreset` to seed and reseed the database.


## Run The Servers

Ensure both servers are running by following these instructions.

Run the backend server in terminal by navigating to the backend directory using `cd backend` from the wildlife directory and enter:
```sh
npm start
```

Run the frontend server in another terminal tab or window by navigating to the frontend directory using `cd frontend` from the wildlife directory and enter:
```sh
npm start
```

Once both servers are running navigate to `localhost:3000` in your browser and you are up and running! 

## User and Admin Crednetials

User: emily@email.com
Password: password

Admin: mars@marswildlife.com
Password: password