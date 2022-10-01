const activo=[
    {
        id:1,
        activotecnologico:"monitores",
    },
    {
        id:2,
        activotecnologico:"impresoras",
    },
    {
        id:3,
        activotecnologico:"telefonos",
    },
    {
        id:4,
        activotecnologico:"aplicaciones web",
    },
    {
        id:003,
        activotecnologico:"servidores",
    },
   
]
const departamento=[
    {
        id:1,
        depar:"Logistica",
        idactivo:2
 
    },
    {
        id:2,
        depar:"Marketing",
        idactivo:1
    },
    {
        id:3,
        depar:"Produccion",
        idactivo:3
    },
    {
        id:4,
        depar:"Finanzas",
        idactivo:1
    },
    {
        id:5,
        depar:"Administracion",
        idactivo:5
    },
]
const manejoactivos=[
    {
        id:1,
        idactivo:2,
        iddepartamento:1,
        persona:"Taboada Isabel"
 
    },
    {
        id:2,
        idactivo:1,
        iddepartamento:2,
        persona:"Cruz Melanie"
    },
    {
        id:3,
        idactivo:3,
        iddepartamento:3,
        persona:"Saltos Paola"
    },
    {
        id:4,
        idactivo:1,
        iddepartamento:4,
        persona:"Salazar Monica"
    },
    {
        id:5,
        idactivo:5,
        iddepartamento:5,
        persona:"Paredes Maria"
    },
]

for(elemento of manejoactivos){
    
    console.log
    (`Id activo: ${elemento.idactivo} 
    Id departamento: ${elemento.iddepartamento} 
    Nombre de Encargado: ${elemento.persona}
    `)
}

