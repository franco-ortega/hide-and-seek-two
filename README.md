### Dependencies

1. NextJS - `npx create-next-app@latest .`
1. Sass - `npm install --save-dev sass`
1. Testing - `npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom`

### Pages

1. Home
1. Play
1. Results

### Components

1. Home
   1. Intro
   1. Form - Select Options:
      1. Number of players
         1. How many humans
         1. How many Bots
      1. Difficulty Level
         1. Easy - 3 spaces
         1. Medium - 4 spaces
         1. Hard - 5 spaces
      1. Game Length
         1. 5 rounds
         1. 10 rounds
         1. 15 rounds
      1. Error handling to ensure all fields are filled out
1. Names
   1. Enter names of Human Players
   1. Generate names of Bot Players
1. Play
   1. Play Area
   1. Scoreboard
1. Results
   1. List of Player Scores with dates
