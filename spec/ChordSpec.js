describe("Chord", function() {
  describe("name", function() {
    it("returns the name of the chord", function() {
      testChord = new Chord("Cmaj7");
      expect(testChord.name).toEqual("Cmaj7");
    });
  });
});