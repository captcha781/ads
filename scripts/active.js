// This snippet fixes the background color of the corresponding row

let opt = document.getElementById("sts");
if (opt.innerHTML == "Delivered"){
    opt.parentElement.classList.add("bg-success")
}
else if (opt.innerHTML == "Open"){
    opt.parentElement.classList.add("bg-danger")
}
else if (opt.innerHTML == "Active"){
    opt.parentElement.classList.add("bg-warning")
}

// Use the js map function map the data retrived from server to populate the table.