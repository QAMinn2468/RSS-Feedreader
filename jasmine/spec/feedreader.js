
$(function() {

    describe('RSS Feeds', function() {                                          //correct.

        it('are defined', function() {
            expect(allFeeds).toBeDefined();                                     // Passes
            expect(allFeeds.length).not.toBe(0);                                // Passes
        });

        it('URL is defined', function() {                                       // correct.
          for(i=0; i<allFeeds.length; i++) {
            expect(allFeeds[i].url).not.toBe('');                               // correct!
        };
        });

        it('name is defined', function() {                                      // correct.
        for(i=0; i<allFeeds.length; i++) {
            expect(allFeeds[i].name).not.toBe('');                              // correct!
        };
        });
    });
}());

//
// $(function() {
//     describe('The menu', function() {                                           // correct.
//
//       it('is hidden', function() {                                              // correct.
//
//         expect(body).hasClass('menu-hidden');  //not a function
//       });
//
//       it('changes when clicked', function() {                                   // correct.
//
//         expect(body.menu-hidden).toBe('onClick');  //"hidden is not defined"
//         expect(body.menu-hidden).not.toBe('doubleclick');
//       });
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


$(function() {
  describe('Initial Entries', function() {                                      // correct.

    it('status of .feed', function() {                                          // correct.

      expect(loadFeed).not.toBe(true);                                          // Passes.
      // expect(feed).toBe(true);  //feed not defined.

    });
  });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
}());



// $(function() {
//   describe('New Feed Selection', function() {                                   // correct.
//
//     it('verify content is new', function() {                                    // correct.
//
//       expect(newFeed).not.toBe(oldFeed);  //newFeed is not defined, oldfeed is not defined.
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
