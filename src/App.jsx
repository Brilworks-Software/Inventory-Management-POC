import {
  BrowserRouter as Router,
  Link as ReactRouterLink,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Amplify } from "aws-amplify";
import { Link, Flex, Heading, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { NavBarHeader2 } from "./ui-components";

const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });

const routes = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  }))
);

// function Home() {
//   return <Heading level={2}>Home</Heading>;
// }

// function About() {
//   return <Heading level={2}>About</Heading>;
// }

// function Users() {
//   return <Heading level={2}>Users</Heading>;
// }

function App({ user }) {
  return (
    <>
      <NavBarHeader2
        width={"100%"}
        overrides={{
          Button39493466: {
            children: `Hello, ${user.username}`,
          },
        }}
      />
      <RouterProvider router={router} />
      {/* <Router>
        <Flex>
          <ReactRouterLink to="/" component={Link}>
            Home
          </ReactRouterLink>
          <ReactRouterLink to="/about" component={Link}>
            About
          </ReactRouterLink>
          <ReactRouterLink to="/users" component={Link}>
            Users
          </ReactRouterLink>
        </Flex>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default withAuthenticator(App);
