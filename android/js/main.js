// Adam Crawford
// AFV 0613


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
				.append($('<a>')
					.attr("href", "#inst")
					.attr("id", "instLink")
					.html($('<h3>')
						.append("Instagram (Working)")
					)
					.on('click', function (e) {
						e.preventDefault()
                        $.mobile.changePage("#inst")
					})
					.append($("<img>")
						.attr({src: "img/insticon.png", class:'ui-li-icon'})
					)
				)
				.attr("data-theme", "a")
			)
			.append($('<li>')
				.append($('<a>')
					.attr("href", "#wow")
					.attr("id", "wowLink")
					.html($('<h3>')
						.append("World of Warcraft Realm Status (Working)")
					)
					.on('click', function (e) {
						e.preventDefault()
                        $.mobile.changePage("#wow")
					})
					.append($("<img>")
						.attr({src: "img/wowx4.png", class:'ui-li-icon'})
					)
				)
				.attr("data-theme", "a")
			)
			.append($('<li>')
				.append($('<a>')
						.attr("href", "#twit")
						.attr("id", "twitLink")
						.html($('<h3>')
							.append("Twitter (Under Construction)")
						)
						.on('click', function (e) {
							e.preventDefault()
	                        $.mobile.changePage("#twit")
						})
						.append($("<img>")
							.attr({src: "img/twitter-bird-dark-bgs.png", class:'ui-li-icon'})
						)
					)
				.attr("data-theme", "a")
			)
			.append($('<li>')
				.append($('<a>')
					.attr("href", "#fb")
					.attr("id", "fbLink")
					.html($('<h3>')
						.append("facebook (Under Construction)")
					)
					.on('click', function (e) {
						e.preventDefault()
	                    $.mobile.changePage("#fb")
					})
					.append($("<img>")
						.attr({src: "img/FB-f-Logo__blue_50.png", class:'ui-li-icon'})
					)
				)
				.attr("data-theme", "a")
			)
			.append($('<li>')
				.append($('<a>')
					.attr("href", "#gp")
					.attr("id", "gpLink")
					.html($('<h3>')
						.append("Google+ (Under Construction)")
					)
					.on('click', function (e) {
						e.preventDefault()
                        $.mobile.changePage("#gp")
					})
					.append($("<img>")
						.attr({src: "img/gplus-32.png", class:'ui-li-icon'})
					)
				)
				.attr("data-theme", "a")
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

	//Runs before Intent is shown
	$(document).on("pagebeforeshow", "#intent", function () {
		$("#intent section")
			.append($("<h2>")
				.append("Data Research")
			)
			.append($("<h3>")
				.append("Less obvious perks of 'live' data")
			)
			.append($("<p>")
				.append("“Live” data sources have many benefits.  Not only do they allow our users to have up to the minute updates while using applications, they allow the developer to utilize the providers API and resources to increase our applications efficiency.  The Twitter API, for example, can be used as a Single Sign-On.  This method of authentication removes the burden of remembering another username and password combination.  It will also provide an avenue for advertisement or purchase confirmation.  In-app purchases are becoming more prevalent, and with Twitter integration, and the user’s permission, once an in-app purchase is complete a Tweet can be sent about the great new feature just unlocked by the user.  You can also use it to send a receipt to the user in the form of a Direct Message.")
			)
			.append($("<h3>")
				.append("Why we need JSON-P")
			)
			.append($("<p>")
				.append("As an IT Technician, I fully understand the importance of browser security.  However, in today’s connected age, data sharing between web domains is more important to a user than a small chance of malware running on their device.  This is exactly what JSON-P does.  It will allow the developer to “work around” the same origin policy that was designed to keep code and sources from other domains from running in the browser.  Though I do not fully support the premise of purposefully circumventing the browser security, using known and trusted data sources could provide useful functionality.")
			)
			.append($("<h2>")
				.append("Project Intent")
			)
			.append($("<h3>")
				.append("Design and Functionality")
			)
			.append($("<p>")
				.append("There are ways to enhance a user’s experience with applications.  One is to use APIs to hook into the native features of the device.  While walking down the street, a user might like to know the forecast for the area.  Applications could use the internal GPS and data connection to pass the device’s coordinates to a weather service and return alerts of upcoming inclement weather.  Likewise, the device’s gyroscope could be used to control the pan and tilt of a remote camera.")
			)
			.append($("<p>")
				.append("Unfortunately for me, creativity is one of my weaknesses.  I have never been much for aesthetics nor have I had an eye for something that “looks great”.  That said, my current aspirations for my app this month includes styling other than the included themes from JQM.  While I’m not expecting a Picasso, I would like for my wife to not ask if my 3 year old daughter designed it; though my daughter’s would likely look better.  As for functionality, I hope to hook into the three major social networks (Google+, Twitter, and Facebook) and utilize the devices camera and GPS to allow geotagged photos.")
			)
			.append($("<h3>")
				.append("Lessons Learned in the Past")
			)
			.append($("<p>")
				.append("As described above, visual design is not my strong suit.  Fortunately, many in my family are the creative types.  It is always nice for me to be able to bounce a design idea off of them and receive feedback on color schemes, layouts, and overall look and feel.  I have also learned that it is much easier for me to code the functionality into an application, spending time on the workings of the code then using the input gathered to make the app more appealing to the eye.  I once spent almost 10 hours just working on a color scheme and rough layout that I had to rush the functionality portion and was not able to refactor for efficiency.")
			)
	})

	//Runs when Intent is shown
	$(document).on("pageshow", "#intent", function () {

		
	})

	//Runs before Twitter is shown
	$(document).on("pagebeforeshow", "#twit", function () {
		// $("#twit section").empty();
		// $.ajax({
		// 	url: "https://api.twitter.com/1.1/search/tweets.json?q=bugless%20beast",
		// 	type: 'GET',
		// 	dataType: 'jsonp',
		// 	success: function (data) {
		// 		console.log(data)
		// 	}

		// })
	// 		$.ajax({

	// 		})
	// 	                RVJXczBTVGNCazlRa2VrdEZ4cFZnOkVqdGtQdXRESjFzbkRoaXNzTVZVRVNaNDJtenhtaG41RXd0
	// RGxrUGVXWQ==

                //ERWs0STcBk9QkektFxpVg:EjtkPutDJ1snDhissMVUESZ42mzxmhn5EwtDlkPeWY
		
	})

	//Runs when Twitter is shown
	$(document).on("pageshow", "#twit", function () {

		
	})


	//Runs before Instagram is shown
	$(document).on("pagebeforeshow", "#inst", function () {
		console.log("at inst");
		$("#instGrid").empty()
		$.ajax({
			url: "https://api.instagram.com/v1/media/popular?client_id=831fef6bb0e6417eab368d2374183fa5",
			type: 'GET',
			dataType: 'jsonp',
			success: function(info){
				console.log(info)
				$.each(info.data, function(index, photo) {
					var pic = photo.images.thumbnail.url
					$("#instGrid")
					.append($('<div>')
						.attr({class: "col"})
						.append($('<div>')
							.attr({class: "col"})
							.append($("<a>")
								.attr("href", "#")
								.html($("<img>")
									.attr("src", pic)
								)
								.append($('<p>')
										.append("Comments: " + photo.comments.count)
								)
							)
						)
						
						// Future Functionality will allow clicking on image to load new page with comments
					)
				})
			}	
		})
		
	})

		//Runs when Instagram is shown
	$(document).on("pageshow", "#inst", function () {
		
		
	})

	// Runs before WOW is shown
	$(document).on("pagebeforeshow", "#wow", function () {
		console.log("at wow");
		$("#wow ul").empty()
		$.ajax({
			url: "http://us.battle.net/api/wow/realm/status?jsonp=?",
			type: 'GET',
			dataType: 'jsonp',
			success: function(info){
				//console.log(info)
				$.each(info.realms, function(index, realm) {
					console.log(realm)
					if (realm.status) {
						online = "Online"
						statClass = "status-icon-up"
					} else {
						online = "Offline"
						statClass = "status-icon"
					}
					var rName = realm.name
					$("#wowList")
					.append($('<li>')
						.append($("<a>")
							.attr("href", "#")
							.html('<h3>' + rName + ": " + online + "</h3> <p>Battlegroup: " + realm.battlegroup + " Type: " + realm.type + " Population: " + realm.population + "</p>")
						
						.append($("<img>")
							.attr({"src": "img/status.gif", class: statClass})
							)	
						)
						// Future Functionality will allow clicking on image to load new page with comments
					)
					$("#wowList").listview("refresh")
				})
			}	
		})
		
	})

	

	// Runs when WOW is shown
	$(document).on("pageshow", "#wow", function () {
		
		
	})
