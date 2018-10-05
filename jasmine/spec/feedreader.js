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

        /*
        * Loops through the feed and test if the url is empty or undefined
        */
         it('Each feed should have a url defined', function() {
             for (let feed of allFeeds) {
                 expect(feed.url).toBeDefined();
                 expect(feed.url.length).not.toBe(0);
             }
         });

         /*
         * Loops through the feed and test if the name is empty or undefined
         */
         it('Each feed should have a name defined', function() {
             for (let feed of allFeeds) {
                 expect(feed.name).toBeDefined();
                 expect(feed.name.length).not.toBe(0);
             }
         });
    });


    /*
    * Test Suite for the hamburger menu.
    */
    describe('The menu', function () {

         /*
         * Tests if the menu is hidden initially when the page is loaded.
         */
         it('The menu should be hidden by default', function () {
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /*
         * Tests if the menu will hide
         */
          it('The menu should be visible when clicked and disappear when clicked again', function () {
              $('.menu-icon-link').trigger('click');
              expect($('body').hasClass('menu-hidden')).toBe(false);
              $('.menu-icon-link').trigger('click');
              expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    /*
    * Test Suite for the feed.
    */
    describe('Initial Entries', function () {

        /*
        * Before each test, load the feed and signal for the test after the function
        * is completed.
        */
        beforeEach(function (done) {
            // loadFeed(0, function () {
            //     done();
            // });
            loadFeed(0, done);
        });

        /*
        * Tests to see if the feed is loaded initially.
        */
         it('The feed container should contain atleast one feed', function () {
             expect($('.feed').children().length).not.toBe(0);
         });
    });

    /*
    * Test Suite for feed changing.
    */
    describe('New Feed Selection', function () {
        let prevFeed;
        beforeEach(function (done) {
            loadFeed(0, function () {
                // Saving previous feed html to be used later for comparison
                prevFeed = $('.feed').html();
                loadFeed(1, done);
            });
        });
        
        /*
        * Testing if the feed has changed when loading a new feed.
        */
         it('The feed should change', function () {
             expect($('.feed').html()).not.toBe(prevFeed);
         });
     });
}());
