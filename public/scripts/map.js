let mymap = L.map('mapid').setView([39.015508, -84.692673], 14);

let marker = L.marker([39.015508, -84.692673]).addTo(mymap);

var polygon = L.polygon([
    [39.015173, -84.692294],
    [39.015116, -84.693998],
    [39.015729, -84.694820],
    [39.016702, -84.694346],
    [39.016494, -84.692119]
]).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYW5keWVnZyIsImEiOiJjanI2bzhubm0wMTRsNDNvNHhndWNkeXNpIn0.Ge5Sz2aUPEJFNubmwRhHUw'
}).addTo(mymap);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoiYW5keWVnZyIsImEiOiJjanI2bzhubm0wMTRsNDNvNHhndWNkeXNpIn0.Ge5Sz2aUPEJFNubmwRhHUw}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'pk.eyJ1IjoiYW5keWVnZyIsImEiOiJjanI2bzhubm0wMTRsNDNvNHhndWNkeXNpIn0.Ge5Sz2aUPEJFNubmwRhHUw'
// }).addTo(mymap);