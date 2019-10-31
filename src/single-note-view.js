(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.singleNoteHTML = function() {
    var element = document.getElementById("app");
    element.innerHTML = `<div>${this.note.text}</div>`;
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
