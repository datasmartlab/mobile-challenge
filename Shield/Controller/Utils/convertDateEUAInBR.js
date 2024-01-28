export function ConvertDateEUAInBR(date) {
    var dataOriginal = new Date(date);

    if (isNaN(dataOriginal.getTime())) {
        return "Data inválida";
    }

    var dia = dataOriginal.getDate();
    var mes = dataOriginal.getMonth() + 1;
    var ano = dataOriginal.getFullYear();

    var stringFormatada = dia + "/" + mes + "/" + ano;

    return stringFormatada;
}
