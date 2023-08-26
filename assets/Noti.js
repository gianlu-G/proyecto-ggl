let areElementsVisible = false;
let areElementsVisible2 = false;
    let shownElements = []; // Arreglo para guardar los elementos adicionales mostrados
    let shownElements2 = [];

    function toggleElements() {
      const mainContainer = document.getElementById('mainContainer');
      const toggleButton = document.getElementById('toggleButton');

      // Mostrar u ocultar los elementos adicionales
      const hiddenElements = mainContainer.querySelectorAll('.hidden');
      if (!areElementsVisible) {
        // Si los elementos están ocultos, los mostramos y los agregamos al arreglo
        hiddenElements.forEach((element) => {
          element.classList.remove('hidden');
          shownElements.push(element);
        });
      } else {
        // Si los elementos están visibles, los ocultamos y los eliminamos del arreglo
        shownElements.forEach((element) => {
          element.classList.add('hidden');
        });
        shownElements = [];
      }

      // Cambiar el estado de los elementos visibles
      areElementsVisible = !areElementsVisible;

      // Mover el botón al final del contenedor
      mainContainer.appendChild(toggleButton);
    }
    function toggleElements2() {
    const mainContainer2 = document.getElementById('secondContainer');
    const toggleButton2 = document.getElementById('toggleButton2');

      // Mostrar u ocultar los elementos adicionales
      const hiddenElements2 = mainContainer2.querySelectorAll('.oculto');
      if (!areElementsVisible2) {
        // Si los elementos están ocultos, los mostramos y los agregamos al arreglo
        hiddenElements2.forEach((element) => {
          element.classList.remove('oculto');
          shownElements2.push(element);
        });
      } else {
        // Si los elementos están visibles, los ocultamos y los eliminamos del arreglo
        shownElements2.forEach((element) => {
          element.classList.add('oculto');
        });
        shownElements2 = [];
      }

      // Cambiar el estado de los elementos visibles
      areElementsVisible2 = !areElementsVisible2;

      // Mover el botón al final del contenedor
      mainContainer2.appendChild(toggleButton2);
    }
    document.addEventListener("DOMContentLoaded", function() {
      function toggleElements(containerId) {
        const container = document.getElementById(containerId);
        const visibleElements = container.querySelectorAll('.element:not(.hidden)');

        visibleElements.forEach((element) => {
          element.classList.toggle('hidden');
        });

        const elementHeight = visibleElements.length > 0 ? visibleElements[0].offsetHeight : 0;
        const newContainerHeight = visibleElements.length * elementHeight;

        container.style.maxHeight = newContainerHeight + 'px';
      }
    });