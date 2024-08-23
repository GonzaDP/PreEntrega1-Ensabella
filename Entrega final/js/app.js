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
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpiar resultados anteriores
    if (resultados.length === 0) {
        alertas("No se encontraron resultados", "#B22222");
    } else {
        resultados.forEach(pelicula => {
            resultadosDiv.innerHTML += `<p><strong>Título:</strong> ${pelicula.titulo}<br>
                                        <strong>Año:</strong> ${pelicula.año}<br>
                                        <strong>Calificación:</strong> ${pelicula.calificacion}<br>
                                        <strong>Director:</strong> ${pelicula.director}</p>`;
        });
    }
}

function alertas(textoAlerta, colorBox) {
    Toastify({
        text: textoAlerta,
        style: {
            background: colorBox,
        },
    }).showToast();
}

function mostrarTodasLasPeliculas() {
    const listaPeliculasDiv = document.getElementById('listaPeliculas');
    listaPeliculasDiv.innerHTML = "";
    peliculas.forEach(pelicula => {
        listaPeliculasDiv.innerHTML += `<p>${pelicula.titulo}</p>`;
    });
}

function buscarPorTitulo() {
    const titulo = document.getElementById('titulo').value;
    mostrarResultados(buscarPeliculaPorTitulo(titulo));
    alertas("Se usó el filtro por título", "#228B22");
}

function filtrarPorRangoDeAño() {
    const minAño = parseInt(document.getElementById('minAño').value);
    const maxAño = parseInt(document.getElementById('maxAño').value);

    if (isNaN(minAño) || isNaN(maxAño)) {
        alertas("Por favor ingresa un año válido", "#B22222");
        return;
    }

    mostrarResultados(filtrarPeliculasPorRangoDeAño(minAño, maxAño));
    alertas("Se usó el filtro por rango de año", "#228B22");
}

function filtrarPorCalificacionMinima() {
    const minCalificacion = parseFloat(document.getElementById('minCalificacion').value);

    if (isNaN(minCalificacion)) {
        alertas("Por favor ingresa una calificación válida", "#B22222");
        return;
    }

    mostrarResultados(filtrarPeliculasPorCalificacionMinima(minCalificacion));
    alertas("Se usó el filtro por calificación mínima", "#228B22");
}

function filtrarPorCalificacionMaxima() {
    const maxCalificacion = parseFloat(document.getElementById('maxCalificacion').value);

    if (isNaN(maxCalificacion)) {
        alertas("Por favor ingresa una calificación válida", "#B22222");
        return;
    }

    mostrarResultados(filtrarPeliculasPorCalificacionMaxima(maxCalificacion));
    alertas("Se usó el filtro por calificación máxima", "#228B22");
}

function ordenarPorAñoAsc() {
    mostrarResultados(ordenarPeliculasPorAñoAsc());
    alertas("Se usó el ordenamiento por año ascendente", "#228B22");
}

function ordenarPorAñoDes() {
    mostrarResultados(ordenarPeliculasPorAñoDes());
    alertas("Se usó el ordenamiento por año descendente", "#228B22");
}

function ordenarPorCalificacionAsc() {
    mostrarResultados(ordenarPeliculasPorCalificacionAsc());
    alertas("Se usó el ordenamiento por calificación ascendente", "#228B22");
}

function ordenarPorCalificacionDes() {
    mostrarResultados(ordenarPeliculasPorCalificacionDes());
    alertas("Se usó el ordenamiento por calificación descendente", "#228B22");
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

function mostrarPeliculas(peliculas) {
    const resultadosDi = document.getElementById('resultadosAPI');
    resultadosDi.innerHTML = ''; // Limpiar resultados anteriores

    if (peliculas.length === 0) {
        resultadosDi.innerHTML = '<p>No se encontraron resultados.</p>';
    } else {
        peliculas.forEach(pelicula => {
            resultadosDi.innerHTML += `<p><strong>Título:</strong> ${pelicula.title}<br>
                                        <strong>Año:</strong> ${pelicula.year}<br>
                                        <strong>Calificación:</strong> ${pelicula.rating}<br>
                                        <strong>Director:</strong> ${pelicula.director}</p><hr>`;
        });
    }
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
};

document.getElementById('filtrarAPI').addEventListener('click', () => {
    const tituloFiltro = document.getElementById('tituloAPI').value.toLowerCase();

    fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
        method: "GET",
        headers: {
            'x-rapidapi-key': 'ccf506251bmsh11d742cd0d7c66fp1ae7cfjsn32ca2526e7e5',
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        const peliculasFiltradas = data.filter(pelicula => 
            pelicula.title.toLowerCase().includes(tituloFiltro)
        );

        mostrarPeliculas(peliculasFiltradas);
    })
    .catch(error => {
        console.log('Error:', error);
    });
});
