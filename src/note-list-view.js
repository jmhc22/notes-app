(function(exports) {
  function NoteListView(noteListModel) {
    this.noteList = noteListModel;
  };

  NoteListView.prototype.convertHTML = function() {
    return "<ul><li><div>" + this.noteList.allNotes20Chars().join("</div></li><li><div>")
      + "</div></li></ul>";
  };

  NoteListView.prototype.newNote = function(text) {
    this.noteList.newNote(text);
  };

  exports.NoteListView = NoteListView;

})(this);
