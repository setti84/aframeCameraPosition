

// new LatLng( 52.54591075494661, 13.355914950370789, 18 );   //Berlin beuth
// new LatLng(40.72372, -73.98922);   // New York
// new LatLng(1.29422,103.85411);        // Singapore
// new LatLng(0,0);

const map = new MapApp({
  zoom: 16,
  position:  {lat: 52.54591075494661, lng: 13.355914950370789}, // {lat: 1.29422, lng: 103.85411}
  debugging: false,
  maptiles: 'mapbox',
});

console.log(window);

function changeCoordinatesDisplay(cam) {
  document.getElementById('text').innerText = "Cam Pos Origin in WGS: " + cam.originlatLon + "\n "
    + "Cam Pos Origin in Mercator: " + cam.originMercator + "\n "
    + "Cam Pos Origin in Tile: " + cam.originlatLon.googleTiles()  + "\n "
    + "------------------------------------------------------------------------------\n "
    + "New Pos in WGS: " + cam.newLatLng  + "\n "
    + "New Pos in Mercator: " + cam.newLatLng.wgs2Mercator() + "\n "
    + "New Pos in Tile: " + cam.newLatLng.googleTiles()  + "\n ";
  ;
}





// setTimeout( () => {
//
//   const allObjects = document.querySelector('a-scene').object3D.children;
//   // console.log(allObjects)
//
//   allObjects.forEach( e => {
//     // console.log("resize")
//     // e.scale.set(SCALEFACTOR,SCALEFACTOR , SCALEFACTOR);
//   })
//
//
// },2000);