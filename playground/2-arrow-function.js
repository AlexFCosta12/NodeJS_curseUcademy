//const square = function (x){
//    return x*x;
//}

//const square = (x) => {
    //return x*x;
//}

//const square = (x) => x * x;

//console.log (square(3));

const event = {
    name : 'Brithday Partyr',
    guestList: ['Andrey','jen','Mike'],
    printGuestList() {
        console.log ('guest list for ' + this.name);

        this.guestList.forEach((guest)=>{
            console.log (guest+'is attending '+ this.name);
        })
    }
}

event.printGuestList();