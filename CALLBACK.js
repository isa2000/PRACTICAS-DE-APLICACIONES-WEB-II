const activo=[
    {
        id:1,
        activotecnologico:"monitores",
        iddepartamento:2
    },
    {
        id:2,
        activotecnologico:"impresoras",
        iddepartamento:1
    },
    {
        id:3,
        activotecnologico:"telefonos",
        iddepartamento:3
    },
    {
        id:4,
        activotecnologico:"aplicaciones web",
        iddepartamento:4
    },
    {
        id:5,
        activotecnologico:"servidores",
        iddepartamento:5
    },
   
]
const departamento=[
    {
        id:1,
        depar:"Logistica",
        idactivo:2,
        idmanejoactivos:2
    },
    {
        id:2,
        depar:"Marketing",
        idactivo:1,
        idmanejoactivos:1
    },
    {
        id:3,
        depar:"Produccion",
        idactivo:3,
        idmanejoactivos:4
    },
    {
        id:4,
        depar:"Finanzas",
        idactivo:1,
        idmanejoactivos:5
    },
    {
        id:5,
        depar:"Administracion",
        idactivo:5,
        idmanejoactivos:3
    },
]
const manejoactivos=[
    {
        id:1,
        persona:"Taboada Isabel"
 
    },
    {
        id:2,
        persona:"Cruz Melanie"
    },
    {
        id:3,
        persona:"Saltos Paola"
    },
    {
        id:4,
        persona:"Salazar Monica"
    },
    {
        id:5,
        persona:"Paredes Maria"
    },
]

function findActiForId(id, callback  )
{
    const acti = activo.find((acti)=> acti.id===id );
    if (!acti)
    {
        const error= new Error();
        error.message="activo no encontrado";
        return callback(error);
    }
    return callback(null, acti );
}



function findDeparForId(id, callback){
    const depar =  departamento.find((depar)=>{
        return depar.id===id;
    });
    if (!depar)
    {
        const error =  new Error();
        error.message= "Departamento no encontrado";
        return callback(error)
    }
    return callback(null, depar)
}


findActiForId(5, (err,acti)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    // console.log(book)
    findDeparForId( acti.iddepartamento, ( err, depar )=>
    {
        if (err)
        {
            return console.log(err.message);
        }
        acti.depar= depar; 
        delete acti.iddepartamento;
        console.log(acti);

    } )
})