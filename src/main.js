
function main() {
    var id = document.getElementById("idEl").value;
    console.log("idEl: " + id);


   // var clock_out = makeVCard("CANTEEN CLOCK OUT", 2);
   // var lunch_in = makeVCard("CANTEEN START LUNCH", 3);
   // var lunch_out = makeVCard("CANTEEN END LUNCH", 4);
   var buttons = document.getElementsByName("toggle");
   buttons.forEach(ele => {
        ele.style.display = "block";
   });


    return;
}

function dl_ci() {
    makeVCard("CANTEEN CLOCK IN", 1);
}

function dl_co() {
    makeVCard("CANTEEN CLOCK OUT", 2);
}

function dl_sl() {
    makeVCard("CANTEEN START LUNCH", 3);
}

function dl_el() {
    makeVCard("CANTEEN END LUNCH", 4);
}