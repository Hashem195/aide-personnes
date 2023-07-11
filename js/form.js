// Récupération des éléments du DOM pour les formulaires du Bénévolat
var inscription = document.querySelector(".Inscription");
var courses = document.querySelector(".course");
var don = document.querySelector(".bien");
var tache = document.querySelector(".clean");

var form = document.querySelector(".formu");
var form1 = document.querySelector(".formu1");
var form2 = document.querySelector(".formu2");
var form3 = document.querySelector(".formu3");

var inscrit = document.querySelector(".button");
var inscrit1 = document.querySelector(".button1");
var inscrit2 = document.querySelector(".button2");
var inscrit3 = document.querySelector(".button3");

// Ajout des évènements concernant le formulaire du bénévolat
inscription.addEventListener('click', function() {
    form.style.display = 'block';
});

courses.addEventListener('click', function() {
    form1.style.display = 'block';
});

tache.addEventListener('click', function() {
    form2.style.display = 'block';
});

don.addEventListener('click', function() {
    form3.style.display = 'block';
});

// Faire disparaitre le formulaire si les champs requis ne sont pas remplis
inscrit.addEventListener('click', function(event) {
    event.preventDefault();
    if (isFormValid(form)) {
        form.style.display = 'none';
    }
});

inscrit1.addEventListener('click', function(event) {
    event.preventDefault();
    if (isFormValid(form1)) {
        form1.style.display = 'none';
    }
});

inscrit2.addEventListener('click', function(event) {
    event.preventDefault();
    if (isFormValid(form2)) {
        form2.style.display = 'none';
    }
});

inscrit3.addEventListener('click', function(event) {
    event.preventDefault();
    if (isFormValid(form3)) {
        form3.style.display = 'none';
    }
});

// Fonction pour vérifier si les champs du formulaire sont valides
function isFormValid(form) {
    var inputs = form.querySelectorAll('input');
    var isValid = true;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            isValid = false;
            break;
        }
    }
    return isValid;
}
