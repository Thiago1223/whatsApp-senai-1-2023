'use strict'

import { preencherContatos } from "./app.js"

const contatos = await preencherContatos('1194457796')

const criarHeaderEsquerdo = () => {

    const headerEsquerdo = document.getElementById('header-esquerdo')
    headerEsquerdo.classList.add('header-esquerdo')

    const imgPerfil = document.createElement('img')
    imgPerfil.classList.add('img-perfil')
    imgPerfil.src = `./${contatos.img}`

    const navPerfil = document.createElement('nav')
    navPerfil.classList.add('nav-perfil')

    const userIcon = document.createElement('li')

    const user = document.createElement('i')
    user.classList.add('fa-solid', 'fa-users')

    const circleIcon = document.createElement('li')

    const circle = document.createElement('i')
    circle.classList.add('fas', 'fa-circle-notch')

    const messageIcon = document.createElement('li')

    const message = document.createElement('i')
    message.classList.add('fa-solid', 'fa-message')

    const verticalIcon = document.createElement('li')

    const vertical = document.createElement('i')
    vertical.classList.add('fa-solid', 'fa-ellipsis-vertical')

    headerEsquerdo.append(imgPerfil, navPerfil)
    
    navPerfil.append(userIcon, user, circleIcon, circle, messageIcon, message, verticalIcon, vertical)

    return headerEsquerdo

}

const criarCard = (contato, indice) => {

    const conversa = document.createElement('div')
    conversa.classList.add('container-conversas')

    conversa.addEventListener('click', async (event) => {
        var container = document.getElementById('container-chat')
        container.replaceChildren(criarHeader(indice), criarMensagem(indice), carregarBarraDeMensagem())
        barraDeRolagem()
    })

    const foto = document.createElement('img')
    foto.classList.add('img-chat')
    foto.src = `./${contato.image}`

    const informacao = document.createElement('div')
    informacao.classList.add('container-info')

    const nome = document.createElement('span')
    nome.textContent = contato.name

    const descricao = document.createElement('span')
    descricao.classList.add('info-conversa')
    descricao.textContent = contato.description

    conversa.append(foto, informacao, nome)

    informacao.append(nome, descricao)

    return conversa

}

const barraDeRolagem = () => {
    window.scroll(0, document.body.scrollHeight);
}

const criarHeader = (indice) => {

    const header = document.createElement('div')
    header.classList.add('header-direito');

    const containerHeader = document.createElement('div')
    containerHeader.classList.add('container-header');

    const imagemPerfil = document.createElement('img')
    imagemPerfil.classList.add('img-perfil');
    imagemPerfil.src = `./${contatos.contatos[indice].image}`

    const containerPerfil = document.createElement('div')
    containerPerfil.classList.add('container-perfil')

    const infoNome = document.createElement('span')
    infoNome.classList.add('info-nome')
    infoNome.textContent = contatos.contatos[indice].name

    const infoConversa = document.createElement('span')
    infoConversa.classList.add('info-conversa')
    infoConversa.textContent = 'online'

    header.append(containerHeader)

    containerHeader.append(imagemPerfil, containerPerfil)

    containerPerfil.append(infoNome, infoConversa)

    return header

}

const criarMensagem = (indice) => {

    const containerDireita = document.getElementById('container-chat')
    containerDireita.classList.remove('container-direito-none')
    containerDireita.classList.add('container-direito');

    const containerMensagensDireita = document.createElement('div')
    containerMensagensDireita.classList.add('container-mensagens-direita');

    contatos.contatos[indice].messages.forEach((mensagem) => {

        const caixaMensagensMinha = document.createElement('div')
        caixaMensagensMinha.classList.add('caixa-mensagens-minha')

        const caixaMensagensSua = document.createElement('div')
        caixaMensagensSua.classList.add('caixa-mensagens-sua')

        const msgMinha = document.createElement('p')
        msgMinha.classList.add('msg-minha')

        const horaMinha = document.createElement('span')
        horaMinha.classList.add('hora-minha')

        const msgSua = document.createElement('p')
        msgSua.classList.add('msg-sua')

        const horaSua = document.createElement('span')
        horaSua.classList.add('hora-sua')

        if (mensagem.sender == 'me') {

            msgMinha.classList.add('msg-minha')
            msgMinha.textContent = mensagem.content

            horaMinha.classList.add('hora-minha')
            horaMinha.textContent = mensagem.time

            containerDireita.appendChild(containerMensagensDireita)

            containerMensagensDireita.append(caixaMensagensMinha, caixaMensagensSua)

            caixaMensagensMinha.append(msgMinha, horaMinha)

        } else if (mensagem.sender == contatos.contatos[indice].name) {

            msgSua.classList.add('msg-sua')
            msgSua.textContent = mensagem.content

            horaSua.classList.add('hora-sua')
            horaSua.textContent = mensagem.time

            containerDireita.appendChild(containerMensagensDireita)

            containerMensagensDireita.append(caixaMensagensMinha, caixaMensagensSua)

            caixaMensagensSua.append(msgSua, horaSua)

        }
    })
    
    return containerMensagensDireita

}

const carregarContatos = () => {
    const container = document.getElementById('container-mensagens')
    const contatosMensagens = contatos.contatos.map(criarCard)
    container.replaceChildren(...contatosMensagens)
}

const carregarBarraDeMensagem = () => {
    const barraMensagem = document.getElementById('footer')
    barraMensagem.classList.remove('footer-direito-none')
    barraMensagem.classList.add('footer-direito')
    return footer
}

criarHeaderEsquerdo()
carregarContatos()