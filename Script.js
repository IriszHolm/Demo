//Funktioner skapas ej här, utan de kan skrivas ut här, alltså du ska ej skapa varaibler
//Nedan ser du dock funktionerna
console.log("Hello from js-file");

function minFunktion() {
    console.log("Funktionn kördes");

}
minFunktion();

function buttonHandler() {
    console.log("Du klickade");
    alert("DU klickade på knappen"); 

}

function secondButtonHandler() {
    let namn = prompt("Vad heter du?"); //let om du vill ändtra på en variabel, const kan ej ändras
    alert("Hello " + namn)


}
function thirdButtonHandler()
{
    //const namn = document.querySelector("#namn").value;  //komma åt något med samma selector syntax
    //Eller;
    const namn = document.getElementById("namn").value;
    console.log(namn)

    if (namn == "Iris" || namn == "Felicia"){
        namn = namn + "Holmberg";
    }
    else if (namn == Dennis){
        namn == "Bistromd";
    }
    else {
        console.log("Okänd");
    }

    document.querySelector('#hello-output').innerText = `hej $(namn)!`;
    //document.querySelector('#hello-output').innerText = "Hej " + namn;

}