describe("Chord", function() {
  beforeEach(function() {
    testChord = new Chord("C", "maj7");
  });

  describe("name", function() {
    it("returns the name of the chord", function() {
      expect(testChord.name).toEqual("Cmaj7");
    });
  });

  describe("intervals", function() {
    it("returns the chord formula", function() {
      expect(testChord.intervals).toEqual(["1", "3", "5", "7"]);
    });
  });
});