let svg =
    `<svg height="15px" viewBox="0 0 365.696 365.696" width="15px" xmlns="http://www.w3.org/2000/svg" ><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" /></svg>`;

let id = "media1";
let audio = "./audio.wav";
let pic = "./assets/pic1.jpg";
export let namePic = "Девятый вал";
export let authorPic = "Картина Айвазовского";

export let description =
    `
<div class="media-info" id=${id}>
    <button onclick="cross(${id}.id)" class='media-button-cross'>
        ${svg}
    </button>
    <div class="media-description-text-left" id="toggle-text">
            <div class="media-description-text-left-wrapper">
                <div class="media-description-text-left-header">
                    <h3>"${namePic}"</h3>
                    <h4>${authorPic}</h4>
                </div>
                <div class="media-description-text-left-p">
                    <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci aspernatur aut culpa deleniti dicta dignissimos dolore dolorem earum est excepturi ipsa laboriosam maiores maxime minus natus nobis nulla obcaecati officiis placeat quo rem, sapiente tenetur ullam vel voluptates. adipisicing elit. Consequuntur cum cupiditate enim esse laudantium minima praesentium quae quasi voluptas voluptatum?</p>
                </div>
            </div>
            <div class="media-description-text-toggler" id="toggler-text" onclick="toggleText('toggle-text')">&#9650;</div>
    </div>
    <div class="media-description-wrapper">
        <div class="media-description-text">
            <h3>"${namePic}"</h3>
            <h4>${authorPic}</h4>
        </div>
        <div class="media-picture">
<!--        <button style="width: 10px;-->
<!--                       height: 20px;-->
<!--                       position: absolute;-->
<!--                        top: 20%;"-->
<!--                        onclick="insertMoreInfo()"-->
<!--        >a-->
<!--        </button>-->
            <img src="${pic}" alt="${namePic} ${authorPic}" class='media-img'>
        </div>
        <div class="media-description-audio">
            <div class="media-description-custom-audio">
                <audio crossorigin>
                    <source src=${audio} type="audio/mpeg">
                </audio>
            </div>
        </div>
    </div>
</div>`;

