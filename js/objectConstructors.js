function playa () {
    var name;
    var speed = 10;
    var health = 100;
    this.ammoCount = 100;

    this.ReArm(ammo) = function (ammo) {
        this.ammoCount += ammo;
    }
}

var player1 = new playa();
var player2 = new playa();

function updatePlayer(currentPlayer, healthUpdate, ammo) {
currentPlayer.name = prompt("Enter a name for currentPlayer");
alert("currentPlayer's name is " + currentPlayer.name + ".");
currentPlayer.health = healthUpdate;
currentPlayer.Rearm(ammo);
alert(currentPlayer +" has " + currentPlayer.ammoCount + "in their arsenal");
}


updatePlayer(player1, 20, 1);
updatePlayer(player2, 60, 1000);