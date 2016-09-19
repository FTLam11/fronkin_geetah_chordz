describe("Fretboard", function() {
  describe("fretboard", function() {
    it("returns a mapping of notes to each fret", function() {
      testBoard = new Fretboard(["E", "A", "D", "G", "B", "E"], ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"])
      eString = testBoard.fretboard[0];
      expect(eString).toEqual(["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"]);
    });
  });
});