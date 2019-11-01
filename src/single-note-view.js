(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.singleNoteHTML = function() {
    var element = document.getElementById("app");
    element.innerHTML = `<div><p class="singlenote">${this.note.text}</p></div>`;
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
