const UNIT = 4;

export const SIZES = {
  XS: UNIT,
  SM: UNIT * 2,
  MD: UNIT * 4,
  LG: UNIT * 6,
  XL: UNIT * 8,
  XXL: UNIT * 10,
};

export const makeSize = (num) => num * UNIT;