import React, { Component } from "react";

import { Footer } from "./components";
import Resume from "./pages/files/Resume.pdf";
import Blogs from "./pages/blog/index.js";

import "./index.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Container">
        <section>
          <header>joshua timmons</header>
          <p className="SubHeader">a personal site</p>
        </section>
        <section>
          <h2>Interests</h2>
          <div className="about-columns">
            <p>
              I enjoy working on projects that merge programming with biology. I
              spent several years in wetlabs, with bacteria, algae, and yeast,
              on projects that spanned trying to improve the energy density of
              microbial fuel cells to testing neurokinases for immunogenic
              response.
            </p>
            <p>
              Since learning to program, I have created an image processing
              workflow to study Tumor Treating Fields and designed tools to
              automate plasmid assembly protocols (restriction digest and MoClo
              Assembly). I have also used molecular dynamics to answer questions
              about how medical devices affect patient outcomes.
            </p>
          </div>
        </section>
        <hr />
        <section>
          <h2 style={{ marginBottom: "45px" }}>Contents</h2>
          <div className="contents" style={{ float: "left", width: "33%" }}>
            <h6>FILES</h6>
            <ul>
              <li>
                <a target="_blank" href={Resume}>
                  Resume
                </a>
              </li>
              <li>
                <a href="/publications">Publications</a>
              </li>
            </ul>
          </div>
          <div className="contents" style={{ float: "right", width: "67%" }}>
            <a href="/blog">
              <h6>BLOG</h6>
            </a>
            <ul>
              {Blogs.map(b => (
                <li key={b.href}>
                  <a href={b.href}>{b.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
