import "@styles/globals.css";
//import react "react"; no need of this next js
import Nav from "@components/Nav"; // we are importing Nav here because it is the rootlayout where we can make available to nav in every pages
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
          {/* to just change the background */}
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
