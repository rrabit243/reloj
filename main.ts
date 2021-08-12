let segundos = 0
let minutos = 0
let horas = 0
basic.forever(function () {
    if (segundos < 59) {
        segundos += 1
        basic.showNumber(segundos)
        if (segundos == 59) {
            minutos = 0
            minutos += 1
            basic.showNumber(minutos)
            if (minutos == 59) {
                horas = 0
                horas += 1
            }
        }
    }
})
