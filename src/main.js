
function main() {
    var id = document.getElementById("idEl").value;
    console.log("idEl: " + id);

    var clock_in = makeVCard("CANTEEN CLOCK IN", 1);
    var clock_out = makeVCard("CANTEEN CLOCK OUT", 2);
    var lunch_in = makeVCard("CANTEEN START LUNCH", 3);
    var lunch_out = makeVCard("CANTEEN END LUNCH", 4);


    return;
}
