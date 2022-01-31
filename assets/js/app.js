
const header = document.getElementById('header');
const inicio_btn = document.getElementById('inicio-btn');

const acerca_de = document.getElementById('acerca-de');
const acerca_btn = document.getElementById('acerca-btn');

const cv = document.getElementById('cv');
const cv_btn = document.getElementById('cv-btn');

const portafolio = document.getElementById('portafolio');
const portafolio_btn = document.getElementById('portafolio-btn');

const contacto = document.getElementById('contacto');
const contacto_btn = document.getElementById('contacto-btn');

let activos_btn;
let activos_sect

const removerActivos = () =>{

    activos_btn = document.getElementsByClassName('activo');
    activos_sect = document.getElementsByClassName('seccion-activa');
    // console.log(activos_sect)

    for (elemento of activos_btn){
        elemento.classList = ''
    }

    console.log(activos_sect.length, activos_sect.length > 0)
    
    if (activos_sect.length > 0){
        for (var i = 0; i < activos_sect.length; i++) {
            activos_sect.item(i).classList = ''
         }
    }
    
}

const activarInicio = () => {
    removerActivos()
    inicio_btn.classList = 'activo'
    header.classList = ''
}

const activarAcerca_de = () => {
    removerActivos()
    acerca_btn.classList = 'activo'
    header.classList = 'header-arriba'
    acerca_de.classList = 'seccion-activa'
}

const activarCV = () => {
    removerActivos()
    cv_btn.classList = 'activo'
    header.classList = 'header-arriba'
    cv.classList = 'seccion-activa'

}
const activarPortafolio = () => {
    removerActivos()
    portafolio_btn.classList = 'activo'
    header.classList = 'header-arriba'
    portafolio.classList = 'seccion-activa'

}
const activarContacto = () => {
    removerActivos()
    contacto_btn.classList = 'activo'
    header.classList = 'header-arriba'
    contacto.classList = 'seccion-activa'

}