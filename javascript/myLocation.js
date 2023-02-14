//Kör en funktion för att lista ut vart enheten beffiner sig på för koordinater.
export const myLocation = (positionSuccess) => {
    navigator.geolocation.getCurrentPosition(positionSuccess);
}
