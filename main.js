const articleKey = (event) => {
    document.querySelector("#art1").innerHTML = event.target.value
    document.querySelector("#art2").innerHTML = event.target.value
}

document.getElementById("message").addEventListener("keyup", articleKey)

