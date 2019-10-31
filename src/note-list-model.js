(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  NoteList.prototype.newNote = function(text) {
    this.notes.push(new Note(text));
  };

  NoteList.prototype.allNotes20Chars = function() {
    return this.notes.map(n => n.text.substring(0, 20));
  };

  exports.NoteList = NoteList;
})(this);
