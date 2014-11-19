/*
#
#       MAFIA ROLES 
#
*/
var dir = function(base, name){
    base = "https://raw.githubusercontent.com/Heark/mafia/master"
    name = this.name;
}

dir.name = "/roles.js"
var roles = ["Jester", "Bodyguard",
    "Doctor", "Investigator",
    "Villager", "Godfather",
    "Mafioso", "Blackmailer"
];

var roll = roles[Math.floor(Math.random() *
    roles.length)];

var player = function(role, description,
    actions) {
    role = this.role;
    description = this.description;
    actions = this.actions;
};
jester = this;
bodyguard = this;
doctor = this;
roll;
if (roll = "Jester") {
    player.role = "Jester";
    player.description = "";
    player.actions = jester;

} if (roll = "Bodyguard") {
    player.role = "Bodyguard";
    player.description = "";
    player.actions = bodyguard;
  
} if (roll = "Doctor") {
  player.role = "Doctor";
  player.description = "";
  player.actions = doctor;
}
