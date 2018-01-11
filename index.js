//jQuery to when page loads, execute the following functions
$(document).ready(function(){

  // When click on the Submit button, do the following function
  $("#search").click(function(){
    // We create a variable searchbox where it stores everything we type on the search input with the id search box
     var searchbox = $("#search-box").val();
    //
     var api = "https://www.wikipedia.org/w/api.php?action=opensearch&search="+searchbox+"&format=json&callback=?";
      // In here we usse Ajax with GET,because we are getting data, and the url is our API link above and data type we want in JSON format so we can access better
      $.ajax({
        type: "GET",
        url: api,
        async: false,
        dataType: "json",
        success: function(data){
        console.log(data)

       // console.log(data[1][0]);
       //console.log(data[2][0]);
       // console.log(data[3][0]);
          // In here we create a function that display the results, we use a for loop to go through every single result, and then we display it.
        $(function(){
          $("a").attr('target', 'blank');
        });

        $("#results").html("");
          for(var i = 0; i < data[1].length; i++){
            $("#results").prepend("<li><a href= "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
           }
         },
        // We create an error function to come up with the message if the API is not working and gives an error
        error: function(errormess){
          alert("Error, please reload the page and try again");
        }
       })
    });
});
