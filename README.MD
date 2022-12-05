# About this project

This project aims to develop a solution in NodeJS to backup all RDS schemas.

The purpose is to create a practical and simple solution for this purpose.

# Necessary NPM Packages

For the project to work correctly, make sure to install the NPM packages below:

 - npm install app-root-path (necessary to acess folders in project).
 - npm install util (necessary to working function and debug in code).
 - npm install fs (module to work arround the files and directory to carry out diferent tasks).
 - npm install zlib (necessary module to activate compression functionality using Gzip)
 - npm install bluebird (improved perfomance and features to mysqdump and connections to RDS).
 - npm install dotenv (necessary to read .env variable).
 - npm install express-promise-router (alternative to npm install promise with support).
 - npm install mariadb (necessary to connect mariadb-server).
 - npm install moment (package to manager timedate).
 - npm install mysql2 (necessary to connect mysql-server).
 - npm install mysql2-promise (promise tools working correctly to mysql).
 - npm install mysqldump (package to create mysqldump schemas).
 - npm install mysqldump-rds (package necessary to create mysqldump schemas to RDS instance).
 - npm install request (simple implemetation to http request .
 - npm install request-promise (http implementation working together bluebird).
 - npm install s3 (package to connect S3 Bucket).

# .env file

Inside the project you will find a file called .env_example which should be used as a basis for creating your .env file.

Copy the .env_example variables and fill in the information needed to connect to your AWS account.

# Open-Source project open to the community

This project is managed by the GPLv3 license, that is, it is free to copy, improve and distribute.

All help and collaboration is welcome to improve the application.

# Attention project in alpha phase

The project is still in the development phase, that is, it is not finalized.

Validations and improvements in the code will be carried out in order to guarantee the proper functioning and the best possible performance.
