import jsPDF from "jspdf";


/**
 * @description 
 * A folha padrão é A4, retrato usa como medida milimetros 
 * A4 H:297 W:210 a margem padrão é de 15mm
 */
export default async (Children) => {
    // Create a new jsPDF instance
    const pdfDoc = new jsPDF({ orientation: "portrait" });

    //addImage(imageData, format, x, y, width, height, alias, compression, rotation)
    // pdfDoc.addImage(Logo, "PNG", 10, 0, 30, 30);

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(18);
    pdfDoc.text("Escala de Desenvolvimento Motor", 105, 10, null, null, "center");
    pdfDoc.setFontSize(14);
    pdfDoc.text("(Rosa Neto, 1996).", 105, 16, null, null, "center");
    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);

    //cell(x, y, width, height, text, lineNumber, align)
    pdfDoc.cell(15, 20, 90, 7, " "); pdfDoc.text(`Nome: ${Children.Name}`, 16, 25);
    pdfDoc.cell(105, 20, 90, 7, " "); pdfDoc.text(`Sexo: ${Children.Sex}`, 106, 25);
    pdfDoc.cell(15, 27, 45, 7, " "); pdfDoc.text(`Exame: ${Children.Exam}`, 16, 32);
    pdfDoc.cell(60, 27, 65, 7, " "); pdfDoc.text(`Data de Nascimento: ${Children.Bday}`, 61, 32);
    pdfDoc.cell(125, 27, 70, 7, " "); pdfDoc.text(`Idade: ${Children.Age}`, 126, 32);
    pdfDoc.cell(15, 34, 180, 7, " "); pdfDoc.text(`Outros Dados: ${Children.OthersData}`, 16, 39);

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(16);
    pdfDoc.text("Resultados", 15, 50);
    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);
    
    /**Titulos */
    //cell(x, y, width, height, text, lineNumber, align)
    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.cell(15, 55, 80, 7, " "); pdfDoc.text("Teste | Anos", 55, 60, null, null, "center");
    pdfDoc.cell(15, 62, 80, 7, " "); pdfDoc.text("Motricidade Fina", 55, 67, null, null, "center");
    pdfDoc.cell(15, 69, 80, 7, " "); pdfDoc.text("Motricidade Global", 55, 74, null, null, "center");
    pdfDoc.cell(15, 76, 80, 7, " "); pdfDoc.text("Equilibrio", 55, 81, null, null, "center");
    pdfDoc.cell(15, 83, 80, 7, " "); pdfDoc.text("Esquema Corporal/Rapidez", 55, 88, null, null, "center");
    pdfDoc.cell(15, 90, 80, 7, " "); pdfDoc.text("Oraganização Espacial", 55, 95, null, null, "center");
    pdfDoc.cell(15, 97, 80, 7, " "); pdfDoc.text("Linguagem/Oraganização Temporal", 55, 103, null, null, "center");

    /**Cabeçalhos */
    //cell(x, y, width, height, text, lineNumber, align)
    pdfDoc.cell(95, 55, 10, 7, " "); pdfDoc.text("02", 98, 60);
    pdfDoc.cell(105, 55, 10, 7, " "); pdfDoc.text("03", 108, 60);
    pdfDoc.cell(115, 55, 10, 7, " "); pdfDoc.text("04", 118, 60);
    pdfDoc.cell(125, 55, 10, 7, " "); pdfDoc.text("05", 128, 60);
    pdfDoc.cell(135, 55, 10, 7, " "); pdfDoc.text("06", 138, 60);
    pdfDoc.cell(145, 55, 10, 7, " "); pdfDoc.text("07", 148, 60);
    pdfDoc.cell(155, 55, 10, 7, " "); pdfDoc.text("08", 158, 60);
    pdfDoc.cell(165, 55, 10, 7, " "); pdfDoc.text("09", 168, 60);
    pdfDoc.cell(175, 55, 10, 7, " "); pdfDoc.text("10", 178, 60);
    pdfDoc.cell(185, 55, 10, 7, " "); pdfDoc.text("11", 188, 60);
    pdfDoc.setFont("helvetica", "normal");

    /**Motricidade Fina */
    //cell(x, y, width, height, text, lineNumber, align)
    // console.log(Children.Result[2][0]);
    // console.log(Children.Result[2][1]);
    debugger
    pdfDoc.cell(95, 62, 10, 7, " "); pdfDoc.text(`${Children.Result[2][0]}`, 98, 67);
    pdfDoc.cell(105, 62, 10, 7, " "); pdfDoc.text(`${Children.Result[3][0]}`, 108, 67);
    pdfDoc.cell(115, 62, 10, 7, " "); pdfDoc.text(`${Children.Result[4][0]}`, 118, 67);
    pdfDoc.cell(125, 62, 10, 7, " "); pdfDoc.text(`${Children.Result[5][0]}`, 128, 67);
    pdfDoc.cell(135, 62, 10, 7, " "); pdfDoc.text(`${Children.Result[6][0]}`, 138, 67);
    pdfDoc.cell(145, 62, 10, 7, " "); pdfDoc.text(`${Children.Result[7][0]}`, 148, 67);
    pdfDoc.cell(155, 62, 10, 7, " "); pdfDoc.text(`${Children.Result[8][0]}`, 158, 67);
    pdfDoc.cell(165, 62, 10, 7, " "); pdfDoc.text(`${Children.Result[9][0]}`, 168, 67);
    pdfDoc.cell(175, 62, 10, 7, " "); pdfDoc.text(`${Children.Result[10][0]}`, 178, 67);
    pdfDoc.cell(185, 62, 10, 7, " "); pdfDoc.text(`${Children.Result[11][0]}`, 188, 67);

    /**Motricidade Global */
    //cell(x, y, width, height, text, lineNumber, align)
    pdfDoc.cell(95, 69, 10, 7, " "); pdfDoc.text(`${Children.Result[2][1]}`, 98, 74);
    pdfDoc.cell(105, 69, 10, 7, " "); pdfDoc.text(`${Children.Result[3][1]}`, 108, 74);
    pdfDoc.cell(115, 69, 10, 7, " "); pdfDoc.text(`${Children.Result[4][1]}`, 118, 74);
    pdfDoc.cell(125, 69, 10, 7, " "); pdfDoc.text(`${Children.Result[5][1]}`, 128, 74);
    pdfDoc.cell(135, 69, 10, 7, " "); pdfDoc.text(`${Children.Result[6][1]}`, 138, 74);
    pdfDoc.cell(145, 69, 10, 7, " "); pdfDoc.text(`${Children.Result[7][1]}`, 148, 74);
    pdfDoc.cell(155, 69, 10, 7, " "); pdfDoc.text(`${Children.Result[8][1]}`, 158, 74);
    pdfDoc.cell(165, 69, 10, 7, " "); pdfDoc.text(`${Children.Result[9][1]}`, 168, 74);
    pdfDoc.cell(175, 69, 10, 7, " "); pdfDoc.text(`${Children.Result[10][1]}`, 178, 74);
    pdfDoc.cell(185, 69, 10, 7, " "); pdfDoc.text(`${Children.Result[11][1]}`, 188, 74);

    /**Equilibrio */
    //cell(x, y, width, height, text, lineNumber, align)
    pdfDoc.cell(95, 76, 10, 7, " "); pdfDoc.text(`${Children.Result[2][2]}`, 98, 81);
    pdfDoc.cell(105, 76, 10, 7, " "); pdfDoc.text(`${Children.Result[3][2]}`, 108, 81);
    pdfDoc.cell(115, 76, 10, 7, " "); pdfDoc.text(`${Children.Result[4][2]}`, 118, 81);
    pdfDoc.cell(125, 76, 10, 7, " "); pdfDoc.text(`${Children.Result[5][2]}`, 128, 81);
    pdfDoc.cell(135, 76, 10, 7, " "); pdfDoc.text(`${Children.Result[6][2]}`, 138, 81);
    pdfDoc.cell(145, 76, 10, 7, " "); pdfDoc.text(`${Children.Result[7][2]}`, 148, 81);
    pdfDoc.cell(155, 76, 10, 7, " "); pdfDoc.text(`${Children.Result[8][2]}`, 158, 81);
    pdfDoc.cell(165, 76, 10, 7, " "); pdfDoc.text(`${Children.Result[9][2]}`, 168, 81);
    pdfDoc.cell(175, 76, 10, 7, " "); pdfDoc.text(`${Children.Result[10][2]}`, 178, 81);
    pdfDoc.cell(185, 76, 10, 7, " "); pdfDoc.text(`${Children.Result[11][2]}`, 188, 81);

    /**Esquema Corporal/Rapidez */
    //cell(x, y, width, height, text, lineNumber, align)
    pdfDoc.cell(95, 83, 10, 7, " "); pdfDoc.text(`${Children.Result[2][3]}`, 98, 88);
    pdfDoc.cell(105, 83, 10, 7, " "); pdfDoc.text(`${Children.Result[3][3]}`, 108, 88);
    pdfDoc.cell(115, 83, 10, 7, " "); pdfDoc.text(`${Children.Result[4][3]}`, 118, 88);
    pdfDoc.cell(125, 83, 10, 7, " "); pdfDoc.text(`${Children.Result[5][3]}`, 128, 88);
    pdfDoc.cell(135, 83, 10, 7, " "); pdfDoc.text(`${Children.Result[6][3]}`, 138, 88);
    pdfDoc.cell(145, 83, 10, 7, " "); pdfDoc.text(`${Children.Result[7][3]}`, 148, 88);
    pdfDoc.cell(155, 83, 10, 7, " "); pdfDoc.text(`${Children.Result[8][3]}`, 158, 88);
    pdfDoc.cell(165, 83, 10, 7, " "); pdfDoc.text(`${Children.Result[9][3]}`, 168, 88);
    pdfDoc.cell(175, 83, 10, 7, " "); pdfDoc.text(`${Children.Result[10][3]}`, 178, 88);
    pdfDoc.cell(185, 83, 10, 7, " "); pdfDoc.text(`${Children.Result[11][3]}`, 188, 88);

    /**Oraganização Espacial */
    //cell(x, y, width, height, text, lineNumber, align)
    pdfDoc.cell(95, 90, 10, 7, " "); pdfDoc.text(`${Children.Result[2][4]}`, 98, 95);
    pdfDoc.cell(105, 90, 10, 7, " "); pdfDoc.text(`${Children.Result[3][4]}`, 108, 95);
    pdfDoc.cell(115, 90, 10, 7, " "); pdfDoc.text(`${Children.Result[4][4]}`, 118, 95);
    pdfDoc.cell(125, 90, 10, 7, " "); pdfDoc.text(`${Children.Result[5][4]}`, 128, 95);
    pdfDoc.cell(135, 90, 10, 7, " "); pdfDoc.text(`${Children.Result[6][4]}`, 138, 95);
    pdfDoc.cell(145, 90, 10, 7, " "); pdfDoc.text(`${Children.Result[7][4]}`, 148, 95);
    pdfDoc.cell(155, 90, 10, 7, " "); pdfDoc.text(`${Children.Result[8][4]}`, 158, 95);
    pdfDoc.cell(165, 90, 10, 7, " "); pdfDoc.text(`${Children.Result[9][4]}`, 168, 95);
    pdfDoc.cell(175, 90, 10, 7, " "); pdfDoc.text(`${Children.Result[10][4]}`, 178, 95);
    pdfDoc.cell(185, 90, 10, 7, " "); pdfDoc.text(`${Children.Result[11][4]}`, 188, 95);

    /**Linguagem/Oraganização Temporal*/
    //cell(x, y, width, height, text, lineNumber, align)
    pdfDoc.cell(95, 97, 10, 7, " "); pdfDoc.text(`${Children.Result[2][5]}`, 98, 103);
    pdfDoc.cell(105, 97, 10, 7, " "); pdfDoc.text(`${Children.Result[3][5]}`, 108, 103);
    pdfDoc.cell(115, 97, 10, 7, " "); pdfDoc.text(`${Children.Result[4][5]}`, 118, 103);
    pdfDoc.cell(125, 97, 10, 7, " "); pdfDoc.text(`${Children.Result[5][5]}`, 128, 103);
    pdfDoc.cell(135, 97, 10, 7, " "); pdfDoc.text(`${Children.Result[6][5]}`, 138, 103);
    pdfDoc.cell(145, 97, 10, 7, " "); pdfDoc.text(`${Children.Result[7][5]}`, 148, 103);
    pdfDoc.cell(155, 97, 10, 7, " "); pdfDoc.text(`${Children.Result[8][5]}`, 158, 103);
    pdfDoc.cell(165, 97, 10, 7, " "); pdfDoc.text(`${Children.Result[9][5]}`, 168, 103);
    pdfDoc.cell(175, 97, 10, 7, " "); pdfDoc.text(`${Children.Result[10][5]}`, 178, 103);
    pdfDoc.cell(185, 97, 10, 7, " "); pdfDoc.text(`${Children.Result[11][5]}`, 188, 103);

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(16);
    pdfDoc.text("Resumo de Pontos", 15, 112);
    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);

    pdfDoc.cell(15, 115, 75, 7, " "); pdfDoc.text("Idade Motora Geral (IMG)", 16, 120);
    pdfDoc.cell(90, 115, 15, 7, " "); pdfDoc.text(`${Children.IMG}`, 93, 120);
    pdfDoc.cell(105, 115, 75, 7, " "); pdfDoc.text("Idade Positiva (I+)", 106, 120);
    pdfDoc.cell(180, 115, 15, 7, " "); pdfDoc.text(`${Children.IDP}`, 183, 120);

    pdfDoc.cell(15, 122, 75, 7, " "); pdfDoc.text("Idade Cronologica (IC)", 16, 127);
    pdfDoc.cell(90, 122, 15, 7, " "); pdfDoc.text(`${Children.IDC}`, 93, 127);
    pdfDoc.cell(105, 122, 75, 7, " "); pdfDoc.text("Idade Negativa (I-)", 106, 127);
    pdfDoc.cell(180, 122, 15, 7, " "); pdfDoc.text(`${Children.IDN}`, 183, 127);

    pdfDoc.cell(15, 129, 75, 7, " "); pdfDoc.text("Quociente Motor Geral (QMG)", 16, 134);
    pdfDoc.cell(90, 129, 15, 7, " "); pdfDoc.text(`${Children.QMG}`, 93, 134);
    pdfDoc.cell(105, 129, 90, 7, " "); pdfDoc.text(`Escala: ${Children.Scale}`, 106, 134);

    /**IMG QMG */
    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.cell(15, 140, 90, 7, " "); pdfDoc.text("Idade Motora (IM)", 60, 145, null, null, "center");
    pdfDoc.cell(105, 140, 90, 7, " "); pdfDoc.text("Quociente Motor (QM)", 150, 145, null, null, "center");
    pdfDoc.setFont("helvetica", "normal");

    /**IM */
    pdfDoc.cell(15, 147, 20, 7, " "); pdfDoc.text("IM - 1", 25, 152, null, null, "center");
    pdfDoc.cell(35, 147, 25, 7, " "); pdfDoc.text(`${Children.IMS[0]} Meses`, 36, 152); // IM1
    pdfDoc.cell(60, 147, 20, 7, " "); pdfDoc.text("IM - 4", 70, 152, null, null, "center");
    pdfDoc.cell(80, 147, 25, 7, " "); pdfDoc.text(`${Children.IMS[3]} Meses`, 81, 152); // IM4
    
    pdfDoc.cell(15, 154, 20, 7, " "); pdfDoc.text("IM - 2", 25, 159, null, null, "center");
    pdfDoc.cell(35, 154, 25, 7, " "); pdfDoc.text(`${Children.IMS[1]} Meses`, 36, 159); // IM2
    pdfDoc.cell(60, 154, 20, 7, " "); pdfDoc.text("IM - 5", 70, 159, null, null, "center");
    pdfDoc.cell(80, 154, 25, 7, " "); pdfDoc.text(`${Children.IMS[4]} Meses`, 81, 159); // IM5
    
    pdfDoc.cell(15, 161, 20, 7, " "); pdfDoc.text("IM - 3", 25, 166, null, null, "center");
    pdfDoc.cell(35, 161, 25, 7, " "); pdfDoc.text(`${Children.IMS[2]} Meses`, 36, 166); // IM3
    pdfDoc.cell(60, 161, 20, 7, " "); pdfDoc.text("IM - 6", 70, 166, null, null, "center");
    pdfDoc.cell(80, 161, 25, 7, " "); pdfDoc.text(`${Children.IMS[5]} Meses`, 81, 166); // IM6

    pdfDoc.cell(15, 168, 45, 7, " "); pdfDoc.text("Lateralidade", 37, 173, null, null, "center");
    pdfDoc.cell(60, 168, 45, 7, " "); pdfDoc.text(`${Children.Laterality}`, 82, 173, null, null, "center"); //Lateralidade
    pdfDoc.cell(15, 175, 45, 7, " "); pdfDoc.text("Ohos", 37, 180, null, null, "center");
    pdfDoc.cell(60, 175, 45, 7, " "); pdfDoc.text(`${Children.Eyes}`, 82, 180, null, null, "center"); //Ohos

    /**QM */
    pdfDoc.cell(105, 147, 20, 7, " "); pdfDoc.text("QM - 1", 115, 152, null, null, "center");
    pdfDoc.cell(125, 147, 25, 7, " "); pdfDoc.text(`${Children.QMS[0]} Meses`, 126, 152); // QM1
    pdfDoc.cell(150, 147, 20, 7, " "); pdfDoc.text("QM - 4", 160, 152, null, null, "center");
    pdfDoc.cell(170, 147, 25, 7, " "); pdfDoc.text(`${Children.QMS[3]} Meses`, 171, 152); // QM4
    
    pdfDoc.cell(105, 154, 20, 7, " "); pdfDoc.text("QM - 2", 115, 159, null, null, "center");
    pdfDoc.cell(125, 154, 25, 7, " "); pdfDoc.text(`${Children.QMS[1]} Meses`, 126, 159); // QM2
    pdfDoc.cell(150, 154, 20, 7, " "); pdfDoc.text("QM - 5", 160, 159, null, null, "center");
    pdfDoc.cell(170, 154, 25, 7, " "); pdfDoc.text(`${Children.QMS[4]} Meses`, 171, 159); // QM5
    
    pdfDoc.cell(105, 161, 20, 7, " "); pdfDoc.text("QM - 3", 115, 166, null, null, "center");
    pdfDoc.cell(125, 161, 25, 7, " "); pdfDoc.text(`${Children.QMS[2]} Meses`, 126, 166); // QM3
    pdfDoc.cell(150, 161, 20, 7, " "); pdfDoc.text("QM - 6", 160, 166, null, null, "center");
    pdfDoc.cell(170, 161, 25, 7, " "); pdfDoc.text(`${Children.QMS[5]} Meses`, 171, 166); // QM6

    pdfDoc.cell(105, 168, 45, 7, " "); pdfDoc.text("Mãos", 127, 173, null, null, "center");
    pdfDoc.cell(150, 168, 45, 7, " "); pdfDoc.text(`${Children.Hands}`, 172, 173, null, null, "center"); //Mãos
    pdfDoc.cell(105, 175, 45, 7, " "); pdfDoc.text("Pés", 127, 180, null, null, "center");
    pdfDoc.cell(150, 175, 45, 7, " "); pdfDoc.text(`${Children.Feet}`, 172, 180, null, null, "center"); //Pés

    /**Graficos */
    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.cell(15, 185, 90, 7, " "); pdfDoc.text("Perfil Motor", 60, 190, null, null, "center");
    pdfDoc.cell(105, 185, 90, 7, " "); pdfDoc.text("Historico", 150, 190, null, null, "center");
    pdfDoc.setFont("helvetica", "normal");

    pdfDoc.cell(15, 192, 90, 100, " ");
    pdfDoc.cell(105, 192, 90, 100, " ");

    // Save or display the PDF
    pdfDoc.save(`Avaliação EDMI - ${Children.Name}.pdf`);
};