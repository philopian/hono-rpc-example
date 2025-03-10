import { hc } from "hono/client";
import type { AppType } from "../../server/src/types";

const client = hc<AppType>("http://localhost:8484");

client.users.$get();

client.users[":id"].$get({
  param: {
    id: "1",
  },
});

client.users.$post({
  json: {
    name: "test",
    email: "example@users.com",
  },
});

client.users[":id"].$patch({
  param: {
    id: "1",
  },
  json: {
    name: "test",
    email: "test@users.com",
  },
});

client.users[":id"].$delete({
  param: {
    id: "1",
  },
});
