<p align="center">
  <h3 align="center">SpaceX API Data Explorer</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <br />
    <a href="https://github.com/dirigible37/spacex_angular/issues">Report Bug</a>
    ·
    <a href="https://github.com/dirigible37/spacex_angular/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#project-components">Project Components</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This is a project showcasing AngularJS, Sass (css precompiler), Responsive UI, and SpaceX's GraphQL interface

The data we pull from SpaceX
* Launch Data
* Mission Data
* Ship Data

This project mostly utilizes Angular Material for styling, with custom sass styling throughout. 

### Built With

* [AngularJS](https://angularjs.org/)
* [Angular Material](https://material.angular.io/)
* [Apollo](https://www.apollographql.com/)
* [SpaceX GraphQL Library](https://api.spacex.land/graphql/)
* [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
* npm
* angular js
* angular material

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/dirigible37/spacex_angular
   ```
2. Install npm Packages
   ```sh
    npm install -g @angular/cli
    npm install @angular/flex-layout --save
   ```
3. Move to project directory
   ```sh
    cd spacex_angular/spacex-app-plasma/
   ```
4. Install Angular Packages
   ```sh
    ng add apollo-angular
    ng add @angular/material
   ```


<!-- COMPONENTS -->
## Project Components

* [Footer](https://github.com/dirigible37/spacex_angular/tree/develop/spacex-app-plasma/src/app/footer)
  * The footer component of the website
* [Homepage](https://github.com/dirigible37/spacex_angular/tree/develop/spacex-app-plasma/src/app/homepage)
  * The homepage with the card elements for easy navigation
* [Launches Page](https://github.com/dirigible37/spacex_angular/tree/develop/spacex-app-plasma/src/app/launches)
  * A page to explor previous SpaceX launches
  * Includes a search function
  * Pulls all launches based on GET_PAST_LAUNCHES GraphQL query
* [Missions Page](https://github.com/dirigible37/spacex_angular/tree/develop/spacex-app-plasma/src/app/missions)
  * A page to explor previous SpaceX missions, with links and summaries
  * Pulls all launches based on GET_MISSION_OBJECT GraphQL query
* [Ships Page](https://github.com/dirigible37/spacex_angular/tree/develop/spacex-app-plasma/src/app/ships)
  * A page to explor all of the ships in the SpaceX fleet, along with websites and photos
  * Pulls all launches based on GET_ALL_SHIPS GraphQL query