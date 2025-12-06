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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !smiles) return;

    const drawer = new SmilesDrawer.Drawer({
      width,
      height,
      explicitHydrogens: false
    });

    const ctx = canvasRef.current.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, width, height);
    }

    SmilesDrawer.parse(
      smiles,
      tree => {
        drawer.draw(tree, canvasRef.current!, "light", false);
      },
      error => {
        console.error("Smiles parse error:", error);
      }
    );
  }, [smiles, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}