/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have an URL', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
         });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have a name', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
         });
    });


    /* Test suite  "The menu" */
    describe('The menu', function() {

        /* This test ensures the menu element is
         * hidden by default. 
         * Hiding/showing of the menu element is realised with class menu-hidden.
         * So we check if the body has this class.
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu icon is clicked', function() {
            // first click on menu icon
            $('.menu-icon-link').click();
            // check te state of menu - expected is to be visible (has no class of 'menu-hidden')
            expect($('body').hasClass('menu-hidden')).toBe(false);
            // second click on menu icon
            $('.menu-icon-link').click();
            // check te state of menu - expected is to be hidden (has the class of 'menu-hidden')
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
          
    /* Test suite "Initial Entries" */
    describe('Initial Entries', function() {

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach((done) => {
            loadFeed(0, () => {
                done();
            });
         });

         it('there is at least a single .entry element within the .feed container', ((done) => {
            const numEntries = document.querySelector('.feed').getElementsByClassName('entry').length;
            expect(numEntries).toBeGreaterThan(0);
            done();
         }));
    });

    /* Test suite "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
        */
        const initFeedSelection = document.querySelector('.feed').innerHTML;
        beforeEach((done) => {
            loadFeed(0, () => {
                //initFeedSelection = document.querySelector('.feed').innerHTML;
                loadFeed(1, () => {
                    done();
                });
            });
        });

        it('when a new feed is loaded the content actually changes', ((done) => {
            const newFeedSelection = document.querySelector('.feed').innerHTML;
            expect(initFeedSelection).not.toBe(newFeedSelection);
            done();
        }));

    });
         
}());
