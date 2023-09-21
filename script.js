const MAPBOX_ACCESS_TOKEN = "API-KEY";

navigator.geolocation.getCurrentPosition(success, error, {
  enableHighAccuracy: true,
});

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 15,
  });

  const navigationControls = new mapboxgl.NavigationControl();
  map.addControl(navigationControls, "top-left");

  const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN,
  });
  map.addControl(directionControls);
}

function success(pos) {
  const { longitude, latitude } = pos.coords;
  setupMap([longitude, latitude]);

  //   setupMap([pos.coords.longitude, pos.coords.latitude]);
}

function error() {
  setupMap([-2.24, 53.48]);
}
