var dag = document.getElementsByClassName('agenda__lijst');

var agenda1 = {
  dag: 0,
  tijd: '13:50',
  bericht: 'hello world'
}

function toevoegen(dayselect, time, message) {
  blokEvent = document.createElement("div");
  blokEvent.setAttribute('class', 'agenda__lijst__blokEvent');
  timeSetting = document.createElement("h5");
  dag[dayselect].appendChild(blokEvent);
  time = document.createTextNode('Tijd: ' + time);
  timeSetting.appendChild(time);
  messageSetting = document.createElement("p");
  message = document.createTextNode('Message: ' + message);
  messageSetting.appendChild(message);
  blokEvent.appendChild(timeSetting);
  blokEvent.appendChild(messageSetting);
}

toevoegen(agenda1.dag, agenda1.tijd, agenda1.bericht);
