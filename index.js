const facebookHover = document.querySelector('.fb');
const discordHover = document.querySelector('.dis');


facebookHover.addEventListener('mouseover', (event) => {
    event.src = "/images/bluefacebook.png"
})

discordHover.addEventListener('mouseover', (event) => {
    event.src = '/images/bluediscord.png';
})