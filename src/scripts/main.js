AOS.init();

const dataDoEvento = new Date("Mar 6, 2024 14:30:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {

    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);

    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);

    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);

    const secundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `começa em ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${secundosAteOEvento}s !!!`;

    if( distanciaAteOEvento < 0 ){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'ja foi encerrado!!';
    }

}, 1000);