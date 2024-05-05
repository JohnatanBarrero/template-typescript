import express, { Application } from "express";
import cors from "cors";
import userRoutes from "../routes/user.routes";

class Server {
  private app: Application;
  private apiPaths = {
    users: "/api/users",
  };

  constructor() {
    this.app = express();
    this.config();
    this.middlewares();
    this.routes();
  }

  public config(): void {
    this.app.set("port", process.env.PORT || 3000);
  }

  public routes(): void {
    this.app.use(this.apiPaths.users, userRoutes);
  }

  public start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Servidor corriendo en el puerto:", this.app.get("port"));
    });
  }
  public middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
    //this.app.use(express.urlencoded({ extended: false }));
  }
}
export default Server;
