document.addEventListener('DOMContentLoaded', function () {
    var nuorodos = document.querySelectorAll('#header a');
      var aktyviNuoroda = localStorage.getItem('aktyviNuoroda');


    if (aktyviNuoroda) {
        document.getElementById(aktyviNuoroda).classList.add('active');
    }

    nuorodos.forEach(function (nuoroda) {
        nuoroda.addEventListener('click', function () {
            nuorodos.forEach(function (kitosNuorodos) {
                kitosNuorodos.classList.remove('active');
            });
            nuoroda.classList.add('active');
            localStorage.setItem('aktyviNuoroda', nuoroda.id);
        });
    });
});
