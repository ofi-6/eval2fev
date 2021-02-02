// Changer le border si les champs sont vides(chats)
// ou si le textarea < 15 caracteres
// la classe vide entoure le champ vie de rouge

$("button").on("click", (e) => {
  e.preventDefault();
  $("#monSelect").removeClass("vide");
  $("#monTextarea").removeClass("vide");

  if ($("#monSelect").val() === "") {
    $("#monSelect").addClass("vide");
  }
  if ($("#monTextarea").val().length < 15) {
    $("#monTextarea").addClass("vide");
  }
  /// si commentaire de au moins 15 caracteres et choix de chat,
  /// on  supprime la form et on affiche une message de confirmaiton de demande
  if ($("#monTextarea").val().length >= 15) {
    if ($("#monSelect").val() != "") {
      $(".chat_adopte").removeClass("cache");
      $(".chat_pas_adopte").addClass("cache");
    }
  }
});

//--------------- Changement de couleur du chat sur passge de la souris sur tout le foot-box --------------

$(".foot-box").hover(function (e) {
  $(".foot-box img").toggleClass("chat-change");
});
