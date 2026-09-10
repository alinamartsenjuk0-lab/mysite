// Створюємо карту
var map = L.map('map');

// Початкове положення карти
map.setView([49.5535, 25.5948], 5);


// Додаємо OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Ukraine
L.marker([49.5535, 25.5948])
    .addTo(map)
    .bindPopup("Ternopil, Ukraine");

L.marker([50.4501, 30.5234])
    .addTo(map)
    .bindPopup("Kyiv, Ukraine");

L.marker([49.8397, 24.0297])
    .addTo(map)
    .bindPopup("Lviv, Ukraine");

L.marker([46.4825, 30.7233])
    .addTo(map)
    .bindPopup("Odesa, Ukraine");

L.marker([49.9935, 36.2304])
    .addTo(map)
    .bindPopup("Kharkiv, Ukraine");

L.marker([48.4647, 35.0462])
    .addTo(map)
    .bindPopup("Dnipro, Ukraine");

L.marker([49.5506758, 25.6271896])
    .addTo(map)
    .bindPopup("Ternopil, Ukraine");

L.marker([50.443305, 30.495283])
    .addTo(map)
    .bindPopup("Kyiv, Ukraine");

L.marker([49.857882, 24.025972])
    .addTo(map)
    .bindPopup("Lviv, Ukraine");

L.marker([50.75784, 25.35024])
    .addTo(map)
    .bindPopup("Lutsk, Ukraine");

L.marker([49.2322, 28.46871])
    .addTo(map)
    .bindPopup("Vinnytsia, Ukraine");

L.marker([44.9521, 34.1024])
    .addTo(map)
    .bindPopup("Simferopol, Ukraine");

L.marker([48.92312, 24.71248])
    .addTo(map)
    .bindPopup("Ivano-Frankivsk, Ukraine");

L.marker([48.29045, 25.93241])
    .addTo(map)
    .bindPopup("Chernivtsi, Ukraine");

L.marker([49.58925, 34.55367])
    .addTo(map)
    .bindPopup("Poltava, Ukraine");

L.marker([50.4501, 30.6172])
    .addTo(map)
    .bindPopup("Kyiv, Ukraine");

L.marker([47.8388, 35.1396])
    .addTo(map)
    .bindPopup("Zaporizhzhia, Ukraine");

L.marker([49.4444, 32.0598])
    .addTo(map)
    .bindPopup("Cherkasy, Ukraine");

L.marker([48.6208, 22.2879])
    .addTo(map)
    .bindPopup("Uzhhorod, Ukraine");


// Poland
L.marker([51.1079, 17.0385])
    .addTo(map)
    .bindPopup("Wroclaw, Poland");

L.marker([54.3520, 18.6466])
    .addTo(map)
    .bindPopup("Gdansk, Poland");


// Germany
L.marker([52.5200, 13.4050])
    .addTo(map)
    .bindPopup("Berlin, Germany");

L.marker([53.5511, 9.9937])
    .addTo(map)
    .bindPopup("Hamburg, Germany");

L.marker([50.1109, 8.6821])
    .addTo(map)
    .bindPopup("Frankfurt, Germany");

L.marker([48.1351, 11.5820])
    .addTo(map)
    .bindPopup("Munich, Germany");


// Spain
L.marker([40.4168, -3.7038])
    .addTo(map)
    .bindPopup("Madrid, Spain");

L.marker([39.4699, -0.3763])
    .addTo(map)
    .bindPopup("Valencia, Spain");

L.marker([37.3891, -5.9845])
    .addTo(map)
    .bindPopup("Seville, Spain");


// France
L.marker([48.8566, 2.3522])
    .addTo(map)
    .bindPopup("Paris, France");

L.marker([45.764, 4.8357])
    .addTo(map)
    .bindPopup("Lyon, France");

L.marker([43.2965, 5.3698])
    .addTo(map)
    .bindPopup("Marseille, France");

L.marker([43.7102, 7.2620])
    .addTo(map)
    .bindPopup("Nice, France");


// Italy
L.marker([41.9028, 12.4964])
    .addTo(map)
    .bindPopup("Rome, Italy");

L.marker([45.4642, 9.19])
    .addTo(map)
    .bindPopup("Milan, Italy");

L.marker([45.4408, 12.3155])
    .addTo(map)
    .bindPopup("Venice, Italy");

L.marker([43.7696, 11.2558])
    .addTo(map)
    .bindPopup("Florence, Italy");


// Romania
L.marker([44.4268, 26.1025])
    .addTo(map)
    .bindPopup("Bucharest, Romania");

L.marker([46.7712, 23.6236])
    .addTo(map)
    .bindPopup("Cluj-Napoca, Romania");


// Moldova
L.marker([47.0105, 28.8638])
    .addTo(map)
    .bindPopup("Chisinau, Moldova");

L.marker([47.7606, 27.9290])
    .addTo(map)
    .bindPopup("Balti, Moldova");


// Turkey
L.marker([41.0082, 28.9784])
    .addTo(map)
    .bindPopup("Istanbul, Turkey");

L.marker([39.9334, 32.8597])
    .addTo(map)
    .bindPopup("Ankara, Turkey");

L.marker([38.4237, 27.1428])
    .addTo(map)
    .bindPopup("Izmir, Turkey");


// Kazakhstan
L.marker([51.1694, 71.4491])
    .addTo(map)
    .bindPopup("Astana, Kazakhstan");

L.marker([43.2389, 76.8897])
    .addTo(map)
    .bindPopup("Almaty, Kazakhstan");

L.marker([42.3417, 69.5901])
    .addTo(map)
    .bindPopup("Shymkent, Kazakhstan");


// China
L.marker([39.9042, 116.4074])
    .addTo(map)
    .bindPopup("Beijing, China");

L.marker([31.2304, 121.4737])
    .addTo(map)
    .bindPopup("Shanghai, China");

L.marker([23.1291, 113.2644])
    .addTo(map)
    .bindPopup("Guangzhou, China");

L.marker([30.5728, 104.0668])
    .addTo(map)
    .bindPopup("Chengdu, China");


// Japan
L.marker([35.6762, 139.6503])
    .addTo(map)
    .bindPopup("Tokyo, Japan");

L.marker([34.6937, 135.5023])
    .addTo(map)
    .bindPopup("Osaka, Japan");

L.marker([35.0116, 135.7681])
    .addTo(map)
    .bindPopup("Kyoto, Japan");


// South Korea
L.marker([37.5665, 126.9780])
    .addTo(map)
    .bindPopup("Seoul, South Korea");

L.marker([35.1796, 129.0756])
    .addTo(map)
    .bindPopup("Busan, South Korea");

L.marker([37.4563, 126.7052])
    .addTo(map)
    .bindPopup("Incheon, South Korea");


// India
L.marker([28.6139, 77.2090])
    .addTo(map)
    .bindPopup("New Delhi, India");

L.marker([19.0760, 72.8777])
    .addTo(map)
    .bindPopup("Mumbai, India");

L.marker([12.9716, 77.5946])
    .addTo(map)
    .bindPopup("Bangalore, India");


// Nepal
L.marker([27.7172, 85.3240])
    .addTo(map)
    .bindPopup("Kathmandu, Nepal");

L.marker([28.2096, 83.9856])
    .addTo(map)
    .bindPopup("Pokhara, Nepal");


// United Kingdom
L.marker([51.5074, -0.1278])
    .addTo(map)
    .bindPopup("London, United Kingdom");

L.marker([53.4808, -2.2426])
    .addTo(map)
    .bindPopup("Manchester, United Kingdom");


// United States
L.marker([40.7128, -74.0060])
    .addTo(map)
    .bindPopup("New York, United States");

L.marker([37.7749, -122.4194])
    .addTo(map)
    .bindPopup("San Francisco, United States");

L.marker([34.0522, -118.2437])
    .addTo(map)
    .bindPopup("Los Angeles, United States");

L.marker([41.8781, -87.6298])
    .addTo(map)
    .bindPopup("Chicago, United States");

L.marker([25.7617, -80.1918])
    .addTo(map)
    .bindPopup("Miami, United States");


// Canada
L.marker([43.6532, -79.3832])
    .addTo(map)
    .bindPopup("Toronto, Canada");

L.marker([49.2827, -123.1207])
    .addTo(map)
    .bindPopup("Vancouver, Canada");

L.marker([45.5017, -73.5673])
    .addTo(map)
    .bindPopup("Montreal, Canada");


// Mexico
L.marker([19.4326, -99.1332])
    .addTo(map)
    .bindPopup("Mexico City, Mexico");

L.marker([21.1619, -86.8515])
    .addTo(map)
    .bindPopup("Cancun, Mexico");


// Colombia
L.marker([4.7110, -74.0721])
    .addTo(map)
    .bindPopup("Bogota, Colombia");

L.marker([6.2442, -75.5812])
    .addTo(map)
    .bindPopup("Medellin, Colombia");


// Brazil
L.marker([-23.5505, -46.6333])
    .addTo(map)
    .bindPopup("Sao Paulo, Brazil");

L.marker([-22.9068, -43.1729])
    .addTo(map)
    .bindPopup("Rio de Janeiro, Brazil");


// Chile
L.marker([-33.4489, -70.6693])
    .addTo(map)
    .bindPopup("Santiago, Chile");


// Peru
L.marker([-12.0464, -77.0428])
    .addTo(map)
    .bindPopup("Lima, Peru");


// Argentina
L.marker([-34.6037, -58.3816])
    .addTo(map)
    .bindPopup("Buenos Aires, Argentina");


// Egypt
L.marker([30.0444, 31.2357])
    .addTo(map)
    .bindPopup("Cairo, Egypt");


// Morocco
L.marker([33.5731, -7.5898])
    .addTo(map)
    .bindPopup("Casablanca, Morocco");


// Nigeria
L.marker([6.5244, 3.3792])
    .addTo(map)
    .bindPopup("Lagos, Nigeria");


// Kenya
L.marker([-1.2921, 36.8219])
    .addTo(map)
    .bindPopup("Nairobi, Kenya");

L.marker([-4.0435, 39.6682])
    .addTo(map)
    .bindPopup("Mombasa, Kenya");


// South Africa
L.marker([-33.9249, 18.4241])
    .addTo(map)
    .bindPopup("Cape Town, South Africa");


// United Arab Emirates
L.marker([25.2048, 55.2708])
    .addTo(map)
    .bindPopup("Dubai, United Arab Emirates");


// Israel
L.marker([32.0853, 34.7818])
    .addTo(map)
    .bindPopup("Tel Aviv, Israel");


// Australia
L.marker([-33.8688, 151.2093])
    .addTo(map)
    .bindPopup("Sydney, Australia");

L.marker([-37.8136, 144.9631])
    .addTo(map)
    .bindPopup("Melbourne, Australia");

L.marker([-31.9505, 115.8605])
    .addTo(map)
    .bindPopup("Perth, Australia");

L.marker([-27.4698, 153.0251])
    .addTo(map)
    .bindPopup("Brisbane, Australia");


// New Zealand
L.marker([-36.8509, 174.7645])
    .addTo(map)
    .bindPopup("Auckland, New Zealand");

L.marker([-41.2866, 174.7756])
    .addTo(map)
    .bindPopup("Wellington, New Zealand");


// Sweden
L.marker([59.3293, 18.0686])
    .addTo(map)
    .bindPopup("Stockholm, Sweden");


// Norway
L.marker([59.9139, 10.7522])
    .addTo(map)
    .bindPopup("Oslo, Norway");


// Finland
L.marker([60.1699, 24.9384])
    .addTo(map)
    .bindPopup("Helsinki, Finland");


// Greece
L.marker([37.9838, 23.7275])
    .addTo(map)
    .bindPopup("Athens, Greece");


// Croatia
L.marker([45.8150, 15.9819])
    .addTo(map)
    .bindPopup("Zagreb, Croatia");


// Bulgaria
L.marker([42.6977, 23.3219])
    .addTo(map)
    .bindPopup("Sofia, Bulgaria");





// INFORMATION WINDOW

function showInfo(type) {

    var window = document.getElementById("info-window");
    var title = document.getElementById("info-title");
    var text = document.getElementById("info-text");

    if (type === "offices") {
        title.textContent = "Our Offices";
        text.textContent = "We have modern offices in more than 40 countries around the world. Our offices help us stay close to our clients and provide high-quality services.";
    }

 if (type === "team") {
    title.textContent = "Join Our Team";
    text.innerHTML = 'We are always looking for talented and motivated people. Join our team and grow your skills while working on international projects.<br><br><b>Open positions:</b> Web Developer, UI/UX Designer, Data Analyst, QA Tester, System Administrator, Project Manager.';
}
if (type === "contacts") {
    title.textContent = "Contact Us";
    text.innerHTML = 'Find the nearest office on our map or contact our representatives in your region. We will be happy to help you.<br><br>You can also contact us by email: <a href="mailto:info@company.com">info@company.com</a>';
}

    window.classList.add("active");

    window.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


function closeInfo() {

    document.getElementById("info-window").classList.remove("active");

}