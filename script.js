/* =========================================================
   MOODIFY 2.0
   CLEAN MUSIC ENGINE
   ========================================================= */


/* ---------------------------------------------------------
   SETTINGS
--------------------------------------------------------- */

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

let currentSongs = [];

let currentSongIndex = -1;

let currentSong = null;

let player = null;

let playerReady = false;


/* ---------------------------------------------------------
   SONG DATABASE
--------------------------------------------------------- */

/*
 IMPORTANT:

 Every song has:

 title
 language
 mood
 videoId

 videoId is intentionally empty for now.

 We will add VERIFIED YouTube IDs later.

 We do NOT generate IDs randomly.
*/


const songs = [

    /* =========================
       KANNADA
    ========================= */

    {
        title: "Belageddu",
        language: "Kannada",
        mood: "Happy",
        videoId: ""
    },

    {
        title: "Anisuthide Yaako Indu",
        language: "Kannada",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Jotheyali Jothe Jotheyali",
        language: "Kannada",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Minchagi Neenu Baralu",
        language: "Kannada",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Ninnindale",
        language: "Kannada",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Kaanada Kadalige",
        language: "Kannada",
        mood: "Calm",
        videoId: ""
    },

    {
        title: "Naguva Nayana",
        language: "Kannada",
        mood: "Calm",
        videoId: ""
    },

    {
        title: "Nooru Janmaku",
        language: "Kannada",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Nee Nanna Gellalare",
        language: "Kannada",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Omme Ninnannu",
        language: "Kannada",
        mood: "Romantic",
        videoId: ""
    },


    /* =========================
       HINDI
    ========================= */

    {
        title: "Tum Hi Ho",
        language: "Hindi",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Agar Tum Saath Ho",
        language: "Hindi",
        mood: "Sad",
        videoId: ""
    },

    {
        title: "Ilahi",
        language: "Hindi",
        mood: "Happy",
        videoId: ""
    },

    {
        title: "Zinda",
        language: "Hindi",
        mood: "Motivational",
        videoId: ""
    },

    {
        title: "Kar Har Maidaan Fateh",
        language: "Hindi",
        mood: "Motivational",
        videoId: ""
    },

    {
        title: "Apna Bana Le",
        language: "Hindi",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Kesariya",
        language: "Hindi",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Chaleya",
        language: "Hindi",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Heeriye",
        language: "Hindi",
        mood: "Chill",
        videoId: ""
    },

    {
        title: "Dildaara",
        language: "Hindi",
        mood: "Romantic",
        videoId: ""
    },


    /* =========================
       TAMIL
    ========================= */

    {
        title: "Munbe Vaa",
        language: "Tamil",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Vaseegara",
        language: "Tamil",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "New York Nagaram",
        language: "Tamil",
        mood: "Sad",
        videoId: ""
    },

    {
        title: "Why This Kolaveri Di",
        language: "Tamil",
        mood: "Happy",
        videoId: ""
    },

    {
        title: "Vaathi Coming",
        language: "Tamil",
        mood: "Energetic",
        videoId: ""
    },

    {
        title: "Arabic Kuthu",
        language: "Tamil",
        mood: "Energetic",
        videoId: ""
    },

    {
        title: "Megham Karukatha",
        language: "Tamil",
        mood: "Chill",
        videoId: ""
    },

    {
        title: "Nenjukkul Peidhidum",
        language: "Tamil",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Rowdy Baby",
        language: "Tamil",
        mood: "Energetic",
        videoId: ""
    },

    {
        title: "Enjoy Enjaami",
        language: "Tamil",
        mood: "Happy",
        videoId: ""
    },


    /* =========================
       TELUGU
    ========================= */

    {
        title: "Inkem Inkem Inkem Kaavaale",
        language: "Telugu",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Samajavaragamana",
        language: "Telugu",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Butta Bomma",
        language: "Telugu",
        mood: "Happy",
        videoId: ""
    },

    {
        title: "Srivalli",
        language: "Telugu",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Oo Antava Oo Oo Antava",
        language: "Telugu",
        mood: "Energetic",
        videoId: ""
    },

    {
        title: "Ramuloo Ramulaa",
        language: "Telugu",
        mood: "Energetic",
        videoId: ""
    },

    {
        title: "Vachindamma",
        language: "Telugu",
        mood: "Happy",
        videoId: ""
    },

    {
        title: "Maate Vinadhuga",
        language: "Telugu",
        mood: "Chill",
        videoId: ""
    },

    {
        title: "Inthandham",
        language: "Telugu",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Adiga Adiga",
        language: "Telugu",
        mood: "Sad",
        videoId: ""
    },


    /* =========================
       ENGLISH
    ========================= */

    {
        title: "Perfect",
        language: "English",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Shape of You",
        language: "English",
        mood: "Energetic",
        videoId: ""
    },

    {
        title: "Believer",
        language: "English",
        mood: "Motivational",
        videoId: ""
    },

    {
        title: "Counting Stars",
        language: "English",
        mood: "Motivational",
        videoId: ""
    },

    {
        title: "Let Her Go",
        language: "English",
        mood: "Sad",
        videoId: ""
    },

    {
        title: "Someone You Loved",
        language: "English",
        mood: "Sad",
        videoId: ""
    },

    {
        title: "Until I Found You",
        language: "English",
        mood: "Romantic",
        videoId: ""
    },

    {
        title: "Golden Hour",
        language: "English",
        mood: "Chill",
        videoId: ""
    },

    {
        title: "Sao Paulo",
        language: "English",
        mood: "Energetic",
        videoId: ""
    },

    {
        title: "Blinding Lights",
        language: "English",
        mood: "Energetic",
        videoId: ""
    }

];


/* ---------------------------------------------------------
   DOM
--------------------------------------------------------- */

const languageButtons =
    document.querySelectorAll(".language-btn");

const moodButtons =
    document.querySelectorAll(".mood-btn");

const findMusicBtn =
    document.getElementById("findMusicBtn");

const songsContainer =
    document.getElementById("songsContainer");

const resultTitle =
    document.getElementById("resultTitle");

const songCount =
    document.getElementById("songCount");

const themeBtn =
    document.getElementById("themeBtn");

const playerSongTitle =
    document.getElementById("playerSongTitle");

const playerSongArtist =
    document.getElementById("playerSongArtist");

const playerStatus =
    document.getElementById("playerStatus");

const playPauseBtn =
    document.getElementById("playPauseBtn");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const playerFavoriteBtn =
    document.getElementById("playerFavoriteBtn");

const favoritesContainer =
    document.getElementById("favoritesContainer");


/* ---------------------------------------------------------
   LANGUAGE SELECTION
--------------------------------------------------------- */

languageButtons.forEach(button => {

    button.addEventListener("click", () => {

        languageButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedLanguage =
            button.dataset.language;

        renderSongs();

    });

});


/* ---------------------------------------------------------
   MOOD SELECTION
--------------------------------------------------------- */

moodButtons.forEach(button => {

    button.addEventListener("click", () => {

        moodButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedMood =
            button.dataset.mood;

        renderSongs();

    });

});


/* ---------------------------------------------------------
   FILTER SONGS
--------------------------------------------------------- */

function getFilteredSongs() {

    return songs.filter(song =>

        song.language === selectedLanguage &&

        song.mood === selectedMood

    );

}


/* ---------------------------------------------------------
   RENDER SONGS
--------------------------------------------------------- */

function renderSongs() {

    currentSongs =
        getFilteredSongs();

    resultTitle.textContent =
        `${selectedLanguage} • ${selectedMood}`;

    songCount.textContent =
        currentSongs.length;

    songsContainer.innerHTML = "";


    if (currentSongs.length === 0) {

        songsContainer.innerHTML = `

            <div class="empty-favorites">

                🎵

                <p>
                    More songs coming soon for this mood.
                </p>

            </div>

        `;

        return;

    }


    currentSongs.forEach((song, index) => {

        const card =
            document.createElement("div");

        card.className =
            "song-card";


        const favorite =
            isFavorite(song);


        card.innerHTML = `

            <div class="song-number">
                ${index + 1}
            </div>

            <div class="song-icon">
                🎵
            </div>

            <div class="song-details">

                <h3>
                    ${escapeHTML(song.title)}
                </h3>

                <p>
                    ${song.language} • ${song.mood}
                </p>

            </div>

            <button
                class="favorite-btn
                ${favorite ? "active" : ""}"
                aria-label="Favorite">

                ${favorite ? "♥" : "♡"}

            </button>

        `;


        /* CARD PLAY */

        card.addEventListener("click", event => {

            if (
                event.target.closest(".favorite-btn")
            ) {
                return;
            }

            playSong(index);

        });


        /* FAVORITE */

        const favoriteBtn =
            card.querySelector(".favorite-btn");


        favoriteBtn.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                toggleFavorite(song);

                renderSongs();

                renderFavorites();

                if (
                    currentSong &&
                    currentSong.title === song.title
                ) {

                    updatePlayerFavorite();

                }

            }
        );


        songsContainer.appendChild(card);

    });

}


/* ---------------------------------------------------------
   PLAYER
--------------------------------------------------------- */

function playSong(index) {

    if (
        index < 0 ||
        index >= currentSongs.length
    ) {
        return;
    }


    currentSongIndex = index;

    currentSong =
        currentSongs[index];


    playerSongTitle.textContent =
        currentSong.title;


    playerSongArtist.textContent =
        `${currentSong.language} • ${currentSong.mood}`;


    updatePlayerFavorite();


    /*
       VIDEO ID WILL BE CONNECTED
       AFTER VERIFIED IDs ARE ADDED.
    */

    if (
        currentSong.videoId &&
        playerReady
    ) {

        player.loadVideoById(
            currentSong.videoId
        );

        playerStatus.textContent =
            "Playing";

        playPauseBtn.textContent =
            "❚❚";

    } else {

        playerStatus.textContent =
            "Video connection coming next";

        playPauseBtn.textContent =
            "▶";

    }


    document
        .getElementById("musicPlayer")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

}


/* ---------------------------------------------------------
   PREVIOUS
--------------------------------------------------------- */

previousBtn.addEventListener(
    "click",
    () => {

        if (!currentSongs.length) {
            return;
        }


        let index =
            currentSongIndex - 1;


        if (index < 0) {

            index =
                currentSongs.length - 1;

        }


        playSong(index);

    }
);


/* ---------------------------------------------------------
   NEXT
--------------------------------------------------------- */

nextBtn.addEventListener(
    "click",
    () => {

        if (!currentSongs.length) {
            return;
        }


        let index =
            currentSongIndex + 1;


        if (
            index >= currentSongs.length
        ) {

            index = 0;

        }


        playSong(index);

    }
);


/* ---------------------------------------------------------
   PLAY / PAUSE
--------------------------------------------------------- */

playPauseBtn.addEventListener(
    "click",
    () => {

        if (!playerReady) {

            playerStatus.textContent =
                "Select a connected song first.";

            return;

        }


        if (!currentSong) {

            playerStatus.textContent =
                "Tap a song first.";

            return;

        }


        const state =
            player.getPlayerState();


        if (
            state === YT.PlayerState.PLAYING
        ) {

            player.pauseVideo();

        } else {

            player.playVideo();

        }

    }
);


/* ---------------------------------------------------------
   YOUTUBE API
--------------------------------------------------------- */

function onYouTubeIframeAPIReady() {

    player =
        new YT.Player(
            "youtubePlayer",
            {

                height: "100%",

                width: "100%",

                videoId: "",

                playerVars: {

                    playsinline: 1,

                    controls: 1,

                    rel: 0

                },

                events: {

                    onReady:
                        onPlayerReady,

                    onStateChange:
                        onPlayerStateChange,

                    onAutoplayBlocked:
                        onAutoplayBlocked

                }

            }
        );

}


function onPlayerReady() {

    playerReady = true;

    playerStatus.textContent =
        "Player ready";

}


function onPlayerStateChange(event) {

    if (
        event.data ===
        YT.PlayerState.PLAYING
    ) {

        playPauseBtn.textContent =
            "❚❚";

        playerStatus.textContent =
            "Playing";

    }


    if (
        event.data ===
        YT.PlayerState.PAUSED
    ) {

        playPauseBtn.textContent =
            "▶";

        playerStatus.textContent =
            "Paused";

    }


    if (
        event.data ===
        YT.PlayerState.ENDED
    ) {

        playPauseBtn.textContent =
            "▶";

        playerStatus.textContent =
            "Finished";

        nextSong();

    }

}


function onAutoplayBlocked() {

    playerStatus.textContent =
        "Tap play to start the song";

}


/* ---------------------------------------------------------
   NEXT SONG AFTER FINISH
--------------------------------------------------------- */

function nextSong() {

    if (!currentSongs.length) {
        return;
    }


    let index =
        currentSongIndex + 1;


    if (
        index >= currentSongs.length
    ) {

        index = 0;

    }


    playSong(index);

}


/* ---------------------------------------------------------
   FAVORITES
--------------------------------------------------------- */

function getFavorites() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "moodifyFavorites"
            )
        ) || [];

    } catch {

        return [];

    }

}


function saveFavorites(favorites) {

    localStorage.setItem(
        "moodifyFavorites",
        JSON.stringify(favorites)
    );

}


function isFavorite(song) {

    return getFavorites().some(
        item =>
            item.title === song.title &&
            item.language === song.language
    );

}


function toggleFavorite(song) {

    let favorites =
        getFavorites();


    const exists =
        favorites.findIndex(
            item =>
                item.title === song.title &&
                item.language === song.language
        );


    if (exists >= 0) {

        favorites.splice(
            exists,
            1
        );

    } else {

        favorites.push(song);

    }


    saveFavorites(favorites);

}


/* ---------------------------------------------------------
   PLAYER FAVORITE
--------------------------------------------------------- */

playerFavoriteBtn.addEventListener(
    "click",
    () => {

        if (!currentSong) {
            return;
        }


        toggleFavorite(currentSong);

        updatePlayerFavorite();

        renderFavorites();

        renderSongs();

    }
);


function updatePlayerFavorite() {

    if (!currentSong) {

        playerFavoriteBtn.textContent =
            "♡";

        return;

    }


    if (isFavorite(currentSong)) {

        playerFavoriteBtn.textContent =
            "♥";

        playerFavoriteBtn.classList.add(
            "active"
        );

    } else {

        playerFavoriteBtn.textContent =
            "♡";

        playerFavoriteBtn.classList.remove(
            "active"
        );

    }

}


/* ---------------------------------------------------------
   FAVORITES LIST
--------------------------------------------------------- */

function renderFavorites() {

    const favorites =
        getFavorites();


    favoritesContainer.innerHTML = "";


    if (!favorites.length) {

        favoritesContainer.innerHTML = `

            <div class="empty-favorites">

                ❤️

                <p>
                    No favorites yet
                </p>

            </div>

        `;

        return;

    }


    favorites.forEach(song => {

        const card =
            document.createElement("div");

        card.className =
            "song-card";


        card.innerHTML = `

            <div class="song-icon">
                ❤️
            </div>

            <div class="song-details">

                <h3>
                    ${escapeHTML(song.title)}
                </h3>

                <p>
                    ${song.language} • ${song.mood}
                </p>

            </div>

        `;


        card.addEventListener(
            "click",
            () => {

                const index =
                    currentSongs.findIndex(
                        item =>
                            item.title ===
                            song.title &&
                            item.language ===
                            song.language
                    );


                if (index >= 0) {

                    playSong(index);

                } else {

                    selectedLanguage =
                        song.language;

                    selectedMood =
                        song.mood;


                    syncButtons();

                    renderSongs();


                    const newIndex =
                        currentSongs.findIndex(
                            item =>
                                item.title ===
                                song.title
                        );


                    if (newIndex >= 0) {

                        playSong(newIndex);

                    }

                }

            }
        );


        favoritesContainer.appendChild(
            card
        );

    });

}


/* ---------------------------------------------------------
   THEME
--------------------------------------------------------- */

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );


        if (
            document.body.classList.contains(
                "light"
            )
        ) {

            themeBtn.textContent =
                "☀️";

            localStorage.setItem(
                "moodifyTheme",
                "light"
            );

        } else {

            themeBtn.textContent =
                "🌙";

            localStorage.setItem(
                "moodifyTheme",
                "dark"
            );

        }

    }
);


/* ---------------------------------------------------------
   LOAD THEME
--------------------------------------------------------- */

function loadTheme() {

    const theme =
        localStorage.getItem(
            "moodifyTheme"
        );


    if (theme === "light") {

        document.body.classList.add(
            "light"
        );

        themeBtn.textContent =
            "☀️";

    }

}


/* ---------------------------------------------------------
   SYNC BUTTONS
--------------------------------------------------------- */

function syncButtons() {

    languageButtons.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.language ===
                selectedLanguage
            );

        }
    );


    moodButtons.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.mood ===
                selectedMood
            );

        }
    );

}


/* ---------------------------------------------------------
   HTML SAFETY
--------------------------------------------------------- */

function escapeHTML(text) {

    return String(text)

        .replaceAll("&", "&amp;")

        .replaceAll("<", "&lt;")

        .replaceAll(">", "&gt;")

        .replaceAll('"', "&quot;")

        .replaceAll("'", "&#039;");

}


/* ---------------------------------------------------------
   FIND MUSIC BUTTON
--------------------------------------------------------- */

findMusicBtn.addEventListener(
    "click",
    () => {

        renderSongs();


        document
            .getElementById(
                "songsContainer"
            )
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    }
);


/* ---------------------------------------------------------
   START
--------------------------------------------------------- */

loadTheme();

syncButtons();

renderSongs();

renderFavorites();
