// @ts-check

/**
 * Retourne le type JavaScript de la valeur.
 */
/**
 *
 * @param {*} value
 * @returns
 */
export function valueType(value) {
  // TODO
  return typeof value;
}

/**
 * Indique si la valeur est undefined.
 */
/**
 *
 * @param {*} value
 * @returns
 */
export function isUndefined(value) {
  // TODO
  if (value === undefined) return true;
  else return false;
}

/**
 * Indique si la valeur est null.
 */
/**
 *
 * @param {*} value
 * @returns
 */
export function isNull(value) {
  // TODO
  if (value === null) return true;
  else return false;
}

/**
 * Indique si une valeur est connue, c'est-à-dire
 * différente de undefined et de null.
 */
/**
 *
 * @param {*} value
 * @returns
 */
export function hasKnownValue(value) {
  // TODO
  if (value === null || value === undefined) return false;
  else return true;
}

/**
 * Compare l'énergie disponible à l'énergie minimale.
 * Les deux valeurs sont converties en nombres.
 */
/**
 *
 * @param {*} energy
 * @param {*} minimumEnergy
 * @returns
 */
export function hasEnoughEnergy(energy, minimumEnergy) {
  // TODO
  Number(energy);
  Number(minimumEnergy);
  if (energy >= minimumEnergy) return true;
  else return false;
}

/**
 * Compare strictement le nom de la zone attendue.
 */
/**
 *
 * @param {*} zone
 * @param {*} expectedZone
 * @returns
 */
export function isCorrectZone(zone, expectedZone) {
  // TODO
  if (zone === expectedZone) return true;
  else return false;
}
