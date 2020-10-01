
<!-- Please update value in the {}  -->

<h1 align="center">Pig Dice Game</h1>

<div align="center">
   Solution for a challenge from <a href="https://www.udemy.com/course/the-complete-javascript-course/" target="_blank">Jonas Schmedtmann</a>.
</div>

<div align="center">
  <h3>
    <a href="https://pig-game-omega.vercel.app/">
      Site
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](https://res.cloudinary.com/nimbus8/image/upload/v1601581044/portfolio/pig-game-omega.vercel.app__s9fs5c.png)

Dice Game Based off of Jonas Schmedtmann's Pig game project from his Complete JavaScript Udemy course. Learning to:

- Manipulate the DOM.
- Structure a simple Javascript app.
- Using functions and basic JavaScript to problem solve.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- JavaScript
- CSS
- HTML

## Features

### GAME RULES

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

### Extra CHALLENGES

Change the game to follow these rules:

- A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
- Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
- Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/HermanLD/pig-game

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example -->

- [The Complete JavaScript Course 2020: Build Real Projects! by Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/)

## Contact

- Website [hermandardon.dev](https://hermandardon.dev)
- GitHub [@HermanLD](https://github.com/HermanLD)
- linkedIn [herman-dardon](https://www.linkedin.com/in/herman-dardon/)
