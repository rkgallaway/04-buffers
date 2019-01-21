![CF](http://i.imgur.com/7v5ASc8.png) LAB 04
=================================================

## Lab 04 - buffers

### Author: Ryan Gallaway

### Links and Resources

[![Build Status](https://www.travis-ci.com/rkgallaway/04-buffers.svg?branch=master)](https://www.travis-ci.com/rkgallaway/04-buffers)

* [repo](https://github.com/rkgallaway/04-buffers)
* [travis](https://www.travis-ci.com/rkgallaway/04-buffers)
* [heroku](https://lab-04-buffers.herokuapp.com)

### Modules
#### `modulename.js`
##### Exported Values and Methods

### Collaborated with:
Brent Woodward
Becca Lee
Heather Cherewaty
Siobhan Niess

## Assignment 1: Code that writes code ...
* Using only buffers and bit manipulation, generate a file in the `files` folder called `loop.js` that initiates an array with 3 people's names, iterates them with a forEach loop, and console.log's each value.
* You may not use `Buffer.from()` other than to create a new, empty buffer
* Verify your work by running `node loop.js` from within the `files` folder and seeing the array items printed out.

## Assignment 2: Create an `<article>`
* Using only buffers and bit manipulation, read the file `pair-programming.txt` from the `files` folder and make the following transformations:
  * Wrap all of the content within `<article>` tags
  * Wrap each section title in an `<h2>`
  * Convert each sentence in each paragraph into a list item.
  * Convert each of the numbered sections in the bottom of the document to `<h3>` tags.
* You may not use .toString()
* Save the file as `pair-programming.html`
* Verify your work by rendering it in a browser

### Setup
#### `.env` requirements
* `PORT` - port described in ENV

#### Running the app
* `npm start`
* In terminal: `node index.js` to create loop.js
* In terminal: `node ./files/create-html.js` to create pair-programming.html


#### Tests
* node test
<!-- * What assertions were made?
* What assertions need to be / should be made? -->

