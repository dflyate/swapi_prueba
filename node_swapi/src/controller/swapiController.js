const fetch = require('node-fetch')
const controller = {} 
const URL = 'https://swapi.py4e.com/api/'

controller.listar = (req,res) => { 
    fetch(URL)
    .then(promesa => promesa.json())
    .then(body => {
        body = JSON.stringify(body)
        .replace('people','gente').replace('planets','planetas')
        .replace('films','películas').replace('species','especies')
        .replace('vehicles','vehículos').replace('starships','naves estelares')
        res.json(JSON.parse(body))
    });
}; 

controller.buscarPersona = (req,res) => { 
    const {id} = req.params;
    fetch(URL+'/people/'+id)
    .then(promesa => promesa.json())
    .then(body => {
        body = JSON.stringify(body)
        .replace('birth_year','año de nacimiento').replace('eye_color','color de ojos')
        .replace('gender','género').replace('hair_color','color de cabello')
        .replace('height','altura').replace('homeworld','mundo natal')
        .replace('mass','masa').replace('name','nombre')
        .replace('skin_color','color de piel').replace('created','creado')
        .replace('edited','editado')
        .replace('people','gente').replace('planets','planetas')
        .replace('films','películas').replace('species','especies')
        .replace('vehicles','vehículos').replace('starships','naves estelares')
        res.json(JSON.parse(body))
    });
}; 


controller.buscarPelicula = (req,res) => { 
    const {id} = req.params;
    fetch(URL+'/films/'+id)
    .then(promesa => promesa.json())
    .then(body => {
        body = JSON.stringify(body)
        .replace('title','título').replace('episode_id','número de episodio')
        .replace('opening_crawl','rastreo de apertura').replace('producer','productor')
        .replace('release_date','fecha de realización').replace('url','url')
        .replace('created','creado').replace('edited','editado')
        .replace('characters','protagonistas').replace('planets','planetas')
        .replace('films','películas').replace('species','especies')
        .replace('vehicles','vehículos').replace('starships','naves estelares')
        res.json(JSON.parse(body))
    });
}; 

controller.buscarNave = (req,res) => { 
    const {id} = req.params;
    fetch(URL+'/starships/'+id)
    .then(promesa => promesa.json())
    .then(body => {
        body = JSON.stringify(body)
        .replace('name','nombre').replace('model','modelo')
        .replace('starship_class','clase de nave').replace('manufacturer','fabricante')
        .replace('cost_in_credits','costo en créditos').replace('length','longitud')
        .replace('crew','tripulación').replace('passengers','pasajeros')
        .replace('max_atmosphering_speed','velocidad atmosférica máxima').replace('hyperdrive_rating','calificación del hiperimpulsor')
        .replace('cargo_capacity','capacidad de carga').replace('consumables','consumibles')
        .replace('films','películas').replace('pilots','pilotos')
        .replace('created','creado').replace('edited','editado')
        res.json(JSON.parse(body))
    });
}; 

controller.buscarVehiculo = (req,res) => { 
    const {id} = req.params;
    fetch(URL+'/starships/'+id)
    .then(promesa => promesa.json())
    .then(body => {
        body = JSON.stringify(body)
        .replace('name','nombre').replace('model','modelo')
        .replace('vehicle_class','clase de vehículo').replace('manufacturer','fabricante')
        .replace('length','longitud').replace('cost_in_credits','costo en créditos')
        .replace('crew','personal').replace('passengers','pasajeros')
        .replace('max_atmosphering_speed','velocidad atmosférica máxima').replace('cargo_capacity','capacidad de carga')
        .replace('consumables','consumibles').replace('films','películas').replace('starship_class','clase de nave')
        .replace('pilots','pilotos').replace('hyperdrive_rating','calificación del hiperimpulsor')
        .replace('created','creado').replace('edited','editado')
        res.json(JSON.parse(body))
    });
}; 

controller.buscarEspecie = (req,res) => { 
    const {id} = req.params;
    fetch(URL+'/species/'+id)
    .then(promesa => promesa.json())
    .then(body => {
        body = JSON.stringify(body)
        .replace('name','nombre').replace('classification','clasificación')
        .replace('designation','designación').replace('average_height','altura promedio')
        .replace('average_lifespan','promedio de vida').replace('eye_colors','colores de ojos')
        .replace('hair_colors','colores de cabello').replace('skin_colors','colores de piel')
        .replace('language','idioma').replace('homeworld','mundo natal')
        .replace('people','personas').replace('films','peliculas')
        .replace('created','creado').replace('edited','editado')
        res.json(JSON.parse(body))
    });
}; 

controller.buscarPlaneta = (req,res) => { 
    const {id} = req.params;
    fetch(URL+'/planets/'+id)
    .then(promesa => promesa.json())
    .then(body => {
        body = JSON.stringify(body)
        .replace('name','nombre').replace('diameter','diámetro')
        .replace('rotation_period','periodo de rotación').replace('orbital_period','periodo de órbita')
        .replace('gravity','gravedad').replace('population','población')
        .replace('climate','clima').replace('terrain','terreno')
        .replace('surface_water','superficie del agua').replace('residents','residentes')
        .replace('films','películas').replace('created','creado').replace('edited','editado')
        res.json(JSON.parse(body))
    });
}; 

module.exports = controller;