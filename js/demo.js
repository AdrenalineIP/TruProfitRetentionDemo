let rotate;
let numBetsLeft = Math.floor(Math.random() * 5)+2;
let currBoost = 0.05;
let currIndex = 0;
let myTeam = "Bears";
let demoMode = "xbets";
let userOdds1 = [
        {
            "sport": "American Football (NFL)",
            "home": "Bears",
            "away": "Titans",
            "odds1": 1.44,
            "odds2": null,
            "odds3": 2.85
        },
        {
            "sport": "American Football (NFL)",
            "home": "Vikings",
            "away": "Commanders",
            "odds1": 1.60,
            "odds2": null,
            "odds3": 2.45
        },
        {
            "sport": "American Football (NFL)",
            "home": "Cowboys",
            "away": "Packers",
            "odds1": 1.80,
            "odds2": null,
            "odds3": 2.05
        }
    ];
let userodds3 = [
        {
            "sport": "American Football (NFL)",
            "home": "Bears",
            "away": "Titans",
            "odds1": 1.46,
            "odds2": null,
            "odds3": 2.83
        },
        {
            "sport": "American Football (NFL)",
            "home": "Vikings",
            "away": "Commanders",
            "odds1": 1.59,
            "odds2": null,
            "odds3": 2.46
        },
        {
            "sport": "American Football (NFL)",
            "home": "Cowboys",
            "away": "Packers",
            "odds1": 1.85,
            "odds2": null,
            "odds3": 2.00
        }
    ];
    let userOdds3 = [
        {
            "sport": "American Football (NFL)",
            "home": "Bears",
            "away": "Titans",
            "odds1": 1.40,
            "odds2": null,
            "odds3": 2.87
        },
        {
            "sport": "American Football (NFL)",
            "home": "Vikings",
            "away": "Commanders",
            "odds1": 1.56,
            "odds2": null,
            "odds3": 2.49
        },
        {
            "sport": "American Football (NFL)",
            "home": "Cowboys",
            "away": "Packers",
            "odds1": 1.87,
            "odds2": null,
            "odds3": 1.98
        }
    ]; 
    let userOdds4 = [
        {
            "sport": "American Football (NFL)",
            "home": "Bears",
            "away": "Titans",
            "odds1": 1.45,
            "odds2": null,
            "odds3": 2.82
        },
        {
            "sport": "American Football (NFL)",
            "home": "Vikings",
            "away": "Commanders",
            "odds1": 1.57,
            "odds2": null,
            "odds3": 2.48
        },
        {
            "sport": "American Football (NFL)",
            "home": "Cowboys",
            "away": "Packers",
            "odds1": 1.83,
            "odds2": null,
            "odds3": 2.02
        }
    ]; 
    let userOdds5 = [
        {
            "sport": "American Football (NFL)",
            "home": "Bears",
            "away": "Titans",
            "odds1": 1.41,
            "odds2": null,
            "odds3": 2.86
        },
        {
            "sport": "American Football (NFL)",
            "home": "Vikings",
            "away": "Commanders",
            "odds1": 1.53,
            "odds2": null,
            "odds3": 2.52
        },
        {
            "sport": "American Football (NFL)",
            "home": "Cowboys",
            "away": "Packers",
            "odds1": 1.90,
            "odds2": null,
            "odds3": 1.94
        }
    ];
    let userOdds6 = [
        {
            "sport": "Soccer",
            "home": "Liverpool",
            "away": "Man City",
            "odds1": 2.4,
            "odds2": 2.87,
            "odds3": 2.87
        },
        {
            "sport": "Soccer",
            "home": "Brentford",
            "away": "Man Utd",
            "odds1": 5.25,
            "odds2": 1.33,
            "odds3": 9.0
        },
        {
            "sport": "Soccer",
            "home": "A.Villa",
            "away": "Chelsea",
            "odds1": 3.8,
            "odds2": 2.0,
            "odds3": 3.0
        }
    ];   
    let userOdds7 = [
        {
            "sport": "Soccer",
            "home": "Liverpool",
            "away": "Man City",
            "odds1": 2.42,
            "odds2": 2.86,
            "odds3": 2.86
        },
        {
            "sport": "Soccer",
            "home": "Brentford",
            "away": "Man Utd",
            "odds1": 5.30,
            "odds2": 1.33,
            "odds3": 8.8
        },
        {
            "sport": "Soccer",
            "home": "A.Villa",
            "away": "Chelsea",
            "odds1": 3.77,
            "odds2": 2.03,
            "odds3": 2.99
        }
    ];   
    let userOdds8 = [
        {
            "sport": "Soccer",
            "home": "Liverpool",
            "away": "Man City",
            "odds1": 2.40,
            "odds2": 2.87,
            "odds3": 2.87
        },
        {
            "sport": "Soccer",
            "home": "Brentford",
            "away": "Man Utd",
            "odds1": 5.35,
            "odds2": 1.38,
            "odds3": 8.71
        },
        {
            "sport": "Soccer",
            "home": "A.Villa",
            "away": "Chelsea",
            "odds1": 3.72,
            "odds2": 2.00,
            "odds3": 3.02
        }
    ]; 
    let userOdds9 = [
        {
            "sport": "Soccer",
            "home": "Liverpool",
            "away": "Man City",
            "odds1": 2.35,
            "odds2": 2.87,
            "odds3": 2.92
        },
        {
            "sport": "Soccer",
            "home": "Brentford",
            "away": "Man Utd",
            "odds1": 5.20,
            "odds2": 1.42,
            "odds3": 8.91
        },
        {
            "sport": "Soccer",
            "home": "A.Villa",
            "away": "Chelsea",
            "odds1": 3.77,
            "odds2": 2.02,
            "odds3": 2.95
        }
    ]; 
    let userOdds10 = [
        {
            "sport": "Soccer",
            "home": "Liverpool",
            "away": "Man City",
            "odds1": 2.30,
            "odds2": 2.92,
            "odds3": 2.97
        },
        {
            "sport": "Soccer",
            "home": "Brentford",
            "away": "Man Utd",
            "odds1": 5.00,
            "odds2": 1.25,
            "odds3": 8.99
        },
        {
            "sport": "Soccer",
            "home": "A.Villa",
            "away": "Chelsea",
            "odds1": 3.82,
            "odds2": 2.00,
            "odds3": 2.87
        }
    ];       
const odds = [
    userOdds1,
    userodds3,
    userOdds3,
    userOdds4,
    userOdds5,
    userOdds4,
    userOdds3,
    userodds3,
    userOdds1,
    userodds3,
    userOdds1,
    userOdds3,
    userOdds4,
    userOdds1,
    userOdds6,
    userOdds7,
    userOdds8,
    userOdds9,
    userOdds10,
    userOdds9,
    userOdds8,
    userOdds9,
    userOdds7,
    userOdds6,
    userOdds7,
    userOdds9,
    userOdds10,
    userOdds9,
    userOdds10,
    userOdds7,
    userOdds8,
    userOdds9,
    userOdds10
    ];
const globalRegex = new RegExp('(\\w+) \@ (\\w+)');
const oddsRegex = new RegExp('^(\\d+\.\\d+)$', 'g');
let lastCol = null;
function makeAlertPage(cols, value) {
    var theElement = document.getElementById('odds');
    if(myTeam == "Bears") {
        document.getElementById("odds").innerHTML = 'Your favorite team '+myTeam+' are playing today. Bear Down!';
    } else if(myTeam == "Patriots") { 
        document.getElementById("odds").innerHTML = 'Your favorite team '+myTeam+' are playing today. Bet Now!';
    } else if(myTeam == "Cowboys") { 
        document.getElementById("odds").innerHTML = 'Sean Lee says that the '+myTeam+' are definitely going to win today - bet now!';
    } else if(myTeam == "Commanders") { 
        document.getElementById("odds").innerHTML = 'Casey is telling you to bet on the '+myTeam+' - they are a sure thing!';
    } else {
        document.getElementById("odds").innerHTML = 'Your favorite team '+myTeam+' are playing today.';
    }
    theElement.style.display = 'block';  
}

function changeTeam() {
    
    $('#myModal').modal({
        keyboard: false
    });
}

function fireDocReady() {
    setMyTeam(myTeam);
    fireOnReady();
}

function setMyTeam(teamName) {
    if(lastCol) {
        lastCol.style.background = 'white';
    }
    var theElement = document.getElementById('faveteam');
    if(theElement) {
        theElement.innerHTML = '<strong>Favorite team:</strong>&nbsp;'+teamName+'&nbsp;&nbsp;<button type="button" class="btn btn-info btn-med" data-toggle="modal" data-target="#myModal">Change</button>';
        theElement.style.display = 'block';  
    }
    var theElement = document.getElementById('demomode');
    if(theElement) {
        theElement.innerHTML = '<button type="button" class="btn btn-info btn-med" data-toggle="modal" data-target="#myModal2">Choose</button>';
        theElement.style.display = 'block';  
    }
}

function teamChoose(theTeam) {
    clearTimeout(rotate);
    myTeam = theTeam;
    //$('#myModal').modal('hide');
    fireDocReady();
    $('#myModal').hide();
    $('.modal-backdrop').hide();
    
}

function modeChoose(theMode) {
    clearTimeout(rotate);
    demoMode = theMode;
    //$('#myModal').modal('hide');
    fireDocReady();
    $('#myModal2').hide();
    $('.modal-backdrop').hide();
}

function fireOnReady() {
    var theElement = document.getElementById('odds');
    theElement.innerHTML = '';
    theElement.style.display = 'none';
    let thisOdd = odds[currIndex];
    if(thisOdd === null || thisOdd === undefined) {
        currIndex = 0;
        thisOdd = odds[currIndex];
    }
    // show the odds
    let hasOdds2 = false;
    let hasAdjust = false;
    for(let j = 0; j < thisOdd.length; j++) {
        const theOdd = thisOdd[j];
        var team1 = theOdd['home'];
        var team2 = theOdd['away'];
        let odds1 = theOdd['odds1'];
        let odds2 = theOdd['odds2'];
        let odds3 = theOdd['odds3'];
        
        let odds1adj = odds1;
        let odds3adj = odds3;
        let odds2adj = odds2;
        odds1 = (Math.round(odds1 * 100) / 100).toFixed(2);
        odds3 = (Math.round(odds3 * 100) / 100).toFixed(2);
        
        $('#match-'+j+'-sp').text(theOdd['sport']);
        $('#adj-match-'+j+'-sp').text(theOdd['sport']);

        $('#match-'+j+'-3').text(odds1);
        $('#match-'+j+'-5').text(odds3);
        $('#match-'+j+'-3').show();
        $('#match-'+j+'-5').show();
        $('#match-'+j+'-1').text(theOdd['home']);
        $('#match-'+j+'-2').text(theOdd['away']);
        $('#adj-match-'+j+'-1').text(theOdd['home']);
        $('#adj-match-'+j+'-2').text(theOdd['away']);
        $('#adj-match-'+j+'-3').show();
        $('#adj-match-'+j+'-5').show();
        if(odds2 !== null) {
            
            odds2 = (Math.round(odds2 * 100) / 100).toFixed(2);
            $('#match-'+j+'-4').text(odds2);
            $('#match-'+j+'-4').show();
            $('#match-hd-4').show();
            $('#adj-match-hd-4').show();
        } else {
            $('#match-hd-4').hide();
            $('#adj-match-hd-4').hide();
            $('#match-'+j+'-4').hide();
            $('#adj-match-'+j+'-4').hide();
        }
        if(team1 == myTeam) {
            hasAdjust = true;
            odds1adj += currBoost;
            setAdjustedOdds('#adj-match-'+j+'-3', odds1adj, odds1)
            animator('#adj-match-'+j+'-3');
        } else {
            $('#adj-match-'+j+'-3').text(odds1);
            
            $('#adj-match-'+j+'-3').css("background-color", "#cccccc");
            $('#adj-match-'+j+'-3').show();
        }
        if(team2 == myTeam) {
            hasAdjust = true;
            odds3adj += currBoost;
            setAdjustedOdds('#adj-match-'+j+'-5', odds3adj, odds3)
            //$('#adj-match-'+j+'-3').text(odds1adj);
            animator('#adj-match-'+j+'-5');
        } else {
            $('#adj-match-'+j+'-5').text(odds3);
            $('#adj-match-'+j+'-5').css("background-color", "#cccccc");
            $('#adj-match-'+j+'-3').show();
        }
        if(odds2 !== null && (team2 == myTeam || team1 == myTeam) ) {
            odds2adj += currBoost;
            hasOdds2 = true;
        }
        if(odds2 !== null) {
            $('#match-'+j+'-4').text(odds2);
            $('#adj-match-'+j+'-4').text(odds2);
            $('#adj-match-'+j+'-4').css("background-color", "#cccccc");
            //$('#adj-match-'+j+'-3').text(odds1adj);
            $('#adj-match-'+j+'-4').show();
        } else {
            $('#match-'+j+'-4').text("");
            $('#match-'+j+'-4').css("background-color", "#cccccc");
            $('#adj-match-'+j+'-4').text("");
            $('#adj-match-'+j+'-4').css("background-color", "#cccccc");
            $('#adj-match-'+j+'-4').hide();
        }
        if(odds2 !== null && (team2 == myTeam || team1 == myTeam) ) {
            setAdjustedOdds('#adj-match-'+j+'-4', odds2adj, odds2)
            animator('#adj-match-'+j+'-4');
        }
        if(demoMode == "banner") {
            $("#theBanner").show();
            $("#theBannerInfo").show();
        } else {
            $("#theBanner").hide();
            $("#theBannerInfo").hide();
        }
    }
    let demoText = "";
    const boost = (Math.round(currBoost * 100) / 100).toFixed(2);
    if(demoMode == "xbets" && hasAdjust && hasOdds2) {
        demoText = "In this example, we choose to show a boost on the X part of the bet also, to show that the user still thinks their team will not lose.";
    }
    else if(demoMode == "xbets" && hasAdjust) {
        demoText = "Currently, the simulation is showing a certain number of bets available at a certain boost price (currently set at "+boost+")";
    } else if(demoMode == "crossedout" && hasAdjust) {
        demoText = "Another approach is to show the old odds as a crossed out line, showing the user that they're being offered improved odds";
    } else if(demoMode == "banner" && hasAdjust) {
        demoText = "You may wish to visually show the user that they are valued, and so a banner may be appropriate to show them that they are being offered improved odds";
    } 

    if(demoText !== "") {
        $("#demoInfo").text(demoText);
        $("#demoInfo").show();
    } else {
        $("#demoInfo").hide();
    }
    rotate = setTimeout(function() {
        //Your stuff
        callback();
    }, 7500);
}

function callback() {
    currIndex++;
    if(currIndex > odds.length) {
        currIndex = 0;
    }
    fireDocReady();
}

function showModal(heading, infoText) {

}

function setAdjustedOdds(theElement, theOddsShown, oldOdds) {
    
    
    ///
    theOddsShown = (Math.round(theOddsShown * 100) / 100).toFixed(2);
    if(demoMode == "xbets") {
        if(Math.random() > 0.5) {
            numBetsLeft--;
            if(numBetsLeft < 1) {
                numBetsLeft =  Math.floor(Math.random() * 5)+2;
                currBoost = currBoost - 0.01;
                if(currBoost < 0.01) {
                    currBoost = 0.05;
                }
            }
        }
        let odds = theOddsShown;
        theOddsShown = '<div class="row">';
        theOddsShown += '<div class="row"><div class="betsLeft">'+numBetsLeft+' bets left at ';
        theOddsShown += odds+'</div>';
        //theOddsShown += '<div class="clear"/><div class="betsLeft">'+odds+'</div></div>';
        theOddsShown += '</div>';
    } else if(demoMode == "banner") {
        theOddsShown = "<strike>"+oldOdds+"</strike>&nbsp;"+theOddsShown;
    } else if(demoMode == "crossedout") {
        theOddsShown = "<strike>"+oldOdds+"</strike>&nbsp;"+theOddsShown;
    } else {
        theOddsShown = theOddsShown;
    }
    $(theElement).html(theOddsShown);
}

function animator(theName) {
    $(theName).animate({'background-color': "#F4BB44"}, 1200);
}


