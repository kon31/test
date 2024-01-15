//問1
document.write("問1<br>");
for(var star1 = 1; star1 <= 5; star1++){
    document.write("★");
}
document.write("<br><br>");

//問2
document.write("問2<br>");
for(var count = 1 ; count <= 2; count++){
    for(var star2 = 1; star2 <= 3; star2++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

//問3
document.write("問3<br>");
for(var count = 1; count <= 2; count++){
    for(var star3 = 1; star3 <= 5; star3++){
        document.write("☆");
    }
    document.write("<br>");
}
document.write("<br>");

//問4
document.write("問4<br>");
for(var count = 1; count <= 4; count++){
    for(var star4 = 1; star4 <= 5; star4++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

//問5
document.write("問5<br>");
for(var count = 1; count <= 4; count++){
    for(var star5 = 1; star5 <= 3; star5++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

//問6
document.write("問6<br>");
for(var count = 1; count <= 3; count++){
    for(var star6 = 1; star6 <= 3; star6++){
        if(star6 % 2 != 0){
            document.write("★"); //star6が奇数のときに★を表示
        } else{
            document.write("☆"); //star6が偶数のときに☆を表示
        }
    }
    document.write("<br>");
}
document.write("<br>");

//問7
document.write("問7<br>");
for(var count= 1; count <= 4; count++){
    for(var star7 = 1; star7 <= 5; star7++){
        if(star7 % 2 == 1){
            document.write("★");
        } else{
            document.write("☆");
        }
    }
    document.write("<br>");
}
document.write("<br>");

//問8
document.write("問8<br>");
for(var count = 1; count <= 5; count++){
    for(var star8 = 1; star8 <= count; star8++){ //countの数だけ★を表示する
        document.write("★");
    }
    document.write("<br>");
}
