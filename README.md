# Next.js 15: Slow API Call Causes Blank Page Until Data Loads

This repository demonstrates a common issue in Next.js 15 applications where a slow API call on a page can result in a blank page initially, only displaying content after the API call completes.  This is because the page renders before the API response is received.

## Bug

The `pages/about.js` component makes an API call to `/api/data`, which simulates a 2-second delay.  During this delay, the page remains blank.  The solution below addresses this by adding loading state handling.

## Solution

The `pages/aboutSolution.js` shows how to implement loading state management to display a loading indicator while waiting for the API data.  This provides a better user experience.

## Setup

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about` and `/aboutsolution` to see the difference between buggy and fixed version of the About page.