function loadEvents () {
  var eventBlock = document.getElementById('eventBlock')
  window.fetch('http://api.webdesigncontest.org/events')
    .then((response) => {
      // Parse the JSON out of the response
      return response.json()
    }).then((data) => {
      // This takes each event from the API and formats the data to be displayed on the website
      for (let e of data) {
        eventBlock.innerHTML += `
          <article>
          <span class="eventTitle">${e.name}</span>
          <span class="eventDate">${e.date}</span>
          <span class="eventAddress">${e.address.street}, ${e.address.city} ${e.address.state_abbr}</span>
          <span class="eventTime">${e.time}</span>
          </article>
        `
      }
    })
}
