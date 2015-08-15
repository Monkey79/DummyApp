/*****Variables********/
var suma = function(num1, num2) {
    console.log("SUMA :", (num1 + num2));
};

var alternativaSuma = suma;
/*****Listeners********/
window.addEventListener('load', loadComplHndl);

/*****Handlers********/
function loadComplHndl(event) {
    console.log("===LOAD====");
}