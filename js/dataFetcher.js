/*--------------------------------------------------------Firebase Config-----------------------------------------------------------*/
     // Your web app's Firebase configuration
     const firebaseConfig = {
        apiKey: "AIzaSyDiPmvkpIdKTjQFBZyeYl_JoMPvLBtEgb4",
        authDomain: "houseb-8879e.firebaseapp.com",
        databaseURL: "https://houseb-8879e-default-rtdb.firebaseio.com",
        projectId: "houseb-8879e",
        storageBucket: "houseb-8879e.appspot.com",
        messagingSenderId: "819454107450",
        appId: "1:819454107450:web:5f6f4ce8c5a18fcaeb3a03"
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

/*----------------------------------------------------------------------------------------------------------------------------*/






/*--------------------------------------------------DATA FETCHING--------------------------------------------------------------------------*/
 // Fetch Data from Firebase
 function fetchData(id) {
    const dataRef = firebase.database().ref('Countries/Australia/client01/'+ id);
    dataRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
            document.getElementById('propertyName').textContent = data.propertyName || 'N/A';
            document.getElementById('location').textContent = data.location || 'N/A';
            document.getElementById('mainHost').textContent = data.mainHost || 'N/A';
            document.getElementById('airbnbListingName').textContent = data.airbnbListingName || 'N/A';
            document.getElementById('addressBuildingName').textContent = data.addressBuildingName || 'N/A';
            document.getElementById('apartmentNumber').textContent = data.apartmentNumber || 'N/A';
            document.getElementById('apartmentFloor').textContent = data.apartmentFloor || 'N/A';
            document.getElementById('parking').textContent = data.parking || 'N/A';
            document.getElementById('keyExchangeLocation').textContent = data.keyExchangeLocation || 'N/A';
            document.getElementById('garageHeight').textContent = data.garageHeight || 'N/A';
            document.getElementById('numberOfRooms').textContent = data.numberOfRooms || 'N/A';
            document.getElementById('numberOfBeds').textContent = data.numberOfBeds || 'N/A';
            document.getElementById('keysDoorCodeProcess').textContent = data.keysDoorCodeProcess || 'N/A';
            document.getElementById('keysAndPassesInstructions').textContent = data.keysAndPassesInstructions || 'N/A';
            document.getElementById('keyLocation').textContent = data.keyLocation || 'N/A';
            document.getElementById('keyLocationOpeningHours').textContent = data.keyLocationOpeningHours || 'N/A';
            document.getElementById('bedSizes').textContent = data.bedSizes || 'N/A';
            document.getElementById('checkInCheckOutTimings').textContent = data.checkInCheckOutTimings || 'N/A';
            document.getElementById('routerLocation').textContent = data.routerLocation || 'N/A';
            document.getElementById('earlyCheckInAllowed').textContent = data.earlyCheckInAllowed || 'N/A';
            document.getElementById('lateCheckOutAllowed').textContent = data.lateCheckOutAllowed || 'N/A';
            document.getElementById('earlyCheckInOrLateCheckOutPricePerHour').textContent = data.earlyCheckInOrLateCheckOutPricePerHour || 'N/A';
            document.getElementById('kitchenAmenity').textContent = data.kitchenAmenity || 'N/A';
            document.getElementById('coffeeMaker').textContent = data.coffeeMaker || 'N/A';
            document.getElementById('laundryAmenity').textContent = data.laundryAmenity || 'N/A';
            document.getElementById('wifiAndPassword').textContent = data.wifiAndPassword || 'N/A';
            document.getElementById('babyInfantCribs').textContent = data.babyInfantCribs || 'N/A';
            document.getElementById('petsAllowedCost').textContent = data.petsAllowedCost || 'N/A';
            document.getElementById('petFee').textContent = data.petFee || 'N/A';
            document.getElementById('luggageCollection').textContent = data.luggageCollection || 'N/A';
            document.getElementById('poolJacuzzi').textContent = data.poolJacuzzi || 'N/A';
            document.getElementById('poolJacuzziDimension').textContent = data.poolJacuzziDimension || 'N/A';
            document.getElementById('gym').textContent = data.gym || 'N/A';
            document.getElementById('trash').textContent = data.trash || 'N/A';
            document.getElementById('smokingArea').textContent = data.smokingArea || 'N/A';
            document.getElementById('nearbyRecommendations').textContent = data.nearbyRecommendations || 'N/A';
            document.getElementById('houseRules').textContent = data.houseRules || 'N/A';
            document.getElementById('heaterHowItWorks').textContent = data.heaterHowItWorks || 'N/A';
            document.getElementById('guidebookLink').href = data.guidebookLink || 'N/A';
            document.getElementById('keyCollectionShort').textContent = data.keyCollectionShort || 'N/A';
            document.getElementById('carparkShort').textContent = data.carparkShort || 'N/A';

            onDataLoaded();
        }
    });
}

window.fetchData = fetchData;



function onDataLoaded(){
    var textare = document.querySelectorAll("textarea");

        for (let index = 0; index < textare.length; index++) {
            const element = textare[index];
            element.style.height = 'auto';
            element.style.height = element.scrollHeight + 'px';
        }
}

// Toggle the panel visibility
const panel = document.getElementById('panel');
const togglePanelBtn = document.getElementById('togglePanelBtn');

togglePanelBtn.addEventListener('click', function() {
    // Toggle the "active" class to show or hide the panel
    panel.classList.toggle('active');

    // Change button text based on panel state
    if (panel.classList.contains('active')) {
        togglePanelBtn.innerText = 'Hide Panel';
    } else {
        togglePanelBtn.innerText = 'Show Panel';
    }
});


const closePanelBtn = document.getElementById('closePanelBtn');

closePanelBtn.addEventListener('click', function() {
    panel.classList.remove('active');
    togglePanelBtn.innerText = 'Show Panel'; // Reset the toggle button text
});
