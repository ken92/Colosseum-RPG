// LIST OF GLADIATORS
var Spartacus = {
    name: "Spartacus",
    divID: "#spartacusDiv",
    HP: 180,
    AP: 6,
    CA: 20,
    EXP: 0,
    status: "unassigned"
  },
  Varro = {
    name: "Varro",
    divID: "#varroDiv",
    HP: 160,
    AP: 6,
    CA: 24,
    EXP: 0,
    status: "unassigned"
  },
  Ashur = {
    name: "Ashur",
    divID: "#ashurDiv",
    HP: 110,
    AP: 6,
    CA: 28,
    EXP: 0,
    status: "unassigned"
  },
  Crixus = {
    name: "Crixus",
    divID: "crixusDiv",
    HP: 200,
    AP: 6,
    CA: 15,
    EXP: 0,
    status: "unassigned"
  },
  Gannicus = {
    name: "Gannicus",
    divID: "#gannicusDiv",
    HP: 175,
    AP: 6,
    CA: 20,
    EXP: 0,
    status: "unassigned"
  },
  Oenomaus = {
    name: "Oenomaus",
    divID: "oenomausDiv",
    HP: 150,
    AP: 6,
    CA: 25,
    EXP: 0,
    status: "unassigned"
  };

var statusText = "",
  playerPicked = false,
  combat = false,
  fighterPit = "#fighterPit",
  player,
  enemy;

function reset() {
  Spartacus = {
    name: "Spartacus",
    divID: "#spartacusDiv",
    HP: 180,
    AP: 6,
    CA: 20,
    EXP: 0,
    status: "unassigned"
  };
  Varro = {
    name: "Varro",
    divID: "#varroDiv",
    HP: 160,
    AP: 6,
    CA: 24,
    EXP: 0,
    status: "unassigned"
  };
  Ashur = {
    name: "Ashur",
    divID: "#ashurDiv",
    HP: 110,
    AP: 6,
    CA: 28,
    EXP: 0,
    status: "unassigned"
  };
  Crixus = {
    name: "Crixus",
    divID: "#crixusDiv",
    HP: 200,
    AP: 6,
    CA: 15,
    EXP: 0,
    status: "unassigned"
  };
  Gannicus = {
    name: "Gannicus",
    divID: "#gannicusDiv",
    HP: 175,
    AP: 6,
    CA: 20,
    EXP: 0,
    status: "unassigned"
  };
  Oenomaus = {
    name: "Oenomaus",
    divID: "#oenomausDiv",
    HP: 150,
    AP: 6,
    CA: 25,
    EXP: 0,
    status: "unassigned"
  };

  // Resets the visibility of the gladiator pool
  $(Spartacus.divID).css("display", "inline");
  $(Varro.divID).css("display", "inline");
  $(Ashur.divID).css("display", "inline");
  $(Crixus.divID).css("display", "inline");
  $(Gannicus.divID).css("display", "inline");
  $(Oenomaus.divID).css("display", "inline");

  playerPicked = false;
  combat = false;
  player = null;
  enemy = null;

  statusText = "#statusText";

  $(statusText).css("color", "black");
  $(statusText).text("Pick a fighter to honor you in the arena!");

  // Fix these
  $("#spartacusDiv").appendTo($(fighterPit));
  $("#varroDiv").appendTo($(fighterPit));
  $("#ashurDiv").appendTo($(fighterPit));
  $("#crixusDiv").appendTo($(fighterPit));
  $("#gannicusDiv").appendTo($(fighterPit));
  $("#oenomausDiv").appendTo($(fighterPit));
}

// Function to control when a gladiator is clicked
function btnClick(gladiator) {
  console.log(playerPicked);

  // TO DO:
  // 1. make sure that the player cannot click on the gladitor in the play slot, it will break the game.

  if (playerPicked === false) {
    // If no player is picked, selects the player
    gladiator.status = "player"; // sets gladiator status to player
    player = gladiator;
    // Change the border color to green
    // Gets player to move
    $(gladiator.divID).appendTo($("#playerSlot")); // Moves the selected character to the player slot
    console.log(gladiator);
    $(statusText).css("color", "black"); // Resets the status text color
    $(statusText).text(
      gladiator.name +
        " has been picked to honor you in the arena, choose your opponent."
    ); // Tells the user which gladiator they picked and prompts them to make an opponent selection
    playerPicked = true;
  } else if (playerPicked === true && combat === false) {
    gladiator.status = "enemy"; // sets this gladiator to enemey
    enemy = gladiator;
    $(gladiator.divID).appendTo($("#enemySlot")); // Moves the selected character to the player slot
    $(statusText).css("color", "black"); // Resets the status text color
    $(statusText).text(
      gladiator.name +
        " has been chosen as your opponent, click the attack button to fight."
    ); // Tells the user which gladiator they picked and prompts them to make an opponent selection
    combat = true;
  } else {
    $(statusText).css("color", "red"); // Resets the status text color
    $(statusText).text(
      "Your opponent is waiting for you to advance, click the attack button now."
    ); // Tells the user which gladiator they picked and prompts them to make an opponent selection
  }
  console.log("click logic has run");
}

// Loss sequence
function loss() {
  alert("At least you died an honorable death.");
  reset();
}

// Waits until document is ready and runs functions
$(window).on("load", function() {
  reset();

  // Spartacus
  $(Spartacus.divID).click(function() {
    btnClick(Spartacus);
    console.log("Spartacus has been clicked");
  });

  // Varro
  $(Varro.divID).click(function() {
    btnClick(Varro);
    console.log("Varro has been clicked");
  });

  // Spartacus
  $(Ashur.divID).click(function() {
    btnClick(Ashur);
    console.log("Ashur has been clicked");
  });

  // Spartacus
  $(Crixus.divID).click(function() {
    btnClick(Crixus);
    console.log("Crixus has been clicked");
  });

  // Spartacus
  $(Gannicus.divID).click(function() {
    btnClick(Gannicus);
    console.log("Gannicus has been clicked");
  });

  // Spartacus
  $(Oenomaus.divID).click(function() {
    btnClick(Oenomaus);
    console.log("Oenomaus has been clicked");
  });

  // Attack button rests for testing
  $("#attackBtn").click(function() {
    console.log("Combat has started"); // REMOVE AFTER TESTING //
    console.log("Enemy HP: " + enemy.HP);
    console.log("Player HP: " + player.HP);

    if (playerPicked === false) {
      // Checks to see if player has selected their champion
      $(statusText).css("color", "red"); // Warning text color
      $(statusText).text(
        "Please pick your champion before stepping into the arena."
      ); // Warning text
    } else if (playerPicked === true && combat === false) {
      $(statusText).css("color", "red"); // Warning text color
      $(statusText).text("You need to select a opponent first!"); // Warning text
    } else {
      if (combat === true && player != null && enemy != null) {
        enemy.HP = enemy.HP - (player.AP + player.AP * player.EXP);
        player.EXP++;
        console.log("Enemy HP: " + enemy.HP + " - after player attack");
        if (enemy.HP > 0) {
          // If enemy is not dead, allow them to counter attack
          player.HP = player.HP - enemy.CA;
          console.log("Player HP: " + player.HP + " - after enemy attack");
          if (player.HP <= 0) {
            // If enemy's attack brings player to 0, player loses
            loss(); // Lose condition
          }
        } else {
          combat = false;
          $(enemy.divID).css("display", "none");
        }
      }
    }
  });
});
