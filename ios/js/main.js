// Adam Crawford
// AFV 0613


	// Build out #home page BEFORE it is displayed
	$("#home").on('pagebeforeshow', function () {
		// Clear lists to ensure all links are fresh
		$("#home section ul").empty();

		// Build Featurs UL
		$('#feats')
			.append(
					$('<li>').append(
						$('<a>').attr("href", "#cam").attr("id", "camLink")
							.html($('<h3>')
								.append("Camera (Working)")
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
								.append("GPS (Working)")
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
								.append("Contacts (Working)")
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
					$('<a>').attr("href", "#connection").attr("id", "connLink")
						.html($('<h3>')
							.append("Connection (Working)")
						)
						.on('click', function (e) {
							// Keep <a> tag from auto launching
							e.preventDefault()
							// Use JQM to handle the page transition
	                        $.mobile.changePage("#connection")
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
			.append(
				$('<li>').append(
					$('<a>').attr("href", "#ir").attr("id", "vidLink")
						.html($('<h3>')
							.append("Imbeded Video")
						)
						.on('click', function (e) {
							e.preventDefault()
	                        $.mobile.changePage("#video")
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

	//Runs before Intent is shown
	$("#intent").on("pagebeforeshow", function () {
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


	//Runs before Instagram is shown
	$("#inst").on("pagebeforeshow", function () {
		console.log("at inst");
		var instPos = function (position) {
				console.log(position)
				$("#inst section").empty();
				$.ajax({
					url: "https://api.instagram.com/v1/media/search?lat=" + position.coords.latitude + "&lng=" + position.coords.longitude + "&distance=5000&client_id=831fef6bb0e6417eab368d2374183fa5",
					type: 'GET',
					dataType: 'jsonp',
					success: function(info){
						console.log(info)
						if (info.meta.code !== 200 || info.data.length === 0) {
							$("#inst section").prepend("<h2>Popular Photos</h2> <p>No photos were found near you in the last 5 days.</p> <p>Search used: <ul><li>Latitude: " + position.coords.latitude + "</li><li>Longitude: " + position.coords.longitude + " </ul></p> <p>Displaying current most popular photos instead!</p>")
							$("#inst section").append($("<ul>").attr({class: "col:", id: "instGrid"}))
							$.ajax({
								url: "https://api.instagram.com/v1/media/popular?client_id=831fef6bb0e6417eab368d2374183fa5",
								type: 'GET',
								dataType: 'jsonp',
								success: function(info){
									console.log(info)
									$.each(info.data, function(index, photo) {
										var pic = photo.images.thumbnail.url
										$("#instGrid")
											.append($('<li>')
												.attr({class: "col"})
												.append($("<a>")
													.attr("href", "#")
													.html($("<img>")
														.attr("src", pic)
													)
													.append($("<p>")
														.append("Comments: " + photo.comments.count)
													)
												)
												// Future Functionality will allow clicking on image to load new page with comments
											)
									})
								}	
							})
						} else {
							$("#inst section").prepend($("<h2>").append("Photos near you!"));
							$("#inst section").append($("<ul>").attr({class: "col:", id: "instGrid"}))
							$.each(info.data, function(index, photo) {
							var pic = photo.images.thumbnail.url
							$("#instGrid")
								.append($('<li>')
									.attr({class: "col"})
									.append($("<a>")
										.attr("href", "#")
										.html($("<img>")
											.attr("src", pic)
										)
										.append($("<p>")
											.append("Comments: " + photo.comments.count)
										)
									)
								// Future Functionality will allow clicking on image to load new page with comments
								)
							})
						}
						
					}
				})
			},
			instError = function (error) {
				console.log(error)

			}
		navigator.geolocation.getCurrentPosition(instPos, instError, {enableHighAccuracy: true})
		
	})


	// Runs before WOW is shown
	$("#wow").on("pagebeforeshow", function () {
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


	// Runs before GPS is shown
	$("#gps").on("pagebeforeshow", function () {
		var showPos = function (position) {
				console.log(position)
				$("#gps section").append($("<ul>"))
				$("#gps section ul").append($("<li>").append("<p>").html("Latitude: " + position.coords.latitude)).append($("<li>").append("<p>").html("Longitude: " + position.coords.longitude))
			},
			errorPos = function (error) {
				console.log(error)
			};

		$("#gps section").empty()
		navigator.geolocation.getCurrentPosition(showPos, errorPos, {enableHighAccuracy: true})
		
	})


	//Runs when the #cam page is shown
	$("#cam").on("pageshow", function () {
		var gotPic = function (picture) {
				console.log(picture)
				$("#cam section").append($("<img>").attr({"src": picture}))
			},
			picError = function (error) {
				console.log(error)
			};
		
		

		navigator.camera.getPicture(gotPic, picError, {correctOrientation: true, saveToPhotoAlbum: true, quality: 49,  destinationType: Camera.DestinationType.FILE_URI})
		
	})


	//Runs before the #contacts page is shown
	$("#contacts").on("pagebeforeshow", function () {
		var gotContacts = function (contacts) {
				contacts = contacts.sort(cSort);
				$.each(contacts, function(i, contact){
						if (contact.phoneNumbers) {
							var number =contact.phoneNumbers[0].value
						} else {
							var number = "N/A"
						}
						if (contact.emails){
								var email = contact.emails[0].value
						} else {
							var email = "N/A"
						}
						var cID = contact.id;
						//console.log(contact.name.formatted + " ID: " + contact.id)
            		$("#contList").append($("<li>")
            						.append("<a>")
            							.attr("href", "#editContact")
            							.html("<h3>" + contact.name.formatted + "</h3><p>Phone: " + number + " Email: " + email + "</p>")
            							.on("click", function (e) {
            								e.preventDefault();
	            								window.sessionStorage.setItem("cont", cID);
	            								// console.log(window.sessionStorage.getItem(cont))
	                                            $.mobile.changePage("#editContact")
            							})
            					)
        		})
				$("#contList").listview('refresh')
			},
			contactsError = function (error) {
				console.log(error)
			};
			//Sorts Contacts by last then first name and restores the object
			var cSort = function(a, b) {
  					aName = a.name.familyName + ' ' + a.name.givenName;
  					bName = b.name.familyName + ' ' + b.name.givenName;
  					return aName < bName ? -1 : (aName == bName ? 0 : 1);
				},
				options = new ContactFindOptions();
        	options.filter="";
        	options.multiple=true;
        	filter = ["name", "phoneNumbers", "emails"];
		navigator.contacts.find(filter, gotContacts, contactsError, options)
	})

	//Runs before the #editContact page is shown
	$("#editContact").on("pagebeforeshow", function () {
		$("#editContact section").empty()
		//console.log(window.sessionStorage.getItem(cont))
			var cID = window.sessionStorage.getItem("cont"),
				searchOptions = new ContactFindOptions(),
				printContact = function (contact) {
					//console.log(contact.photos[0].value)
					var setPic = function (picture) {
							var saved = function () {
								$("#editContact section").append(contact.name.formatted).append("<p>Updated with this photo!")
							 	$("#editContact section").append($("<img>").attr({"src": picture}))
								},
								errorSaving = function (error) {
									console.log(error)
								};
							// Look into if (contact.photos) to see if they exist and if it is possible to add secondary images
							// maybe use photo = contact.photos, i = contact.photos.length++, photo[i] = new....
							var photo=[]
							photo[0] = new ContactField('photo', picture, false)
							contact.photos = photo;
							contact.save(saved, errorSaving);
							
						},
						getError = function (error) {
							console.log(error)
						};
					navigator.camera.getPicture(setPic, getError, {correctOrientation: true, saveToPhotoAlbum: true, quality: 49,  destinationType: Camera.DestinationType.FILE_URI})
				}
				searchContacts = function (results) {
					$.each(results, function (i, result) {
						if (result.id.toString() === cID) {
							printContact(result)	
						} 
						//console.log(result.id)
					});
				},
				searchError = function (error) {
					console.log(error)
				};
			$("#editContact section").empty();
			//console.log(cID);
			searchOptions.filter=cID;
			searchOptions.multiple=true;
			searchFilter = ["id", "name", "phoneNumbers", "emails", "photos"];
			navigator.contacts.find(searchFilter, searchContacts, searchError, searchOptions)
	})


	//Runs before the #connection page is shown
	$("#connection").on("pagebeforeshow", function () {
		var checkConnection = function () {
		    var networkState = navigator.connection.type;

		    if (networkState === Connection.UNKNOWN) {
		    	var connImg = "/img/unknown.jpg",
		    		connState = "Unknown"
		    } else if (networkState === Connection.ETHERNET) {
		    	var connImg = "/img/ethernet.jpeg",
		    		connState = "Ethernet"
		    } else if (networkState === Connection.WIFI) {
		    	var connImg = "img/wifi.png",
		    		connState = "Wifi"
		    } else if (networkState === Connection.CELL_2G || networkState === Connection.CELL_3G || networkState === Connection.CELL_4G || networkState === Connection.CELL) {
		    	var connImg = "/img/cell.png",
		    		connState = "Cellular"
		    } else if (networkState === Connection.NONE) {
		    	var connImg = "/img/none.png",
		    		connState = "No Connection found"
		    }

		    
		    $("#connection").append($("<img>").attr({'src': connImg}))
		    $("#connection").append($("<h2>").html(connState));
		}

		checkConnection();
	})
