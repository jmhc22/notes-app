(function(exports) {
  function convertsToStaticHTML() {
    var noteList = new NoteList();
    noteList.newNote("note 1");
    noteList.newNote("note 2");
    var noteListView = new NoteListView();
    var staticHTML = "<ul><li><div>note 1</div></li><li><div>note 2</div></li></ul>"
    assert.isTrue(noteListView.convertHTML(noteList.allNotes()) === staticHTML, "convertsToStaticHTML");
  };

  convertsToStaticHTML();
})(this);
