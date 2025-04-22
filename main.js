fetch('cities.json')
  .then(r => r.json())
  .then(cities => {
    // world bounds [south‑west, north‑east]
    const worldBounds = [[-90, -180], [90, 180]];

    // initialize map with maxBounds so you can’t pan outside
    const map = L.map('map', {
      center: [0, 0],
      zoom: 2,
      maxBounds: worldBounds,
      maxBoundsViscosity: 1.0,  // “stick” at the edges
      worldCopyJump: false      // don’t jump tiles at antimeridian
    });

    // tile layer: noWrap + bounds prevents infinite wrapping
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
      maxZoom: 19,
      noWrap: true,
      bounds: worldBounds
    }).addTo(map);

    // add city markers
    const markers = cities.map(c =>
      L.marker([c.lat, c.lng])
       .addTo(map)
       .bindPopup(c.name)
    );

    // fit to markers
    if (markers.length) {
      const grp = L.featureGroup(markers);
      map.fitBounds(grp.getBounds().pad(0.2));
    }
  })
  .catch(console.error);
