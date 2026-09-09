import { Elysia } from "elysia";
import { coffeeController } from "./routes.ts/coffee";

const app = new Elysia().get("/", () => "Hello Elysia").use(coffeeController).listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
