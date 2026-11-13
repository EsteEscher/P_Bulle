// @ts-check

import { isNull, isUndefined } from "../diagnostic-noyau/diagnostic";

/**
 * Retourne le type JavaScript de la donnée.
 */
/**
 *
 * @param {*} value
 * @returns {*}
 */
export function dataType(value) {
  // TODO
  return typeof value;
}

/**
 * Indique si le comptage vaut undefined.
 */
/**
 *
 * @param {*} count
 * @returns {Boolean}
 */
export function isNotTransmitted(count) {
  // TODO
  return Boolean(isUndefined(count));
}

/**
 * Indique si le comptage vaut null.
 */
/**
 *
 * @param {*} count
 * @returns
 */
export function isOffline(count) {
  // TODO
  return Boolean(isNull(count));
}

/**
 * Indique si un comptage est disponible, c'est-à-dire
 * différent de undefined et de null.
 */
/**
 *
 * @param {*} count
 * @returns {Boolean}
 */
export function hasBirdCount(count) {
  // TODO
  return Boolean(!isNull(count) && !isUndefined(count));
}

/**
 * Additionne les deux comptages.
 * Un comptage indisponible compte pour 0.
 */
/**
 *
 * @param {*} northCount
 * @param {*} southCount
 * @returns {Number}
 */
export function totalBirds(northCount, southCount) {
  // TODO
  if (isNull(northCount) || isUndefined(northCount)) northCount = 0;
  if (isNull(southCount) || isUndefined(southCount)) southCount = 0;
  return northCount + southCount;
}

/**
 * Indique si la hauteur est de type number et n'est pas NaN.
 */
/**
 *
 * @param {*} height
 * @returns {Boolean}
 */
export function isValidWaveHeight(height) {
  // TODO
  return Boolean(height === Number(height) && !isNaN(height));
}
