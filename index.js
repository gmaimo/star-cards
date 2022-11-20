// obtener datos API (https://github.com/astronexus/HYG-Database)

let load = document.querySelector('#load');

fetch("https://raw.githubusercontent.com/astronexus/HYG-Database/master/hygdata_v3.csv")
    .then(response => response.text())
    .then(data => {

        load.classList.add('d-none')

        //estructurar datos de tipo string
        let rows = data.split("\n")
        let cols = rows.map(el => el.split(","))
        //enseñar solamente las estrellas que tienen nombre
        let properValue = cols.filter(star => star[6] != '')
        //estructurar campos que nos interesan, quitar primero y último campo, ordenar por distancia
        let referenceStar = properValue.map(knownStars => {
            return {
                hipparcos_id: knownStars[1],
                nombre: knownStars[6],
                distancia: parseFloat(knownStars[9]).toFixed(2),
                magnitud: parseFloat(knownStars[13]).toFixed(2),
                color: knownStars[16],
                constelacion: knownStars[29],
                coordenadas: `x: ${knownStars[17]}, y: ${knownStars[18]}, z: ${knownStars[19]}`
            }
        }).slice(1, -1).sort((a, b) => a.distancia - b.distancia)
        /* console.table(referenceStar); */

        //color RGB estrella tabla: http://www.vendian.org/mncharity/dir3/starcolor/details.html
        referenceStar.forEach(star => {
            if(star.color < '-0.35'){
                star.color = '#9bb2ff';
            } else if(star.color >= '-0.35' && star.color < '-0.3'){
                star.color = '#9eb5ff';
            } else if (star.color >= '-0.3' && star.color < '-0.25'){
                star.color = '#a3b9ff';
            } else if (star.color >= '-0.25' && star.color < '-0.2'){
                star.color = '#aabfff';
            } else if (star.color >= '-0.2' && star.color < '-0.15'){
                star.color = '#b2c5ff';
            } else if (star.color >= '-0.15' && star.color < '-0.1'){
                star.color = '#bbccff';
            } else if (star.color >= '-0.1' && star.color < '-0.05'){
                star.color = '#c4d2ff';
            } else if (star.color >= '-0.05' && star.color < '0'){
                star.color = '#ccd8ff';
            } else if (star.color >= '0' && star.color < '0.05'){
                star.color = '#d3ddff';
            } else if (star.color >= '0.05' && star.color < '0.1'){
                star.color = '#dae2ff';
            } else if (star.color >= '0.1' && star.color < '0.15'){
                star.color = '#dfe5ff';
            } else if (star.color >= '0.15' && star.color < '0.2'){
                star.color = '#e4e9ff';
            } else if (star.color >= '0.2' && star.color < '0.25'){
                star.color = '#e9ecff';
            } else if (star.color >= '0.25' && star.color < '0.3'){
                star.color = '#eeefff';
            } else if (star.color >= '0.3' && star.color < '0.35'){
                star.color = '#f3f2ff';
            } else if (star.color >= '0.35' && star.color < '0.4'){
                star.color = '#f8f6ff';
            } else if (star.color >= '0.4' && star.color < '0.45'){
                star.color = '#fef9ff';
            } else if (star.color >= '0.45' && star.color < '0.5'){
                star.color = '#fff9fb';
            } else if (star.color >= '0.5' && star.color < '0.55'){
                star.color = '#fff7f5';
            } else if (star.color >= '0.55' && star.color < '0.6'){
                star.color = '#fff5ef';
            } else if (star.color >= '0.6' && star.color < '0.65'){
                star.color = '#fff3ea';
            } else if (star.color >= '0.65' && star.color < '0.7'){
                star.color = '#fff1e5';
            } else if (star.color >= '0.7' && star.color < '0.75'){
                star.color = '#ffefe0';
            } else if (star.color >= '0.75' && star.color < '0.8'){
                star.color = '#ffeddb';
            } else if (star.color >= '0.8' && star.color < '0.85'){
                star.color = '#ffebd6';
            } else if (star.color >= '0.85' && star.color < '0.9'){
                star.color = '#ffe9d2';
            } else if (star.color >= '0.9' && star.color < '0.95'){
                star.color = '#ffe8ce';
            } else if (star.color >= '0.95' && star.color < '1'){
                star.color = '#ffe6ca';
            } else if (star.color >= '1' && star.color < '1.05'){
                star.color = '#ffe5c6';
            } else if (star.color >= '1.05' && star.color < '1.1'){
                star.color = '#ffe3c3';
            } else if (star.color >= '1.1' && star.color < '1.15'){
                star.color = '#ffe2bf';
            } else if (star.color >= '1.15' && star.color < '1.2'){
                star.color = '#ffe0bb';
            } else if (star.color >= '1.2' && star.color < '1.25'){
                star.color = '#ffdfb8';
            } else if (star.color >= '1.25' && star.color < '1.3'){
                star.color = '#ffddb4';
            } else if (star.color >= '1.3' && star.color < '1.35'){
                star.color = '#ffdbb0';
            } else if (star.color >= '1.35' && star.color < '1.4'){
                star.color = '#ffdaad';
            } else if (star.color >= '1.4' && star.color < '1.45'){
                star.color = '#ffd8a9';
            } else if (star.color >= '1.45' && star.color < '1.5'){
                star.color = '#ffd6a5';
            } else if (star.color >= '1.5' && star.color < '1.55'){
                star.color = '#ffd5a1';
            } else if (star.color >= '1.55' && star.color < '1.6'){
                star.color = '#ffd29c';
            } else if (star.color >= '1.6' && star.color < '1.65'){
                star.color = '#ffd096';
            } else if (star.color >= '1.65' && star.color < '1.7'){
                star.color = '#ffcc8f';
            } else if (star.color >= '1.7' && star.color < '1.75'){
                star.color = '#ffc885';
            } else if (star.color >= '1.75' && star.color < '1.8'){
                star.color = '#ffc178';
            } else if (star.color >= '1.8' && star.color < '1.85'){
                star.color = '#ffb765';
            } else if (star.color >= '1.85' && star.color < '1.9'){
                star.color = '#ffa94b';
            } else if (star.color >= '1.9' && star.color < '1.95'){
                star.color = '#ff9523';
            } else if (star.color >= '1.95' && star.color < '2'){
                star.color = '#ff7b00';
            } else if (star.color >= '2'){
                star.color = '#ff5200';
            }
        })
        
        //colocar las cards en el DOM
        let starWrapper = document.querySelector('#starWrapper');

        referenceStar.forEach(star => {
            let div = document.createElement('div')
            div.classList.add('col-12', 'col-md-6', 'col-lg-4', 'col-xl-3', 'mb-3', 'p-5')
            div.innerHTML = `
                <div class="card rounded-circle bg-black d-flex mx-auto" style="width: 15rem; height: 15rem;
                box-shadow: 0 0 2px #fff, 0 0 10px #fff, 0 0 20px ${star.color}, 0 0 30px ${star.color}, 0 0 40px ${star.color}, 0 0 50px ${star.color};
                color: white">
                    <div class="ff-f card-body d-flex flex-column justify-content-center align-items-center" style="color: ${star.color}">
                        <h6 class="card-subtitle mb-2 text-muted d-hover mt-1" style="font-size: 14px">HIP ${(star.hipparcos_id != '') ? star.hipparcos_id : '-'}</h6>
                        <h5 class="card-title" style="font-size: 19px">${star.nombre.substring(0,20)}</h5>
                        <p class="card-subtitle d-hover mb-1" style="font-size: 13px">Distancia: ${star.distancia} pc</p>
                        <p class="card-subtitle d-hover mb-1" style="font-size: 13px">Magnitud: ${star.magnitud}</p>
                        <p class="card-text d-hover mt-2">${(star.constelacion != '') ? star.constelacion : '-'}</p>
                    </div>
                </div>
                `
            starWrapper.appendChild(div)
        })
    })