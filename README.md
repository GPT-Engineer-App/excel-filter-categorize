# excel-filter-categorize

Create an app that takes an Excel file as input and outputs a table based on specific filtering and categorization criteria. The app should: 1. Filter data to only include rows where 'IS Seriennummer' == 1. 2. Calculate the total sum for each customer. 3. Count the number of modules for categorization based on filtered data. 4. Merge the total sum and module count data. 5. Categorize customers based on the number of modules. 6. Include an easy validation mechanism and output a new table with validation results. The table should reflect calculations similar to the provided example, including columns for Kunde, Gesamtsumme, Anzahl der Module, and Durchschnittliche Kosten DC, with a method as described.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/excel-filter-categorize.git
cd excel-filter-categorize
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
