(function(exports) {
  function convertsToStaticHTMLMultiNotes() {
    var noteListModel = new NoteList();
    var noteListView = new NoteListView(noteListModel);
    noteListView.noteList.newNote("note 1");
    noteListView.noteList.newNote("note 2");
    var staticHTML = "<ul><li><div><a href='#notes/0'>note 1</a></div></li><li><div><a href='#notes/1'>note 2</a></div></li></ul>"
    assert.isTrue(noteListView.convertHTML() === staticHTML, "convertsToStaticHTML2");
  };

  function instantiationCreatesNoteListModelVariable() {
    var noteListModel = new NoteList();
    var noteListView = new NoteListView(noteListModel);
    assert.isTrue(noteListView.noteList instanceof NoteList, "instantiationCreatesNoteListModelVariable");
  };

  function convertsToStaticHTMLSingleNote() {
    var noteListModel = new NoteList();
    var noteListView = new NoteListView(noteListModel);
    noteListView.noteList.newNote("note 1");
    var staticHTML = "<ul><li><div><a href='#notes/0'>note 1</a></div></li></ul>"
    assert.isTrue(noteListView.convertHTML() === staticHTML, "convertsToStaticHTML1");
  };

  function convertsToStaticHTMLNoNotes() {
    var noteListModel = new NoteList();
    var noteListView = new NoteListView(noteListModel);
    var staticHTML = "<ul><li><div></div></li></ul>"
    assert.isTrue(noteListView.convertHTML() === staticHTML, "convertsToStaticHTML0");
  };

  convertsToStaticHTMLNoNotes();
  convertsToStaticHTMLSingleNote();
  convertsToStaticHTMLMultiNotes();
  instantiationCreatesNoteListModelVariable();
})(this);
