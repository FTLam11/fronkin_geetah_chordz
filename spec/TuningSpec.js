describe("Tuning", function() {
  describe("name", function() {
    it("returns the name of the tuning", function() {
      standard = new Tuning("EADGBE", "E");
      expect(standard.name).toEqual("EADGBE");
    });

    it("throws an error when the tuning has invalid sharps", function() {
      sharp = function() {
        invalidSharp = new Tuning("#EADGBE", "E#");
      };
      expect(sharp).toThrow();
    });

    it("throws an error when the tuning has invalid flats", function() {
      flat = function() {
        invalidFlat = new Tuning("bEADGBE", "Eb");
      };
      expect(flat).toThrow();
    });

    it("throws an error when the tuning has invalid notes", function() {
      impossible = function() {
        impossibleTuning = new Tuning("XZASWF", "E");
      }
      expect(impossible).toThrow();
    });
  });  
});