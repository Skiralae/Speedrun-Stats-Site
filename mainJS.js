function buttonColorUpdater(which) {
    let btns = document.querySelectorAll('.optionButton');

    btns.forEach(btn => {
        btn.style.backgroundColor = 'darkgreen';
    });

    document.getElementById(which).style.backgroundColor = 'limegreen';

}




function recordBreaks() {
    buttonColorUpdater('o1');
    document.getElementById('title').textContent = "Games with the Most Frequently Broken Records";
}

function lowCompetition() {
    buttonColorUpdater('o2');
    document.getElementById('title').textContent = "Games with the Lowest Competition";
}

function delinedPopularity() {
    buttonColorUpdater('o3');
    document.getElementById('title').textContent = "Games with the Sharpest Drop in Popularity";
}

function suddenSpring() {
    buttonColorUpdater('o4');
    document.getElementById('title').textContent = "Games that Didn't Used to have All These People";
}

function mostRecords() {
    buttonColorUpdater('o5');
    document.getElementById('title').textContent = "Players with the Most Records (Currently)";
}

function mostRecordsBroken() {
    buttonColorUpdater('o6');
    document.getElementById('title').textContent = "Players with the Most Records (All Time)";
}

function mostLeaderboards() {
    buttonColorUpdater('o7');
    document.getElementById('title').textContent = "Players Currently on the Most Leaderboards";
}

function mostSubmitted() {
    buttonColorUpdater('o8');
    document.getElementById('title').textContent = "Players with the Most Submitted Runs";
}

function longestUnbroken() {
    buttonColorUpdater('o9');
    document.getElementById('title').textContent = "Records that have been Unbroken for the Longest";
}

function bad() {
    buttonColorUpdater('o10');
    document.getElementById('title').textContent = "Some of the most Hilariously Bad Runs";
}

function totalTime() {
    buttonColorUpdater('o11');
    document.getElementById('title').textContent = "Total Runtime within: [Category]";
}