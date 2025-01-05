const $loadingBtn = document.querySelector(".enviarOrcamento")
$loadingBtn.addEventListener("click", () => {
    $loadingBtn.classList.toggle("loading")
})

/*
const addloading = () => {
    const button = document.querySelector('#enviarOrcamento');
    button.innerHTML = '<img src="/img/loading-img.png" alt="" class="loading"></img>';
}
*/

//addloading();

const handleSubmit = (event) => {
    event.preventDefault(); //impede redirecionar para outra página

    const chararcterName = document.querySelector("input[name=characterName]").value;
    const lastName = document.querySelector("input[name=lastName]").value;
    const phoneNumber = document.querySelector("input[name=phoneNumber]").value;
    const email = document.querySelector("input[name=email]").value;
    const characterService = document.querySelector("input[name=characterService]").value;
    const characterImage = document.querySelector("input[name=characterImage]").value;
    const charService = document.querySelector("input[name=charService]").value;


    fetch("https://sheetdb.io/api/v1/7u6fdvz2besiu", {

        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: { chararcterName, lastName, phoneNumber, email, characterService, characterImage, charService }
    });

    /*
    const charName = event.target["character-name"].value //se fosse nome sem traço poderia ser EventTarget.character.value
    const lastName = event.target["last-name"].value
    const phoneNumber = event.target["phone-number"].value
    const email = event.target.email.value
    const charService = event.target["character-service"].value
    

    const data = {
        charName,
        lastName,
        phoneNumber,
        email,
        charService
    }

    console.log(data)
    */
}

document.querySelector(".formularioOrcamento").addEventListener("submit", handleSubmit);

