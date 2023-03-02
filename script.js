//перше завдання
let age = 66;
if (age <= 17) {
  confirm("Do you study at school?");
} else if (age > 17 && age < 25) {
  confirm("Do you study at university?");
} else if (age >= 25 && age < 60) {
  confirm("Do you have a job?");
} else {
  confirm("What are you doing?");
}

//друге завдання.його я зробив трішки цікавішим на вигляд
let display = prompt("Write the css properties of the display");
switch (display) {
  case "block":
    alert("you are right - 'block' is the css property of display!");
    break;
  case "flex":
    alert("you are right - 'flex' is the css property of display!");
    break;
  case "grid":
    alert("you are right - 'grid' is the css property of display!");
    break;
  case "inline":
    alert("you are right - 'inline' is the css property of display");
    break;
  case "none":
    alert("you are right - 'none' is the css property of display");
    break;
  default:
    alert("Set 'display:inline-block;'");
}

//третє завдання
let number = prompt("Please enter the number");
while (isNaN(number) || number <= 0) {
  number = prompt("Your number is incorrect. Please enter correct number.");
}
alert(`${number} by 12 equals ${number * 12}`);

//четверте завдання
for (let i = 2; i < 50; i += 2) {
  console.log(i);
}
