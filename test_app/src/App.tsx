import './App.css'
import { SmilesCanvas } from "./smilesCanvas";
import { SmilesSVG } from "./smilesSVG";
import { SimpleSVG } from "./simpleSVG";

function App() {
  return (
    <>
      <div style={{ padding: 24 }}>
        <h2>SmilesDrawer test</h2>
        <SmilesCanvas smiles="C(C1C(C(C(C(O1)O)O)O)O)O" />
      </div>
      <div style={{ padding: 24 }}>
        <h2>SmilesDrawer SVG test</h2>
        <SmilesSVG smiles="C(C1C(C(C(C(O1)O)O)O)O)O" />
      </div>
      <div style={{ padding: 24 }}>
        <h1>SVG with React and TypeScript</h1>
      <SimpleSVG />
    </div>
    </>

  );
}

export default App
