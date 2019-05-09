var messages = [];

function Message(message, type) {
    this.message = message;
    this.type = type;

}

function MessageHandler(type) {
    

    var msg = document.getElementById("message-input").value;

    switch(type) {
        case 0:
            var msgNew = new Message(msg, "in-message");

            break;

        case 1:
            var msgNew = new Message(msg, "out-message");

            break;

    }

    messages.push(msgNew);

    GenerateChat();

}

function GenerateChat() {
    var msgEle = document.getElementById("messages");

    msgEle.innerHTML = "";

    messages.forEach(element => {
        msgEle.innerHTML += "<p class=\"message\" id=\"" + element.type + "\">" + element.message + "</p>";

    });

}