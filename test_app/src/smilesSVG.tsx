// SmilesSVG.tsx
import { useEffect, useRef } from "react";
import SmilesDrawer from "smiles-drawer";

export type SmilesSVGProps = {
  smiles: string;
  width?: number;
  height?: number;
};

export function SmilesSVG({
  smiles,
  width = 300,
  height = 200
}: SmilesSVGProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!smiles) return;
    if (!containerRef.current) return;

    // Clear previous SVG
    containerRef.current.innerHTML = "";

    const drawer = new SmilesDrawer.SvgDrawer({
      width,
      height,
      explicitHydrogens: false
    });

    SmilesDrawer.parse(
      smiles,
      (tree: any) => {
        // Draw directly into the container element
        drawer.draw(tree, containerRef.current, "light", false);
      },
      (error: any) => {
        console.error("Smiles parse error:", error);
      }
    );
  }, [smiles, width, height]);

  return <div ref={containerRef} style={{ width, height }} />;
}
