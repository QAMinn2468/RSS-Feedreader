
$(function() {

    describe('RSS Feeds', function() {                                          //correct.
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();                                     // Passes
            expect(allFeeds.length).not.toBe(0);                                // Passes
        });

        // it('URL is defined', function() {                         //is called.
        //
        //     // expect(allFeeds.forEach.url).toBe(true);
        //
        // });

        // it('name is defined', function() {                          // is called.
        //     expect(allFeeds.name).toBe(true);
        // });
        //


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    });
}());

//
// $(function() {
//     describe('The menu', function() {                                           // correct.
//
//       it('is hidden', function() {                                              // This function is called. "The body is not defined"
//
//       //   expect(body).hasClass('menu-hidden');  //looks right, but isn't.
//       });
//
//       it('changes when clicked', function() {                                   // This function is called. "The body is not defined"
//       //
//       //   expect(body.menu-hidden).toBe('onClick');
//       //   expect(body.menu-hidden).not.toBe('doubleclick');
//       // });
//     });
//
//         /* TODO: Write a test that ensures the menu element is
//          * hidden by default. You'll have to analyze the HTML and
//          * the CSS to determine how we're performing the
//          * hiding/showing of the menu element.
//          */
//
//          /* TODO: Write a test that ensures the menu changes
//           * visibility when the menu icon is clicked. This test
//           * should have two expectations: does the menu display when
//           * clicked and does it hide when clicked again.
//           */
// }());


// $(function() {
//   describe('Initial Entries', function() {                                      // correct.
//
//     it('status of .feed', function() {                                          // correct.
//
//       expect(loadFeed).not.toBe(true);                                          // Passes.
//       // expect(.feed).toBe(true);
//
//     });
//   });
//
//         /* TODO: Write a test that ensures when the loadFeed
//          * function is called and completes its work, there is at least
//          * a single .entry element within the .feed container.
//          * Remember, loadFeed() is asynchronous so this test will require
//          * the use of Jasmine's beforeEach and asynchronous done() function.
//          */
// }());



// $(function() {
//   describe('New Feed Selection', function() {                                   // correct
//
//     it('verify content is new', function() {      //unclear, needs rule.
//
//       // expect(newFeed).not.toBe(oldFeed);
//     });
//   });
//
//           /* TODO: Write a test that ensures when a new feed is loaded
//          * by the loadFeed function that the content actually changes.
//          * Remember, loadFeed() is asynchronous.
//          */
//
//           /* TODO:  verify each .entry-link is unique.
//           */
//
// }());
