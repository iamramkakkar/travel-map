fetch('cities.json')
  .then(response => response.json())
  .then(cities => {
    // initialize map centered at [0,0], zoom 2
    var map = L.map('map').setView([0, 0], 2);

    // add tile layer WITHOUT wrapping
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
      noWrap: true             // <- disables infinite horizontal tiles
    }).addTo(map);

    // OPTIONAL: lock map so you can’t pan outside the world
    map.setMaxBounds([[-90, -180], [90, 180]]);

    // add your city markers
    var markers = cities.map(city =>
      L.marker([city.lat, city.lng])
       .addTo(map)
       .bindPopup(city.name)
    );

    // zoom/map‐fit so all markers are visible
    if (markers.length) {
      var group = L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.2));
    }
  })
  .catch(err => console.error(err));
