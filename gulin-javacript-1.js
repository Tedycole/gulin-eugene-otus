
//Создаём объект в котором будем хранить все аргументы для функции

const argum = [];

// Создаём основную функцию с двумя вариантами. Сначала проверяем функцию
// на наличие аргументов. Если их нет то запускаем суммирование и
// после выполнения чистим объект, если они есть, то просто добавляем их в объект.

function AllSum(...arguments) {

  if (arguments.length === 0) {
    let sum = 0;

  for (let arg of argum) sum += arg

          argum.splice(0);
          return sum;

  } else {
    for (let arg of arguments) argum.push(arg);
//Вывод значений в консоль, для проверки записи в объект
    console.log(argum);
    console.log(arguments);
    };
 }
