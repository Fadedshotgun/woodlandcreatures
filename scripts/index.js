var validID = {
    "frog": 1,
    "fox":1,
    "raccoon":1,
    "deer":1,

    "bowler": 2,
    "wizard":2,
    "beanie":2,
    "tophat":2,
    "cowboy":2,
    "large":2
};

var creatureToPosition = {
    "frog":{
        1:"-50%",
        2:"-50%"
    },
    "fox": {
        1:"-30%",
        2:"-70%"
    },
    "raccoon": {
        1:"30%",
        2:"-90%"
    },
    "deer": {
        1:"45%",
        2:"-75%"
    }
};

var currentCreature = "frog"

var hatsOpen = true
var creaturesOpen = true;

function handle(e) {
    var img = "resources/images/" + e.target.id + ".png"
    var valid = validID[e.target.id]

    if (e.target.id =="hat_toggle") {
      if (hatsOpen == true) {   
        document.getElementById("hat_selection").style.marginTop = "30vh"
        document.getElementById("hat_toggle").style.bottom = "0"
      } else {
        document.getElementById("hat_selection").style.marginTop = "0"
        document.getElementById("hat_toggle").style.bottom = "30vh"
      }
      hatsOpen = !hatsOpen
    }

    if (e.target.id =="creature_toggle") {
        if (creaturesOpen == true) {   
          document.getElementById("creature_selection").style.marginTop = "30vh"
          document.getElementById("creature_toggle").style.bottom = "0"
        } else {
            document.getElementById("creature_selection").style.marginTop = "0"
            document.getElementById("creature_toggle").style.bottom = "30vh"
        }
        creaturesOpen = !creaturesOpen
      }
    
  
    if (valid) {
        if (valid==1) {
            document.getElementById("creature_image").src = img
            currentCreature = e.target.id
        } else {
            document.getElementById("hat_image").src = img
        }

        var pos = creatureToPosition[currentCreature]
        console.log("translate("+pos[1]+","+pos[2]+")");
        document.getElementById("hat_image").style.transform = "translate("+pos[1]+","+pos[2]+")";
    }
}

window.onclick = e => {
    handle(e)
} 

window.ontouchstart = e => {
    handle(e)
}
