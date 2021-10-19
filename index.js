let age = prompt("Please enter your age");
let distance = prompt("Please enter your travel distance");

const ticketPrice = (distance*0.21);
const juniorDiscount = (ticketPrice*0.8).toFixed(2);
const seniorDiscount = (ticketPrice*0.6).toFixed(2);

if (age < 18) {
    alert("Your ticket will cost £" + juniorDiscount);
} else if (age > 65) {
    alert("Your ticket will cost £" + seniorDiscount);
} else {
    alert("Your ticket will cost £" + ticketPrice);
}