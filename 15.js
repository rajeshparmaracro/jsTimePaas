
function man() {
    power =10;
    console.log("Man's power is:",power);
}

function bat(spider) {
    var power =30;

    try {
        spider();
    } catch (error) {
        power=20;
    }
    console.log("Man's power is:",power);
}

bat(man);