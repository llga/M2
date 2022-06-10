const url = 'http://localhost:5000'

const showFriends = () => {
  $('#lista').empty();
  $.get(`${url}/amigos`, (friends) => {
    console.log(friends);
    friends.forEach(friend => {
      $('#lista').append(`<li>${friend.name}</li>`);
    })
  })
}

const showFriend = (id) => {
  $.get(`${url}/amigos/${id}`, (friend) => {
    $('#amigo').text(friend.name);
    $('#input-search').val('');
    $('#input-search').focus();
  })
}

const deleteFriend = (id, input) => {
  $.ajax({
    url: `${url}/amigos/${id}`,
    type: 'DELETE',
    success: ()=> {
      if(input){
        $('#success').text('Amigo eliminado correctamente');
        input.val('');
        input.focus();
      }
      showFriends()
    }
  });
}

// const addFriend = () => {
//   $.ajax({
//     url: `${url}/amigos`,
//     type: "POST",
//     data: JSON.stringify({
//       name: $("#input-name").val(),
//       email: $("#input-email").val(),
//       age: $("#input-age").val(),
//     }),
//     contentType: "application/json",
//     success: showFriends
//   })
// }


$('#boton').click(() => {
  $('#visible').css('display', 'none');
  $('#hidden').css('display', 'block');
  showFriends();
})

$('#search').click(() => {
  let id = $('#input-search').val();
  $('#visible').css('display', 'none');
  $('#hidden').css('display', 'block');
  showFriends();
  showFriend(id);
})

$('#delete').click(() => {
  const input = $('#input-delete');
  let id = input.val();
  $('#visible').css('display', 'none');
  $('#hidden').css('display', 'block');
  deleteFriend(id, input);
})

// $("#post").click(postFriend)