# Resume Builder

A React application to create and design your resume and convert it into PDF.

## Getting Started

Clone the repository

    `git clone https://github.com/Benin-Tom-Jose/resume_builder.git`
    `cd resume_builder`

## How to run the application?

You can run this application in either of the 2 ways specified below,

    1. Using Docker(preferable)
    2. Using npm

### Using Docker

If your system has docker already installed, execute the following commands

    `docker build -t resume_builder_image .`
    `docker run --name resume_builder_app -p 80:80 resume_builder_image`

This will run the app in the production mode.\
Open [http://localhost](http://localhost) to view it in the browser.

### Using npm

In the terminal window, execute the following commands

    `npm install`
    `npm start`

This will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
