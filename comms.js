var ws = new WebSocket("ws://localhost:8001/");
var inbox = [], outbox = [];

/*
var messages = document.createElement('ul');
ws.onmessage = function (event) {
    var messages = document.getElementsByTagName('ul')[0],
        message = document.createElement('li'),
        content = document.createTextNode(event.data);
    message.appendChild(content);
    messages.appendChild(message);
};
document.body.appendChild(messages);
*/
function onMessage(event) {
   msg = event.data;
   inbox.push(msg);
   /*
   while (msgQueue.length > 0) {
      console.log(msgQueue.shift());
   }
   */
}
ws.onmessage = onMessage;


