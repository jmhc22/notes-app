(function(exports) {
  function createsAndSavesNotesInArray() {
    var noteList = new NoteList();
    noteList.newNote("this is a note");
    assert.isTrue(noteList.notes[0].text === "this is a note", "createsAndSavesNotesInArray");
  };

  createsAndSavesNotesInArray();
})(this);

(function(exports) {
  function returnsAllNotes() {
    var noteList = new NoteList();
    noteList.newNote("this is note 1");
    noteList.newNote("this is note 2");
    assert.isTrue(noteList.allNotes() === "this is note 1\nthis is note 2", "returnsAllNotes");
  };

  returnsAllNotes();
})(this);
