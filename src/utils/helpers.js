import {
    isNil,
    isEmpty,
    compose,
    pipe,
    equals,
    either,
    trim,
    type,
    cond,
    T,
  } from 'ramda';

export const containsNoValue = cond([
    [pipe(type, equals('Array')), either(isNil, isEmpty)],
    [pipe(type, equals('Object')), either(isNil, isEmpty)],
    [pipe(type, equals('String')), either(isNil, compose(isEmpty, trim))],
    [T, isNil],
]);
  

export const arrayToObject = (arr, propNamePosition) =>
  arr.reduce((obj, val) => {
    const newObj = obj;

    if (propNamePosition) newObj[val[propNamePosition]] = val;
    else newObj[val] = val;

    return newObj;
}, {});


export const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // Asegúrate de que el día y el mes tengan dos dígitos
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}/${formattedMonth}/${year}`;
}


export const formatForPendingTasks = (inputDate) => {
  const fecha = new Date(inputDate);

  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const año = fecha.getFullYear();

  const diaFormateado = dia < 10 ? `0${dia}` : dia;
  const mesFormateado = mes < 10 ? `0${mes}` : mes; 
  const añoFormateado = año.toString().slice(2);

  const resultado = `${diaFormateado}-${mesFormateado}-${añoFormateado}`;

  return resultado;
}