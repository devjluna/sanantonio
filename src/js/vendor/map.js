var map = function() {
	var locations = [
		//['<p class="marker-title">Parque Zonal Huáscar</p><p class="marker-paragraph">Av. 200 Millas s/n, Tercer Sector, Distrito de Villa el Salvador, Provincia de Lima, Región Lima</p>', -12.2314418,-76.9278024, 'images/stadium/marker.png'],
		['<p class="marker-title">Parque Zonal Huiracocha</p><p class="marker-paragraph">Av. Próceres de la Independencia Cuadra 12, Distrito de San Juan de Lurigancho, Provincia de Lima, Región Lima</p>', -12.0092822,-77.0032153, 'images/stadium/marker.png'],
		//['<p class="marker-title">Parque Zonal Cahuide</p><p class="marker-paragraph">Av. De Los Parques S/N Urb. Valdivieso, Ate Vitarte. (Intersección con la Av. Los Rosales), Provincia de Lima, Región Lima</p>', -12.0577591,-76.9941448, 'images/stadium/marker.png'],
		//['<p class="marker-title">Parque Zonal Sinchi Roca</p><p class="marker-paragraph">Av. Universitaria Cuadra 32 s/n, Comas (Intersección en esquina con Av. Jamaica), Provincia de Lima, Región Lima</p>', -11.9220663,-77.0507195, 'images/stadium/marker.png'],
		//['<p class="marker-title">Parque Zonal Lloque Yupanqui</p><p class="marker-paragraph">Esquina Av. Universitaria y Av. Naranjal, Los Olivos, Provincia de Lima, Región Lima</p>', -11.9774373,-77.0769828, 'images/stadium/marker.png'],
		['<p class="marker-title">Parque Zonal Huayna Cápac</p><p class="marker-paragraph">Esquina Av. Pedro Miota y Av. Mateo Pumacahua, San Juan de Miraflores (Km 16 de la Carretera Panamericana Sur), Provincia de Lima, Región Lima</p>', -12.1903218,-76.9708154, 'images/stadium/marker.png'],
		['<p class="marker-title">Estadio Municipal Campo De Marte</p><p class="marker-paragraph">Jr. Nazca S/N, Jesús María, Provincia de Lima, Región Lima</p>', -12.0700267,-77.0440247, 'images/stadium/marker.png'],
		['<p class="marker-title">Estadio Municipal San Luis</p><p class="marker-paragraph">Av. Mariscal Nieto 288, San Luis, Provincia de Lima, Región Lima</p>', -12.0718802,-76.9930503, 'images/stadium/marker.png'],
		['<p class="marker-title">Complejo Deportivo Los Próceres</p><p class="marker-paragraph">Jr Belisario Flores Cdra 9, Jesus Maria, Provincia de Lima, Región Lima</p>', -12.0827102,-77.0449305, 'images/stadium/marker.png'],
		['<p class="marker-title">Estadio Teófilo Cubillas</p><p class="marker-paragraph">Av. Isabel La Católica 935, La Victoria, Provincia de Lima, Región Lima</p>', -12.0685678,-77.0252022, 'images/stadium/marker.png'],
		['<p class="marker-title">Canchas Auxiliares Estadio Monumental</p><p class="marker-paragraph">Avenida Prolongación Javier Prado 7596, Ate Vitarte, Provincia de Lima, Región Lima</p>', -12.0556709,-76.9382911, 'images/stadium/marker.png'],
		['<p class="marker-title">Colegio Politécnico Nacional del Callao</p><p class="marker-paragraph">Av. Elmer Faucett S/N, Callao, Provincia del Callao, Región Callao</p>', -12.0444567,-77.1019006, 'images/stadium/marker.png'],
		['<p class="marker-title">Colegio Juan Carlos Vizcardo y Guzman</p><p class="marker-paragraph">Av. Nicolás Dueñas No 555, Cercado de Lima, Provincia de Lima, Región Lima</p>', -12.0414681,-77.0670897, 'images/stadium/marker.png'],
		//['<p class="marker-title">IPD - Complejo Deportivo Oscar R. Benavides</p><p class="marker-paragraph">Av. 28 de Julio No 1699, La Victoria, Provincia de Lima, Región Lima</p>', -12.062559,-77.0270917, 'images/stadium/marker.png'],
		//['<p class="marker-title">IPD - Complejo Deportivo Chacarilla de Otero</p><p class="marker-paragraph">Calle Mariano Melgar No 146 - Urb. Chacarilla de Otero, San Juan de Lurigancho, Provincia de Lima, Región Lima</p>', -12.0232664,-77.0109759, 'images/stadium/marker.png']
	];

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