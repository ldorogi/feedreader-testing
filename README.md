# Project Feed reader testing

## Table of Contents

* [Project overview](#Project-overview)
* [Test suites](#Test-suites)
* [Test results](#Test-results)

## Project overview

In this project is given a web-based application that reads RSS feeds. Application consists of application's HTML (`./index.html`), CSS (`./css/style.css`) and JavaScript (`./js/app.js`)

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Because of that in this project is already included [Jasmine](http://jasmine.github.io/) and seven test suites in Jasmine spec file in `./jasmine/spec/feedreader.js`. 


## Test suites

* Test suit 1: this test makes sure that allFeeds variable has been defined and that it is not empty.
* Test suit 2: this test loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
* Test suit 3: this test loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
* Test suit 4: this test ensures the menu element is hidden by default.
* Test suit 5: this test ensures the menu changes visibility when the menu icon is clicked. This test have two expectations: does the menu display when clicked and does it hide when clicked again.
* Test suit 6: this test ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
* Test suit 7: this test ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.


## Test results

Wenn you load `./index.html` into a browser Jasmine visualizes wether these test passes or fail. You can see that at the botom of the loaded HTML page.
