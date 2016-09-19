// Objects lesson
var Robot = {
    fuel: 100,
    weapon: "laser",
    speed: 10,
    stregnth: 5,
    armor: "light",

    AddFuel: function (tank){
        fuel += tank;
    },

    UpgradeArmor: function (change){
        armor = change
    },

    ChangeWeapon: function (change) {
        weapon = change
    },
}

Robot.UpgradeArmor();

Robot.speed += parseInt(prompt("Increase Robot speed."));
alert("Our robot now has a speed of " + Robot.speed + ".");
Robot.UpgradeArmor(prompt("what should we upgrade the armor to?"))

