import { httpServer } from "./http_server/index.js";
import { WebSocketServer, createWebSocketStream } from "ws";
import "dotenv/config";
import router from "./router/index.js";
import { AddressInfo } from "net";

const HTTP_PORT: number = Number(process.env.HTTP_PORT) || 8181;
const WS_PORT: number = Number(process.env.WS_PORT) || 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: WS_PORT });

wss.on("listening", () => {
  const { port } = wss.address() as AddressInfo;
  console.log(`Start web socket server on the ${port} port!`);
});

wss.on("connection", function connection(ws) {
  console.log("Client connected");
  ws.on("close", () => console.log(`Client disconnected`));

  const duplexStream = createWebSocketStream(ws, { decodeStrings: false });

  duplexStream.on("data", async (data: string) => {
    const dataToString = data.toString();
    console.log(`Recived command: ${dataToString}`);
    router(dataToString, duplexStream);
  });
});

process.on("SIGINT", () => {
  wss.clients.forEach((client) =>
    client.close(1001, "Server is shutting down")
  );
  httpServer.close();
  console.log("\nWeb Socket Server closed.");
  process.exit(0);
});
