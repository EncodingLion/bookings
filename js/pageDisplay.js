var body = document.createElement("div");
    body.innerHTML = `  <!-- Add this button for opening the panel -->
    <button id="togglePanelBtn" class="btn btn-primary" style="position: fixed; top: 20px; right: 20px; z-index: 999;">
        Show Panel
    </button>
    <div class="container mt-5">
        <div class="tow justify-content-center">
            <div class="col-lg-8 col-md-10 col-sm-12">
                <div class="info-panel shadow-sm" id="panel">
                    <div class="panel-header">Property Information
                        <button id="closePanelBtn" class="btn btn-danger" style="float: right; margin: 10px;">Close</button>
                    </div>

                    <!-- Each value has an ID for dynamic population from Firebase -->
                    <div class="label-value">
                        <div class="label">Property Name</div>
                        <textarea id="propertyName" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Location</div>
                        <textarea id="location" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Main Host</div>
                        <textarea id="mainHost" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Airbnb Listing Name</div>
                        <textarea id="airbnbListingName" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Address/Building Name</div>
                        <textarea id="addressBuildingName" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Apartment Number</div>
                        <textarea id="apartmentNumber" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Apartment Floor</div>
                        <textarea id="apartmentFloor" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Parking</div>
                        <textarea id="parking" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Key Exchange Location</div>
                        <textarea id="keyExchangeLocation" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Garage Height</div>
                        <textarea id="garageHeight" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Number of Rooms</div>
                        <textarea id="numberOfRooms" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Number of Beds</div>
                        <textarea id="numberOfBeds" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Keys/Door Code Process</div>
                        <textarea id="keysDoorCodeProcess" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Keys and Passes Instructions</div>
                        <textarea id="keysAndPassesInstructions" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Key Location</div>
                        <textarea id="keyLocation" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Key Location Opening Hours</div>
                        <textarea id="keyLocationOpeningHours" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Bed Sizes</div>
                        <textarea id="bedSizes" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Check-in/Check-out Timings</div>
                        <textarea id="checkInCheckOutTimings" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Router Location</div>
                        <textarea id="routerLocation" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Early Check-in Allowed</div>
                        <textarea id="earlyCheckInAllowed" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Late Check-out Allowed</div>
                        <textarea id="lateCheckOutAllowed" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Early/Late Check-in/Check-out Price (Per Hour)</div>
                        <textarea id="earlyCheckInOrLateCheckOutPricePerHour" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Kitchen Amenity</div>
                        <textarea id="kitchenAmenity" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Coffee Maker</div>
                        <textarea id="coffeeMaker" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Laundry Amenity</div>
                        <textarea id="laundryAmenity" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Wi-Fi and Password</div>
                        <textarea id="wifiAndPassword" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Baby/Infant Cribs</div>
                        <textarea id="babyInfantCribs" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Pets Allowed (Cost)</div>
                        <textarea id="petsAllowedCost" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Pet Fee</div>
                        <textarea id="petFee" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Luggage Collection</div>
                        <textarea id="luggageCollection" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Pool/Jacuzzi</div>
                        <textarea id="poolJacuzzi" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Pool/Jacuzzi Dimension</div>
                        <textarea id="poolJacuzziDimension" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Gym</div>
                        <textarea id="gym" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Trash</div>
                        <textarea id="trash" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Smoking Area</div>
                        <textarea id="smokingArea" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Nearby Recommendations</div>
                        <textarea id="nearbyRecommendations" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">House Rules</div>
                        <textarea id="houseRules" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Heater (How it Works)</div>
                        <textarea id="heaterHowItWorks" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Guidebook</div>
                        <div class="value">
                            <a id="guidebookLink" href="#" target="_blank">View Guidebook</a>
                        </div>
                    </div>

                    <div class="label-value">
                        <div class="label">Key Collection</div>
                        <textarea id="keyCollectionShort" class="value"></textarea>
                    </div>

                    <div class="label-value">
                        <div class="label">Carpark</div>
                        <textarea id="carparkShort" class="value"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    document.body.appendChild(body);