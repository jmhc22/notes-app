(function(exports) {
  function NoteListViewDouble(noteList) {
  };

  NoteListViewDouble.prototype.convertHTML = function() {
    return "<ul><li><div>note 1</div></li><li><div>note 2</div></li></ul>";
  };

  NoteListViewDouble.prototype.newNote = function(text) {
    return "double";
  };

  function NoteListDouble() {
  };

  function changesDocumentAppIdToHTML() {
    var noteController = new NoteController(new NoteListViewDouble(new NoteListDouble()));
    noteController.refreshNotes();
    var element = document.getElementById("app");
    assert.isTrue(element.innerHTML === "<ul><li><div>note 1</div></li><li><div>note 2</div></li></ul>", "changesDocumentAppIdToHTML");
  };

  changesDocumentAppIdToHTML();
})(this);
