let rotate;
let numBetsLeft = Math.floor(Math.random() * 5)+2;
let currBoost = 0.05;
let currIndex = 0;
let myTeam = "Bears";
let demoMode = "xbets";
let userOdds1 = [
        {
            "home": "Bears",
            "away": "Titans",
            "odds1": 1.44,
            "odds2": 2.85
        },
        {
            "home": "Vikings",
            "away": "Commanders",
            "odds1": 1.60,
            "odds2": 2.45
        },
        {
            "home": "Cowboys",
            "away": "Packers",
            "odds1": 1.80,
            "odds2": 2.05
        }
    ];
let userOdds2 = [
        {
            "home": "Bears",
            "away": "Titans",
            "odds1": 1.46,
            "odds2": 2.83
        },
        {
            "home": "Vikings",
            "away": "Commanders",
            "odds1": 1.59,
            "odds2": 2.46
        },
        {
            "home": "Cowboys",
            "away": "Packers",
            "odds1": 1.85,
            "odds2": 2.00
        }
    ];
    let userOdds3 = [
        {
            "home": "Bears",
            "away": "Titans",
            "odds1": 1.40,
            "odds2": 2.87
        },
        {
            "home": "Vikings",
            "away": "Commanders",
            "odds1": 1.56,
            "odds2": 2.49
        },
        {
            "home": "Cowboys",
            "away": "Packers",
            "odds1": 1.87,
            "odds2": 1.98
        }
    ]; 
    let userOdds4 = [
        {
            "home": "Bears",
            "away": "Titans",
            "odds1": 1.45,
            "odds2": 2.82
        },
        {
            "home": "Vikings",
            "away": "Commanders",
            "odds1": 1.57,
            "odds2": 2.48
        },
        {
            "home": "Cowboys",
            "away": "Packers",
            "odds1": 1.83,
            "odds2": 2.02
        }
    ]; 
    let userOdds5 = [
        {
            "home": "Bears",
            "away": "Titans",
            "odds1": 1.41,
            "odds2": 2.86
        },
        {
            "home": "Vikings",
            "away": "Commanders",
            "odds1": 1.53,
            "odds2": 2.52
        },
        {
            "home": "Cowboys",
            "away": "Packers",
            "odds1": 1.90,
            "odds2": 1.94
        }
    ];                   
const odds = [
    userOdds1,
    userOdds2,
    userOdds3,
    userOdds4,
    userOdds5,
    userOdds4,
    userOdds3,
    userOdds2,
    userOdds1,
    userOdds2,
    userOdds1,
    userOdds3,
    userOdds4,
    userOdds1,
    userOdds4,
    userOdds2,
    userOdds5,
    userOdds1,
    userOdds3,
    userOdds2,
    ];
console.dir(odds);
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

    console.log("before fireReady");
    fireOnReady();
    console.log("DocReady");
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
        theElement.innerHTML = '<button type="button" class="btn btn-info btn-med" data-toggle="modal" data-target="#myModal2">Change Demo Mode</button>';
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
    console.log("ON READY : "+myTeam);
    var theElement = document.getElementById('odds');
    theElement.innerHTML = '';
    theElement.style.display = 'none';
    let thisOdd = odds[currIndex];
    if(thisOdd === null) {
        currIndex = 0;
        thisOdd = odds[currIndex];
    }
    // show the odds
    for(let j = 0; j < thisOdd.length; j++) {
        const theOdd = thisOdd[j];
        console.log("We have "+theOdd['away']+' @ '+theOdd['home']+' with 1='+theOdd['odds1']+' and 2='+theOdd['odds2']);
        var team1 = $('#match-'+j+'-1').text();
        var team2 = $('#match-'+j+'-2').text();
        console.log('team1='+team1);
        let odds1 = theOdd['odds1'];
        let odds2 = theOdd['odds2'];
        let odds1adj = odds1;
        let odds2adj = odds2;
        odds1 = (Math.round(odds1 * 100) / 100).toFixed(2);
        odds2 = (Math.round(odds2 * 100) / 100).toFixed(2);
        $('#match-'+j+'-3').text(odds1);
        $('#match-'+j+'-4').text(odds2);
        if(team1 == myTeam) {
            odds1adj += currBoost;
            setAdjustedOdds('#adj-match-'+j+'-3', odds1adj, odds1)
            //$('#adj-match-'+j+'-3').text(odds1adj);
            animator('#adj-match-'+j+'-3');
        } else {
            $('#adj-match-'+j+'-3').text(odds1);
            $('#adj-match-'+j+'-3').css("background-color", "#cccccc");
        }
        if(team2 == myTeam) {
            odds2adj += currBoost;
            setAdjustedOdds('#adj-match-'+j+'-4', odds2adj, odds2)
            //$('#adj-match-'+j+'-3').text(odds1adj);
            animator('#adj-match-'+j+'-4');
        } else {
            $('#adj-match-'+j+'-4').text(odds2);
            $('#adj-match-'+j+'-4').css("background-color", "#cccccc");
        }
        if(demoMode == "banner") {
            $("#theBanner").show();
        } else {
            $("#theBanner").hide();
        }
    }
    let demoText = "";
    if(demoMode == "xbets") {
        demoText = "Currently, the simulation is showing a certain number of bets available at a certain boost price (currently set at "+currBoost+")";
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
    }, 2500);
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
        if(Math.random() > 0.667) {
            numBetsLeft--;
            if(numBetsLeft < 1) {
                numBetsLeft =  Math.floor(Math.random() * 5)+2;
                currBoost = currBoost - 0.01;
                if(currBoost < 0.01) {
                    currBoost = 0.05;
                }
            }
        }
        theOddsShown = numBetsLeft+" bets left at "+theOddsShown;
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


