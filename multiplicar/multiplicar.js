//requireds
const fs = require('fs')
const colors = require('colors')

let listarTabla = (base, limite) => {

    console.log(`=================`.green)
    console.log(`==Tabla de ${ base }`.green)
    console.log(`=================`.green)

    let data = ``

    for (let i = 1; i <= limite; i++) {
        let resul = base * i
        data += `${base} * ${i} = ${resul} \n`

    }

    console.log(data)

}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor ${base} no es un numero.`)
            return
        }

        let data = ``

        for (let i = 1; i <= limite; i++) {
            let resul = base * i
            data += `${base} * ${i} = ${resul} \n`

        }

        console.log(data.green)

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${ base }.txt`)
        })


    })
}

module.exports = {
    crearArchivo,
    listarTabla
}