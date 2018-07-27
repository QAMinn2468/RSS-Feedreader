
$(function() {

    describe('RSS Feeds', function() {                                          //correct.

        it('are defined', function() {
            expect(allFeeds).toBeDefined();                                     // Passes
            expect(allFeeds.length).not.toBe(0);                                // Passes - verify allFeeds array is not empty.
        });

        it('URL is defined', function() {                                       // correct.
          for(i=0; i<allFeeds.length; i++) {
            expect(allFeeds[i].url).toBeDefined();                              // mirror style of initial test.
            expect(allFeeds[i].url).not.toBe('');                               // correct! - loop through allFeeds array, verify url: is not an empty string.
        };
        });

        it('name is defined', function() {                                      // correct.
        for(i=0; i<allFeeds.length; i++) {
          expect(allFeeds[i].name).toBeDefined();                               // mirror style of the initial test.
          expect(allFeeds[i].name).not.toBe('');                                // correct! - loop through allFeeds array, verify name: is not an empty string
        };
        });
    });
}());                                                                           //  Suite 1 complete and passed Review!!

//
// $(function() {
//     describe('The menu', function() {                                           // correct.
//
//       it('is hidden', function() {                                              // correct.
//
//         expect($('body').hasClass('menu-hidden')).toBe(true);                   // Works!
//       });
//
//       it('changes when clicked', function() {                                   // correct.
//
//         expect(document.body.getElementsByClassName('menu-hidden')).not.toBe('');  // use .hasClass('menu-hidden') method.
//         expect(document.body.getElementsByClassName('menu-hidden')).toBe('');   // TODO: needs to listen for click event / double click event.
//       });
//     });
//
//
//          /* TODO: Write a test that ensures the menu changes
//           * visibility when the menu icon is clicked. This test
//           * should have two expectations: does the menu display when
//           * clicked and does it hide when clicked again.
//           */
// }());

// 
// $(function() {
//   describe('Initial Entries', function() {                                      // correct.
//
//     it('status of .feed', function() {                                          // correct.
//       expect($('.feed.entry').length).not.toBe(0);
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
//   describe('New Feed Selection', function() {                                   // correct.
//
//     it('verify content is new', function() {                                    // correct.
//
//       expect()                                    // Passes! New feed does not match old feed.
//     });
//
//     it('verify each entry is unique', function() {                              // correct
//
//       expect()
//     })
//   });
//
//
//           // /* TODO:  verify each .entry-link is unique. - MINE
//           // */
//
// }());
