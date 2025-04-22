# Cities Map

This is a GitHub Pages project that displays a map with highlighted cities.

## Setup

1. Add your visited cities to `cities.json`, each entry having:
   ```json
   {
     "name": "City Name",
     "lat": latitude,
     "lng": longitude
   }
   ```
2. Commit and push to your GitHub repository.
3. In the repository settings, under **Pages**, select the `main` branch and root (`/`) folder.
4. GitHub Pages will publish at `https://<username>.github.io/<repository>/`.

## File Structure

- `index.html`: Main page that loads the map.
- `main.js`: JavaScript for fetching city data and rendering the map.
- `cities.json`: List of cities to display on the map.
- `README.md`: Project documentation.
