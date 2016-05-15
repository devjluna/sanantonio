var map = function() {
	var locations = [
		['<p class="marker-title">CAMPUS LIMA CENTRO</p><p class="marker-paragraph">Av. Petit Thouars 315 – Torre Tecnológica</p>', -12.066996230607534, -77.03582112303161, 'images/stadium/marker.png'],
		['<p class="marker-title">CAMPUS LIMA CENTRO</p><p class="marker-paragraph">Av. Wilson 1098</p>', -12.053195, -77.038540, 'images/stadium/marker.png'],
		['<p class="marker-title">CAMPUS LIMA CENTRO</p><p class="marker-paragraph"> Jr. Saco Oliveros 189</p>', -12.068355, -77.037638, 'images/stadium/marker.png'],
		['<p class="marker-title">CAMPUS LIMA CENTRO</p><p class="marker-paragraph">Av. Arequipa 790</p>', -12.072364, -77.036619, 'images/stadium/marker.png'],
		['<p class="marker-title">CAMPUS LIMA CENTRO</p><p class="marker-paragraph">Av. Arequipa 1098</p>', -12.075433, -77.036157, 'images/stadium/marker.png']
	];

	var punto = new google.maps.LatLng(-12.066996230607534, -77.03582112303161);

	var mapOptions = {
		center: punto,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById('stadium-maps'), mapOptions);

	var infowindow = new google.maps.InfoWindow();
	var markers = new Array();
	var marker, i;

	for (var i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map,
			icon: locations[i][3]
		});
		markers.push(new google.maps.LatLng(locations[i][1], locations[i][2]));
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	};
}
module.exports = map;