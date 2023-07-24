const send = document.getElementById('send');
const inp = document.getElementById('inp');
const geo = document.getElementById('geo');
const serverUrl = 'wss://echo-ws-service.herokuapp.com';
const socket = new WebSocket(serverUrl);
socket.onopen = () => {
    console.log('WebSocket connection established.');
};
// Обработчик события получения сообщения от сервера
socket.onmessage = (event) => {
    const message = event.data;
    appendMessageToChat(message);
};
send.addEventListener('click', () =>{sendMessenge()});
const messenger = document.querySelector('.messenger');

const appendMessageToChat = (message) => {
    const messageElem = document.createElement('div');
    messageElem.innerText = message;
    messenger.appendChild(messageElem);
};

const sendMessenge = () => {
    const message = inp.value;
    socket.send(message);
    appendMessageToChat(message);
    inp.value = '';
};

send.addEventListener('click', sendMessenge);

geo.addEventListener('click', function() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const locationMessage = `Моя гео-локация: Широта ${latitude}, Долгота ${longitude}`;
            socket.send(locationMessage);
        }, (error) => {
            console.error('Ошибка получения гео-локации:', error.message);
        });
    } else {
        console.error('Гео-локация не поддерживается вашим браузером.');
    }
});
