$(document).ready(function() {
  const titleInput = $('#movie-title');
  const poster = $('#poster');
  const errorMessage = $('#error-message')

  titleInput.on('keydown', function(e){
    if (e.key === "Enter") {
      const movieTitle = titleInput.val();
      titleInput.val("");
      $.get(`/movieInfo?title=${movieTitle}`, function(response) {
        // console.log(response);
        if (response.poster) {
          poster.attr('src', response.poster);
          poster.removeClass('hidden');
          errorMessage.addClass('hidden');
        }
        else {
          errorMessage.removeClass('hidden');
          errorMessage.text(`Could not locate the poster for ${movieTitle}`);
          poster.addClass('hidden');
        }
        // if (response.id) {
        //   id.attr('display', 'block')
        // }
      })
    }
  });
});
