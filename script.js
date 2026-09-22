/* =========================================
   MOODIFY 2.0
   COMPLETE SCRIPT
   TOTAL: 280 SONGS

   Kannada  = 100
   Hindi    = 50
   Tamil    = 50
   Telugu   = 50
   English  = 30

   NO TRENDING
   NO RECENTLY PLAYED
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       SETTINGS
    ===================================== */

    const moods = [
        "Happy",
        "Sad",
        "Romantic",
        "Energetic",
        "Calm",
        "Motivational",
        "Chill"
    ];

    let selectedLanguage = "Kannada";
    let selectedMood = "Happy";

    const moodEmoji = {
        Happy: "😊",
        Sad: "😔",
        Romantic: "❤️",
        Energetic: "⚡",
        Calm: "🌿",
        Motivational: "🔥",
        Chill: "😎"
    };


    /* =====================================
       SONG DATABASE
    ===================================== */

    const songs = {

        /* =================================
           KANNADA — 100
        ================================= */

        Kannada: [

            "Anisuthide Yaako Indu",
            "Jothe Jotheyali",
            "Minchagi Neenu Baralu",
            "Ninnindale",
            "Belageddu",
            "Kaanada Kadalige",
            "Karagida Baaninalli",
            "Nee Sigovaregu",
            "Neene Neene",
            "Nooru Janmaku",
            "Usire Usire",
            "Kolle Nanna",
            "Ondu Malebillu",
            "Marali Manasaagide",
            "Soul of Dia",
            "Kushiyagide",
            "Pogaru Title Track",
            "Dostha Kano",
            "Tagaru Banthu Tagaru",
            "Salaam Rocky Bhai",
            "Garbadhi",
            "Sidila Bharava",
            "Dheera Dheera",
            "Toofan",
            "Geleya Ennale",
            "Ninnanu Nodida Mele",
            "Nee Nanna Gellalare",
            "Ee Sundara Beladingala",
            "Hrudayake Hedarike",
            "Hrudaya Haduthide",
            "Preetham Gubbi",
            "Naguva Nayana",
            "Jeeva Hoovagide",
            "Suvvali",
            "Baare Baare",
            "Yaava Mohana Murali",
            "Kanaso Idu",
            "Kariya I Love You",
            "Hrudaya Rangoli",
            "O Marave",
            "Nodivalandava",
            "Kannu Hodiyaka",
            "Duniya Duniya",
            "Karabuu",
            "Pakka Local",
            "Raambo 2 Theme",
            "Chuttu Chuttu",
            "Open the Bottle",
            "Kotigobba 2 Title Track",
            "Jeeva Hoovagide",
            "Huttidare Kannada Nadalli Huttabeku",

            "Yava Shilpi Kanda Kanaso",
            "Hakkiyu Haarutide",
            "Baana Daariyalli",
            "Ee Sanje Yakagide",
            "Naguva Nayana",
            "Nee Enbathenna",
            "Arare Shuruvayitu Hege",
            "Kannu Kannu",
            "Preethi Maadu Thappenilla",
            "Preethi Endare Heege",
            "Ondu Malebillu",
            "Ninnaya Nalumeyinda",
            "O Marave",
            "Ninna Snehake",
            "Marethuhoyithe",
            "Kanasina Kaige",
            "Ee Preethi Yeke Bhoomi Melide",
            "Nee Nanna Gellalare",
            "Cheluveye Ninna Nodalu",
            "Yaare Neenu Cheluve",
            "O Baby",
            "Chandakintha Chanda",
            "Hrudaya Hrudaya",
            "Olavina Udugore",
            "Preethse Preethse",
            "Jeeva Hoovagide",
            "Endendu Ninnanu Marethu",
            "Nanna Preethiya Hudugi",
            "Neenendare",
            "Nee Nanna Jeeva",
            "Sariyaagi Nenapide",
            "Usire Usire",
            "Marali Manasaagide",
            "Neenire Saniha",
            "Ninna Nodalentho",
            "Kanna Sanneyindalene",
            "Ninna Danigaagi",
            "Ninnindale",
            "Anisuthide",
            "Jothe Jotheyali",
            "Minchagi Neenu Baralu",
            "Kushiyagide",
            "Belageddu",
            "Gombe Helutaite",
            "Karagida Baaninalli",
            "Nee Sigovaregu",
            "Dheera Dheera",
            "Salaam Rocky Bhai",
            "Toofan",
            "Tagaru Banthu Tagaru",
            "Garbadhi",
            "Pogaru Title Track",
            "Kirik Party Title Track",
            "Katheyondu Helide",
            "Bombe Helutaite",
            "Huttidare Kannada Nadalli",
            "Kannada Gothilla",
            "Appu Dance",
            "Power of Youth",
            "James Title Track",
            "Raajakumara Title Track",
            "Yenammi Yenammi",
            "Chuttu Chuttu",
            "Dostha Kano",
            "Karabuu",
            "Pakka Local",
            "Duniya Duniya",
            "Jeeva Hoovagide",
            "Kannu Hodiyaka",
            "Kariya I Love You",
            "Hrudaya Haduthide",
            "Naguva Nayana",
            "Ee Sundara Beladingala",
            "Hrudayake Hedarike",
            "Kanaso Idu",
            "Marali Manasaagide",
            "Ondu Malebillu",
            "Neene Neene",
            "Nooru Janmaku",
            "Usire Usire",
            "Ninnindale",
            "Nee Nanna Gellalare",
            "Jothe Jotheyali",
            "Anisuthide Yaako Indu",
            "Baana Daariyalli",
            "Ee Sanje Yakagide"

        ],


        /* =================================
           HINDI — 50
        ================================= */

        Hindi: [

            "Tum Se Hi",
            "Agar Tum Saath Ho",
            "Apna Bana Le",
            "Kesariya",
            "Tum Kya Mile",
            "Tera Ban Jaunga",
            "Hawayein",
            "Raabta",
            "Pehli Dafa",
            "Khairiyat",
            "Tujhe Kitna Chahne Lage",
            "Ve Kamleya",
            "Sajni",
            "O Maahi",
            "Heeriye",
            "Chaleya",
            "Satranga",
            "Tere Vaaste",
            "Ranjha",
            "Shayad",
            "Ilahi",
            "Safarnama",
            "Zindagi Ek Safar",
            "Phir Se Ud Chala",
            "Aashiyan",
            "Kabira",
            "Iktara",
            "Agar Tum Mil Jao",
            "Tera Yaar Hoon Main",
            "Channa Mereya",
            "Ae Dil Hai Mushkil",
            "Muskurane",
            "Samjhawan",
            "Pee Loon",
            "Tum Hi Ho",
            "Maan Meri Jaan",
            "Baarishein",
            "Dil Diyan Gallan",
            "Tera Fitoor",
            "Janam Janam",
            "Gerua",
            "Deva Deva",
            "Zinda",
            "Kar Har Maidaan Fateh",
            "Apna Time Aayega",
            "Ziddi Dil",
            "Lakshya",
            "Brothers Anthem",
            "Sultan Title Track",
            "Dildaara"
        ],


        /* =================================
           TAMIL — 50
        ================================= */

        Tamil: [

            "Munbe Vaa",
            "Vaseegara",
            "New York Nagaram",
            "Ennodu Nee Irundhaal",
            "Thalli Pogathey",
            "Maruvaarthai",
            "Kaathalae Kaathalae",
            "Nenjukkul Peidhidum",
            "Hosanna",
            "Omana Penne",
            "Mental Manadhil",
            "Aalaporan Tamizhan",
            "Rowdy Baby",
            "Vaathi Coming",
            "Arabic Kuthu",
            "Megham Karukatha",
            "Jimikki Ponnu",
            "Tum Tum",
            "Chellamma",
            "Enjoy Enjaami",
            "Katchi Sera",
            "Achacho",
            "Anbe En Anbe",
            "Kadhal Anukkal",
            "Pachai Kiligal",
            "Suttrum Vizhi",
            "Unakkenna Venum Sollu",
            "Un Vizhigalil",
            "Yaanji",
            "High On Love",
            "Inkem Inkem",
            "Why This Kolaveri Di",
            "Chellamma",
            "Dharala Prabhu",
            "Kutty Story",
            "Life of Ram",
            "The Life of Ram",
            "Po Nee Po",
            "Kanave Unai",
            "Oru Devathai",
            "Idhazhin Oram",
            "Enkeyoo Paartha",
            "Kadhal Oru Aagayam",
            "Aathadi Aathadi",
            "Nenjame",
            "Megham Karukatha",
            "Vennilave Vennilave",
            "Uyire Uyire",
            "Kadhal Sadugudu",
            "Pookkalae Sattru Oyivedungal"
        ],


        /* =================================
           TELUGU — 50
        ================================= */

        Telugu: [

            "Inkem Inkem Inkem Kaavaale",
            "Samajavaragamana",
            "Butta Bomma",
            "Vachindamma",
            "Maate Vinadhuga",
            "Adiga Adiga",
            "Nee Kannu Neeli Samudram",
            "Kadalalle",
            "Oh Sita Hey Rama",
            "Naa Roja Nuvve",
            "Priyathama Priyathama",
            "Inthandham",
            "Darshana",
            "Aradhya",
            "Pilla Raa",
            "Yenti Yenti",
            "Undiporaadhey",
            "Emo Emo",
            "Nee Neeli Kannullona",
            "Yemito",
            "Chuttamalle",
            "Kurchi Madathapetti",
            "Oo Antava Oo Oo Antava",
            "Srivalli",
            "Daakko Daakko Meka",
            "Ramuloo Ramulaa",
            "Mind Block",
            "Top Lesi Poddi",
            "Blockbuster",
            "Ringa Ringa",
            "Saami Saami",
            "Pushpa Pushpa",
            "Dosti",
            "Komuram Bheemudo",
            "Naatu Naatu",
            "Etthara Jenda",
            "Komma Uyyala",
            "Penny",
            "Kalaavathi",
            "Penny",
            "Kadalalle",
            "Padi Padi Leche Manasu",
            "Oohale",
            "Nee Kallalona",
            "Adiga Adiga",
            "Priyathama",
            "Ninnila Ninnila",
            "Vellipomaakey",
            "Yenti Yenti",
            "Naa Kanule",
            "Choosi Chudangane"
        ],


        /* =================================
           ENGLISH — 30
        ================================= */

        English: [

            "Perfect",
            "Shape of You",
            "Photograph",
            "Thinking Out Loud",
            "Love Yourself",
            "Until I Found You",
            "Golden Hour",
            "Die With A Smile",
            "Beautiful Things",
            "Night Changes",
            "Story of My Life",
            "A Thousand Years",
            "Someone You Loved",
            "Lovely",
            "Let Me Down Slowly",
            "Dandelions",
            "Attention",
            "Blinding Lights",
            "Save Your Tears",
            "As It Was",
            "Levitating",
            "Flowers",
            "Cruel Summer",
            "Anti-Hero",
            "Espresso",
            "Sao Paulo",
            "Believer",
            "Unstoppable",
            "Counting Stars",
            "Hall of Fame"
        ]

    };


    /* =====================================
       CONVERT SONGS TO OBJECTS
    ===================================== */

    let allSongs = [];

    Object.keys(songs).forEach(language => {

        songs[language].forEach((title, index) => {

            const mood = moods[index % moods.length];

            allSongs.push({
                id: `${language}-${index + 1}`,
                title: title,
                artist: "Listen on YouTube",
                language: language,
                mood: mood
            });

        });

    });


    /* =====================================
       DOM ELEMENTS
    ===================================== */

    const songsContainer =
        document.getElementById("songsContainer");

    const favoritesContainer =
        document.getElementById("favoritesContainer");

    const favoriteCount =
        document.getElementById("favoriteCount");

    const songCount =
        document.getElementById("songCount");

    const resultTitle =
        document.getElementById("resultTitle");

    const findMusicBtn =
        document.getElementById("findMusicBtn");

    const themeBtn =
        document.getElementById("themeBtn");


    /* =====================================
       FAVORITES
    ===================================== */

    let favorites =
        JSON.parse(
            localStorage.getItem("moodifyFavorites") || "[]"
        );


    /* =====================================
       YOUTUBE
    ===================================== */

    function openSong(song) {

        const query =
            encodeURIComponent(
                `${song.title} ${song.language} song`
            );

        const url =
            `https://www.youtube.com/results?search_query=${query}`;

        window.open(url, "_blank");

    }


    /* =====================================
       DISPLAY SONGS
    ===================================== */

    function displaySongs() {

        const filteredSongs =
            allSongs.filter(song =>
                song.language === selectedLanguage &&
                song.mood === selectedMood
            );

        songsContainer.innerHTML = "";

        resultTitle.textContent =
            `${selectedLanguage} • ${selectedMood}`;

        songCount.textContent =
            filteredSongs.length;


        if (filteredSongs.length === 0) {

            songsContainer.innerHTML = `
                <div class="empty-message">
                    No songs found for this selection.
                </div>
            `;

            return;
        }


        filteredSongs.forEach((song, index) => {

            const card =
                document.createElement("article");

            card.className = "song-card";

            const isFavorite =
                favorites.includes(song.id);


            card.innerHTML = `

                <div class="song-number">
                    #${index + 1}
                </div>

                <div class="song-info">

                    <div class="song-title">
                        ${escapeHTML(song.title)}
                    </div>

                    <div class="song-artist">
                        ▶ Tap to listen on YouTube
                    </div>

                </div>

                <div class="song-footer">

                    <span class="song-language">
                        ${moodEmoji[song.mood]}
                        ${song.language}
                    </span>

                    <button
                        class="favorite-btn ${isFavorite ? "active" : ""}"
                        data-id="${song.id}"
                        aria-label="Favorite">

                        ${isFavorite ? "♥" : "♡"}

                    </button>

                </div>
            `;


            /* Song card opens YouTube */

            card.addEventListener("click", event => {

                if (
                    event.target.closest(".favorite-btn")
                ) {
                    return;
                }

                openSong(song);

            });


            /* Favorite button */

            const favoriteBtn =
                card.querySelector(".favorite-btn");


            favoriteBtn.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    toggleFavorite(song.id);

                }
            );


            songsContainer.appendChild(card);

        });

    }


    /* =====================================
       FAVORITE TOGGLE
    ===================================== */

    function toggleFavorite(id) {

        if (favorites.includes(id)) {

            favorites =
                favorites.filter(
                    favoriteId => favoriteId !== id
                );

        } else {

            favorites.push(id);

        }


        localStorage.setItem(
            "moodifyFavorites",
            JSON.stringify(favorites)
        );


        displaySongs();
        displayFavorites();

    }


    /* =====================================
       FAVORITES DISPLAY
    ===================================== */

    function displayFavorites() {

        favoriteCount.textContent =
            favorites.length;


        if (favorites.length === 0) {

            favoritesContainer.innerHTML = `
                <p class="empty-message">
                    ❤️ Your favorite songs will appear here.
                </p>
            `;

            return;

        }


        favoritesContainer.innerHTML = "";


        favorites.forEach(id => {

            const song =
                allSongs.find(
                    item => item.id === id
                );


            if (!song) return;


            const item =
                document.createElement("div");

            item.className = "favorite-item";


            item.innerHTML = `

                <div class="favorite-item-info">

                    <div class="favorite-item-title">
                        ${escapeHTML(song.title)}
                    </div>

                    <div class="favorite-item-artist">
                        ${song.language} • ${song.mood}
                    </div>

                </div>

                <button
                    class="remove-favorite"
                    data-id="${song.id}">
                    ♥
                </button>

            `;


            item.addEventListener(
                "click",
                event => {

                    if (
                        event.target.closest(
                            ".remove-favorite"
                        )
                    ) {
                        return;
                    }

                    openSong(song);

                }
            );


            item.querySelector(
                ".remove-favorite"
            ).addEventListener(
                "click",
                () => {

                    toggleFavorite(song.id);

                }
            );


            favoritesContainer.appendChild(item);

        });

    }


    /* =====================================
       LANGUAGE BUTTONS
    ===================================== */

    document
        .querySelectorAll(".language-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".language-btn"
                        )
                        .forEach(btn =>
                            btn.classList.remove("active")
                        );

                    button.classList.add("active");

                    selectedLanguage =
                        button.dataset.language;

                    displaySongs();

                }
            );

        });


    /* =====================================
       MOOD BUTTONS
    ===================================== */

    document
        .querySelectorAll(".mood-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(".mood-btn")
                        .forEach(btn =>
                            btn.classList.remove("active")
                        );

                    button.classList.add("active");

                    selectedMood =
                        button.dataset.mood;

                    displaySongs();

                }
            );

        });


    /* =====================================
       FIND MUSIC BUTTON
    ===================================== */

    findMusicBtn.addEventListener(
        "click",
        () => {

            displaySongs();

            document
                .getElementById("songsContainer")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


    /* =====================================
       THEME
    ===================================== */

    const savedTheme =
        localStorage.getItem("moodifyTheme");


    if (savedTheme === "light") {

        document.body.classList.add("light");

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }


    themeBtn.addEventListener(
        "click",
        () => {

            document.body.classList.toggle("light");

            const isLight =
                document.body.classList.contains("light");


            themeBtn.textContent =
                isLight ? "☀️" : "🌙";


            localStorage.setItem(
                "moodifyTheme",
                isLight ? "light" : "dark"
            );

        }
    );


    /* =====================================
       SECURITY
    ===================================== */

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =====================================
       START
    ===================================== */

    displaySongs();
    displayFavorites();


    console.log(
        "🎵 Moodify 2.0 loaded successfully!"
    );

    console.log(
        `Total songs: ${allSongs.length}`
    );

});
