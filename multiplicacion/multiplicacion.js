const fs = require('fs'); // Aqui importamos el paquete de manipulacion de archivos

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let tabla = '';

        if(!Number(base)){
            reject(`Favor de insertar un numero valido`)
            return;
        }
        if(!Number(limite)){
            reject(`Favor de insertar un limite valido`)
            return;
        }
        
        for(let i=1; i<=limite; i++){
            // console.log(base + 'x' + i + '=' + base * i) // version antigua
            tabla += `${base} x ${i} = ${base * i}\n`
            // console.log(`${base} x ${i} = ${base * i}`); // version actual
         }

         fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
            if(err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
};

let listarTabla = (base, limite) =>{
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`Favor de insertar un numero valido`)
            return;
        }
        if(!Number(limite)){
            reject(`Favor de insertar un limite valido`)
            return;
        }

        for(let i=1; i<=limite; i++){
            // console.log(base + 'x' + i + '=' + base * i) // version antigua
             console.log(`${base} x ${i} = ${base * i}`);
            // console.log(`${base} x ${i} = ${base * i}`); // version actual
         }
    });
};

module.exports = {
    crearArchivo,
    listarTabla 
};
