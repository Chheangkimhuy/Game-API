const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middleware = jsonServer.defaults();
const cors = require("cors");

const { config } = require("dotenv");
config();
server.use(cors());
server.use(middleware);
server.use(router);

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "127.0.0.1";

server.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
