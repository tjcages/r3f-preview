import { Vector3 } from "three";
import { Image, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import { isMobile } from "@/utils";

const _ = () => {
  const gl = useThree();
  const snap = useSnapshot(state);

  if (snap.selected === null) return null;

  // determine sizing based on texture aspect ratio
  let size = {
    width: (gl.viewport.width / 7 - state.gap) * (isMobile ? 5.5 : 3),
    height: (gl.viewport.width / 7 - state.gap) * (isMobile ? 5.5 : 3),
  };
  const ratio = snap.selected.size.width / snap.selected.size.height;
  size.height = size.width / ratio;

  // set a max height of 80% of the viewport
  if (size.height > gl.viewport.height * 0.8) {
    size.height = gl.viewport.height * 0.8;
    size.width = size.height * ratio;
  }

  return (
    <Image
      url={snap.selected.src}
      position={
        new Vector3(
          -gl.viewport.width / 2 + size.width / 2 + state.gap,
          isMobile
            ? -gl.viewport.height / 2 + size.height / 2 + state.margin + state.gap * 2
            : -gl.viewport.height / 2 + size.height / 2 + state.gap,
          0
        )
      }
    >
      <planeGeometry args={[size.width, size.height]} />
    </Image>
  );
};

export default _;