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
      };
      expect(impossible).toThrow();
    });
  });

  describe("notes", function() {
    it("returns a collection of individual notes that form the tuning", function() {
      algernon = new Tuning("DAEAC#E", "D");
      expect(algernon.notes).toEqual(["D", "A", "E", "A", "C#", "E"]);
    });
  });

  describe("flattened", function() {
    it("replaces each sharp with an equivalent flat and returns a collection of individual notes that form the tuning", function() {
      algernon = new Tuning("DAEAC#E", "D");
      expect(algernon.flattened).toEqual(["D", "A", "E", "A", "Db", "E"]);
    });

    it("replaces identical sharps with equivalent flats and returns a collection of individual notes that form the tuning", function() {
      schizophrenia = new Tuning("F#F#GGAA", "F#");
      expect(schizophrenia.flattened).toEqual(["Gb", "Gb", "G", "G", "A", "A"]);
    });
  });

  describe("sharpened", function() {
    it("replaces each flat with an equivalent sharp and returns a collection of individual notes that form the tuning", function() {
      eb = new Tuning("EbADGBE", "Eb");
      expect(eb.sharpened).toEqual(["D#", "A", "D", "G", "B", "E"]);
    });

    it("replaces identical flats with equivalent sharps and returns a collection of individual notes that form the tuning", function() {
      becuz = new Tuning("GbGbGbGbEB", "Gb");
      expect(becuz.sharpened).toEqual(["F#", "F#", "F#", "F#", "E", "B"]);
    });
  });

  describe("intervals", function() {
    describe("when the tuning contains a flat, it normalizes all notes with sharps to flats and", function() {
      it("returns a collection of objects describing a note, interval, color, and chord interval", function() {
        eb = new Tuning("EbADGBE", "Eb");
        expect(eb.intervals).toEqual([{ note: 'Eb', interval: '1', color: '#d10000', chordInterval: undefined }, { note: 'E', interval: 'b2', color: '#FFFDE7', chordInterval: undefined }, { note: 'F', interval: '2', color: '#ff6622', chordInterval: undefined }, { note: 'Gb', interval: 'b3', color: '#E5E4D0', chordInterval: undefined }, { note: 'G', interval: '3', color: '#ffda21', chordInterval: undefined }, { note: 'Ab', interval: '4', color: '#33dd00', chordInterval: undefined }, { note: 'A', interval: 'b5', color: '#BFBEAD', chordInterval: undefined }, { note: 'Bb', interval: '5', color: '#1133cc', chordInterval: undefined }, { note: 'B', interval: '#5', color: '#BAB9A9', chordInterval: undefined }, { note: 'C', interval: '6', color: '#220066', chordInterval: undefined }, { note: 'Db', interval: 'b7', color: '#7F7F74', chordInterval: undefined }, { note: 'D', interval: '7', color: '#330044', chordInterval: undefined }]);
      });
    });

    describe("when the tuning contains a sharp, it normalizes all notes with flats to sharps and", function() {
      it("returns a mapping of note intervals to all sharp normalized notes when the tuning contains a sharp", function() {
        algernon = new Tuning("DAEAC#E", "D");
        expect(algernon.intervals).toEqual([{ note: 'D', interval: '1', color: '#d10000', chordInterval: undefined }, { note: 'D#', interval: 'b2', color: '#FFFDE7', chordInterval: undefined }, { note: 'E', interval: '2', color: '#ff6622', chordInterval: undefined }, { note: 'F', interval: 'b3', color: '#E5E4D0', chordInterval: undefined }, { note: 'F#', interval: '3', color: '#ffda21', chordInterval: undefined }, { note: 'G', interval: '4', color: '#33dd00', chordInterval: undefined }, { note: 'G#', interval: 'b5', color: '#BFBEAD', chordInterval: undefined }, { note: 'A', interval: '5', color: '#1133cc', chordInterval: undefined }, { note: 'A#', interval: '#5', color: '#BAB9A9', chordInterval: undefined }, { note: 'B', interval: '6', color: '#220066', chordInterval: undefined }, { note: 'C', interval: 'b7', color: '#7F7F74', chordInterval: undefined }, { note: 'C#', interval: '7', color: '#330044', chordInterval: undefined }]);      
      });
    });
  });  
});