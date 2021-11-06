export default function getUsoPromedio(usos){
    let usoProm = 0
    
    usos.forEach(value => {
        usoProm += value.uso
    });
    usoProm = usoProm / usos.length
    return usoProm
}