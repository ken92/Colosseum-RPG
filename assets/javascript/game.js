// LIST OF GLADIATORS
var Spartacus = {
        name: "Spartacus",
        divID: $("#spartacusDiv"),
        charID: $("#spartacusPopover"),
        hpID: $("#spartacusHealth"),
        special: true,
        power: 5,
        maxHP: 500,
        HP: 500,
        AP: 10,
        CA: 20,
        EXP: 0,
        status: "unassigned"
    },
    Varro = {
        name: "Varro",
        divID: $("#varroDiv"),
        charID: $("#varroPopover"),
        hpID: $("#varroHealth"),
        special: true,
        power: 5,
        maxHP: 500,
        HP: 500,
        AP: 10,
        CA: 20,
        EXP: 0,
        status: "unassigned"
    },
    Ashur = {
        name: "Ashur",
        divID: $("#ashurDiv"),
        charID: $("#ashurPopover"),
        hpID: $("#ashurHealth"),
        special: true,
        power: 5,
        maxHP: 500,
        HP: 500,
        AP: 10,
        CA: 20,
        EXP: 0,
        status: "unassigned"
    },
    Crixus = {
        name: "Crixus",
        divID: $("#crixusDiv"),
        charID: $("#crixusPopover"),
        hpID: $("#crixusHealth"),
        special: true,
        power: 5,
        maxHP: 500,
        HP: 500,
        AP: 10,
        CA: 20,
        EXP: 0,
        status: "unassigned"
    },
    Gannicus = {
        name: "Gannicus",
        divID: $("#gannicusDiv"),
        charID: $("#gannicusPopover"),
        hpID: $("#gannicusHealth"),
        special: true,
        power: 5,
        maxHP: 500,
        HP: 500,
        AP: 10,
        CA: 20,
        EXP: 0,
        status: "unassigned"
    },
    Oenomaus = {
        name: "Oenomaus",
        divID: $("#oenomausDiv"),
        charID: $("#oenomausPopover"),
        hpID: $("#oenomausHealth"),
        special: true,
        power: 5,
        maxHP: 500,
        HP: 500,
        AP: 10,
        CA: 20,
        EXP: 0,
        status: "unassigned"
    };

// Conditionals
var statusText = "",
    playerPicked = false,
    combat = false,
    fighterPit = $("#fighterPit"),
    player,
    enemy,
    opponentsLeft,
    statusText = $("#statusText");

// Audio
var soundMusic = document.createElement("audio");
soundMusic.setAttribute("src", "./assets/audio/music.mp3");

// Reset / Default state function
function reset() {
    Spartacus = {
        name: "Spartacus",
        divID: $("#spartacusDiv"),
        charID: $("#spartacusPopover"),
        hpID: $("#spartacusHealth"),
        special: true,
        power: 5,
        maxHP: 500,
        HP: 500,
        AP: 10,
        CA: 20,
        EXP: 0,
        status: "unassigned"
    };
    Varro = {
        name: "Varro",
        divID: $("#varroDiv"),
        charID: $("#varroPopover"),
        hpID: $("#varroHealth"),
        special: true,
        power: 5,
        maxHP: 500,
        HP: 500,
        AP: 10,
        CA: 20,
        EXP: 0,
        status: "unassigned"
    };
    Ashur = {
        name: "Ashur",
        divID: $("#ashurDiv"),
        charID: $("#ashurPopover"),
        hpID: $("#ashurHealth"),
        special: true,
        power: 5,
        maxHP: 500,
        HP: 500,
        AP: 10,
        CA: 20,
        EXP: 0,
        status: "unassigned"
    };
    Crixus = {
        name: "Crixus",
        divID: $("#crixusDiv"),
        charID: $("#crixusPopover"),
        hpID: $("#crixusHealth"),
        special: true,
        power: 5,
        maxHP: 500,
        HP: 500,
        AP: 10,
        CA: 20,
        EXP: 0,
        status: "unassigned"
    };
    Gannicus = {
        name: "Gannicus",
        divID: $("#gannicusDiv"),
        charID: $("#gannicusPopover"),
        hpID: $("#gannicusHealth"),
        special: true,
        power: 5,
        maxHP: 500,
        HP: 500,
        AP: 10,
        CA: 20,
        EXP: 0,
        status: "unassigned"
    };
    Oenomaus = {
        name: "Oenomaus",
        divID: $("#oenomausDiv"),
        charID: $("#oenomausPopover"),
        hpID: $("#oenomausHealth"),
        special: true,
        power: 5,
        maxHP: 500,
        HP: 500,
        AP: 10,
        CA: 20,
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

    // Default animation
    Spartacus.charID.attr(
        "src",
        "assets/images/" + Spartacus.name.toLowerCase() + "_idle.gif"
    );
    Varro.charID.attr(
        "src",
        "assets/images/" + Varro.name.toLowerCase() + "_idle.gif"
    );
    Ashur.charID.attr(
        "src",
        "assets/images/" + Ashur.name.toLowerCase() + "_idle.gif"
    );
    Crixus.charID.attr(
        "src",
        "assets/images/" + Crixus.name.toLowerCase() + "_idle.gif"
    );
    Gannicus.charID.attr(
        "src",
        "assets/images/" + Gannicus.name.toLowerCase() + "_idle.gif"
    );
    Oenomaus.charID.attr(
        "src",
        "assets/images/" + Oenomaus.name.toLowerCase() + "_idle.gif"
    );

    // Resets the visibility of the gladiator pool
    Spartacus.divID.css("display", "inline");
    Varro.divID.css("display", "inline");
    Ashur.divID.css("display", "inline");
    Crixus.divID.css("display", "inline");
    Gannicus.divID.css("display", "inline");
    Oenomaus.divID.css("display", "inline");
    $("#attackSlot").css("visibility", "hidden");
    $("#specialSlot").css("visibility", "hidden");

    // Reset conditional varialbes
    playerPicked = false;
    combat = false;
    player = null;
    enemy = null;
    opponentsLeft = 5;

    // Default text and styling
    statusText.css({
        "color": "black",
        "font-weight": "bold",
        "font-size": "1.5em"
    });
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
            aboutFace(gladiator);
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
            $("#attackSlot").css("visibility", "visible");
            // Shows special attack if avaiable
            if (player.special === true) {
                $("#specialSlot").css("visibility", "visible");
            }
            combat = true;
            aboutFace(gladiator);
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

// Character facing
function aboutFace(char) {
    if (char.status === "player") {
        char.charID.css({
            "-moz-transform": "scaleX(1)",
            "-o-transform": "scaleX(1)",
            "-webkit-transform": "scaleX(1)",
            transform: "scaleX(1)",
            filter: '"FlipH"',
            "-ms-filter": '\'"FlipH"'
        });
    } else {
        char.charID.css({
            "-moz-transform": "scaleX(-1)",
            "-o-transform": "scaleX(-1)",
            "-webkit-transform": "scaleX(-1)",
            transform: "scaleX(-1)",
            filter: '"FlipH"',
            "-ms-filter": '\'"FlipH"'
        });
    }
}

// HP Bar Function
function HPBarUpdate(glad) {
    // hp / max hp * 100 = %
    let mh = glad.HP / glad.maxHP * 100;
    glad.hpID.css("width", mh + "%");
    // Add health text
    glad.hpID.text("HP " + glad.HP);

    console.log("Health %: " + mh);
    // Turn HP bar red on low HP
    if (mh <= 50) {
        glad.hpID.css("background-color", "red");
    } else {
        glad.hpID.css("background-color", "green");
    }
}

// Waits until document is ready and runs functions
$(window).on("load", function () {
    // Loads popovers (character stats on mouseover)
    $(function () {
        $('[data-toggle="popover"]').popover();
    });

    // Intial lore window
    $("#myModal").modal();

    // Idle animation

    // Mouseover stats
    function mouseoverStats() {
        // Spartacus
        Spartacus.charID.hover(
            function () {
                $(this).attr("src", "assets/images/spartacus_run.gif");
                $(this)
                    .popover({
                        trigger: "hover",
                        placement: "top",
                        title: "Spartacus:",
                        content: "Hit Points: " +
                            Spartacus.HP +
                            " <br /> Attack Power: " +
                            Spartacus.AP +
                            " <br /> Counter Attack: " +
                            Spartacus.CA,
                        html: true
                    })
                    .popover("show");
            },
            function () {
                $(this).attr("src", "assets/images/spartacus_idle.gif");
                $(this).popover("hide");
            }
        );

        // Varro
        Varro.charID.hover(
            function () {
                $(this).attr("src", "assets/images/varro_run.gif");
                $(this)
                    .popover({
                        trigger: "hover",
                        placement: "top",
                        title: "Varro:",
                        content: "Hit Points: " +
                            Varro.HP +
                            " <br /> Attack Power: " +
                            Varro.AP +
                            " <br /> Counter Attack: " +
                            Varro.CA,
                        html: true
                    })
                    .popover("show");
            },
            function () {
                $(this).attr("src", "assets/images/varro_idle.gif");
                $(this).popover("hide");
            }
        );

        // Ashur
        Ashur.charID.hover(
            function () {
                $(this).attr("src", "assets/images/ashur_run.gif");
                $(this)
                    .popover({
                        trigger: "hover",
                        placement: "top",
                        title: "Ashur:",
                        content: "Hit Points: " +
                            Ashur.HP +
                            " <br /> Attack Power: " +
                            Ashur.AP +
                            " <br /> Counter Attack: " +
                            Ashur.CA,
                        html: true
                    })
                    .popover("show");
            },
            function () {
                $(this).attr("src", "assets/images/ashur_idle.gif");
                $(this).popover("hide");
            }
        );

        // Crixus
        Crixus.charID.hover(
            function () {
                $(this).attr("src", "assets/images/crixus_run.gif");
                $(this)
                    .popover({
                        trigger: "hover",
                        placement: "top",
                        title: "Crixus:",
                        content: "Hit Points: " +
                            Crixus.HP +
                            " <br /> Attack Power: " +
                            Crixus.AP +
                            " <br /> Counter Attack: " +
                            Crixus.CA,
                        html: true
                    })
                    .popover("show");
            },
            function () {
                $(this).attr("src", "assets/images/crixus_idle.gif");
                $(this).popover("hide");
            }
        );

        // Gannicus
        Gannicus.charID.hover(
            function () {
                $(this).attr("src", "assets/images/gannicus_run.gif");
                $(this)
                    .popover({
                        trigger: "hover",
                        placement: "top",
                        title: "Gannicus:",
                        content: "Hit Points: " +
                            Gannicus.HP +
                            " <br /> Attack Power: " +
                            Gannicus.AP +
                            " <br /> Counter Attack: " +
                            Gannicus.CA,
                        html: true
                    })
                    .popover("show");
            },
            function () {
                $(this).attr("src", "assets/images/gannicus_idle.gif");
                $(this).popover("hide");
            }
        );

        // Oenomaus
        Oenomaus.charID.hover(
            function () {
                $(this).attr("src", "assets/images/oenomaus_run.gif");
                $(this)
                    .popover({
                        trigger: "hover",
                        placement: "top",
                        title: "Oenomaus:",
                        content: "Hit Points: " +
                            Oenomaus.HP +
                            " <br /> Attack Power: " +
                            Oenomaus.AP +
                            " <br /> Counter Attack: " +
                            Oenomaus.CA,
                        html: true
                    })
                    .popover("show");
            },
            function () {
                $(this).attr("src", "assets/images/oenomaus_idle.gif");
                $(this).popover("hide");
            }
        );
    }

    // On click functions
    // Spartacus
    Spartacus.divID.click(function () {
        btnClick(Spartacus);
        console.log("Spartacus has been clicked");
    });

    // Varro
    Varro.divID.click(function () {
        btnClick(Varro);
        console.log("Varro has been clicked");
    });

    // Ashur
    Ashur.divID.click(function () {
        btnClick(Ashur);
        console.log("Ashur has been clicked");
    });

    // Crixus
    Crixus.divID.click(function () {
        btnClick(Crixus);
        console.log("Crixus has been clicked");
    });

    // Gannicus
    Gannicus.divID.click(function () {
        btnClick(Gannicus);
        console.log("Gannicus has been clicked");
    });

    // Oenomaus
    Oenomaus.divID.click(function () {
        btnClick(Oenomaus);
        console.log("Oenomaus has been clicked");
    });

    // Attack button
    $("#attackBtn").click(function () {
        // Loads popovers (character stats on mouseover)
        $(function () {
            $('[data-toggle="popover"]').popover();
        });

        // Activates special ability if power level is 5 or higher
        if (player.power >= 5) {
            player.special = true;
            player.power = 0;
        }
        // Shows special attack if avaiable
        if (player.special === true) {
            $("#specialSlot").css("visibility", "visible");
        } else {
            player.power++;
        };

        // Re-loads the popovers - THIS IS NOT DYNMAICALLY UPDATING TOOLTIPS
        mouseoverStats();

        if (playerPicked === false) {
            // Checks to see if player has selected their champion
            statusText.css({
                "color": "red",
                "font-weight": "bold",
                "font-size": "1.5em"
            }); // Warning text color
            statusText.text(
                "Please pick your champion before stepping into the arena."
            ); // Warning text
        } else if (playerPicked === true && combat === false) {
            // Checks to see if an enemy has been selected
            statusText.css({
                "color": "red",
                "font-weight": "bold",
                "font-size": "1.5em"
            }); // Warning text color
            statusText.text("You need to select a opponent first!"); // Warning text
        } else {
            // If player and enemy are selected, fight!
            if (combat === true && player != null && enemy != null) {
                // ANIMATIONS
                // Set attack animation of player
                setTimeout(function () {
                    $(player.charID).attr(
                        "src",
                        "assets/images/" + player.name.toLowerCase() + "_attack.gif"
                    );
                    // Set hurt animation of enemy
                    setTimeout(function () {
                        $(enemy.charID).attr(
                            "src",
                            "assets/images/" + enemy.name.toLowerCase() + "_hurt.gif"
                        );
                        setTimeout(function () {
                            // Restore idle animations
                            $(player.charID).attr(
                                "src",
                                "assets/images/" + player.name.toLowerCase() + "_idle.gif"
                            );
                            $(enemy.charID).attr(
                                "src",
                                "assets/images/" + enemy.name.toLowerCase() + "_idle.gif"
                            );
                        }, 500);
                    }, 500);
                }, 500);

                // Player damages enemy
                enemy.HP -= player.AP + player.AP * player.EXP;
                // Player gains EXP for each attack
                player.EXP++;
                // Update enemy HP
                HPBarUpdate(enemy);
                console.log("Enemy HP: " + enemy.HP + " - after player attack");
                if (enemy.HP > 0) {
                    // Enemy can only damage player if they are not dead

                    // ANIMATIONS
                    // Gives the first round of attacks time to cycle
                    setTimeout(function () {
                        // Set attack animation of enemy
                        setTimeout(function () {
                            $(enemy.charID).attr(
                                "src",
                                "assets/images/" + enemy.name.toLowerCase() + "_attack.gif"
                            );
                            // Set hurt animation of player
                            setTimeout(function () {
                                $(player.charID).attr(
                                    "src",
                                    "assets/images/" + player.name.toLowerCase() + "_hurt.gif"
                                );
                                setTimeout(function () {
                                    // Restore idle animations
                                    $(player.charID).attr(
                                        "src",
                                        "assets/images/" + player.name.toLowerCase() + "_idle.gif"
                                    );
                                    $(enemy.charID).attr(
                                        "src",
                                        "assets/images/" + enemy.name.toLowerCase() + "_idle.gif"
                                    );
                                }, 500);
                            }, 1000);
                        }, 1000);
                    }, 1000);

                    // Enemy can only damage player if they are not dead
                    player.HP -= enemy.CA;
                    console.log("Player HP: " + player.HP + " - after enemy attack");
                    // Update player HP bar
                    HPBarUpdate(player);
                    if (player.HP <= 0) {
                        // If enemy's attack brings player to 0, player loses
                        // ANIMATIONS
                        setTimeout(function () {
                            // Set attack animation of enemy
                            setTimeout(function () {
                                $(player.charID).attr(
                                    "src",
                                    "assets/images/" + player.name.toLowerCase() + "_die.gif"
                                );

                                setTimeout(function () {
                                    // Player loses
                                    loss();
                                }, 1500);
                            }, 5000);
                        }, 500);
                    }
                } else {
                    if (opponentsLeft === 0) {
                        win();
                    } else {
                        // Enemy defeated sequence
                        opponentsLeft--; // Reduce number of opponents left.
                        $("#attackSlot").css("visibility", "hidden");
                        $("#specialSlot").css("visibility", "hidden");

                        // ANIMATION
                        // Gives the first round of attacks time to cycle
                        setTimeout(function () {
                            // Set death animation of enemy
                            setTimeout(function () {
                                $(enemy.charID).attr(
                                    "src",
                                    "assets/images/" + enemy.name.toLowerCase() + "_die.gif"
                                );
                                // Remove enemy from screen
                                setTimeout(function () {
                                    if (opponentsLeft === 0) {
                                        win(); // Win Condition
                                    }
                                    enemy.divID.css("display", "none");
                                    statusText.css({
                                        "color": "black",
                                        "font-weight": "bold",
                                        "font-size": "1.5em"
                                    }); // Warning text color
                                    statusText.text(
                                        "You defeated " +
                                        enemy.name +
                                        "! Select your next opponent."
                                    ); // Warning text
                                    // Resets combat to allow player to select a new opponent
                                    combat = false;
                                }, 3000);
                            }, 1000);
                        }, 1000);
                    }
                }
            }
        }
    });

    // SPECIAL ATTACK button - PICKUP HERE WHEN YOU COME BACK!!!!!!!!!!!!!!

    $("#specialBtn").click(function () {
        // Resets status of special button once used
        $("#specialSlot").css("visibility", "hidden");
        player.special = false;
        player.power = 0;

        // ANIMATIONS
        // Set special attack animation of player
        setTimeout(function () {
            $(player.charID).attr(
                "src",
                "assets/images/" + player.name.toLowerCase() + "_jump.gif"
            );
            // Set hurt animation of enemy
            setTimeout(function () {
                $(enemy.charID).attr(
                    "src",
                    "assets/images/" + enemy.name.toLowerCase() + "_hurt.gif"
                );
                setTimeout(function () {
                    // Restore idle animations
                    $(player.charID).attr(
                        "src",
                        "assets/images/" + player.name.toLowerCase() + "_idle.gif"
                    );
                    $(enemy.charID).attr(
                        "src",
                        "assets/images/" + enemy.name.toLowerCase() + "_idle.gif"
                    );
                }, 500);
            }, 500);
        }, 500);

        // Player damages enemy
        enemy.HP -= (player.AP + player.AP * player.EXP) * 2;
        // Update enemy HP
        HPBarUpdate(enemy);
        console.log("Enemy HP: " + enemy.HP + " - after special attack");
        if (enemy.HP <= 0) {
            // Enemy defeated sequence
            opponentsLeft--; // Reduce number of opponents left.
            $("#attackSlot").css("visibility", "hidden");
            $("#specialSlot").css("visibility", "hidden");
            // ANIMATION
            // Gives the first round of attacks time to cycle
            setTimeout(function () {
                // Set death animation of enemy
                setTimeout(function () {
                    $(enemy.charID).attr(
                        "src",
                        "assets/images/" + enemy.name.toLowerCase() + "_die.gif"
                    );
                    // Remove enemy from screen
                    setTimeout(function () {
                        if (opponentsLeft === 0) {
                            enemy.divID.css("display", "none");
                            statusText.css({
                                "color": "red",
                                "font-weight": "bold",
                                "font-size": "1.5em"
                            }); // Warning text color
                            statusText.text(
                                "You defeated " +
                                enemy.name +
                                "! You are the god of the arena."
                            ); // Warning text
                            win(); // Win Condition
                        }
                        enemy.divID.css("display", "none");
                        statusText.css({
                            "color": "black",
                            "font-weight": "bold",
                            "font-size": "1.5em"
                        }); // Warning text color
                        statusText.text(
                            "You defeated " +
                            enemy.name +
                            "! Select your next opponent."
                        ); // Warning text
                        // Resets combat to allow player to select a new opponent
                        combat = false;
                    }, 3000);
                }, 1000);
            }, 1000);
        }

    });

    // Function Calls
    reset();
    // soundMusic.play();
    mouseoverStats();
});