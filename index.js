function distanceFromHqInBlocks(number){

    return Math.abs(number - 42);

}


function distanceFromHqInFeet(someValue){

    return distanceFromHqInBlocks(someValue)*264;

}


function distanceTravelledInFeet(passengerStart,passengerDestination) {

    return Math.abs(passengerStart - passengerDestination) * 264;


}

function calculatesFarePrice(passengerStart,passengerDestination) {
//const distanceTravelled = Math.abs(start - destination);
//const distanceTravelledInFeet = distanceTravelled * 264;
const ride = distanceTravelledInFeet(passengerStart,passengerDestination)
if ( ride <  400) {
    return ride * 0;

}




else if ( ride > 400 && ride <= 2000 )

return (ride - 400) * .02;



else if ( ride > 2000 && ride < 2500 )
return 25;



else  {
return 'cannot travel that far'

}

}

calculatesFarePrice();