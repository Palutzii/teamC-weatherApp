//Ifall vi hittar enhetens koordinater så körs denna kod.

const positionSuccess = (position) => {
    let latitude = "";
    let longitude = "";
    const coordinates = position.coords;
    latitude = coordinates.latitude;
    longitude = coordinates.longitude;
    console.log(latitude);
    console.log(longitude)
}

//Kör en funktion för att lista ut vart enheten beffiner sig på för koordinater.
export const myLocation = () => {
    navigator.geolocation.getCurrentPosition(positionSuccess);
}
