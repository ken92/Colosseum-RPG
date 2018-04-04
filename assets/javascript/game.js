// LIST OF GLADIATORS
var Spartacus = {
    name: "Spartacus",
    divID: $("#spartacusDiv"),
    hpID: $("#spartacusHealth"),
    maxHP: 180,
    HP: 180,
    AP: 6,
    CA: 20,
    EXP: 0,
    status: "unassigned"
  },
  Varro = {
    name: "Varro",
    divID: $("#varroDiv"),
    hpID: $("#varroHealth"),
    maxHP: 160,
    HP: 160,
    AP: 6,
    CA: 24,
    EXP: 0,
    status: "unassigned"
  },
  Ashur = {
    name: "Ashur",
    divID: $("#ashurDiv"),
    hpID: $("#ashurHealth"),
    maxHP: 110,
    HP: 110,
    AP: 6,
    CA: 28,
    EXP: 0,
    status: "unassigned"
  },
  Crixus = {
    name: "Crixus",
    divID: $("#crixusDiv"),
    hpID: $("#crixusHealth"),
    maxHP: 200,
    HP: 200,
    AP: 6,
    CA: 15,
    EXP: 0,
    status: "unassigned"
  },
  Gannicus = {
    name: "Gannicus",
    divID: $("#gannicusDiv"),
    hpID: $("#gannicusHealth"),
    maxHP: 175,
    HP: 175,
    AP: 6,
    CA: 20,
    EXP: 0,
    status: "unassigned"
  },
  Oenomaus = {
    name: "Oenomaus",
    divID: $("#oenomausDiv"),
    hpID: $("#oenomausHealth"),
    maxHP: 150,
    HP: 150,
    AP: 6,
    CA: 25,
    EXP: 0,
    status: "unassigned"
  };

var statusText = "",
  playerPicked = false,
  combat = false,
  fighterPit = $("#fighterPit"),
  player,
  enemy,
  opponentsLeft,
  statusText = $("#statusText");

// Reset / Default state function
function reset() {
  Spartacus = {
    name: "Spartacus",
    divID: $("#spartacusDiv"),
    hpID: $("#spartacusHealth"),
    maxHP: 180,
    HP: 180,
    AP: 6,
    CA: 20,
    EXP: 0,
    status: "unassigned"
  };
  Varro = {
    name: "Varro",
    divID: $("#varroDiv"),
    hpID: $("#varroHealth"),
    maxHP: 160,
    HP: 160,
    AP: 6,
    CA: 24,
    EXP: 0,
    status: "unassigned"
  };
  Ashur = {
    name: "Ashur",
    divID: $("#ashurDiv"),
    hpID: $("#ashurHealth"),
    maxHP: 110,
    HP: 110,
    AP: 6,
    CA: 28,
    EXP: 0,
    status: "unassigned"
  };
  Crixus = {
    name: "Crixus",
    divID: $("#crixusDiv"),
    hpID: $("#crixusHealth"),
    maxHP: 200,
    HP: 200,
    AP: 6,
    CA: 15,
    EXP: 0,
    status: "unassigned"
  };
  Gannicus = {
    name: "Gannicus",
    divID: $("#gannicusDiv"),
    hpID: $("#gannicusHealth"),
    maxHP: 175,
    HP: 175,
    AP: 6,
    CA: 20,
    EXP: 0,
    status: "unassigned"
  };
  Oenomaus = {
    name: "Oenomaus",
    divID: $("#oenomausDiv"),
    hpID: $("#oenomausHealth"),
    maxHP: 150,
    HP: 150,
    AP: 6,
    CA: 25,
    EXP: 0,
    status: "unassigned"
  };

  // Resets the health bars
  HPBarUpdate(Spartacus);
  HPBarUpdate(Varro);
  HPBarUpdate(Ashur);
  HPBarUpdate(Crixus);
  HPBarUpdate(Gannicus);
  HPBarUpdate(Oenomaus);

  // Resets the visibility of the gladiator pool
  Spartacus.divID.css("display", "inline");
  Varro.divID.css("display", "inline");
  Ashur.divID.css("display", "inline");
  Crixus.divID.css("display", "inline");
  Gannicus.divID.css("display", "inline");
  Oenomaus.divID.css("display", "inline");

  // Reset conditional varialbes
  playerPicked = false;
  combat = false;
  player = null;
  enemy = null;
  opponentsLeft = 5;

  // Default text and styling
  statusText.css("color", "black");
  statusText.css("font-weight", "bold");
  statusText.css("font-size", "1.5em");
  statusText.text("Pick a fighter to honor you in the arena!");

  // Sends fighters back to the pit
  Spartacus.divID.appendTo($(fighterPit));
  Varro.divID.appendTo(fighterPit);
  Ashur.divID.appendTo(fighterPit);
  Crixus.divID.appendTo(fighterPit);
  Gannicus.divID.appendTo(fighterPit);
  Oenomaus.divID.appendTo(fighterPit);
}

// Function to control when a gladiator is clicked
function btnClick(gladiator) {
  console.log(playerPicked);

  // Prevents player from clicking on an already selected champion
  if (gladiator === player) {
    statusText.css("color", "red"); // Resets the status text color
    statusText.css("font-weight", "bold");
    statusText.css("font-size", "1.5em");
    statusText.text(
      "You've already selected " +
        gladiator.name +
        " to represent you in the arena."
    ); // Tells the user they already picked this gladiator and prompts them to select an opponent selection
  } else {
    if (playerPicked === false) {
      // If no player is picked, selects the player
      gladiator.status = "player"; // sets gladiator status to player
      player = gladiator;
      // Change the border color to green
      // Gets player to move
      $(gladiator.divID).appendTo($("#playerSlot")); // Moves the selected character to the player slot
      console.log(gladiator);
      statusText.css("color", "black"); // Resets the status text color
      statusText.css("font-weight", "bold");
      statusText.css("font-size", "1.5em");
      statusText.text(
        gladiator.name +
          " has been picked to honor you in the arena, choose your opponent."
      ); // Tells the user which gladiator they picked and prompts them to make an opponent selection
      playerPicked = true;
    } else if (playerPicked === true && combat === false) {
      gladiator.status = "enemy"; // sets this gladiator to enemey
      enemy = gladiator;
      gladiator.divID.appendTo($("#enemySlot")); // Moves the selected character to the player slot
      statusText.css("color", "black"); // Resets the status text color
      statusText.css("font-weight", "bold");
      statusText.css("font-size", "1.5em");
      statusText.text(
        gladiator.name +
          " has been chosen as your opponent, click the attack button to fight."
      ); // Tells the user which gladiator they picked and prompts them to make an opponent selection
      combat = true;
    } else {
      statusText.css("color", "red"); // Resets the status text color
      statusText.css("font-weight", "bold");
      statusText.css("font-size", "1.5em");
      statusText.text(
        "Your opponent is waiting for you to advance, click the attack button now."
      ); // Tells the user which gladiator they picked and prompts them to make an opponent selection
    }
    console.log("click logic has run");
  }
}

// Loss sequence
function loss() {
  alert("At least you died an honorable death.");
  reset();
}

// Win sequence
function win() {
  alert("You have won your freedom, paid in blood.");
  reset();
}

// HP Bar Function
function HPBarUpdate(glad) {
  // hp / max hp * 100 = %
  let mh = glad.HP / glad.maxHP * 100;
  glad.hpID.css("width", mh + "%");
}

// Waits until document is ready and runs functions
$(window).on("load", function() {
  $(function() {
    $('[data-toggle="popover"]').popover();
  });

  // Mouseover stats
  // Spartacus
  $("#spartacusPopover").hover(
    function() {
      $(this)
        .popover({
          trigger: "hover",
          placement: "top",
          title: "Spartacus:",
          content:
            "Hit Points: " +
            Spartacus.HP +
            " <br /> Attack Power: " +
            Spartacus.AP +
            " <br /> Counter Attack: " +
            Spartacus.CA,
          html: true
        })
        .popover("show");
    },
    function() {
      $(this).popover("hide");
    }
  );

  // Varro
  $("#varroPopover").hover(
    function() {
      $(this)
        .popover({
          trigger: "hover",
          placement: "top",
          title: "Varro:",
          content:
            "Hit Points: " +
            Varro.HP +
            " <br /> Attack Power: " +
            Varro.AP +
            " <br /> Counter Attack: " +
            Varro.CA,
          html: true
        })
        .popover("show");
    },
    function() {
      $(this).popover("hide");
    }
  );

  // Ashur
  $("#ashurPopover").hover(
    function() {
      $(this)
        .popover({
          trigger: "hover",
          placement: "top",
          title: "Ashur:",
          content:
            "Hit Points: " +
            Ashur.HP +
            " <br /> Attack Power: " +
            Ashur.AP +
            " <br /> Counter Attack: " +
            Ashur.CA,
          html: true
        })
        .popover("show");
    },
    function() {
      $(this).popover("hide");
    }
  );

  // Crixus
  $("#crixusPopover").hover(
    function() {
      $(this)
        .popover({
          trigger: "hover",
          placement: "top",
          title: "Crixus:",
          content:
            "Hit Points: " +
            Crixus.HP +
            " <br /> Attack Power: " +
            Crixus.AP +
            " <br /> Counter Attack: " +
            Crixus.CA,
          html: true
        })
        .popover("show");
    },
    function() {
      $(this).popover("hide");
    }
  );

  // Gannicus
  $("#gannicusPopover").hover(
    function() {
      $(this)
        .popover({
          trigger: "hover",
          placement: "top",
          title: "Gannicus:",
          content:
            "Hit Points: " +
            Gannicus.HP +
            " <br /> Attack Power: " +
            Gannicus.AP +
            " <br /> Counter Attack: " +
            Gannicus.CA,
          html: true
        })
        .popover("show");
    },
    function() {
      $(this).popover("hide");
    }
  );

  // Oenomaus
  $("#oenomausPopover").hover(
    function() {
      $(this)
        .popover({
          trigger: "hover",
          placement: "top",
          title: "Oenomaus:",
          content:
            "Hit Points: " +
            Oenomaus.HP +
            " <br /> Attack Power: " +
            Oenomaus.AP +
            " <br /> Counter Attack: " +
            Oenomaus.CA,
          html: true
        })
        .popover("show");
    },
    function() {
      $(this).popover("hide");
    }
  );

  // On click functions
  // Spartacus
  Spartacus.divID.click(function() {
    btnClick(Spartacus);
    console.log("Spartacus has been clicked");
  });

  // Varro
  Varro.divID.click(function() {
    btnClick(Varro);
    console.log("Varro has been clicked");
  });

  // Ashur
  Ashur.divID.click(function() {
    btnClick(Ashur);
    console.log("Ashur has been clicked");
  });

  // Crixus
  Crixus.divID.click(function() {
    btnClick(Crixus);
    console.log("Crixus has been clicked");
  });

  // Gannicus
  Gannicus.divID.click(function() {
    btnClick(Gannicus);
    console.log("Gannicus has been clicked");
  });

  // Oenomaus
  Oenomaus.divID.click(function() {
    btnClick(Oenomaus);
    console.log("Oenomaus has been clicked");
  });

  // Attack button
  $("#attackBtn").click(function() {
    console.log("Combat has started"); // REMOVE AFTER TESTING //
    console.log("Enemy HP: " + enemy.HP);
    console.log("Player HP: " + player.HP);
    console.log("Opponents Left: " + opponentsLeft);

    if (playerPicked === false) {
      // Checks to see if player has selected their champion
      statusText.css("color", "red"); // Warning text color
      statusText.css("font-weight", "bold");
      statusText.css("font-size", "1.5em");
      statusText.text(
        "Please pick your champion before stepping into the arena."
      ); // Warning text
    } else if (playerPicked === true && combat === false) {
      // Checks to see if an enemy has been selected
      statusText.css("color", "red"); // Warning text color
      statusText.css("font-weight", "bold");
      statusText.css("font-size", "1.5em");
      statusText.text("You need to select a opponent first!"); // Warning text
    } else {
      // If player and enemy are selected, fight!
      if (combat === true && player != null && enemy != null) {
        // Player damages enemy
        enemy.HP -= player.AP + player.AP * player.EXP;
        // Player gains EXP for each attack
        player.EXP++;
        // Update enemy HP
        HPBarUpdate(enemy);
        console.log("Enemy HP: " + enemy.HP + " - after player attack");
        if (enemy.HP > 0) {
          // Enemy can only damage player if they are not dead
          player.HP -= enemy.CA;
          console.log("Player HP: " + player.HP + " - after enemy attack");
          // Update player HP bar
          HPBarUpdate(player);
          if (player.HP <= 0) {
            // If enemy's attack brings player to 0, player loses
            loss(); // Lose condition
          }
        } else {
          if (opponentsLeft === 0) {
            win();
          } else {
            // Enemy defeated, remove them from the board and reset combat status
            combat = false;
            opponentsLeft--;
            enemy.divID.css("display", "none");
          }
        }
      }
    }
  });

  // Function Calls
  reset();
});
