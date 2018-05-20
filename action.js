function pokedex (){

  

var id="";
var name="";
var photo="";
var type="";

var content="";

var contentInfo="";
var infoName="";
var infoType="";
var infoId="";
var auxDiv="";

var contentPhoto="";

  for(var i=0; i< pokemones.length;i++){
    id= pokemones[i].id;
    name= pokemones[i].name;
    photo=pokemones[i].photo;
    type=pokemones[i].type;

    console.log(id+name+photo+type);

    //constructor de div photo

    contentPhoto="<div class='foto'>" + "<img src='img/"+photo+".png'>"+"</div>";

    //constructor de div info
    infoName="<h2>"+ name + "</h2>";
    infoId="<span>" + id + "</span>";
    infoType="<img src='types/"+type+".png'>";
    auxDiv="<div class='details d-flex justify-content-between'>" +infoId+infoType+"</div>";

    contentInfo="<div class='info'>" +infoName+ auxDiv+ "</div>";

    content=content+"<div class='pokemon'>" + contentPhoto + contentInfo+"</div>";
    console.log(content);
  }

 document.getElementById('container').innerHTML=content;
}
