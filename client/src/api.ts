import type { AppType } from "../../server/src/types";
import { hc } from "hono/client";

const client = hc<AppType>("http://localhost:8484");
export type Client = typeof client;

client.users.$get();
client.users[":id"].$get({
  param: {
    id: "1",
  },
});
client.users.$post({
  json: {
    name: "test",
    age: 20,
  },
});
client.users[":id"].$put({
  param: {
    id: "1",
  },
  json: {
    name: "test",
    age: 20,
  },
});
client.users[":id"].$delete({
  param: {
    id: "1",
  },
});
