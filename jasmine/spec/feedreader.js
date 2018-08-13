
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


$(function() {
    describe('The menu', function() {                                           // correct.

      it('is hidden', function() {                                              // correct.

        expect($('body').hasClass('menu-hidden')).toBe(true);                   // when page loads, menu is hidden.
      });

      it('menu icon changes menu-hidden', function() {                          // correct.
        menu.click();                                                           // click - class Menu-hidden is removed. Menu is shown.
        expect($('body').hasClass('menu-hidden')).toBe(false);
        menu.click();                                                           // second click - class Menu-hidden is returned. Menu hides once more.
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });
    });
}());                                                                           // Suite 2 complete!


$(function() {
  describe('Initial Entries', function() {                                      // correct.

    beforeEach(function loadFeed(done) {                                        // Before running test, ensure loadFeed() is complete.
      done();
    });

    it('status of feed', function() {                                           // correct.
      expect($('feed.entry')).not.toBe(0);                                      // array of feed entries should not be empty.
    });
  });
  }());                                                                       // Suite 3 complete!



$(function() {
  let loadA = [];
  let loadB = [];

  describe('New Feed Selection', () => {


    beforeEach(done => {                                                        // Works - don't touch!!
      let fE = feed.children;                                                 // Works don't touch!

      loadFeed(1);
      console.log(fE);                                                          // Works!  length is 25 for all 4 feeds.  Checked each individually.
      // loadA = fE;

      Array.from(fE).forEach(entry =>
      loadA.push(entry.textContent));

      loadFeed(3, done);
      // loadB = fE;

      Array.from(fE).forEach(entry =>
      loadB.push(entry.textContent));
      });

    it('verify content is new', () =>

      expect(loadA === loadB).toBe(false));                                      // verify old feed is not equal to new feed.


    // it('verify each entry is unique', function() {             // TODO:
    //   for (i = 0 , i < feed.length, i++) {                                      // iterate through the array, verify all entries are unique.
    //   expect(feed.id[i] === feed.id[i+1]).toBe(false);
    //
    });
}());
