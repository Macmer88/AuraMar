//Animacion del video
        document.addEventListener('DOMContentLoaded', function() {
            var video = document.getElementById('Logo_animado');
            var options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            var observer = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        video.currentTime = 0;
                        video.play();
                    }
                });
            }, options);

            observer.observe(video);
        });

//Hover mas info
//relajacion
const relajacion = document.getElementById('relajacion');
const masinfo_relajacion = document.getElementById('masinfo_relajacion');

relajacion.addEventListener('mouseover', () => {
    masinfo_relajacion.style.display = 'block';
});

relajacion.addEventListener('mouseout', () => {
    masinfo_relajacion.style.display = 'none';
});

//equilibrio
const equilibrio = document.getElementById('equilibrio');
const masinfo_equilibrio = document.getElementById('masinfo_equilibrio');

equilibrio.addEventListener('mouseover', () => {
    masinfo_equilibrio.style.display = 'block';
});

equilibrio.addEventListener('mouseout', () => {
    masinfo_equilibrio.style.display = 'none';
});
//sanacion
const sanacion = document.getElementById('sanacion');
const masinfo_sanacion = document.getElementById('masinfo_sanacion');

sanacion.addEventListener('mouseover', () => {
    masinfo_sanacion.style.display = 'block';
});

sanacion.addEventListener('mouseout', () => {
    masinfo_sanacion.style.display = 'none';
});

//Claridad
const claridad = document.getElementById('claridad');
const masinfo_claridad = document.getElementById('masinfo_claridad');

claridad.addEventListener('mouseover', () => {
    masinfo_claridad.style.display = 'block';
});

claridad.addEventListener('mouseout', () => {
    masinfo_claridad.style.display = 'none';
});


//Emociones
const emociones = document.getElementById('emociones');
const masinfo_emociones = document.getElementById('masinfo_emociones');

emociones.addEventListener('mouseover', () => {
    masinfo_emociones.style.display = 'block';
});

emociones.addEventListener('mouseout', () => {
    masinfo_emociones.style.display = 'none';
});



//Funcion de boton para mas info de cada item
//Relajacion
    const boton_relajacion = document.getElementById('relajacion');
    const relajacion_mas = document.getElementById('relajacion_mas');

    boton_relajacion.addEventListener('click', () => {
        if (relajacion_mas.style.display === 'none' || relajacion_mas.style.display === '') {
            relajacion_mas.style.display = 'flex';
        } else {
            relajacion_mas.style.display = 'flex';
        };
        relajacion_mas.display = 'none';
    });

//Equilibrio
const boton_equilibrio = document.getElementById('equilibrio');
const equilibrio_mas = document.getElementById('equilibrio_mas');

boton_equilibrio.addEventListener('click', () => {
    if (relajacion_mas.style.display === 'none' || equilibrio_mas.style.display === '') {
        equilibrio_mas.style.display = 'flex';
    } else {
        equilibrio_mas.style.display = 'flex';
    };
    equilibrio_mas.display = 'none';
});
//Sanacion
const boton_sanacion = document.getElementById('sanacion');
const sanacion_mas = document.getElementById('sanacion_mas');

boton_sanacion.addEventListener('click', () => {
    if (sanacion_mas.style.display === 'none' || sanacion_mas.style.display === '') {
        sanacion_mas.style.display = 'flex';
    } else {
        sanacion_mas.style.display = 'flex';
    };
    sanacion_mas.display = 'none';
});

//Claridad
const boton_claridad = document.getElementById('claridad');
const claridad_mas = document.getElementById('claridad_mas');

boton_claridad.addEventListener('click', () => {
    if (claridad_mas.style.display === 'none' || claridad_mas.style.display === '') {
        claridad_mas.style.display = 'flex';
    } else {
        claridad_mas.style.display = 'flex';
    };
    claridad_mas.display = 'none';
});


//Emociones
const boton_emociones = document.getElementById('emociones');
const emociones_mas = document.getElementById('emociones_mas');

boton_emociones.addEventListener('click', () => {
    if (emociones_mas.style.display === 'none' || emociones_mas.style.display === '') {
        emociones_mas.style.display = 'flex';
    } else {
        emociones_mas.style.display = 'flex';
    };
    emociones_mas.display = 'none';
});

    //boton cerrar
    const cerrardiv = document.querySelectorAll('.mas_info')
    const boton_cerrar = document.querySelectorAll('.cerrar')

    boton_cerrar.forEach(boton => {
        boton.addEventListener('click', () => {
            boton.closest('.mas_info').style.display = 'none';
        });
    });
    

    function cerrarDiv(elemento) {
        elemento.closest('.mas_info').style.display = 'none';
    }