// Templatka aplikacji w Vite + React do przeglądania plików Markdown jako dokumentacji

import { useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

const files = [
    "wokal.md",
    "gain.md",
    "cajon.md",
    "routing.md",
    "kazalnica.md",
    "fader.md",
    "post-pre-fader.md"
    // dodaj tu kolejne pliki według potrzeb
];

export default function App() {
    const [currentFile, setCurrentFile] = useState(null);
    const [content, setContent] = useState("");

    const loadFile = async (file) => {
        setCurrentFile(file);
        const res = await fetch(`/docs/${file}`);
        const text = await res.text();
        setContent(text);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <aside className="w-full md:w-64 bg-gray-100 p-4 border-r overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">📚 Menu</h2>
                <ul className="space-y-2">
                    {files.map((file) => (
                        <li key={file}>
                            <button
                                className={`w-full text-left p-2 rounded hover:bg-gray-200 ${
                                    file === currentFile ? "bg-gray-300" : ""
                                }`}
                                onClick={() => loadFile(file)}
                            >
                                {file.replace(".md", "")}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            <main className="flex-1 p-4 overflow-y-auto">
                {currentFile ? (
                    <div
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(marked.parse(content)),
                        }}
                    />
                ) : (
                    <p className="text-gray-500">Wybierz plik z menu po lewej, aby go wyświetlić.</p>
                )}
            </main>
        </div>
    );
}
