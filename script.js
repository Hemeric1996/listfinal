jQuery(document).ready(function() {

  function todo (tache, expiration, completed, indice) {
    this.tache = tache;
    this.expiration =  expiration;
    this.completed = completed;
    this.indice = indice;
  };
var indice = 0;
  console.log(todo);
  var tab = [];
  stockage = localStorage;
  var user = $("#nom").val();
  stockage.setItem('nom', user);
  // stockage.clear();
  stockage.getItem('nom');
  console.log(stockage);
  var uneDate = new Date();
  var ajouter = document.getElementById('lavalidation');
  var supprimer = document.getElementById('supp');
  var complete = document.getElementById('comp');
  var edit = document.getElementById('edit');
  console.log(ajouter);

  $("#formulaire").click(function(e){
    e.preventDefault();
    console.log(stockage);
    $(".first").addClass("d-none");
    if (uneDate.getHours() < 12) {
      $('#bienvenue').html('Bonjour ' + user + ', bienvenue dans ton gestionnaire de tâche!' );
    }else {
    $('#bienvenue').html('Bonsoir ' + user + ', bienvenue dans ton gestionnaire de tâche!' );
  };
    $(".bienvenue").removeClass("d-none");
  });


  ajouter.addEventListener('click', function(e) {
        e.preventDefault();
        var tache = $('#tache').val();
        var expiration = $('#expiration').val();
        var completed = false;
        var trait = new todo (tache, expiration, completed, indice);
        tab.push(trait);
        console.log(tab);
        console.log(trait);
        console.log(stockage.getItem('malist'));
        $('#list').append(
          '<li><input type="checkbox" name="" data_attribute="'+indice+'" class="toggle" value="" id="'+indice+'_hum"> <label for="'+indice+'_hum">'+trait.tache+ ' avant le ' +trait.expiration+'</label><form class="remplir d-none"><div class="form-group"><div class="form-group row offset-md-2"></label><div class="col-sm-5"><input type="text" class="form-control" id="ntache" placeholder="Nouvelle tâche"></div><div class="col-sm-5" style="padding-top:5px;"><input type="date" class="form-control" id="nexpiration" placeholder="Nouvelle date d\'expiration" onKeyPress="if (event.keyCode == 13) ()"></div></div></div><button type="submit" id="misea" class="btn btn-success mb-2">Mettre à jour</button></form></li>'
        );
        $('.footer').removeClass('d-none');
        indice++;
        console.log(stockage);
        var tab_json =  JSON.stringify(tab);
        stockage.setItem('malist', tab_json);
        console.log(stockage);
    });


    $('input').click(function(){
            $( this ).parents( "li" ).addClass("completed");
    });
    complete.addEventListener('click', function(e) {
      e.preventDefault();

       $('input').each(function () {
         if( $(this).is(':checked') ){
             $( this ).parents( "li" ).addClass("completed");
           };
       });

       console.log(tab);
});

supprimer.addEventListener('click', function(e) {
  e.preventDefault();
   $('input').each(function () {
     if( $(this).is(':checked') ){
         var attri = $(this).attr("data_attribute");
         console.log(attri);
         $( this ).parents( "li" ).remove();
         tab.splice(attri, 1);
       };
   });
   console.log(tab);
});
console.log(tab);

  edit.addEventListener('click', function(e){
    e.preventDefault();
      $('input').each(function () {
        if( $(this).is(':checked') ){
              $(this).parents("li").find("form").removeClass("d-none")
          };
      })

  });


});
