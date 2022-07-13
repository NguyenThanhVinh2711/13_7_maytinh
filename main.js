//function clickButton1() {
    // B1: lấy dữ liệu trong thẻ input
   // let value1 = document.getElementById("view").value;
    // B2: Cộng dữ liệu đã lấy với chuỗi tương  ứng + 1
    //value1 = value1+"1";
    // B3: Gán lại dữ liệu vào ô input
   // document.getElementById("view").value = value1;
//}
//function clickButton2() {
    // B1: lấy dữ liệu trong thẻ input
   // let value1 = document.getElementById("view").value;
    // B2: Cộng dữ liệu đã lấy với chuỗi tương  ứng + 1
    //value1 = value1+"2";
    // B3: Gán lại dữ liệu vào ô input
   // document.getElementById("view").value = value1;
//}
//function clickButton(number){
    // // B1: lấy dữ liệu trong thẻ input
    // let value1 = document.getElementById("view").value;
    // // B2: Cộng dữ liệu đã lấy với chuỗi tương  ứng + 1
    // value1 = value1+number;
    // // B3: Gán lại dữ liệu vào ô input
    // document.getElementById("view").value = value1;
   // document.getElementById("view").value += number;
//}

let view = document.getElementById("view");
function inputValue(value) {
    view.value += value;
}
function result() {
    let result = eval(view.value);
    view.value = result;
}
function xoa() {
    view.value="";
}