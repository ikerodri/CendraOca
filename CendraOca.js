var jugador1 ="";
var jugador2 ="";
var color1="";
var color2="";
var comptadortorns=1;
var numerodau=0;
var posicioactual1=1;
var posicioactual2=1;
var potirar1=0;
var potirar2=0;
var tornsperduts1=0;
var tornsperduts2=0;
var norepetir=0;

function començar(){
    location.reload();
    alert("Escolliu colors")
}
function crearjugador(color) {
    if(jugador1!=""){
        jugador2=color
        if(jugador2==jugador1){
            alert("No pot tenir el mateix color")
        }else{
            alert("Segon jugador = " + color)
            $("#colors").slideUp();
            colorjugador();
            $("#tirardau").show();
        }
    }
    if(jugador1==""){
        alert("Primer jugador = " + color)
        jugador1=color
        colorjugador();
    }
}

function colorjugador(){
    if (jugador1=='vermell'){
        $(".J1").css("background-color","red");
        color1="red";
    }
    if (jugador1=='blau'){
        $(".J1").css("background-color","blue");
        color1="blue";
    }
    if (jugador1=='negre'){
        $(".J1").css("background-color","black");
        $(".J1").css("color","white");
        color1="black";
    }
    if (jugador1=='groc'){
        $(".J1").css("background-color","yellow");
        color1="yellow";
    }
    if (jugador1=='verd'){
        $(".J1").css("background-color","green");
        color1="green";
    }
    if (jugador2=='vermell'){
        $(".J2").css("background-color","red");
        color2="red";
    }
    if (jugador2=='blau'){
        $(".J2").css("background-color","blue");
        color2="blue";
    }
    if (jugador2=='negre'){
        $(".J2").css("background-color","black");
        $(".J2").css("color","white");
        color2="black";
    }
    if (jugador2=='groc'){
        $(".J2").css("background-color","yellow");
        color2="yellow";
    }
    if (jugador2=='verd'){
        $(".J2").css("background-color","green");
        color2="green";
    }
}
function dau(){
    if(comptadortorns %2 == 0){
    numerodau = Math.floor((Math.random() * 6) + 1);
        if(color1=='black' || color1=='green' || color1=='red'){
            $(".numerodau").text('Has tret un ' + numerodau);
            $(".numerodau").css("background-color",color1);
            $(".numerodau").css("color","white");
        }
    $(".numerodau").text('Has tret un ' + numerodau);
    $(".numerodau").css("background-color",color1);
    } else{
        if(color2=='black' || color2=='green' || color2=='red'){
            $(".numerodau").text('Has tret un ' + numerodau);
            $(".numerodau").css("background-color",color2);
            $(".numerodau").css("color","white");
        }
    numerodau = Math.floor((Math.random() * 6) + 1);
    $(".numerodau").text('Has tret un ' + numerodau);
    $(".numerodau").css("background-color",color2);
    }
    comptadortorns++;
    moviment();
    norepetir=0;
}




//MOVIMENT





function moviment(){
    
    //JUGADOR 2
    
    
        if(comptadortorns %2 == 0){
        if(potirar2>0){
        alert("No pots tirar")
        tornsperduts2--;
        comptadortorns++;
        if(tornsperduts2==0){
            potirar2=0;
        }
    }
        if(potirar2==0){
        posicioactual2=posicioactual2+numerodau;
        var fitxa2 = $(".J2")
        if(posicioactual2>63){
            var sobrant = posicioactua2-63;
            posicioactual2=63-sobrant;
            fitxa2.appendTo("#" + posicioactual2);
        } else {
            fitxa2.appendTo("#" + posicioactual2);
        }
        
        
        //CALAVERA
        
        if(posicioactual2==58){
            alert("Has caigut a la calavera! Tornes a la casella numero 1")
            fitxa2.appendTo("#" + 1)
            posicioactual2=0;
        }
        
        //LABERINT
        
        if(posicioactual2==42){
            alert("Has caigut al laberint! Tornes a la casella numero 30")
            fitxa2.appendTo("#" + 30)
            posicioactual2=30;
        }
        
        //PONT
        
        if(posicioactual2==6){
            alert("De puente a puente i tiro porque me lleva la corriente!")
            fitxa2.appendTo("#" + 12)
            posicioactual2=12;
            comptadortorns--;
        }
            
        //OQUES
        if (norepetir==0){
            if(posicioactual2==5){
            alert("De oca en oca y tiro porque me toca!")
            fitxa2.appendTo("#" + 9)
            posicioactual2=9;
            comptadortorns--;
            norepetir++;
        }
        }
        if (norepetir==0){
            if(posicioactual2==9){
            alert("De oca en oca y tiro porque me toca!")
            fitxa2.appendTo("#" + 14)
            posicioactual2=14;
            comptadortorns--;
            norepetir++;
        }  
        }
        if(norepetir==0){  
        if(posicioactual2==9){
            alert("De oca en oca y tiro porque me toca!")
            fitxa2.appendTo("#" + 14)
            posicioactual2=14;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual2==14){
            alert("De oca en oca y tiro porque me toca!")
            fitxa2.appendTo("#" + 18)
            posicioactual2=18;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual2==18){
            alert("De oca en oca y tiro porque me toca!")
            fitxa2.appendTo("#" + 23)
            posicioactual2=23;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual2==23){
            alert("De oca en oca y tiro porque me toca!")
            fitxa2.appendTo("#" + 27)
            posicioactual2=27;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual2==27){
            alert("De oca en oca y tiro porque me toca!")
            fitxa2.appendTo("#" + 32)
            posicioactual2=32;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual2==32){
            alert("De oca en oca y tiro porque me toca!")
            fitxa2.appendTo("#" + 36)
            posicioactual2=36;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual2==36){
            alert("De oca en oca y tiro porque me toca!")
            fitxa2.appendTo("#" + 41)
            posicioactual2=41;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual2==41){
            alert("De oca en oca y tiro porque me toca!")
            fitxa2.appendTo("#" + 45)
            posicioactual2=45;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual2==45){
            alert("De oca en oca y tiro porque me toca!")
            fitxa2.appendTo("#" + 54)
            posicioactual2=54;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual2==54){
            alert("De oca en oca y tiro porque me toca!")
            fitxa2.appendTo("#" + 59)
            posicioactual2=59;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual2==59){
            alert("De oca en oca y tiro porque me toca!")
            fitxa2.appendTo("#" + 63)
            posicioactual2=63;
            comptadortorns--;
            norepetir++;
        }
        }
        
        //POSADA
        
        if(posicioactual2==19){
            alert("Has arribat a la posada! Perds 2 torns")
            potirar2=1;
            tornsperduts2=2;
        }
            
            //POU
        
        if(posicioactual1==31){
            alert("Has caigut al pou! Perds 2 torns")
            fitxa2.appendTo("#" + 31)
            potirar2=1;
            tornsperduts2=2;
        }
            
        //PRESÓ
        
        if(posicioactual1==56){
            alert("Has caigut al pou! Perds 2 torns")
            fitxa2.appendTo("#" + 56)
            potirar2=1;
            tornsperduts2=3;
        }
            
               //FINAL
            
        if(posicioactual2==63){
            fitxa2.appendTo("#" + 63)
            alert("Has guanyat!")
            location.reload();
        }
    }
    }
    
    //JUGADOR1
    
    
    else{
        if(potirar1>0){
        alert("No pots tirar")
        tornsperduts1--;
        comptadortorns++;
        if(tornsperduts1==0){
            potirar1=0;
        }
    }
        if(potirar2==0){
        posicioactual1=posicioactual1+numerodau;
        var fitxa1 = $(".J1")
        if(posicioactual1>63){
            var sobrant = posicioactual1-63;
            posicioactual1=63-sobrant;
            fitxa1.appendTo("#" + posicioactual1);
        } else {
            fitxa1.appendTo("#" + posicioactual1);
        }
        
        //CALAVERA
        
        if(posicioactual1==58){
            alert("Has caigut a la calavera! Tornes a la casella numero 1")
            fitxa1.appendTo("#" + 1)
            posicioactual1=0;
        }
        
        //LABERINT
        
        if(posicioactual1==42){
            alert("Has caigut al laberint! Tornes a la casella numero 30")
            fitxa1.appendTo("#" + 30)
            posicioactual1=30;
        }
        
        //PONT
        
        if(posicioactual1==6){
            alert("De puente a puente Y tiro porque me lleva la corriente!")
            fitxa1.appendTo("#" + 12)
            posicioactual1=12;
            comptadortorns--;
        }
            
        //OQUES
            
        if(norepetir==0){    
        if(posicioactual1==5){
            alert("De oca en oca y tiro porque me toca!")
            fitxa1.appendTo("#" + 9)
            posicioactual1=9;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual1==9){
            alert("De oca en oca y tiro porque me toca!")
            fitxa1.appendTo("#" + 14)
            posicioactual1=14;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual1==14){
            alert("De oca en oca y tiro porque me toca!")
            fitxa1.appendTo("#" + 18)
            posicioactual1=18;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual1==18){
            alert("De oca en oca y tiro porque me toca!")
            fitxa1.appendTo("#" + 23)
            posicioactual1=23;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual1==23){
            alert("De oca en oca y tiro porque me toca!")
            fitxa1.appendTo("#" + 27)
            posicioactual1=27;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
       if(posicioactual1==27){
            alert("De oca en oca y tiro porque me toca!")
            fitxa1.appendTo("#" + 32)
            posicioactual1=32;
            comptadortorns--;
           norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual1==32){
            alert("De oca en oca y tiro porque me toca!")
            fitxa1.appendTo("#" + 36)
            posicioactual1=36;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual1==36){
            alert("De oca en oca y tiro porque me toca!")
            fitxa1.appendTo("#" + 41)
            posicioactual1=41;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual1==41){
            alert("De oca en oca y tiro porque me toca!")
            fitxa1.appendTo("#" + 45)
            posicioactual1=45;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual1==45){
            alert("De oca en oca y tiro porque me toca!")
            fitxa1.appendTo("#" + 54)
            posicioactual1=54;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual1==54){
            alert("De oca en oca y tiro porque me toca!")
            fitxa1.appendTo("#" + 59)
            posicioactual1=59;
            comptadortorns--;
            norepetir++;
        }
        }
        if(norepetir==0){
        if(posicioactual1==59){
            alert("De oca en oca y tiro porque me toca!")
            fitxa1.appendTo("#" + 63)
            posicioactual1=63;
            comptadortorns--;
            norepetir++;
        }
        }
        
        //POSADA
        
        if(posicioactual1==19){
            alert("Has arribat a la posada! Perds 2 torns")
            fitxa1.appendTo("#" + 19)
            potirar1=1;
            tornsperduts1=2;
        }
            
        //POU
        
        if(posicioactual1==31){
            alert("Has caigut al pou! Perds 2 torns")
            fitxa1.appendTo("#" + 31)
            potirar1=1;
            tornsperduts1=2;
        }
            
        //PRESÓ
        
        if(posicioactual1==56){
            alert("Has caigut al pou! Perds 2 torns")
            fitxa1.appendTo("#" + 56)
            potirar1=1;
            tornsperduts1=3;
        }
            
            //FINAL
            
        if(posicioactual1==63){
            fitxa1.appendTo("#" + 63)
            alert("Has guanyat!")
            location.reload();
        }
    }
    }
}
