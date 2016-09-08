describe("Tuning", function() {
  describe("name", function() {
    it("returns the name of the tuning", function() {
      standard = new Tuning("EADGBE", "E");
      expect(standard.name).toEqual("EADGBE");
    });

    it("throws an error when the tuning has invalid casing", function() {
      lowerCase = function() {
        booooooLowerCase = new Tuning("eADgBE", "E");
      };
      expect(lowerCase).toThrow();
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

  describe("notes", function() {
    it("returns a collection of individual notes that form the tuning", function() {
      algernon = new Tuning("DAEAC#E", "D");
      expect(algernon.notes).toEqual(["D","A","E","A","C#","E"]);
    });
  });

  describe("flattened", function() {
    it("replaces all sharps with flats and returns a collection of individual notes that form the tuning", function() {
      algernon = new Tuning("DAEAC#E", "D");
      expect(algernon.flattened).toEqual(["D","A","E","A","Db","E"]);
    });
  });

  describe("sharpened", function() {
    it("replaces all flats with sharps and returns a collection of individual notes that form the tuning", function() {
      eb = new Tuning("EbADGBE", "Eb");
      expect(eb.sharpened).toEqual(["D#","A","D","G","B","E"]);
    });
  });

  describe("root", function() {
    it("uppercases and returns the given root", function() {
      eb = new Tuning("EbADGBE", "Eb");
      expect(eb.root).toEqual("Eb");
    });
  });  
});