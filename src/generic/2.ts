/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
}

function compare<T extends AllType>(top: T, bottom: T): Pick<AllType, 'name' | 'color' | 'position' | 'weight'> {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const obj1: AllType = { name: 'Object 1', position: 1, color: 'red', weight: 10 };
const obj2: AllType = { name: 'Object 2', position: 2, color: 'blue', weight: 20 };

const result2 = compare(obj1, obj2);
console.log(result2);