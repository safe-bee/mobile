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