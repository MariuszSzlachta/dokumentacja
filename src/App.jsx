// Aplikacja React do przeglądania plików Markdown z użyciem Bootstrap

import { useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "bootstrap/dist/css/bootstrap.min.css";

const files = [
    "wokal.md",
    "gain.md",
    "cajon.md",
    "routing.md",
    "kazalnica.md",
    "fader.md",
    "post-pre-fader.md",
    "sceny.md",
    "miks-sala.md",
    "kompresor.md",
    "reverb.md",
    "petla-efektow.md",
    "matrix.md",
    "routing-transmisja.md",
    "slownik-hardware.md",
    "equalizer.md",
    "propozycja-routingu.md"
];





export default function App() {
    const [currentFile, setCurrentFile] = useState(null);
    const [content, setContent] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    const loadFile = async (file) => {
        setCurrentFile(file);
        const res = await fetch(`${import.meta.env.BASE_URL}docs/${file}`);
        const text = await res.text();
        setContent(text);
        setMenuOpen(false);
    };

    return (
      <div className="container-fluid h-100">
          <div className="row h-100">
              {/* Sidebar (collapsible on mobile) */}
              <div className="col-md-3 bg-light border-end p-3 d-none d-md-block">
                  <h4 className="mb-4">📚 Menu</h4>
                  <ul className="list-group">
                      {files.map((file) => (
                        <li key={file} className="list-group-item p-1">
                            <button
                              className={`btn w-100 text-start btn-sm ${
                                file === currentFile ? "btn-primary" : "btn-outline-secondary"
                              }`}
                              onClick={() => loadFile(file)}
                            >
                                {file.replace(".md", "")}
                            </button>
                        </li>
                      ))}
                  </ul>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="d-md-none p-2 bg-light border-bottom">
                  <button className="btn btn-outline-primary" onClick={() => setMenuOpen(!menuOpen)}>
                      ☰ Menu
                  </button>
              </div>

              {menuOpen && (
                <div className="p-3 bg-light border-bottom d-md-none">
                    <ul className="list-group">
                        {files.map((file) => (

                          <li key={file} className="list-group-item p-1">
                              <button
                                className={`btn w-100 text-start btn-sm ${
                                  file === currentFile ? "btn-primary" : "btn-outline-secondary"
                                }`}
                                onClick={() => loadFile(file)}
                              >
                                  {file.replace(".md", "")}
                              </button>
                          </li>
                        ))}
                    </ul>
                </div>
              )}

              {/* Markdown Viewer */}
              <div className="col-md-9 p-4 overflow-auto">
                  {currentFile ? (
                    <div
                      className="markdown-body"
                      dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(marked.parse(content)),
                      }}
                    />
                  ) : (
                    <p className="text-muted">Wybierz plik z menu, aby go wyświetlić.</p>
                  )}
              </div>
          </div>
      </div>
    );
}
