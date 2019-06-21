import * as express from "express";
import * as multer from "multer";

// Multer instance
const upload: multer.Instance = multer({dest: "uploads/"});

// App instance
const app: express.Application = express();

// Distribui arquivos estáticos
app.use(express.static(__dirname+"/"));

// Lê os arquivos
app.route("/").post(
    upload.single("avatar"),
    (req: express.Request, res:express.Response, next: express.NextFunction) => {
        console.log("user: " + req.body.name);
        console.log("filename: " + req.file.filename);
        res.sendStatus(200);
    });

// Inicializa o servidor
app.listen("3000", ()=> {
    console.log("Server running");
});