let areElementsVisible = false;

function toggleElements() {
    const mainContainer = document.getElementById('mainContainer');

    if (mainContainer) {
        const hiddenElements = mainContainer.querySelectorAll('.hidden');
        if (!areElementsVisible) {
            hiddenElements.forEach((element) => {
                element.classList.remove('hidden');
            });
        } else {
            hiddenElements.forEach((element) => {
                element.classList.add('hidden');
            });
        }

        areElementsVisible = !areElementsVisible;
    }
}