$(document).ready(function () {
	$('#get-data').click(function () {
		$.getJSON(
			'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php'
		).done(function (data) {
			let imieId = $('<p></p>').text(`Imie: ${data.imie}`);
			let nazwiskoId = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
			let zawodId = $('<p></p>').text(`Zawód: ${data.zawod}`);
			let firmaId = $('<p></p>').text(`Firma: ${data.firma}`);

			const box = $('#dane-programisty');

			box.append(imieId);
			box.append(nazwiskoId);
			box.append(zawodId);
			box.append(firmaId);
		});
	});
});
