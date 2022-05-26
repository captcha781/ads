let pairs = window.location.search.slice(1).split("&")

var result = {};
pairs.forEach(function(pair) {
    pair = pair.split('=');
    result[pair[0]] = decodeURIComponent(pair[1] || '');
});

let vals = JSON.parse(JSON.stringify(result));

let keys = Object.keys(vals);

keys.forEach(key => {
    document.getElementById(key).value = vals[key];
})

document.getElementById("namer").innerText = vals.caller_name