let svg =
    `<svg height="15px" viewBox="0 0 365.696 365.696" width="15px" xmlns="http://www.w3.org/2000/svg" ><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" /></svg>`;

let id = "media1";

export let description =
    `<div class="media-info" id=${id}>
    <button onclick="cross()" class='media-button-cross'>
        ${svg}
    </button>
    <div class="media-picture">
        <img src="./assets/pic1.jpg" alt="Картина Айвазовского ''Девятый вал''" class='media-img'>
    </div>
    <div class="media-description">
        <div class="media-description-text">
            <h3>"Девятый вал"</h3>
            <h4>Картина Айвазовского</h4>
        </div>
        <div class="media-description-audio">
            <audio src="./audio.wav" controls></audio>
        </div>
    </div>
</div>`;