// @ts-check

/**
 * Calcule la quantité d'énergie manquante.
 * @param {number} maxEnergy
 * @param {number} currentEnergy
 *
 * @returns {number}
 */
export function missingEnergy(maxEnergy, currentEnergy) {
  // TODO
  return maxEnergy - currentEnergy;
}

/**
 * Calcule le pourcentage d'énergie disponible.
 */
/**
 *
 * @param {*} maxEnergy
 * @param {*} currentEnergy
 * @returns
 */
export function energyPercentage(maxEnergy, currentEnergy) {
  // TODO
  return (currentEnergy / maxEnergy) * 100;
}

/**
 * Calcule l'énergie disponible après une recharge.
 */
/**
 *
 * @param {*} currentEnergy
 * @param {*} recharge
 * @returns
 */
export function energyAfterRecharge(currentEnergy, recharge) {
  // TODO
  return currentEnergy + recharge;
}

/**
 * Indique si le générateur possède au moins 500 unités d'énergie.
 */
/**
 *
 * @param {*} currentEnergy
 * @returns
 */
export function isGeneratorReady(currentEnergy) {
  // TODO
  let isTrue;
  if (currentEnergy >= 500) isTrue = true;
  else isTrue = false;
  return isTrue;
}

/**
 * Construit le message d'état du générateur.
 */
/**
 *
 * @param {*} name
 * @param {*} currentEnergy
 */
export function generatorStatus(name, currentEnergy) {
  // TODO
  return name + " possède " + currentEnergy + " unités d'énergie.";
}
