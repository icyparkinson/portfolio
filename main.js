let socials = ["#twitter", "#github", "#linkedin", "#email"]

socials.forEach(link => {
    document.querySelector(link).addEventListener("mouseover", highlightLink)
    document.querySelector(link).addEventListener("mouseout", highlightReset)

function highlightLink(){
    document.querySelector(link).style.backgroundColor="rgb(0, 122, 204"
}

function highlightReset() {
    document.querySelector(link).style.backgroundColor="rgb(18, 16, 165)"
}
})


let nav = ["#navHome", "#navAbout", "#navProject", "#navContact"]

nav.forEach(link => {
    document.querySelector(link).addEventListener("mouseover", highLink)
    document.querySelector(link).addEventListener("mouseout", highReset)

function highLink(){
    document.querySelector(link).style.textDecoration="underline"
    // document.querySelector(link).style.boxShadow="0 0 40px 5px #0ff"
}    

function highReset(){
    document.querySelector(link).style.textDecoration="none"
    document.querySelector(link).style.color="white"
    // document.querySelector(link).style.boxShadow="none"
}
})


let buttons = ["#live1", "#code1"]

buttons.forEach(link => {
    document.querySelector(link).addEventListener("mouseover", highBut)
    document.querySelector(link).addEventListener("mouseout", highButReset)

function highBut(){
    document.querySelector(link).style.backgroundColor="white"
    document.querySelector(link).style.color="black"


}

function highButReset(){
    document.querySelector(link).style.backgroundColor="rgb(146	158	165	)"
    document.querySelector(link).style.color="white"

}

})


/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  } 