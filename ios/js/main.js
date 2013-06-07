// Adam Crawford
// AFV 0613

$(document).on('pageinit', function () {

	// Build out #home page BEFORE it is displayed
	$(document).on('pagebeforeshow', "#home", function () {
		// Clear lists to ensure all links are fresh
		$("#home section ul").empty();

		// Build Featurs UL
		$('#feats')
			.append(
					$('<li>').append(
						$('<a>').attr("href", "#cam").attr("id", "camLink")
							.html($('<h3>')
								.append("Camera")
							)
							.on('click', function (e) {
								// Keep <a> tag from auto launching
								e.preventDefault()
								// Use JQM to handle the page transition
		                        $.mobile.changePage("#cam")
							})
					)
				)
			.append(
					$('<li>').append(
						$('<a>').attr("href", "#gps").attr("id", "gpsLink")
							.html($('<h3>')
								.append("GPS")
							)
							.on('click', function (e) {
								// Keep <a> tag from auto launching
								e.preventDefault()
								// Use JQM to handle the page transition
		                        $.mobile.changePage("#gps")
							})
					)
				)
			.append(
					$('<li>').append(
						$('<a>').attr("href", "#contacts").attr("id", "contactsLink")
							.html($('<h3>')
								.append("Contacts")
							)
							.on('click', function (e) {
								// Keep <a> tag from auto launching
								e.preventDefault()
								// Use JQM to handle the page transition
		                        $.mobile.changePage("#contacts")
							})
					)
				)
			.append(
					$('<li>').append(
						$('<a>').attr("href", "#geo").attr("id", "geoLink")
							.html($('<h3>')
								.append("Geotagged Photos")
							)
							.on('click', function (e) {
								// Keep <a> tag from auto launching
								e.preventDefault()
								// Use JQM to handle the page transition
		                        $.mobile.changePage("#geo")
							})
					)
			)

		// Build Research UL
		$("#research")
			.append(
				$('<li>').append(
					$('<a>').attr("href", "#intent").attr("id", "intentLink")
						.html($('<h3>')
							.append("Data Research, Project Intent")
						)
						.on('click', function (e) {
							// Keep <a> tag from auto launching
							e.preventDefault()
							// Use JQM to handle the page transition
	                        $.mobile.changePage("#intent")
						})
				)
			)
			.append(
				$('<li>').append(
					$('<a>').attr("href", "#access").attr("id", "accessLink")
						.html($('<h3>')
							.append("Accessibility")
						)
						.on('click', function (e) {
							e.preventDefault()
	                        $.mobile.changePage("#access")
						})
				)
			)
			.append(
				$('<li>').append(
					$('<a>').attr("href", "#ir").attr("id", "irLink")
						.html($('<h3>')
							.append("Industry Research")
						)
						.on('click', function (e) {
							e.preventDefault()
	                        $.mobile.changePage("#ir")
						})
				)
			)
		
		// Build API UL
		$("#apis")
			.append($('<li>')
				.append(
					$('<a>').attr("href", "#twit").attr("id", "twitLink")
						.html($('<h3>')
							.append("Twitter")
						)
						.on('click', function (e) {
							e.preventDefault()
	                        $.mobile.changePage("#twit")
						}).append($("<img>").attr({src: "img/twitter-bird-dark-bgs.png", class:'ui-li-icon'}))
					).attr("data-theme", "a")
			)
			.append($('<li>').append(
					$('<a>').attr("href", "#fb").attr("id", "fbLink")
						.html($('<h3>')
							.append("facebook")
						)
						.on('click', function (e) {
							e.preventDefault()
	                        $.mobile.changePage("#fb")
						}).append($("<img>").attr({src: "img/FB-f-Logo__blue_50.png", class:'ui-li-icon'}))
				).attr("data-theme", "a")
			)
			.append($('<li>').append(
					$('<a>').attr("href", "#gp").attr("id", "gpLink")
						.html($('<h3>')
							.append("Google+")
						)
						.on('click', function (e) {
							e.preventDefault()
	                        $.mobile.changePage("#gp")
						}).append($("<img>").attr({src: "img/gplus-32.png", class:'ui-li-icon'}))
				).attr("data-theme", "a")
			)
		
		// Refresh ALL UL's on home page to add styling
		$("#home section ul").listview('refresh')
	})
	
	//  This will run when the #home page is displayed
	$(document).on('pageshow', "#home", function () {
		
	})

	//Runs when Settings is shown
	$(document).on("pageshow", "#settings", function () {

		
	})
})