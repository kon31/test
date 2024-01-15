function totalPrice(fruitprice, tax=1.08, haiso=350){
    return(fruitprice*tax)+haiso;
}

document.write(totalPrice(300)+"<br>");
document.write(totalPrice(450)+"<br>");
document.write(totalPrice(400)+"<br>");
document.write(totalPrice(350)+"<br>");