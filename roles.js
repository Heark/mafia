/*
 
 MAFIA ROLES

*/

var roles = ["Jester", "Bodyguard", "Doctor", "Investigator", "Villager", "Godfather", "Mafioso", "Blackmailer"];
var player = function(role, description){
 role = roles[Math.floor(Math.random()*roles.length)];
 description = this.description;
}
