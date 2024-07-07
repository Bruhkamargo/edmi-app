import moment from 'moment';

/** str_ddn == yyyy-mm-dd */
export default function Cal_DDN(str_ddn, apenas_idade = false) {
    // console.log(str_ddn);
    if (!str_ddn) {
        return "Data Inválida";
    }

    const ddn = moment(str_ddn);
    if (!ddn.isValid()) {
        return "Data Inválida";
    }

    const hoje = moment();
    const idade = moment.duration(hoje.diff(ddn));

    let IC;
    const anos = idade.years();
    const meses = idade.months();
    const dias = idade.days();

    if (apenas_idade) {
        return anos;
    } else {
        if (meses === 0 && dias === 0) {
            IC = anos * 12;
            return [`${anos} Anos`, IC];
        } else if (dias === 0) {
            IC = (anos * 12) + meses;
            return [`${anos} Anos e ${meses} Meses`, IC];
        } else if (meses === 0) {
            IC = (anos * 12) + (dias >= 15 ? 1 : 0);
            return [`${anos} Anos e ${dias} Dias`, IC];
        } else {
            IC = (anos * 12) + meses + (dias >= 15 ? 1 : 0);
            return [`${anos} Anos, ${meses} Meses e ${dias} Dias`, IC];
        }
    }
}
