/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/
function getPromise<T, U>(): Promise<[T, U]> {
  return new Promise<[T, U]>((resolve) => {
    resolve(['Text', 50] as [T, U]);
  });
}

getPromise<string, number>()
  .then((data) => {
    console.log(data);
  });

export {};