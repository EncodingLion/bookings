//for multiple scripts
const scriptUrlsForHostawayPropertyInfo = [
    'https://raw.githubusercontent.com/EncodingLion/bookings/refs/heads/main/js/pageDisplay.js',
    'https://raw.githubusercontent.com/EncodingLion/bookings/refs/heads/main/js/dataFetcher.js',
    'https://raw.githubusercontent.com/EncodingLion/bookings/refs/heads/main/script.js'
];

function loadScript(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok for ${url}`);
            }
            return response.text();
        })
        .then(scriptText => {
            eval(scriptText); // Execute the fetched script
        })
        .catch(error => {
            console.error('Error loading script:', error);
        });
}

async function loadScriptsSequentially(scripts) {
    for (const script of scripts) {
        await loadScript(script);
    }
}


if(window.location.href.includes("hostaway.com")){
    //for multiple scripts
const scriptUrlsForHostawayPropertyInfo = [
    'https://raw.githubusercontent.com/EncodingLion/bookings/refs/heads/main/js/pageDisplay.js',
    'https://raw.githubusercontent.com/EncodingLion/bookings/refs/heads/main/js/dataFetcher.js',
    'https://raw.githubusercontent.com/EncodingLion/bookings/refs/heads/main/script.js'
];

    // Start loading scripts
    loadScriptsSequentially(scriptUrlsForHostawayPropertyInfo);
}else{
  const scriptUrls = [
      'https://raw.githubusercontent.com/EncodingLion/bookings/refs/heads/main/script.js'
    ];
   // Start loading scripts
    loadScriptsSequentially(scriptUrls);
}
