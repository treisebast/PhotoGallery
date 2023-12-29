let images = [
    "./img/pexels-a-g-rosales-18024706.jpg",
    "./img/pexels-andrea-imre-10550307.jpg",
    "./img/pexels-asad-photo-maldives-3155666.jpg",
    "./img/pexels-denys-gromov-4852754.jpg",
    "./img/pexels-fatih-ozkan-7819209.jpg",
    "./img/pexels-hert-niks-4159683.jpg",
    "./img/pexels-jimmy-teoh-1010657.jpg",
    "./img/pexels-jonas-von-werne-3354346.jpg",
    "./img/pexels-lukas-medvedevas-6013666.jpg",
    "./img/pexels-magda-ehlers-1189261.jpg",
    "./img/pexels-marcin-jozwiak-2601510.jpg",
    "./img/pexels-marcin-jozwiak-2629003.jpg",
    "./img/pexels-media-lens-king-6920655.jpg",
    "./img/pexels-michal-rosak-12896622.jpg",
    "./img/pexels-mike-marchetti-10255612.jpg",
    "./img/pexels-mira-varkovetski-13991254.jpg",
    "./img/pexels-oleksandr-p-13593499.jpg",
    "./img/pexels-pixabay-54462.jpg",
    "./img/pexels-pixabay-255483.jpg",
    "./img/pexels-pixabay-261105.jpg",
    "./img/pexels-pixabay-269583.jpg",
    "./img/pexels-ronny-siegel-9995827.jpg",
    "./img/pexels-sergiu-iacob-8791201.jpg",
    "./img/pexels-simon-berger-1181181.jpg",
    "./img/pexels-stein-egil-liland-3384815.jpg",
    "./img/pexels-tim-723465.jpg",
    "./img/pexels-valentine-kulikov-10862497.jpg",
    "./img/pexels-valentine-kulikov-10862505.jpg",
    "./img/pexels-vincent-rivaud-2363807.jpg",
    "./img/pexels-xavier-mestdag-3903947.jpg",
];

function load() {
    let photo = document.getElementById("loadphoto");
    for (i = 0; i < images.length; i++) {
        photo.innerHTML += /*html*/ `
            <div onclick="openImage(${i})" class="imgBox">
                <img src="${images[i]}" alt="Foto anzeigen">
            </div>
            `;
    }
}

function zoomImage(position) {
    let zoom = document.getElementById("zoomImg");
    zoom.innerHTML = "";
    zoom.innerHTML = generateHMTL(position);
}

function generateHMTL(i) {
    return /*html*/ `
            <div class="dialog-position">
                <div class="icon-position-back"><span class="material-symbols-outlined" onclick="backPicture(${i})">
                     arrow_back</span>
                </div>
                <div class="imgBoxZoom" >
                    <img src="${images[i]}" alt="Foto gezoomt">
                </div>
                <div class="icon-position-next"><span class="material-symbols-outlined" onclick="nextPicture(${i})">
                     arrow_forward</span>
                </div>
            </div>`;
}

function nextPicture(i) {
    if (i < images.length - 1) {
        i++;
        zoomImage(i);
    } else {
        i = 0;
        zoomImage(i);
    }
}

function backPicture(i) {
    if (i > 0) {
        i--;
        zoomImage(i);
    } else {
        i = images.length - 1;
        zoomImage(i);
    }
}

function openImage(position) {
    document.getElementById("dialog").classList.remove("d-none");

    zoomImage(position);
}

function closeDialog() {
    document.getElementById("dialog").classList.add("d-none");
}




function loadPage(){
    includeHTML();
    load();
}

async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}