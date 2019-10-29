(function(exports) {
  function NoteListView() {
    this.noteList = new NoteList();
  };

  NoteListView.prototype.convertHTML = function() {
    return "<ul><li><div>" + this.noteList.allNotes().join("</div></li><li><div>")
      + "</div></li></ul>";
  };

  exports.NoteListView = NoteListView;

})(this);
