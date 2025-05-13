document.getElementById('submitButton').addEventListener('click', function() {
    // Felder abrufen
    const salutation = document.getElementById('salutation');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('Email');
    const password = document.getElementById('Password');

    let isValid = true;

    // Funktion zum Entfernen alter Fehlermeldungen
    function clearError(field) {
        const errorElement = field.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.remove();
        }
    }

    // Validierungsfunktion
    function validateField(field, condition, errorMessage) {
        clearError(field); // Alte Fehlermeldung entfernen
        if (condition) {
            field.classList.add('is-invalid');
            isValid = false;

            // Fehlermeldung hinzufügen
            const errorElement = document.createElement('small');
            errorElement.classList.add('error-message', 'text-danger');
            errorElement.textContent = errorMessage;
            field.insertAdjacentElement('afterend', errorElement);
        } else {
            field.classList.remove('is-invalid');
        }
    }

    // Validierung der Felder
    validateField(salutation, salutation.value === '', 'Bitte wählen Sie eine Anrede.');
    validateField(firstName, firstName.value.trim() === '', 'Vorname darf nicht leer sein.');
    validateField(lastName, lastName.value.trim() === '', 'Nachname darf nicht leer sein.');
    validateField(email, !email.value.includes('@'), 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    validateField(password, password.value.trim().length < 6, 'Das Passwort muss mindestens 6 Zeichen lang sein.');

    // Wenn alle Felder gültig sind
    if (isValid) {
        alert('Anmeldung erfolgreich!');
    }
});


