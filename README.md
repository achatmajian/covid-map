# COVID-19 Map

This project was used to show areas of the United States with confirmed cases of the COVID-19 pandemic. 

## How To Use

Each green spot on the map represents a county of US state infected with COVID-19.
![Image of COVID-19 Map](https://i.ibb.co/hc9C551/Screen-Shot-2020-09-20-at-9-25-25-PM.png=100x20)


Clicking a green COVID-19 marker gives you information about the confirmed infection number of said county.
![When icon is clicked](https://i.ibb.co/zmQZfN7/Screen-Shot-2020-09-20-at-9-25-48-PM.png=100x20)

## Deployed Application Link

Click this link to view the deployed application: https://reverent-lamport-efefa5.netlify.app/

## Run Locally

1. Clone this repository onto your machine.
2. Type `npm i` into your terminal and press enter/return to install all packaged dependencies.
3. Type `npm start` to launch the React development server.

Note: In order to run this application locally, you will need to create a file called `.env.local` in an enviroment variable called `REACT_APP_MAPBOX_TOKEN` with a token created on the Mapbox website.

## Technologies Used

This application was built using: 
- ReactJS as front-end framework.
- Mapbox GL to render the map.
- Chart.js to render the charts.
- Netlify for deployment.
