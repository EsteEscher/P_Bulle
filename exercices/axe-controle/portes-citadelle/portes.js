// @ts-check

/**
 * Retourne le message d'accès correspondant au niveau.
 */
/**
 *
 * @param {*} level
 * @returns {*}
 */
export function accessMessage(level) {
  // TODO
  if (level >= 5) return "Accès autorisé";
  else return "Accès refusé";
}

/**
 * Retourne l'état textuel d'une porte.
 */
/**
 *
 * @param {*} isOpen
 * @returns {*}
 */
export function doorStatus(isOpen) {
  // TODO
  if (isOpen) return "Ouverte";
  else return "Fermée";
}

/**
 * Retourne le nom de la zone correspondant à un code.
 */
/**
 *
 * @param {*} code
 * @returns {*}
 */
export function zoneName(code) {
  // TODO
  switch (code) {
    case "N": {
      return "Les Fondations";
      break;
    }
    case "E": {
      return "Les Archives";
      break;
    }
    case "SE": {
      return "La Forge";
      break;
    }
    case "SO": {
      return "La Citadelle";
      break;
    }
    case "O": {
      return "La Faille";
      break;
    }
    default: {
      return "Zone inconnue";
      break;
    }
  }
}

/**
 * Détermine le niveau d'alerte selon l'énergie disponible.
 */
/**
 *
 * @param {*} energy
 * @returns {*}
 */
export function alertLevel(energy) {
  // TODO
  if (energy < 20) return "CRITIQUE";
  if (energy < 50 && energy >= 20) return "FAIBLE";
  if (energy < 80 && energy >= 50) return "STABLE";
  if (energy >= 80) return "OPTIMAL";
}
