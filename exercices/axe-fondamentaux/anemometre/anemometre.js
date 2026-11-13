// @ts-check

// TODO : déclarer la constante de conversion entre les km/h et les m/s

/**
 * Convertit une vitesse de km/h en m/s.
 */
/**
 *
 * @param {*} speedKmh
 * @returns
 */
export function kmhToMs(speedKmh) {
  // TODO
  return speedKmh / 3.6;
}

/**
 * Calcule l'écart entre une rafale et le vent moyen.
 */
/**
 *
 * @param {*} gustKmh
 * @param {*} averageKmh
 * @returns
 */
export function gustGap(gustKmh, averageKmh) {
  // TODO
  return gustKmh - averageKmh;
}

/**
 * Calcule la moyenne de trois mesures.
 */
/**
 *
 * @param {*} speed1
 * @param {*} speed2
 * @param {*} speed3
 * @returns
 */
export function averageOfThree(speed1, speed2, speed3) {
  // TODO
  return (speed1 + speed2 + speed3) / 3;
}

/**
 * Indique si le vent atteint au moins 75 km/h.
 */
export function isStormAlert(speedKmh) {
  // TODO
}

/**
 * Construit le bulletin météo d'une station.
 */
export function windReport(station, speedKmh) {
  // TODO
}
