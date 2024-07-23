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
    if (resultados.length === 0 || resultados.length == null) {
        alert("No se encontraron resultados.");
    } else {
        console.log("\nResultado:");
        resultados.forEach(pelicula => {
            console.log(`Título: ${pelicula.titulo} \nAño: ${pelicula.año} \nCalificación: ${pelicula.calificacion} \nDirector: ${pelicula.director}`);
        });
    }
}

//Filtra los datos de la película por el nombre de la película
function buscarPeliculaPorTitulo(titulo) {
    return peliculas.filter(pelicula => pelicula.titulo.toLowerCase().includes(titulo.toLowerCase()));
}
//Filtra las películas que se hayan estrenado entre dos años elegidos
function filtrarPeliculasPorRangoDeAño(minAño, maxAño) {
    return peliculas.filter(pelicula => pelicula.año >= minAño && pelicula.año <= maxAño);
}
//Filtra las peliculas por encima de una calificación elegida
function filtrarPeliculasPorCalificacionMinima(minCalificacion) {
    return peliculas.filter(pelicula => pelicula.calificacion > minCalificacion);
}
//Filtra las peliculas por debajo o igual de una calificación elegida
function filtrarPeliculasPorCalificacionMaxima(maxCalificacion) {
    return peliculas.filter(pelicula => pelicula.calificacion <= maxCalificacion);
}
//Ordena las peliculas por año ascendente
function ordenarPeliculasPorAñoAsc() {
    return peliculas.slice().sort((a, b) => a.año - b.año);
}
//Ordena las peliculas por calificación descendente
function ordenarPeliculasPorCalificacionDesc() {
    return peliculas.slice().sort((a, b) => b.calificacion - a.calificacion);
}

function aplicarFiltros() {
    let opcion;
    do {
        opcion = prompt("Elige una opción: (del 1 al 7) \n1. Buscar por título \n2. Filtrar por rango de año \n3. Filtrar por calificación mínima \n4. Filtrar por calificación máxima \n5. Ordenar por año ascendente \n6. Ordenar por calificación descendente \n7. Salir");

        switch (opcion) {
            case '1':
                let titulo = prompt("Ingresa el título de la película:");
                mostrarResultados(buscarPeliculaPorTitulo(titulo));
                break;
            case '2':
                let minAño = parseInt(prompt("Entre el año:"));
                let maxAño = parseInt(prompt("y el año:"));
                mostrarResultados(filtrarPeliculasPorRangoDeAño(minAño, maxAño));
                break;
            case '3':
                let minCalificacion = parseFloat(prompt("Las películas con calificacion más alta que:"));
                mostrarResultados(filtrarPeliculasPorCalificacionMinima(minCalificacion));
                break;            
            case '4':
                let maxCalificacion = parseFloat(prompt("Las películas con calificacion más baja o igual que:"));
                mostrarResultados(filtrarPeliculasPorCalificacionMaxima(maxCalificacion));
                break;
            case '5':
                mostrarResultados(ordenarPeliculasPorAñoAsc());
                break;
            case '6':
                mostrarResultados(ordenarPeliculasPorCalificacionDesc());
                break;
            case '7':
                console.log("¡Hasta luego!");
                break;
            case null:
                console.log("¡Hasta luego!");
                break;
            default:
            
                alert("Opción no válida.");    
        }
    } while (opcion != '7' && opcion != null);
}

window.onload = function() {
    aplicarFiltros();
};