//soln here
function distanceFromHqInBlocks(distnc) {
  if (distnc > 42 ) {
    return distnc - 42;
  } else {
    return 42 - distnc
  } 
}

function distanceFromHqInFeet(distnc) {
  return distanceFromHqInBlocks(distnc)*264 ;

}

function distanceTravelledInFeet(start, destination) {
if ( start < destination){
  return (destination - start )* 264; 
}
else {
  return (start-destination)* 264;
}
}
function calculatesFarePrice(start, destination)  {
  const distnc= distanceTravelledInFeet(start, destination)
  if (distnc < 400) {
    return 0;
  }
  else if ( distnc > 400 && distnc < 2000) {
    return 0.02 * (distnc - 400 );
  }
  else if ( distnc > 2000 && distnc < 2500 ){
    return 25;
  }
  else { 
  return  'cannot travel that far';

}


}

