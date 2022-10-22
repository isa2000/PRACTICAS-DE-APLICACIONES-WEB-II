const express =require ('express')
const cors = require('cors')
const path = require('path');

// INICIAR 
const servidor = express();

servidor.use(cors()).use(express.json())

servidor.get('/activos', (req,res)=>{
    res.status(200).sendFile(urlactivos);
})

servidor.get('/departamento',(req,res)=>{
    res.status(200).sendFile(urldepartamento);
})

servidor.get('/manejoactivo',(req,res)=>{
    res.status(200).sendFile(urlmanejoactivo);
})

// RUTAS 

const urlactivos = path.join(__dirname, "./activos.html")
const urldepartamento = path.join(__dirname, "./departamento.html")
const urlmanejoactivo = path.join(__dirname, "./maejoactivo.html")


servidor.use(cors()).use(express.json())

servidor.get('/activos', (req,res)=>{
    res.status(200).sendFile(urlactivos);
})

servidor.get('/departamento',(req,res)=>{
    res.status(200).sendFile(urldepartamento);
})

servidor.get('/manejoactivo',(req,res)=>{
    res.status(200).sendFile(urlmanejoactivo);
})


//PUERTO DEL SERVIDOR

const PORT = 8080;

servidor.listen(PORT, ()=>{
    console.clear();
    console.log("******************************************************");
    console.log(`Servidor corriendo http://localhost:${PORT}`);
    console.log("******************************************************");
})