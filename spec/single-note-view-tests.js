(function(exports) {

  function NoteDouble() {
    this.text = "I am a note double!"
  }

  function createsHTMLForSingleNote() {
    singleNoteView = new SingleNoteView(new NoteDouble);
    var element = document.getElementById("app");
    assert.isTrue(element.innerHTML != "<div>I am a note double!</div>", "createsHTMLForSingleNote1");
    singleNoteView.singleNoteHTML();
    var element = document.getElementById("app");
    assert.isTrue(element.innerHTML === "<div>I am a note double!</div>", "createsHTMLForSingleNote2");
  }

  createsHTMLForSingleNote();
})(this);
