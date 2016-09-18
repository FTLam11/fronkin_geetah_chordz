describe("Chord", function() {
  describe("name", function() {
    it("returns the name of the chord", function() {
      testChord = new Chord("maj7", "C");
      expect(testChord.name).toEqual("Cmaj7");
    });
  });

  describe("intervals", function() {
    it("returns the chord formula", function() {
      testChord = new Chord("maj7", "C");
      expect(testChord.intervals).toEqual(["1", "3", "5", "7"]);
    });
  });
});