//  Test Suites

//   Loop F()

("Loop" function() {

  describe('Loop through all of the feeds', function () {

    it('verify URL is true', function() {
      expect(url).toBe(true);
    });

    it('verify name is true', function() {
      expect(name).toBe(true);
    });
  });
})();

// The Menu F()

("The Menu" function() {

  describe('menu element visibility', function() {

    it('menu default is hidden', function() {
      expect(menuHidden).toBe(true);
    });

    it('menu icon changes menu-hidden', function() {
      expect(menuHidden:before).not.toBe(menuHidden:after);
    });
  });
});

//Initial Entries F()

("Intial Entries" function() {

  describe('verify .feed is true', function() {

    it('after loadFeed is complete, .feed is true', function() {
      if (loadFeed = done) {
        expect(.feed[0]).toBe(true);
      };
    });
  });
});

//New Feed Selection F()

("New Feed Selection" function() {

  describe('new feed does not match old feed', function() {

    it('after loadFeed complete', function() {
      if( loadFeed = done) {
        expect(newFeed).not.toBe(oldFeed);
      }
    })
  })
})
