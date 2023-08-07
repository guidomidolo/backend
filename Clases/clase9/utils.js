// const __dirname = "/Users/138studio/Desktop/BackEnd/Clases/clase9"
// import multer from "multer";


// //Definir cómo almacenar con Multer
// export const storage = multer.diskStorage({
//     destination: function(req, file, cb){ // Definir ruta destino
//         cb(null, __dirname + "/public/images");
//     },
//     filename:{function(req, file, cb){ // Definir nombre archivo a almacenar
//         cb(null, file.originalName)
//     }}
// });

// export const uploader = multer({storage});

// export default __dirname;

import {fileURLToPath} from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;
