// Adding form 

const addEvent = document.getElementById('addEvent');

const form = document.createElement('form');

const eventName = document.createElement('input');
eventName.setAttribute('type', 'text'); 
eventName.setAttribute('placeholder', 'add a fun event name!');
eventName.setAttribute('required', true);

const eventDescription = document.createElement('input');
eventDescription.setAttribute('type', 'text'); 
eventDescription.setAttribute('placeholder', 'describe the event');
eventDescription.setAttribute('required', true);

const eventLocation = document.createElement('input');
eventLocation.setAttribute('type', 'text'); 
eventLocation.setAttribute('placeholder', 'event location');
eventLocation.setAttribute('required', true);

const eventDate = document.createElement('input');
eventDate.setAttribute('type', 'date'); 
eventDate.setAttribute('placeholder', 'event location');
eventDate.setAttribute('required', true);

form.appendChild(eventName);
form.appendChild(eventDescription);
form.appendChild(eventLocation);
form.appendChild(eventDate);

addEvent.appendChild(form);


// From submission creates new event 


// Fetch events 

function viewEvents (){
    fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2501-ftb-et-web-pt/events')
.then(response => response.json())
.then(data => {
    const eventList = document.getElementById('eventList');
    
    eventList.innerHTML = '';

    data.data.forEach(event => {
        const eventItem = document.createElement('div');

        eventItem.innerHTML = `${event.name}  <br>   ${event.description} <br> ${event.date} <br> ${event.location} <br> <br>`; 
    // uses back ticks, not quotation marks 
    // eventItem.textContent can not interpret HTML so use innerHTML instead
        eventList.appendChild(eventItem);
    
    });
})
.catch(error => {
console.error('Ran Into Error', error);
})
};

viewEvents();



// Delete event