var validID = {
    "frog": 1,
    "fox":1,
    "raccoon":1,

    "bowler": 2,
    "wizard":2,
    "beanie":2,
    "tophat":2
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
    }
};

var currentCreature = "frog"

window.onclick = e => {
    var img = "resources/images/" + e.target.id + ".png"
    var valid = validID[e.target.id]

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