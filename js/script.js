var data = new Date()
        var dia = data.getDay()
        var mes = data.getMonth()
        var ano = data.getFullYear()
        var hora = data.getHours()
        var minutos = data.getMinutes()

        var teste = document.getElementById('teste')
        teste.innerText = `${dia}/${mes} /${ano} - ${hora}:${minutos}`