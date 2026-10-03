// ---- Logique de Démarrage Sécurisée du Lecteur SHDW ----

function initSHDWPlayer() {
    // 1. Configuration des contrôles de SHDW
    const shdwControls = [
        'play-large', 
        'play', 
        'progress', 
        'current-time', 
        'duration', 
        'mute', 
        'volume', 
        'captions', 
        'settings', 
        'pip', 
        'fullscreen'
    ];

    // 2. Initialisation propre de Plyr (Ligne qualité supprimée pour éviter le bug)
    const shdwPlayer = new Plyr('#shdw-core', {
        controls: shdwControls,
        captions: { active: true, language: 'fr' }
    });

    // 3. --- SYSTÈME DE NAVIGATION ---
    let currentEpisode = 1;
    const totalEpisodes = 12;

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const epTitle = document.getElementById('episode-title');

    function updateEpisodeUI() {
        epTitle.innerText = `Épisode ${currentEpisode < 10 ? '0' + currentEpisode : currentEpisode} - VOSTFR`;
        btnPrev.disabled = (currentEpisode === 1);
        btnNext.disabled = (currentEpisode === totalEpisodes);
    }

    btnPrev.addEventListener('click', () => {
        if (currentEpisode > 1) {
            currentEpisode--;
            updateEpisodeUI();
            shdwPlayer.source = {
                type: 'video',
                sources: [
                    { src: 'https://googleapis.com', type: 'video/mp4', size: 1080 }
                ]
            };
        }
    });

    btnNext.addEventListener('click', () => {
        if (currentEpisode < totalEpisodes) {
            currentEpisode++;
            updateEpisodeUI();
            shdwPlayer.source = {
                type: 'video',
                sources: [
                    { src: 'https://googleapis.com', type: 'video/mp4', size: 1080 }
                ]
            };
        }
    });

    updateEpisodeUI();
}

// Force le chargement peu importe l'état de la page
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSHDWPlayer);
} else {
    initSHDWPlayer();
}
