let winkelmand = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];
let output = document.getElementById("result");
let mandje = document.getElementById("mandje");

mandje.innerHTML = "er zitten " + winkelmand.length + " producten in uw winkelmand";
thing.innerHTML = winkelmand[3] + ", staat of de vierde plek in uw winkelmand";
winkelmand[1] = "bier";
function product_toevoegen() {
    winkelmand.push("kiwi")
    if (winkelmand.length > 1) {
        document.getElementById("result").innerHTML = winkelmand.toString();
    }
    else output.innerHTML = "u heeft niet genoeg producten om te tonen";
    if (winkelmand[4] == "drop") {
        output.innerHTML = winkelmand.toString();
    }
    else output.innerHTML = "uw heeft geen drop";
    mandje.innerHTML = "er zitten " + winkelmand.length + " producten in uw winkelmand";
}
function make_drop(){
    winkelmand[4] = "drop";	
    output.innerHTML = winkelmand.toString();
}
winkelmand.splice(0, 2);