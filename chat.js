$(() => {
  const socket = io();

  $('#submitButton').click((event) => {
    event.preventDefault();
    let message = $('#m').val();
    socket.emit('chat message', message)
    console.log(message);
    $('input').val("");
    return false;
  })

  socket.on('chat message', (data) => {
    $('#messages').append(`<li>${data}</li>`)
  })
});
