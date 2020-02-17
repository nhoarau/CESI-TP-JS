$(document).ready(function() {
  
  //get images from xml file
    $.ajax(
    {
        type: "GET",
        url: "liste.xml",
        dataType: "xml",
        success: function(xml)
        {   
            $(xml).find('image').each(function()
            {
              let _url = $(this).find('src').text();
              console.log(_url);
              $(".images").append('<img class="image" src=' + _url + '>');

            });    
            $('img').shuffle();
              
        }         
    });

    //LighBox sur event click img
    $(document).on("click", ".image", function() { 
      var imgRef = $(this).attr("src"); 
      console.log(imgRef);
      $('body').append('<img id=imageLB src=' + imgRef + '>');
      $('#imageLB').fadeIn(200); 

      $('#imageLB').on('click', function(remove) { 
        if (remove.target == this) { 
          $('#imageLB').fadeOut(200, function(){ 
            $('#imageLB').remove(); 
          });
        }
      });
    });

    //mélange les images
    $.fn.shuffle = function() {
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
        return $(shuffled);
    };    

  });