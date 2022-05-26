// Write any JS related codes for new Emergencies here

document.getElementById("submit").addEventListener("click", e => {
    let name = document.getElementById("caller_name").value;

    alert(`New Ambulance emergency has been sent to Mr/Ms. ${name}.`);
})