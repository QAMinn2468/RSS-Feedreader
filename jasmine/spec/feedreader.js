
$(function() {
  describe('RSS Feeds', function() {                                            //correct.

    it('are defined', function() {
      expect(allFeeds).toBeDefined();                                           // Passes
      expect(allFeeds.length).not.toBe(0);                                      // Passes - verify allFeeds array is not empty.
    });

    it('URL is defined', function() {                                           // correct.
      for(i=0; i<allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();                                  // mirror style of initial test.
        expect(allFeeds[i].url).not.toBe('');                                   // correct! - loop through allFeeds array, verify url: is not an empty string.
      };
    });

    it('name is defined', function() {                                          // correct.
      for(i=0; i<allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();                                 // mirror style of the initial test.
        expect(allFeeds[i].name).not.toBe('');                                  // correct! - loop through allFeeds array, verify name: is not an empty string
      };
    });
  });
}());                                                                           //  Suite 1 complete and passed Review!!


$(function() {
  describe('The menu', function() {                                             // correct.

    const menu = document.querySelector('.menu-icon-link');

    it('is hidden', function() {                                                // correct.
      expect($('body').hasClass('menu-hidden')).toBe(true);                     // when page loads, menu is hidden.
    });

    it('menu icon changes menu-hidden', function() {                            // correct.
      menu.click();                                                             // click - class Menu-hidden is removed. Menu is shown.
      expect($('body').hasClass('menu-hidden')).toBe(false);
      menu.click();                                                             // second click - class Menu-hidden is returned. Menu hides once more.
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });
}());                                                                           // Suite 2 complete!


$(function() {
  describe('Initial Entries', function() {                                      // correct.
    beforeEach(function(done) {                                                 // Before running test, ensure loadFeed() is complete.
      done();
    });

    it('status of feed', function() {                                           // correct.
      expect($('feed.entry.length')).not.toBe(0);                                      // array of feed entries should not be empty.
    });
  });
}());                                                                           // Suite 3 complete!



$(function() {
  describe('New Feed Selection', () => {
    let loadA = [];                                                             // declare variables in describe to obtain correct scope. Use let so value can be reassigned later.
    let loadB = [];

    beforeEach( () => {

      loadFeed(1, () => {                                                       // I like my feed to finish with index 0.  Therefore, I ran index 1 and then ran index 0.
        loadA = $('feed').textContent;                                          // comparing the textContent of the two feeds.
        loadFeed(0, () => {
          loadB = $('feed').textContent;
        });
      });
    });

    it('verify content is new', () => {
      expect(loadA === loadB).toBe(false)});                                     // verify old feed is not equal to new feed.
  });
}());
