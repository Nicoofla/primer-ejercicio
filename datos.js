const fs= require("fs");
const superHeroesData = JSON.parse(fs.readFileSync("./superheroes.json"));



module.exports=superHeroesData