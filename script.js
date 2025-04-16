function generateEmails() {
    const emailInput = document.getElementById('emailInput').value;
    const emailOutput = document.getElementById('emailOutput');
    emailOutput.value = ''; // Clear previous output

    const [localPart, domain] = emailInput.split('@');
    if (domain !== 'gmail.com') {
        alert('Please enter a valid Gmail address.');
        return;
    }

    const emailVariations = new Set();
    const length = localPart.length;

    // Generate all possible dot placements
    const maxCombinations = 1 << (length - 1);
    for (let i = 0; i < maxCombinations; i++) {
        let newEmail = '';
        for (let j = 0; j < length; j++) {
            newEmail += localPart[j];
            if (j < length - 1 && (i & (1 << j))) {
                newEmail += '.';
            }
        }
        emailVariations.add(newEmail + '@gmail.com');
    }

    emailOutput.value = Array.from(emailVariations).join('\n');
}