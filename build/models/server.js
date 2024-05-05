"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("../routes/user.routes"));
class Server {
    constructor() {
        this.apiPaths = {
            users: "/api/users",
        };
        this.app = (0, express_1.default)();
        this.config();
        this.middlewares();
        this.routes();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
    }
    routes() {
        this.app.use(this.apiPaths.users, user_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Servidor corriendo en el puerto:", this.app.get("port"));
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("public"));
        //this.app.use(express.urlencoded({ extended: false }));
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map