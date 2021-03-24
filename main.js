var menue_list_array=["Neapolitan Pizza","chicago pizza","Greek pizza"];
    
    
   function getmenue()
   {
      var htmldata;
      htmldata="<ol class='menuelist'>"
      menue-list-array.sort();
      for(var i=0;i<menue-list-array.lengthi++){
         html=htmldata+'<li>' + menue-list-array[i] + '<li>'
      }
      html=htmldata+'<ol>'
      document.getElementById("display-menue").innerHTML=htmldata
   }




   function add_item(){
      var htmldata 
      var item=document.getElementById("add_item").value;
      menue_list_array.push(item);
      menue_list_array.sort();
      htmldata="<section class="cards">"
      for(var i=0; i<menue_list_array.length;i++)
      {
         htmldata=htmldata+ "<div class="cards">"  + "<img src="pizzaImg.png"/>" + menue_list_array[i] + "</div>"
      }

      htmldata=htmldata+"</section>"
      document.getElementById("display-addedmenue").innerHTML=htmldata;
   }
   




