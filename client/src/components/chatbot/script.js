export function suporteToggle() {
    let chatbox = document.querySelector('#chatbot')
    if (chatbox.style.display === 'block') {
        chatbox.style.display = 'none'
    } else {
        chatbox.style.display  = 'block'
    }  
}