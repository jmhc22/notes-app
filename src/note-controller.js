(function(exports) {
  function NoteController(noteListView = new NoteListView(new NoteList)) {
    this.noteListView = noteListView;
  }

  NoteController.prototype.refreshNotes = function() {
    var element = document.getElementById("app")
    element.innerHTML = this.noteListView.convertHTML();
  }

  NoteController.prototype.newNote = function(text) {
    this.noteListView.newNote(text);
  };

  noteController = new NoteController();
  noteController.refreshNotes();

  makeUrlChangeShowNoteIdForClickedNoteAndDisplayContent();
  interceptNewNoteSubmit();

  function makeUrlChangeShowNoteIdForClickedNoteAndDisplayContent() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    if (location.hash.includes("#notes/")) {
      showNote(getNoteFromUrl(window.location));
    } else if (location.hash === "") {
      noteController.refreshNotes();
    };
  };

  function getNoteFromUrl(location) {
    var selectedNote;
    noteController.noteListView.noteList.notes.forEach(function(note) {
      if (note.id === Number(location.hash.split("#notes/")[1])) {
        selectedNote = note;
      }
    });
    return selectedNote;
  };

  function showNote(note) {
    var noteView = new SingleNoteView(note);
    noteView.singleNoteHTML();
  }

  function interceptNewNoteSubmit() {
    document
      .getElementById("textsubmit")
      .addEventListener("click", function(clickEvent) {
        clickEvent.preventDefault();
        addNewNoteAndRefreshNoteList(clickEvent)
    });
  };

  function addNewNoteAndRefreshNoteList(clickEvent) {
    noteController.noteListView.newNote(document.getElementById("textarea").value);
    noteController.refreshNotes();
    document.getElementById("textarea").value = ""
  };

  exports.NoteController = NoteController;
})(this)
