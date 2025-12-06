// SmilesCanvas.tsx
import { useEffect, useRef } from "react";
import SmilesDrawer from "smiles-drawer";

type SmilesCanvasProps = {
  smiles: string;
  width?: number;
  height?: number;
};

export function SmilesCanvas({
  smiles,
  width = 300,
  height = 200
}: SmilesCanvasProps) {
  // Generate a stable unique id for this canvas
  const idRef = useRef(
    "smiles_canvas_" + Math.random().toString(36).slice(2)
  );

  useEffect(() => {
    if (!smiles) return;

    // Optional but fine if you want default themes applied
    // SmilesDrawer.apply();

    const drawer = new SmilesDrawer.Drawer({
      width,
      height,
      explicitHydrogens: false
    });

    // Clear any previous drawing
    const canvas = document.getElementById(
      idRef.current
    ) as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, width, height);
    }

    // Important part
    // Use the canvas id string, not the element
    SmilesDrawer.parse(
      smiles,
      (      tree: any) => {
        drawer.draw(tree, idRef.current, "light", false);
      },
      (      error: any) => {
        console.error("Smiles parse error:", error);
      }
    );
  }, [smiles, width, height]);

  return <canvas id={idRef.current} width={width} height={height} />;
}