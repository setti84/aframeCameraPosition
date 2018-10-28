class LatLng {

  constructor (lat, lng) {
    this.lat = lat;
    this.lng = lng;
    this.zoom = ZOOMLEVEL;
    this.mercatorCoord = this.wgs2Mercator();

  }

  setCoords (newLat, newLng){
    this.lat = newLat;
    this.lng = newLng;
    this.mercatorCoord = this.wgs2Mercator();
  }

  toString(){
    return Math.round(this.lat*100000)/100000 + " " + Math.round(this.lng*100000)/100000
  }

  wgs2Mercator () {
    // OSM version
    //"Converts given lat/lon in WGS84 Datum to XY in Spherical Mercator EPSG:900913"
    const x = this.lng * ORIGINSHIFT / 180;
    let y = Math.log( Math.tan((90 + this.lat) * Math.PI / 360 )) / (Math.PI / 180);
    y = y * ORIGINSHIFT / 180;

    return [x,y];
  }

  merc2Tile () {
    // "Returns tile for given mercator coordinates"
    const res = 2 * Math.PI*EARTH_RADIUS_IN_METERS/TILE_SIZE/(Math.pow(2,this.zoom));
    const px = (this.mercatorCoord[0]+ORIGINSHIFT)/res;
    const py = (this.mercatorCoord[1]+ORIGINSHIFT)/res;

    return [parseInt(Math.ceil(px/parseFloat(TILE_SIZE))-1), parseInt(Math.ceil(py/parseFloat(TILE_SIZE))-1)]
  }

  googleTiles () {
    return [this.merc2Tile()[0], (Math.pow(2,this.zoom) - 1) - this.merc2Tile()[1]]
  }

}
