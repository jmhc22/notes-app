(function(exports) {
  function NoteList() {
    this.notes = [];
    this.noteCount = 0;
  };

  NoteList.prototype.newNote = function(text) {
    this.notes.push(new Note(text, this.noteCount));
    this.noteCount++;
  };

  NoteList.prototype.allNotes20Chars = function() {
    return this.notes.map(n => `<a href='#notes/${n.id}'>` + n.text.substring(0, 20) + '</a>');
  };

  exports.NoteList = NoteList;
})(this);
