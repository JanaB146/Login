var objPeople = [
    {
        username: "Bewerbung",
        password: "erfolgreich"
    }
]
function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for(var i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username + " is loggend in!")
            window.location.href = 'https://janab146.github.io/zweitesPortfolio/';
            return
        } 
        //if (username != objPeople[i].username || password != objPeople[i].password) {}
    } failPopup();   
}

function anmeldedatenPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function failPopup() {
    var popUp = document.getElementById("meinPopup");
    popUp.classList.toggle("show");
}