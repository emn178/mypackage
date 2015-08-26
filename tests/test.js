(function($) {
  describe('mypackage', function() {
    it('should be successful', function() {
      var div = $('<div></div>');
      div.mypackage();
      expect(div.text()).to.be('Hello world.');
    });

    it('should be failed', function() {
      var div = $('<div></div>');
      div.mypackage();
      expect(div.text()).not.to.be('Hello world2');
    });
  });
})(jQuery);