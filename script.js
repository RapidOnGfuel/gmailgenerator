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

function copyEmails() {
    const emailOutput = document.getElementById('emailOutput');
    const copyButton = document.getElementById('copyButton');

    emailOutput.select();
    emailOutput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');

    // Change button text to "Copied"
    copyButton.textContent = 'Copied';

    // Revert back to "Copy All" after 2 seconds
    setTimeout(() => {
        copyButton.textContent = 'Copy All';
    }, 2000);
}