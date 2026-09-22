'use client'
import { Zoom } from "react-awesome-reveal";

export default function Videos ({videos}: {videos: string[]}) {
  return (
    <div className="gallery grid grid-cols-3 gap-4">
      {videos.map((video) => (
        <Zoom triggerOnce key={video}>
          <video
            className="w-full rounded-xl bg-black"
            src={video}
            controls
            playsInline
            preload="metadata"
          />
        </Zoom>
      ))}
    </div>
  );
};
