let searchInput = document.getElementsByClassName('google-search')[0];
function GoogleSearch(){
    if(searchInput.value != 0){
      window.open(`https://www.google.co.in/search?q=${searchInput.value}`)
      searchInput.value = ""
    }
    else{
      alert('enter something on search input')
    }
}
searchInput.addEventListener('keyup' , function(event){
    if(event.key === 'Enter'){
      GoogleSearch()
    }
  })
function FeelingLucky(){
  window.open('https://doodles.google/')
}
function searchonmic(){
  if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.onresult = function (event) {
        const result = event.results[0][0].transcript.trim().toLowerCase();
        SpeakSearch(result)
    }
    recognition.start()
}
}
function SpeakSearch(speak){
  window.open(`https://www.google.co.in/search?q=${speak}`)
}
function gmail(){
  window.open('https://mail.google.com/mail/u/0/#inbox')
}
function images(){
  window.open('https://www.google.com/imghp?hl=hi&ogbl')
}
function bycamera(){
  let p = document.createElement('p')
  p.innerHTML = `<div class="img-container">img-container<i class="fa-solid fa-xmark" onclick="close()"></i></div></div>`
  document.body.appendChild(p)
}