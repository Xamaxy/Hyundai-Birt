// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 45.806050, lng: 16.235190 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}