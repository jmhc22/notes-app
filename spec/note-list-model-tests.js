(function(exports) {
  function createsAndSavesNotesInArray() {
    var noteList = new NoteList();
    noteList.newNote("this is a note");
    assert.isTrue(noteList.notes[0].text === "this is a note", "createsAndSavesNotesInArray");
  };

  createsAndSavesNotesInArray();
})(this);

(function(exports) {
  function returnsFirst20CharsOfAllNotes() {
    var noteList = new NoteList();
    noteList.newNote("this is note 1 and it is great");
    noteList.newNote("this is note 2 and it is great");
    noteArray = noteList.allNotes20Chars()
    assert.isTrue(noteArray.length === 2, "returnsFirst20CharsOfAllNotes1");
    assert.isTrue(noteArray[0].length === 20, "returnsFirst20CharsOfAllNotes2");
    assert.isTrue(noteArray[1].length === 20, "returnsFirst20CharsOfAllNotes3");

  };

  returnsFirst20CharsOfAllNotes();
})(this);
