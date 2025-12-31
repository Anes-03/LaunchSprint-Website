const form = document.getElementById("waitlist-form");
const note = document.getElementById("form-note");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (note) {
      note.textContent = "Danke! Wir melden uns bald mit Neuigkeiten.";
    }
    form.reset();
  });
}
