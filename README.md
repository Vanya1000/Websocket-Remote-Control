# Websocket Remote Control

## Installation

1. `git clone https://github.com/Vanya1000/Websocket-Remote-Control.git`
2. `git checkout develop`
3. `npm install`
4. rename .env.example to .env

## Usage

To start the application, use run in production mode (starts the build process and then runs the bundled file):

```bash
npm start
```

or run in development mode using nodemon:

```bash
npm run start:dev
```

1. `Open a browser and navigate to (by default) http://localhost:8181/`
2. `Operate :)`

## Libraries Used

- [@nut-tree/nut-js](https://www.npmjs.com/package/@nut-tree/nut-js): A library for creating remote control applications with WebSockets.

- [dotenv](https://www.npmjs.com/package/dotenv): A zero-dependency module that loads environment variables from a .env file into process.env.

- [jimp](https://www.npmjs.com/package/jimp): An image processing library for Node written entirely in JavaScript for Node, with zero native dependencies.

- [ws](https://www.npmjs.com/package/ws): A simple to use, blazing fast and thoroughly tested WebSocket client and server implementation for NodeJS and Browser applications written in JavaScript, with optional TypeScript bindings and Promise support for client and server applications alike.

### Development

- [@types/node](https://www.npmjs.com/package/@types/node) (version 18.11.18)
- [@types/ws](https://www.npmjs.com/package/@types/ws) (version 8.5.4)
- [nodemon](https://www.npmjs.com/package/nodemon) (version 2.0.16)
- [ts-node](https://www.npmjs.com/package/ts-node) (version 10.9.1)
- [typescript](https://www.npmjs.com/package/typescript) (version 4.9.4)
