let peliculas = [
    { id: 1, titulo: 'Inception', año: 2010, calificacion: 8.8, director: 'Christopher Nolan' },
    { id: 2, titulo: 'Pulp Fiction', año: 1994, calificacion: 8.9, director: 'Quentin Tarantino' },
    { id: 3, titulo: 'Inside Out', año: 2015, calificacion: 8.1, director: 'Pete Docter' },
    { id: 4, titulo: 'La La Land', año: 2016, calificacion: 8.0, director: 'Damien Chazelle' },
    { id: 5, titulo: 'Baby Driver', año: 2017, calificacion: 7.6, director: 'Edgar Wright' },
    { id: 6, titulo: 'Top Gun', año: 1986, calificacion: 6.9, director: 'Tony Scott' },
    { id: 7, titulo: 'Fight Club', año: 1999, calificacion: 8.8, director: 'David Fincher' }
];

function mostrarResultados(resultados) {
    let resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpiar resultados anteriores
    if (resultados.length === 0 || resultados.length == null) {
        resultadosDiv.innerHTML = '<p>No se encontraron resultados.</p>';
    } else {
        resultados.forEach(pelicula => {
            resultadosDiv.innerHTML += `<p><strong>Título:</strong> ${pelicula.titulo}<br>
                                        <strong>Año:</strong> ${pelicula.año}<br>
                                        <strong>Calificación:</strong> ${pelicula.calificacion}<br>
                                        <strong>Director:</strong> ${pelicula.director}</p>`;
        });
    }
}

function mostrarTodasLasPeliculas() {
    let listaPeliculasDiv = document.getElementById('listaPeliculas');
    listaPeliculasDiv.innerHTML = '';
    peliculas.forEach(pelicula => {
        listaPeliculasDiv.innerHTML += `<p>${pelicula.titulo}</p>`;
    });
}

function buscarPorTitulo() {
    let titulo = document.getElementById('titulo').value;
    mostrarResultados(buscarPeliculaPorTitulo(titulo));
}

function filtrarPorRangoDeAño() {
    let minAño = parseInt(document.getElementById('minAño').value);
    let maxAño = parseInt(document.getElementById('maxAño').value);
    mostrarResultados(filtrarPeliculasPorRangoDeAño(minAño, maxAño));
}

function filtrarPorCalificacionMinima() {
    let minCalificacion = parseFloat(document.getElementById('minCalificacion').value);
    mostrarResultados(filtrarPeliculasPorCalificacionMinima(minCalificacion));
}

function filtrarPorCalificacionMaxima() {
    let maxCalificacion = parseFloat(document.getElementById('maxCalificacion').value);
    mostrarResultados(filtrarPeliculasPorCalificacionMaxima(maxCalificacion));
}

function ordenarPorAñoAsc() {
    mostrarResultados(ordenarPeliculasPorAñoAsc());
}

function ordenarPorAñoDes() {
    mostrarResultados(ordenarPeliculasPorAñoDes());
}

function ordenarPorCalificacionAsc() {
    mostrarResultados(ordenarPeliculasPorCalificacionAsc());
}

function ordenarPorCalificacionDes() {
    mostrarResultados(ordenarPeliculasPorCalificacionDes());
}

function buscarPeliculaPorTitulo(titulo) {
    return peliculas.filter(pelicula => pelicula.titulo.toLowerCase().includes(titulo.toLowerCase()));
}

function filtrarPeliculasPorRangoDeAño(minAño, maxAño) {
    return peliculas.filter(pelicula => pelicula.año >= minAño && pelicula.año <= maxAño);
}

function filtrarPeliculasPorCalificacionMinima(minCalificacion) {
    return peliculas.filter(pelicula => pelicula.calificacion > minCalificacion);
}

function filtrarPeliculasPorCalificacionMaxima(maxCalificacion) {
    return peliculas.filter(pelicula => pelicula.calificacion <= maxCalificacion);
}

function ordenarPeliculasPorAñoAsc() {
    return peliculas.slice().sort((a, b) => a.año - b.año);
}

function ordenarPeliculasPorAñoDes() {
    return peliculas.slice().sort((a, b) => b.año - a.año);
}

function ordenarPeliculasPorCalificacionAsc() {
    return peliculas.slice().sort((a, b) => a.calificacion - b.calificacion);
}

function ordenarPeliculasPorCalificacionDes() {
    return peliculas.slice().sort((a, b) => b.calificacion - a.calificacion);
}

// Mostrar todas las películas al cargar la página y agregar event listeners
window.onload = function() {
    mostrarTodasLasPeliculas();

    document.getElementById('buscarTitulo').addEventListener('click', buscarPorTitulo);
    document.getElementById('filtrarRangoAño').addEventListener('click', filtrarPorRangoDeAño);
    document.getElementById('filtrarMinCalificacion').addEventListener('click', filtrarPorCalificacionMinima);
    document.getElementById('filtrarMaxCalificacion').addEventListener('click', filtrarPorCalificacionMaxima);
    document.getElementById('ordenarAñoAsc').addEventListener('click', ordenarPorAñoAsc);
    document.getElementById('ordenarAñoDes').addEventListener('click', ordenarPorAñoDes);
    document.getElementById('ordenarCalificacionAsc').addEventListener('click', ordenarPorCalificacionAsc);
    document.getElementById('ordenarCalificacionDes').addEventListener('click', ordenarPorCalificacionDes);
};

document.getElementById('titulo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        document.getElementById('buscarTitulo').click();
    }
});

document.getElementById('maxAño').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        document.getElementById('filtrarRangoAño').click();
    }
});

document.getElementById('minCalificacion').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        document.getElementById('filtrarMinCalificacion').click();
    }
});

document.getElementById('maxCalificacion').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        document.getElementById('filtrarMaxCalificacion').click();
    }
});
