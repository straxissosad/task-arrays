/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let arrayOfNumbers = data.split(',');
    arrayOfNumbers.sort(function (a, b) {
        return a - b;
    });
    return arrayOfNumbers.join(',');
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    for (let i = 0; i < data.length; i += 1) {
        if (data[i] > 100) delete data[i];
    }
    data = data.filter(function (el) {
        return el != null;
    });
    return data;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let array = [];
    for (let i = 0; i < 5; i += 1) {
        array.push(array1[i], array2[i]);
    }
    return array;
}
