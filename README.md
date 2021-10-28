# Express.js Meme API
In the previous assignment, we explored server-side rendering in an Express.js application. Now we will learn to build a REST API using Express.js. The objectives of this assignment are:
1. Practice different kinds of HTTP methods
2. Test our built requests with Postman

## Setup
You know the drill by now. The first steps for this assignment are:
1. Open your terminal and navigate to your dedicated assignments folder.
2. Then clone this assignment repo on your local machine.
3. Now open the assignment folder on VSCode.

This time we have already started the `app.js` file for you. Looking at it you will find:
1. Initial setup for your Express server.
2. A variable called `memes` that we will use to apply our REST API operations on.

**NOTE**: Please don't make any changes to the `memes` variable in the code.

Run `npm install` to install all the packages listed in the `package.json` file.

## Requirements
1. Create an API endpoint to return all memes.
2. Create an API endpoint to return a single meme based on its ID.
3. Create an API endpoint to filter memes by genre.
4. Create an API endpoint to add a new meme.
5. Create an API endpoint to update an existing meme.
6. Create an API endpoint to delete a meme based on its ID.

You will find some more guidelines for each of these requirements below.

### Part 1: API endpoint to return all memes
When you send a **GET request** to the endpoint `/memes`, your server must return all the memes as an array in the response along with the HTTP status code 200.

### Part 2: API endpoint to return a single meme
For example, if you send a **GET request** to the endpoint `/meme/1` your server must be able to identify the ID 1 from the request URL.

If this ID does not exist, you server must respond with status code 422 and text message saying "meme not found".
If the ID exists, your server must respond with status code 200 and send the matching meme object in the response.

### Part 3: API endpoint to filter memes by genre
In this request we will use a query parameter called genre. For example, you may send a **GET request** to the endpoint `/memes/filter?genre=comedy`. Your server must identify the query value of "comedy" from the request URL, then we will filter our list of memes and return the matching list of memes as an array in the response with status code 200.

If the query parameter not provided, then server must respond with status code 400 and text messge saying "invalid query parameter".

### Part 4: API endpoint to add a new meme
When you send a **POST request** to the endpoint `/memes` and your request body includes the details of a new meme, your server must process this request following these rules:
- If the request body does not include all the data points for the meme, respond with status code 400 and a text message saying "cannot create meme due to missing details".
- If the request body includes all required data points, push the new meme to the array of memes and generate an ID for it. Then the server must respond with status code 201 and send the newly created meme object in the response.

**NOTE**: The ID for the new meme must be generated by the server. If you observe the IDs in the memes array you will see they are arranged in ascending order starting from 0. So you will need some logic to generate the next ID for each new meme.

### Part 5: API endpoint to update an existing meme
For example, if you send a **PUT request** to the endpoint `/meme/1` and your request body includes a new meme name, your server must be able to identify the ID 1 from the request URL and the new meme name from the request body.
If this ID does not exist, you server must respond with status code 422 and a text message saying "meme not found".
If the ID exists, your server must update the details of the matching meme and then respond with status code 200 and send the updated meme object in the response.

This API endpoint should be able to update any of the meme properties: name, imageSource or genre.

### Part 6: API endpoint to delete a meme based on its ID
For example, if you send a **DELETE request** to the endpoint `/meme/1` your server must be able to identify the ID 1 from the request URL.
If this ID does not exist, you server must respond with status code 422 and a text message saying "meme not found".
If the ID exists, your server must delete the matching meme from the memes array and respond with status code 200 to indicate that the delete operation has been done along with the new memes list as an array in the response.

---
The above guidelines are to help you understand how the memes REST API will function, covering the most commonly used request methods. Some endpoints will use a path parameter, some will use a query parameter and some will include a request body. You can refer to the module 1 lessons on Canvas to learn how to implement these features. And as always Google and Stackoverflow are your best friends!

Throughout the implementation, you will be using Postman to test if your API endpoints are working as intended.

## Submission
Run `npm test` to test your code. If it shows all tests have passed then you're good to go.

Since this is a group assignment and you will be sharing the assignment repo with your group member, you can perform intermediate commits and pushes as required to share your code within your group.

Once you're ready to submit the assignment, follow these steps on your terminal:
1. Stage your changes to be committed: `git add .`
2. Commit your final changes: `git commit -m "solve assignment"`
3. Push your commit to the main branch of your assignment repo: `git push origin main`

After your changes are pushed, return to this assignment on Canvas for the final step of submission.

---
## References
- https://stackabuse.com/get-query-strings-and-parameters-in-express-js/
- https://www.restapitutorial.com/lessons/httpmethods.html