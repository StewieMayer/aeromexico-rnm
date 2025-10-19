/**
 * Script de Node.js para obtener datos de la API amTesting
 * y guardarlos en db.json para uso con json-server.
 */
import { getCharacters } from "rickmortyapi";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = path.join(__dirname, "db.json");

const INITIAL_DB_STRUCTURE = {
  characters: [],
};

/**
 * getCharacters solo regresa la primera página de todos los personajes
 * Para obtener todos los personajes se puede modificar para obtener el valor de pages
 * y crear un iterador asyncrono que use getCharacters({ page }) para obtener los datos completos
 * y los inserte en un array characters.
 * Al ser una prueba técnica, usaremos solo los primeros 20 personajes.
 */
async function fetchAndSave() {
  console.log("--- Iniciando extracción de datos de amTesting... ---");

  try {
    const response = await getCharacters();

    if (response.status !== 200 || !response.data) {
      console.error(
        `Error en la respuesta de la API. Estado: ${response.status}`
      );
      return;
    }

    const newDbData = {
      ...INITIAL_DB_STRUCTURE,
      characters: response.data.results,
    };

    await fs.writeFile(DB_PATH, JSON.stringify(newDbData, null, 2), "utf-8");

    console.log(`Datos guardados exitosamente en ${DB_PATH}.`);
    console.log(`Personajes obtenidos: ${newDbData.characters.length}`);
  } catch (error) {
    console.error("Error al ejecutar el script o escribir el archivo:", error);
  }
}

fetchAndSave();
