describe("Tuning", function() {
  describe("name", function() {
    it("returns the name of the tuning", function() {
      standard = new Tuning("EADGBE", "E");
      expect(standard.name).toEqual("EADGBE");
    });

    it("raises an error when the tuning has invalid sharps", function() {
      sharp = new Tuning("#EADGBE", "E#");
      expect(function() {
        standard.name;
      }).toThrowError(SyntaxError, "The name of this tuning is not valid.");
    });
  });  
});