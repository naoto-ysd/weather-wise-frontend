let calendar_name = prompt("カレンダー名を入力してください");
let calendar_name_form = document.getElementById("calendar_name");
calendar_name_form.value = calendar_name;

console.log(calendar_name_form.value);


let num = [5,3,2,6,7,1];

for(i = 0; i < num.length; i ++){
  if(num[i] % 3 == 0 && num[i] % 5 == 0){
    console.log("fizzbuzz");
  }elsif(num[i] % 3 == 0){
    console.log("fizz");
  }elsif(num[i] % 5 == 0){
    console.log("buzz");
  }
}


