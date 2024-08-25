function copyAddress() {
    var copyText = document.getElementById("token-address");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Token address copied: " + copyText.value);
}

// Sample list of token holders
var tokenHolders = [
    { name: "Holder 1", amount: 150 },
    { name: "Holder 2", amount: 200 },
    { name: "Holder 3", amount: 250 },
    // Add more holders here
];

function populateHoldersList() {
    var holdersList = document.getElementById("holders-list");
    tokenHolders.forEach(function(holder) {
        var listItem = document.createElement("li");
        listItem.innerHTML = "<span>" + holder.name + "</span><span>" + holder.amount + " AUR</span>";
        holdersList.appendChild(listItem);
    });
}

// Populate the list on page load
window.onload = populateHoldersList;
