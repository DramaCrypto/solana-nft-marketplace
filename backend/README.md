npm version: 9.8.1, node version: 18.18.0

1. install packages "npm install"

2. make .env file based on .env.example

3. install database "npx prisma generate", "npx prisma migrate deploy"

4. run server "npm start"

After building frontend

1. remove all except "action.json" in "public" directory and remove "index.html" in "views" directory

2. copy all except "index.html" in "dist" directory in frontend project to "public" directory in backend project

3. copy "index.html" in "dist" directory in frontend project to "views" directory in backend project
