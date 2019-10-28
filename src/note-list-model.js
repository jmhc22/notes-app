(function(exports) {
  function NoteList() {
    this.notes = []
  };

  NoteList.prototype.newNote = function(text) {
    this.notes.push(new Note(text))
  };

  NoteList.prototype.allNotes = function() {
    return this.notes.map(n => n.text).join("\n");
  };

  exports.NoteList = NoteList;
})(this);
