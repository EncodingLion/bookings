// content.js
console.log("Content script loaded");



// Get settings from chrome.storage
chrome.storage.local.get(['settingPropertyInfo', 'settingNotifications', 'hSettingNotifications', 'settingAutoRefresh', 'hSettingAutoRefresh'], function(result) {
    console.log('Loaded settings:', result);
    
    // Access individual settings
    const propertyInfo = result.settingPropertyInfo || false; // Default to false if not set
    if (propertyInfo && window.location.href.includes("dashboard.hostaway.com/v3/messages/")) {
        hostwayPropertyInfo();
    }
    const notifications = result.settingNotifications || false; // Default to false if not set
    const hNotifications = result.hSettingNotifications || false; // Default to false if not set
    const autoRefresh = result.settingAutoRefresh || '60000'; // Default to 'none' if not set
    const hAutoRefresh = result.hSettingAutoRefresh || '60000'; // Default to 'none' if not set

    if (hNotifications) {
        setInterval(() => {
            console.log("Run");
            fetchAndProcessData(); 
        }, hAutoRefresh);
    }

    if (notifications && window.location.href.includes("login.smoobu.com/en/communication")) {
        smoobuNotify(autoRefresh);
    }

    console.log(`Property Info: ${propertyInfo}`);
    console.log(`Notifications: ${notifications}`);
    console.log(`Auto Refresh: ${autoRefresh}`);

    console.log(`*********************************`);
    console.log(`Hostway Notifications: ${hNotifications}`);
    console.log(`Hostway Check After Every: ${hAutoRefresh}`);
});


/*-------------------------------------------------Notification Code----------------------------------------------------------------------*/
// Function to request notification permission and send a notification
function sendNotification(title, body, iconUrl = '') {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
        console.error("This browser does not support desktop notifications.");
        return;
    }

    // Request permission if not already granted
    if (Notification.permission === "granted") {
        new Notification(title, {
            body: body,
            icon: iconUrl
        });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(title, {
                    body: body,
                    icon: iconUrl
                });
            }
        });
    }
}

// Test sending a notification (call this in the console)
// sendNotification("Hello!", "This is a test notification.");

/*-------------------------------------------------Notification Code-------------------------------------------------------------------*/





/*--------------------------------------------------------------SMOOBU---------------------------------------------------------------*/
    function smoobuNotify(timer){
    // Function to check for unread messages
function checkForUnreadMessages() {
    // Select all elements with the class 'letter-icon-badge' that are not empty
    const badges = document.querySelectorAll('.letter-icon-badge.badge.bg-danger-400.media-badge');

    // Initialize a flag to track if any unread messages are found
    let hasUnreadMessages = false;

    // Iterate through each badge element
    badges.forEach(badge => {
        // Check if the badge has a numeric value (not empty)
        if (badge.textContent.trim() !== '') {
            hasUnreadMessages = true; // Set the flag to true if unread messages are found
        }
    });

    // Log "New Message" if there are any unread messages
    if (hasUnreadMessages) {
        sendNotification("Smoobu", "An unread message is found", "https://play-lh.googleusercontent.com/ic_JslMF9mXUwIOICEkjUmCRrqIxIYuImd3Q4jVOUAhsddEDMW71HUxoElFY0omdQJY");
    }else{
        //sendNotification("No New Message");
    }
}

// Function to refresh the page
function refreshPage() {
    location.reload(); // Reload the current page
}

// Call the function to check for unread messages initially
checkForUnreadMessages();

// Set an interval to refresh the page every 5 minutes (300,000 milliseconds)
setInterval(() => {
    refreshPage();
}, timer); // 300000 milliseconds = 5 minutes
    }
/*--------------------------------------------------------------SMOOBU---------------------------------------------------------------*/



/*--------------------------------------------------------------HOSTWAY---------------------------------------------------------------*/
/***************DOM LOAD WAITER************/
function hostwayPropertyInfo(){
    // Function to check for the link and attach event listener
function checkForLink() {
    const linkElement = Array.from(document.querySelectorAll('a.Link')).find(el => el.href.includes('/listing/edit/'));

    if (linkElement && !linkElement.href.includes('undefined')) {
        console.log('Found link:', linkElement.href);

        // Add a click event listener
        if (!linkElement.dataset.clickListenerAdded) {
            //Getting Property id
            var propertyID = linkElement.lastElementChild.innerText;
            var removeBrackets = propertyID.slice(1, -1);
            fetchData(removeBrackets);

            // Add a click event listener
            linkElement.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default action
                // alert('Link clicked: ' + linkElement.href);

                // Toggle the panel visibility
                const panel = document.getElementById('panel');
                // Toggle the "active" class to show or hide the panel
                panel.classList.toggle('active');
            });

            // Mark that the listener has been added
            linkElement.dataset.clickListenerAdded = true;

            // Select the panel and toggle button
            const messagesInbox = document.querySelector('.MessagesInbox-main'); // The target div

            // Add mousedown event listener to the MessagesInbox-main div
            messagesInbox.addEventListener('mousedown', () => {
                // Check if the panel has the 'active' class
                if (panel.classList.contains('active')) {
                    panel.classList.remove('active'); // Remove 'active' class
                    togglePanelBtn.innerText = 'Show Panel'; // Change button text
                }
            });
        }
    }
}

// Check for the link immediately
checkForLink();

// Observe changes in the body
const observer = new MutationObserver(() => {
    checkForLink(); // Re-check for the link on DOM changes
});

// Start observing the document body for child nodes
observer.observe(document.body, { childList: true, subtree: true });
}
/*********************************************/




/***************Notifications Code************/
async function fetchAndProcessData() {
    try {
        // Fetch the reservation data
        const response = await fetch('https://platform.hostaway.com/reservations/filter?limit=50&offset=0&includeRelated=0&sortBy=latestActivityOn&sortOrder=desc&includeResources=0&includeLastMessage=1&isSnoozed=0&isArchived=0&fromDate=&toDate=&dateType=&arrivalDateTimeTo=&departureDateTimeFrom=&isLastIncomingMessage=&hasUnreadConversation=&isStarred=&isSameDayBooking=&assigneeAccountId=&unassignedOnly=0', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'accept-language': 'en-US,en;q=0.9',
                'jwt': localStorage.getItem('jwt'),
                'Origin': 'https://dashboard.hostaway.com',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        let extract = [];

        // Process the data to filter out the required reservations
        if (data && data.result) {
            data.result.forEach(value => {
                const seen = value.hasUnreadConversation;
                const incoming = value.lastConversationMessage && value.lastConversationMessage.isIncoming;
                
                if (seen === 1 && incoming === 1) {
                    extract.push(value);
                }
            });

            extract.forEach(item => {
                sendNotification(item.guestName, item.lastConversationMessage.body, "https://avatars.githubusercontent.com/u/13335475?s=200&v=4");
            });
        }
    } catch (error) {
        console.error(error);
        document.getElementById("guestNames").textContent = "Error fetching data.";
    }
}
/***********************************************/

/*--------------------------------------------------------------HOSTWAY---------------------------------------------------------------*/



