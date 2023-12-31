import { useEffect, useState, forwardRef, useMemo, Suspense } from "react";
import { Vector3 } from "three";
import { useAspect } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { state } from "@/store";
import { isMobile } from "@/utils";

interface Props {
  src: string;
}

const _ = forwardRef(({ src, ...props }: Props, forwardRef: any) => {
  const gl = useThree();
  const [videoSize, set] = useState({ width: 0, height: 0 });

  const video = useMemo(
    () =>
      Object.assign(document.createElement("video"), {
        src: src,
        crossOrigin: "Anonymous",
        loop: true,
        muted: true,
        playsInline: true,
      }),
    [src]
  );

  const scale = useAspect(
    videoSize.width,
    videoSize.height,
    4 / 7 // scaling factor
  );
  const size = {
    width: scale[0],
    height: scale[1],
  };

  // set max width & height
  const maxWidth = isMobile
    ? gl.viewport.width - state.gap * 2
    : gl.viewport.width * 0.55;
  const maxHeight = gl.viewport.height * 0.8;

  if (size.width > maxWidth) {
    size.width = maxWidth;
    size.height = (size.width * scale[1]) / scale[0];
  }
  if (size.height > maxHeight) {
    size.height = maxHeight;
    size.width = (size.height * scale[0]) / scale[1];
  }

  useEffect(() => {
    if (!video) return;
    video.onloadedmetadata = () => {
      video.play();
      set({
        width: video.videoWidth,
        height: video.videoHeight,
      });
    };

    return () => {
      video.pause();
      video.src = "";
    };
  }, [video]);

  return (
    <mesh
      ref={forwardRef}
      scale={[size.width, size.height, 1]}
      position={
        new Vector3(
          -gl.viewport.width / 2 + size.width / 2 + state.gap,
          isMobile
            ? -gl.viewport.height / 2 +
              size.height / 2 +
              (state.size.height * 3) / 4 +
              state.gap * 3
            : -gl.viewport.height / 2 + size.height / 2 + state.gap,
          0
        )
      }
      {...props}
    >
      <planeGeometry />
      <Suspense fallback={<meshBasicMaterial color="black" />}>
        <meshBasicMaterial>
          <videoTexture attach="map" args={[video]} />
        </meshBasicMaterial>
      </Suspense>
    </mesh>
  );
});

export default _;
