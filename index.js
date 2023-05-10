// Вивести на сторінку в один рядок через кому числа від 10 до 20.
numbersFrom10To20 = '';
ten = 10;

while (ten <= 20) {
    numbersFrom10To20 += ten + ', ';
    ten++;
}
console.log(numbersFrom10To20);

// Вивести квадрати чисел від 10 до 20.
squaresFrom10To20 = 10;

while (squaresFrom10To20 <= 20) {

    result = squaresFrom10To20 * squaresFrom10To20;
    squaresFrom10To20++;
    console.log(result);
}

// Вивести таблицю множення на 7.
number = 1;
result = '';

do {
    multiplication = number * 7;
    result = `7 * ${number} = ${multiplication} `;
    number++;
    console.log(result);
} while (number <= 10);

// Знайти суму всіх цілих чисел від 1 до 15.
sumOfNumbers = 0;
numbers = 0;

while (numbers <= 15) {
    sumOfNumbers += numbers;
    numbers++;
}
console.log(sumOfNumbers);

// Знайти добуток усіх цілих чисел від 15 до 35.
multOfNumbers = 15;
i = 16;

while (i <= 35) {
    multOfNumbers *= i;
    i++;
}
console.log(multOfNumbers);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
resultSum = 0;
i = 1;

while (i <= 500) {
    resultSum += i;
    i++;
}
avaerage = resultSum / 500;
console.log(avaerage);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
numbersFrom30 = 30;
sumOfEvenNumbers = 0;

while (numbersFrom30 <= 80) {
    if (numbersFrom30 % 2 === 0) {
        sumOfEvenNumbers += numbersFrom30;
    }
    numbersFrom30++;
}
console.log(sumOfEvenNumbers);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
numbersFrom100 = 100;

while (numbersFrom100 <= 200) {
    if (numbersFrom100 % 3 === 0) {
        console.log(numbersFrom100);
    }
    numbersFrom100++;
}

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
naturalNumber = prompt('Введите натуральное число:');

i = 1;

while (i <= naturalNumber) {
    if (naturalNumber % i === 0) {
        console.log(i);
    }
    i++;
}

// Визначити кількість його парних дільників.
i = 1;
amountOfNumbers = 0;

while (i <= naturalNumber) {
    if (naturalNumber % i === 0 && i % 2 === 0) {
        amountOfNumbers++;
    }
    i++;
}
console.log(`Парних дільників: ${amountOfNumbers}`);

// Знайти суму його парних дільників.
i = 1;
sumOfEvenNumbers = 0;

while (i <= naturalNumber) {
    if (naturalNumber % i === 0 && i % 2 === 0) {
        sumOfEvenNumbers += i;
    }
    i++;
}
console.log(`Сума парних дільників: ${sumOfEvenNumbers}`);

// Надрукувати повну таблицю множення від 1 до 10.
i = 1;
result = '';

while (i <= 10) {
  j = 0;

  while (j <= 10) {
    result = i * j;
    console.log(`${i} * ${j} = ${result}`);
    j++;
  }
  i++;
}