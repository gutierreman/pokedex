function pokedex (){

  var pokemones = [
    {
      "id":"001",
      "name":"Hunter",
      "photo":"01",
      "type":"poison"
    },
    {
      "id":"002",
      "name":"Charizard",
      "photo":"02",
      "type":"fire"
    },
    {
      "id":"003",
      "name":"Blastoise",
      "photo":"03",
      "type":"water"
    },
    {
      "id":"004",
      "name":"Bulbasaur",
      "photo":"04",
      "type":"Plant"
    }
  ];

var id="";
var name="";
var photo="";
var type="";

var content="";
var contentPhoto="";
  for(var i=0; i< pokemones.length;i++){
    id= pokemones[i].id;
    name= pokemones[i].name;
    photo=pokemones[i].photo;
    type=pokemones[i].type;

    console.log(id+name+photo+type);
    contentPhoto="<div class='photo'>" + "<img src='img/01.png'>"+"</div>";


    content=content+"<div class='pokemon'><div>" + contentPhoto + "</div>";

  }

 container.getElementById('container').innerHTML=content;
}
