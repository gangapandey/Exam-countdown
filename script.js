const endDate = "7 August 2023 12:00 PM"

document.getElementById("endDate").innerText =  endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date ()
    const diff = (end - now)/ 1000;
    console.log(diff);
     // convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
     // convert into hours
    inputs[1].value = Math.floor(diff / 3600 ) % 24;
     // convert into minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    // convert seconds
    inputs[3].value = Math.floor(diff) % 60;

}
// initial call
clock()

/**
 * 1day = 24hrs
 * 1hr = 60min
 * 60min = 3600sec
 */

setInterval(() => {
    clock();
  }, 1000);
