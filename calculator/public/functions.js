
$(document).ready(function() { 
    $('.btn').click(function() {
      $(this).addClass('clicked');
      setTimeout(function() {
        $('.btn').removeClass('clicked');
      }, 500);
      
    });

    $('.display-btn').click(function() {
        const clickedText = $(this).text(); // Get the text of the clicked div
        $('#display').append(clickedText); // Add text to target div with a line break
      });

    $('.clear-btn').click(function(){
      $('#display').text('')
    })

    $('.equal-btn').click(function(){
      var text = $('#display').text()
      var output = eval(text).toString().slice(0,10)
      return $('#display').text(output)
    })
  });
//   We use $(document).ready(function() {...}) to ensure the code executes after the DOM is loaded.
  
