let rotate;
let adjustment = 0.05;
let numBetsLeft = Math.floor(Math.random() * 5)+2;
let currBoost = 0.02;
let currThreeBoost = 0.01;
let currIndex = 0;
let myTeam = "Bears";
let demoMode = "highlight";
let theMode = "Minimum";
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
            "odds2": 2.86,
            "odds3": 2.88
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
    userOdds6,
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
    userOdds9,
    userOdds10,
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
        theElement.innerHTML = '<strong>Adjustment Mode:</strong>&nbsp;'+theMode+'&nbsp;&nbsp;<button type="button" class="btn btn-info btn-med" data-toggle="modal" data-target="#myModal2">Choose</button>';
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
    if(thisOdd === null || thisOdd === undefined) {
        currIndex = 0;
        thisOdd = odds[currIndex];
    }
    // show the odds
    let hasOdds2 = false;
    let hasAdjust = false;
    
    for(let j = 0; j < thisOdd.length; j++) {
        const theOdd = thisOdd[j];
        
        //console.log("We have "+theOdd['away']+' @ '+theOdd['home']+' with 1='+theOdd['odds1']+' and 2='+theOdd['odds3']);
        var team1 = theOdd['home'];
        var team2 = theOdd['away'];
        //console.log('team1='+team1);
        let odds1 = theOdd['odds1'];
        let odds2 = theOdd['odds2'];
        let odds3 = theOdd['odds3'];

        let vig = 0;
        vig += (1/(odds1*1));
        if(odds2 !== null) {
            vig += (1/(odds2*1));
        }
        vig += (1/(odds3*1));

        vig *= 100;
        vig = (Math.round(vig * 100) / 100).toFixed(2);

        let vig2 = 0;
        vig2 += (1/odds1);
        if(odds2 !== null) {
            vig2 += (1/odds2);
        }
        vig2 += (1/odds3);

        vig2 *= 100;
        vig2 = (Math.round(vig * 100) / 100).toFixed(2);

        let odds1adj = odds1;
        let odds3adj = odds3;
        let odds2adj = odds2;
        odds1 = (Math.round(odds1 * 100) / 100).toFixed(2);
        odds3 = (Math.round(odds3 * 100) / 100).toFixed(2);
        
        $('#match-'+j+'-sp').text(theOdd['sport']);
        $('#adj-match-'+j+'-sp').text(theOdd['sport']);

        $('#match-'+j+'-3').text(odds1);
        $('#match-'+j+'-5').text(odds3);
        $('#match-'+j+'-6').text(vig);
        $('#adj-match-'+j+'-6').text(vig);
        $('#match-'+j+'-1').text(theOdd['home']);
        $('#match-'+j+'-2').text(theOdd['away']);
        $('#adj-match-'+j+'-1').text(theOdd['home']);
        $('#adj-match-'+j+'-2').text(theOdd['away']);
        if(odds2 !== null) {
            odds2 = (Math.round(odds2 * 100) / 100).toFixed(2); 
            $('#match-'+j+'-4').text(odds2);
            $('#match-hd-4').show();
            $('#adj-match-hd-4').show();
            $('#match-'+j+'-4').show();
            $('#adj-match-'+j+'-4').show();
        } else {
            $('#match-hd-4').hide();
            $('#adj-match-hd-4').hide();
            $('#match-'+j+'-4').hide();
            $('#adj-match-'+j+'-4').hide();
        }
        console.log("++ checking "+myTeam+" with "+team1+" and "+team2);
        if(team1 === myTeam || team2 === myTeam) {
            hasAdjust = true;
            newInfo = processAdjustment(odds1, odds2, odds3);
            console.dir(newInfo);
            odds1adj = newInfo['odd1'];
            if(odds2 !== null) {
                hasOdds2 = true;
                odds2adj = newInfo['odd2'];
            }
            
            odds3adj = newInfo['odd3'];
            //odds1adj += currBoost;
            setAdjustedOdds('#adj-match-'+j+'-3', odds1adj, odds1);
            
            setAdjustedOdds('#adj-match-'+j+'-5', odds3adj, odds3);
            //$('#adj-match-'+j+'-3').text(odds1adj);
            animator('#adj-match-'+j+'-3');
            animator('#adj-match-'+j+'-5');
            animator('#adj-match-'+j+'-6');
            if(odds2 != null) {
                setAdjustedOdds('#adj-match-'+j+'-4', odds2adj, odds2);
                animator('#adj-match-'+j+'-4');
            }
        } else {
            $('#adj-match-'+j+'-3').text(odds1);
            $('#adj-match-'+j+'-3').css("background-color", "#cccccc");
            $('#adj-match-'+j+'-5').text(odds3);
            $('#adj-match-'+j+'-5').css("background-color", "#cccccc");
            $('#adj-match-'+j+'-6').css("background-color", "#cccccc");
            if(odds2 != null) {
                $('#adj-match-'+j+'-4').text(odds2);
                $('#adj-match-'+j+'-4').css("background-color", "#cccccc");
                $('#adj-match-'+j+'-4').show();
            } else {
                $('#adj-match-'+j+'-4').hide();
            }
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
    if(hasAdjust && hasOdds2) {
        demoText = "We adjust all sides of the bet, maintaining the VIG or Margin.";
    } else if (hasAdjust) {
        demoText = "There's a corresponding adjustment on each side of the bet to maintain the VIG or Margin.";
    } else {
        demoText = "Since the favorite team isn't showing, we don't adjust any bets. The VIG or Margin is maintained.";
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

function schemeChoose(chosenMode) {
    clearTimeout(rotate);
    theMode = chosenMode;
    if(theMode == "Maximum") {
        currBoost = 0.08;
        currThreeBoost = 0.04;
    } else if(theMode == "Medium") {
        currBoost = 0.04;
        currThreeBoost = 0.02;
    } else {
        currBoost = 0.02;
        currThreeBoost = 0.01;
    }
    fireDocReady();
    $('#myModal2').hide();
    $('.modal-backdrop').hide();
}

function processAdjustment(odd1, odd2, odd3) {
    console.log("ENTER: odd1 is "+odd1+" odd2 is "+odd2+" and odd3 is "+odd3);
    if(odd2 === null) {
        // it's a 2 way bet
        const odd1prob = 1 / odd1;
        if(odd1prob >= 50) {
            odd1 = (odd1 * 1) + currThreeBoost;
            odd3 = (odd3 * 1) - currThreeBoost;
        } else {
            odd1 = (odd1 * 1) - currThreeBoost;
            odd3 = (odd3 * 1) + currThreeBoost;
        }
        console.log("odd1 is "+odd1+" odd2 is "+odd2+" and odd3 is "+odd3);
        odd1 = (Math.round(odd1 * 100) / 100).toFixed(2);
        odd3 = (Math.round(odd3 * 100) / 100).toFixed(2);
        console.log(" ** odd1 is "+odd1+" odd2 is "+odd2+" and odd3 is "+odd3);
    } else {
        // it's a 3 way
        const odd1prob = 1 / odd1;
        const odd2prob = 1 / odd2;
        const odd3prob = 1 / odd3;
        if (odd1prob >= odd2prob && odd1prob >= odd3prob) {
            odd1 = (odd1 * 1) - currThreeBoost;
            odd2 = (odd2 * 1)  + currBoost;
            odd3 = (odd3 * 1)  + currBoost;
        } else if (odd3prob >= odd2prob && odd3prob >= odd1prob) {
            odd3 = (odd3 * 1) - currThreeBoost;
            odd2 = (odd2 * 1)  + currBoost;
            odd1 = (odd1 * 1)  + currBoost;
        } else {
            odd2 = (odd2 * 1) - currThreeBoost;
            odd3 = (odd3 * 1)  + currBoost;
            odd1 = (odd1 * 1)  + currBoost;
        }
        console.log("odd1 is "+odd1+" odd2 is "+odd2+" and odd3 is "+odd3);
        odd1 = (Math.round(odd1 * 100) / 100).toFixed(2);
        odd2 = (Math.round(odd2 * 100) / 100).toFixed(2);
        odd3 = (Math.round(odd3 * 100) / 100).toFixed(2);
        console.log(" ** odd1 is "+odd1+" odd2 is "+odd2+" and odd3 is "+odd3);
    }
    return {
        "odd1": odd1,
        "odd2": odd2,
        "odd3": odd3
    };
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


