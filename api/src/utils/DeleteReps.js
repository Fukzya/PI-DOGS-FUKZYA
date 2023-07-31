// Función para eliminar repeticiones en el objeto
function deleteReps(array) {
  const todasLasPalabras = array.join(", ").split(", ");
  const palabrasUnicas = Array.from(new Set(todasLasPalabras));
  return palabrasUnicas.join(", ");
}

module.exports = { deleteReps };
