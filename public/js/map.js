mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25}).setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`))
    .addTo(map);



// mapboxgl.accessToken = mapToken;

// if (
//     listing.geometry &&
//     Array.isArray(listing.geometry.coordinates) &&
//     listing.geometry.coordinates.length === 2 &&
//     typeof listing.geometry.coordinates[0] === 'number' &&
//     typeof listing.geometry.coordinates[1] === 'number'
// ) {
//     const map = new mapboxgl.Map({
//         container: "map",
//         style: "mapbox://styles/mapbox/streets-v12",
//         center: listing.geometry.coordinates, // [lng, lat]
//         zoom: 9
//     });

//     new mapboxgl.Marker({ color: "red" })
//         .setLngLat(listing.geometry.coordinates)
//         .setPopup(
//             new mapboxgl.Popup({ offset: 25 }).setHTML(
//                 `<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`
//             )
//         )
//         .addTo(map);
// } else {
//     console.error("❌ Mapbox Error: Invalid or missing listing.geometry.coordinates", listing.geometry);
//     const mapContainer = document.getElementById("map");
//     if (mapContainer) {
//         mapContainer.innerHTML = `<p style="color:red;">Map unavailable: invalid location data.</p>`;
//     }
// }
