(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split('|')
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

   var brPlanets = planetsArray.join("<br>");
    console.log(planetsArray);
console.log(planetsArray)

    var planetsList = "<ul>";

    planetsArray.forEach(function (planet) {
    planetslist += "li>" + planet + "</li>";
    })
    console.log(planetsList);

document.getElementById('planets').innerHTML = planetsList

})();
