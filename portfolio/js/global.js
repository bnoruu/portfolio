/* ceci est un commentaire js*/

//console.log('toto');

// string
/*
let myVar = "ma variable";
const myVar2 = "ma variable 2";
console.log(myVar);
console.log(myVar2);
myVar = "variable changée";
//console.log(myVar);*/

// boolean

/*let isTrue = true;
let isFalse = false;
console.log(isTrue);
console.log(isFalse);*/

//chiffres et opérateurs

/*let chiffre1 = 4;
let chiffre2 = 3;
console.log(chiffre1, chiffre2);
console.log(chiffre1 + chiffre2);
console.log(chiffre1 - chiffre2);
console.log(chiffre1 * chiffre2);
console.log(chiffre1 / chiffre2);*/

// template string, littéraux de gabarits et concat
/*
let test = 'test' + myVar;
//console.log(test);

let test2 = `test ${myVar} sdvlksqfd`;
//console.log(test2);

if (chiffre1 <= 3) {
    console.log('condition valide');
}
else if (chiffre1 < 4) {
    console.log('je passe la');
}
else {
    console.log('condition non valide');
}*/

// tableaux
/*
let array = ['item1', 'item2', 'item3', 'item4'];
console.log(array);
console.log(array.length);
console.log(array[0]);*/

// objets
/*
let obj = {
    title: 'Mon titre',
    description: 'Ma description'
}
console.log(obj);
console.log(obj.title, obj.description);*/

// les boucles, while, for, foreach

/*for (let i = 0; i < array.length; i++) {
    console.log(i);
    console.log(array[i]);
}

array.forEach(item => {
    console.log(item);
})*/

// fonctions
/*
function myFunction(item, item2) {
    console.log(item, item2);
}

myFunction('toto', 5);
myFunction('tata', 6);
*/

// intéragir avec le dom
// methode, propriété, événement

//console.log(window);

// fin de la théorie

/* Menu mobile */

function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const link = document.querySelectorAll('.navbar a');
    
    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    });
    link.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
        });
    });
}

menuMobile();

/* Portfolio */

function tabsFilters() {
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card');
    const resetActiveLinks = () => {
        tabs.forEach(elem => elem.classList.remove('active'));
    }
    const showProjets = (elem) => {
        projets.forEach(projet => {

            let filter = projet.getAttribute('data-category');

            if (elem === 'all') {
                projet.parentNode.classList.remove('hide');
                return; // sort de la fonction, comme en C++
            }

            /*if (filter !== elem) {
                projet.parentNode.classList.add('hide');
            } else {
                projet.parentNode.classList.remove('hide');
            }*/

            // option pour les plus motivés - opérateur ternaire = la même boucle if/else qu'au-dessus mais compact

            filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide') ;
        });
    }
    tabs.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault(); /* empêche de retourner en haut de la page quand on clique */
            let filter = elem.getAttribute('data-filter');
            showProjets(filter);
            resetActiveLinks();
            elem.classList.add('active');
        });
    })
}

tabsFilters();

function showProjectDetails() {
    const links = document.querySelectorAll('.card__link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal__close');
    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        });
    }
    links.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
        });
    })
    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            hideModals();
        });
    })
}

showProjectDetails();

//effets

const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills .bar');
    sections.forEach((section, index) => {
        if (index === 0) return;
        section.style.opacity = "0";
        section.style.transition = "all 1.6s";
    });
    skills.forEach((elem, index) => {
        elem.style.width = "0";
        elem.style.transition = "all 1.6s";
    })
    let sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                elem.style.opacity = "1";
            }
        });
    });
    sections.forEach((section, index) => {
        sectionObserver.observe(section);
    });
    let skillsObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                elem.style.width = elem.dataset.width + '%';
            }
        });
    });
    skills.forEach(skill => {
        skillsObserver.observe(skill);
    });
}

observerIntersectionAnimation();