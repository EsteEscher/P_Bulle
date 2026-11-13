// @ts-check

/**
 * Convertit un relevé en nombre.
 */
/**
 *
 * @param {*} value
 * @returns {Number}
 */
export function readRainfall(value) {
  // TODO
  return Number(value);
}

/**
 * Additionne deux relevés après les avoir convertis en nombres.
 */
/**
 *
 * @param {*} morning
 * @param {*} evening
 * @returns {Number}
 */
export function totalRainfall(morning, evening) {
  // TODO
  return Number(morning) + Number(evening);
}

/**
 * Indique si l'heure correspond à un relevé automatique (toutes les 3 heures).
 */
/**
 *
 * @param {*} hour
 * @returns {Boolean}
 */
export function isScheduledHour(hour) {
  // TODO
  return Boolean(hour % 3 == 0);
}

/**
 * Indique si la conversion du relevé produit NaN.
 */
/**
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isFaultyReading(value) {
  // TODO
  return isNaN(value);
}

/**
 * Compare strictement deux relevés après conversion en nombres.
 */
export function isConfirmedReading(manual, automatic) {
  // TODO
  return Boolean(Number(manual) == Number(automatic));
}
