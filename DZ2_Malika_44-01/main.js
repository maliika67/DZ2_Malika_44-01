//1

const arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
    const a = String(arr[i])[0];
    if (a === '1' || a === '2' || a === '5') {
        console.log(arr[i]);
    }
}
//2
const numbers = [];

for (let i = 20; i >= 0; i--) {
    numbers.push(i);
}

while (numbers.length > 0) {
    console.log(numbers.pop());
}

//3
const svetafor = {
    'красный': 'стоп',
    'жёлтый': 'готовься',
    'зелёный': 'иди'
};


const color = prompt("Введите цвет светофора: красный, жёлтый или зелёный");


if (color === 'красный') {
    alert(svetafor['красный']);
} else if (color === 'жёлтый') {
    alert(svetafor['жёлтый']);
} else if (color === 'зелёный') {
    alert(svetafor['зелёный']);
} else {
    alert("Пожалуйста, вводите только цвета: красный, жёлтый или зелёный");
}