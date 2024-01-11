import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "./amplifyconfiguration.json";
Amplify.configure(config);

import { get } from "aws-amplify/api";
import { post } from "aws-amplify/api";

async function getTodo() {
  try {
    const restOperation = get({
      apiName: "products",
      path: "/product",
    });
    const response = await restOperation.response;
    console.log("GET call succeeded: ", response);
  } catch (error) {
    console.log("GET call failed: ", error);
  }
}
async function postTodo() {
  try {
    const restOperation = post({
      apiName: "products",
      path: "/product",
      options: {
        body: {
          name: "test",
          price: 10,
          description: "test",
          quantity: 10,
          sale_price: 10,
        },
      },
    });
    await restOperation.response;
    console.log("POST call succeeded");
    console.log(response);
    getTodo();
  } catch (e) {
    console.log("POST call failed: ", e);
  }
}

function App({ signOut, user }) {
  getTodo();
  // postTodo();
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
