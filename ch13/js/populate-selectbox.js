(function() {
  var type = document.getElementById("equipmentType");
  var model = document.getElementById("model");
  var cameras = {
    bolex: "Bolex Paillard H8",
    yashica: "Yashica 30",
    pathescape: "Pathescape Super-8 Relax",
    canon: "Canon 512"
  };
  var projectors = {
    kodak: "Kodak Instamatic M55",
    bolex: "Bolex Sound 715",
    eumig: "Eumig Mark S",
    sankyo: "Sankyo Dualux"
  };

  // WHEN THE USER CHANGES THE 'TYPE' SELECT BOX
  addEvent(type, "change", function() {
    // if no selection was made
    if (this.value === "choose") {
      model.innerHTML = "<option>Please choose a type first</option>";
      return;
    }
    // select the right object
    var models = getModels(this.value);

    // LOOP THROUGH THE OPTIONS IN THE OBJECT TO CREATE OPTIONS
    var options = "<option>Please choose a model</option>";
    for (var key in models) {
      options += '<option value="' + key + '">' + models[key] + "</option>";
    }
    model.innerHTML = options;
  });

  function getModels(equipmentType) {
    if (equipmentType === "cameras") {
      return cameras;
    } else if (equipmentType === "projectors") {
      return projectors;
    }
  }
})();
