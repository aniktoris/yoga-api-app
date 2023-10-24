# yoga-api-app

A user-friendly and responsive single-page yoga application that interacts with [the yoga API](https://github.com/alexcumplido/yoga-api), offering users a vast collection of yoga categories, poses, and their intricate details. Explore the world of yoga, discover new asanas, and their health benefits.

## Features

1. Yoga Categories Introduction:

  * When the app loads, it displays a list of different yoga categories.
  * Each category is accompanied by a brief description providing general characteristics of that category.
  * An image of one representative yoga pose from the category is displayed to give the user a visual reference.

2. Dropdown Menu for Yoga Asanas in Sanskrit:

  * The app offers a dropdown menu that contains a list of yoga asanas in their Sanskrit names.
  * When the user selects an asana from the dropdown, they can access information about the selected yoga pose.
  * The information includes the English name of the asana, details about the pose's benefits, and an image illustrating the pose.

3. Search for Yoga Asanas by English Name:

  * Users can use a search input to find yoga asanas by typing in their English names.
  * When an English name is entered, the app provides instructions and information about the implementation of the selected asana.
  * This feature allows users to quickly access information on specific yoga poses they are interested in.
  * If the user provides incorrect input in the search feature or enters the name of a yoga asana that doesn't exist in the database, the app provides a notification 'No results found'.

## Colors
![Alt Text][colors]

[colors]: /public/colors.png

## Development

To run this project locally you will need to open `index.html` in your browser using a local server.

## Installing Dependencies

There are no dependencies needed to run the app, everything is prepared to work with vanilla JavaScript.

### Must-Have

1. Create the project structure: Organize the app's files and directories for a clean structure.
2. Create an endpoint to get yoga poses by level: Implement endpoints for fetching yoga poses based on different levels (beginner, intermediate, expert).
3. Create a page to view and search yoga poses: Develop a page that allows users to view yoga poses in sanskrit from a dropdown menu, select poses by level, and search by typing the English name of the asana.
4. Display yoga pose details by clicking on the level: Show details such as the name of the asana in English and Sanskrit, and the asana description for the selected asanas.
5. Create an endpoint to get yoga pose benefits: endpoint to fetch benefits for each yoga pose.
6. Create an endpoint to get yoga pose images: endpoint to fetch images for each yoga pose.
7. Implement search functionality: Enable users to search for yoga poses by typing the English name in the search field.
8. Display yoga pose images after typing the name in the search field: Show images of yoga poses.
9. Dropdown for Sanskrit names: Provide a dropdown menu that lists Sanskrit names of asanas.
10. Display translation and benefits after choosing from the dropdown menu: Show the Sanskrit name, translation, and benefits of the selected asana.
11. Add loading/error handling for API interactions: Ensure that the app provides feedback to the user during data retrieval from the API.
12. Responsive functionality
13. Brand/colour palette: [yoga circle](https://yogacircle.nl/)

#### Nice-to-Have

1. Filter yoga poses by category: Add a feature that allows users to filter yoga poses by category.
2. Implement a dropdown within a dropdown for category selection and then asanas names in sanskrit.
3. Prepare the repository: Maintain project's repository with proper documentation.
