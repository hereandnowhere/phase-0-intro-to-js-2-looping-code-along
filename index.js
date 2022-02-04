const names = [`Guadalupe`, `Ollie`, `Aki`];

const party = "suprise";

function writeCards(guests, event) {
  for (let i = 0; i < guests.length; i++) {
    guests.splice(i,1,`Thank you, ${guests[i]}, for the wonderful ${event} gift!`);
  }

  return guests;
}

writeCards(names, party);

function countDown(num){
    let countDown = num;
    while (countDown >= 0){
        console.log(countDown);
        countDown--;
    }
    return num;
}