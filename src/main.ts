import '../style.css'
const app = document.querySelector<HTMLElement>("#app")
let gameSrc = ''

const checkDeviceType = () => {
  console.log(window.innerWidth)
   if(window.innerWidth < 1024){
    return gameSrc = "/mobileGame/BennyStarfighter_mobile.html"
   } else {
    return gameSrc = "/game/BennyStarfighter.html"
   }
}

checkDeviceType()

app!.innerHTML = `
  <iframe id="iframe" src=${gameSrc} frameborder="0"></iframe>
`