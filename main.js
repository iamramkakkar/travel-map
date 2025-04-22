fetch('cities.json')
  .then(response => response.json())
  .then(cities => {
    var map = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    var markers = [];
    cities.forEach(city => {
      var marker = L.marker([city.lat, city.lng]).addTo(map)
        .bindPopup(city.name);
      markers.push(marker);
    });

    if (markers.length) {
      var group = new L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.2));
    }
  })
  .catch(err => console.error(err));
