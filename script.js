document.getElementById('analyzeBtn').addEventListener('click', function() {
    const followingRaw = document.getElementById('followingInput').value;
    const followersRaw = document.getElementById('followersInput').value;

    function parseList(text) {
        return text.split('\n')
                   .map(name => name.trim())
                   .filter(name => {
                       const isNotEmpty = name !== "";
                       const hasNoSpace = !name.includes(" ");
                       const isNotJustDot = name !== ".";
                       
                       return isNotEmpty && hasNoSpace && isNotJustDot;
                   });
    }

    const following = parseList(followingRaw);
    const followers = parseList(followersRaw);

    const unfollowers = following.filter(user => !followers.includes(user));

    displayResults(unfollowers);
});

function displayResults(list) {
    const resultArea = document.getElementById('resultArea');
    const listElement = document.getElementById('unfollowerList');
    const countElement = document.getElementById('unfollowerCount');

    listElement.innerHTML = "";
    resultArea.classList.remove('hidden');
    countElement.innerText = list.length;

    if(list.length === 0) {
        listElement.innerHTML = "<li>Harika! Herkes seni geri takip ediyor.</li>";
        return;
    }

    list.forEach(user => {
        const li = document.createElement('li');
        li.style.padding = "10px";
        li.style.borderBottom = "1px solid #eee";
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        
        li.innerHTML = `<strong>@${user}</strong> <span style="color:#ff4d4d; font-size: 0.9em;">Seni Takip Etmiyor</span>`;
        listElement.appendChild(li);
    });
}