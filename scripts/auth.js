
const postUrl = "http://localhost:5000/login/";


document.getElementById("submit").addEventListener("click",e => {
    let id = document.getElementById("userid").value;
    let password = document.getElementById("password").value;
    let data = {
        user: id,
        password: password
    }
    axios.post(postUrl, data)
    .then( result => {
        if (result.data.success == true){
            window.location.href = "http://localhost:5500/new_emergencies/"
        }
        
    }).catch(err => console.log(err));
    e.preventDefault()

})

