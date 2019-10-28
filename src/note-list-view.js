(function(exports) {
  function NoteListView() {
  };

  NoteListView.prototype.convertHTML = function(notes) {
    return "<ul><li><div>" + notes.join("</div></li><li><div>")
      + "</div></li></ul>";
  };

  exports.NoteListView = NoteListView;

})(this);
