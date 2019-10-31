(function(exports) {
  function NoteListViewDouble(noteList) {
  };

  NoteListViewDouble.prototype.convertHTML = function() {
    return "<ul><li><div><a href='#notes/0' id='test'>note 1</a></div></li><li><div><a href='#notes/1'>note 2</a></div></li></ul>";
  };

  NoteListViewDouble.prototype.newNote = function(text) {
    return "double";
  };

  function NoteListDouble() {
  };

  function changesDocumentAppIdToHTML() {
    var noteController = new NoteController(new NoteListViewDouble(new NoteListDouble()));
    var element = document.getElementById("app");
    assert.isTrue(element.innerHTML != "<ul><li><div><a href='#notes/0'>note 1</a></div></li><li><div><a href='#notes/1'>note 2</a></div></li></ul>", "changesDocumentAppIdToHTML1");
    noteController.refreshNotes();
    element = document.getElementById("app");
    var assertion = element.innerHTML === `<ul><li><div><a href="#notes/0" id="test">note 1</a></div></li><li><div><a href="#notes/1">note 2</a></div></li></ul>`
    assert.isTrue(assertion, "changesDocumentAppIdToHTML2");
  };

  function clickingNoteDisplaysFullNote() {
    var noteController = new NoteController(new NoteListViewDouble(new NoteListDouble()));
    document.getElementById('test').click();
    var element = document.getElementById("app");
    assert.isTrue(element.innerHTML.includes("#notes/0"), "clickingNoteDisplaysFullNote2");
  };

  changesDocumentAppIdToHTML();
  clickingNoteDisplaysFullNote()
})(this);
