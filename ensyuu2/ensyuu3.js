document.write("問1<br>");

//円の面積(半径×半径×3.14)を計算する関数
function menseki(hankei){
    return(hankei * hankei) * 3.14;
}
function mensekiHyouji(hankei) {
    return "半径" + hankei + "センチのとき " + menseki(hankei) + "㎠ <br><br>";
}
document.write("半径5センチのとき ");
document.write(menseki(5) + "㎠ <br><br>");
document.write("半径7センチのとき ");
document.write(menseki(7) + "㎠ <br><br>");
document.write("半径10㎝のとき ");
document.write(menseki(10) + "㎠<br><br>");
document.write(mensekiHyouji(100));
document.write(mensekiHyouji(50));


document.write("問2<br>");

//合計金額(大人の人数×500円＋子供の人数×200円)
function total(otona, kodomo){
    return(otona * 500 + kodomo * 200);
}
function totalHyoji(otona, kodomo){
    return("大人" + otona +"人,子供" + kodomo + "人のとき" + total(otona, kodomo)+"円です。<br><br>");
}
document.write("Aグループ(大人2人、子供4人) ");
document.write(total(2, 4)+"円です。 <br><br>");
document.write("Bグループ(大人1人、子供5人) ");
document.write(total(1, 5)+"円です。 <br><br>");
document.write("Cグループ(大人3人、子供7人) ");
document.write(total(3, 7)+"円です。<br><br>");
document.write(totalHyoji(2,4));