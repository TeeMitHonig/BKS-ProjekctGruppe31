document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das automatische Absenden des Formulars

    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const birthdate = document.getElementById('birthdate').value;

    if (!name || !address || !birthdate) {
        alert('Bitte füllen Sie alle Felder aus.');
        return;
    }

    // Beispiel für eine einfache Validierung
    if (name.length < 3) {
        alert('Der Name muss mindestens 3 Zeichen lang sein.');
        return;
    }

    alert('Anmeldung erfolgreich!');
});