'use strict'

export const preencherContatos = async(telefone) => {
    const url = `http://localhost:8080/v1/whatsapp/perfil/telefone/${telefone}`
    const response = await fetch(url)
    const contato = await response.json()

    const urlImg = `http://localhost:8080/v1/whatsapp/perfil/imagem/telefone/${telefone}`
    const responseImg = await fetch(urlImg)
    const imagens = await responseImg.json()

    return { 
        contatos: contato,
        img: imagens
    }

}