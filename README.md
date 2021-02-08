# Webloom-Dashboard

## Development server

Run `docker-compose up` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.  
Make sure you `export USER=$(id -u)` before running docker-compose or add it to `.bashrc` so you dont have to export it everytime.

## Access Angular CLI

Run `docker-compose run web sh` to get an interactive shell.  
From here all cli commands will work like `npm install`
