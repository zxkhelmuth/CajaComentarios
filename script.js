const comentario = {
    persona : "@User.name",
    texto: "Lorem ipsum dolor"
}

const todosComentarios = []

let mcomentario = document.getElementById("publicacionComentarios");

function comentariosDeMierda(event){
    event.preventDefault()
    
    comentario.texto = document.getElementById("comments").value
    
    todosComentarios.push({
        quien: comentario.quien,
        text : comentario.texto
    })

    document.getElementById("comments").value = ""

        mcomentario.innerHTML += `
            <div class="comentario">
            <div class="cont-comentario">
                <span>@User-Name</span>
                <p>${comentario.texto}</p>
            </div>
        </div> `
}
a 