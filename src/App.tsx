import { Stage as StageType, } from 'konva/lib/Stage';
import { Layer as LayerType } from 'konva/lib/Layer'
import React from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import Konva from 'konva';

const URLImage = ({ image }: any) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};

const App = () => {
  const dragUrl = React.useRef();
  const stageRef = React.useRef<StageType>(null);
  const [images, setImages] = React.useState<any>([]);
  const layerRef = React.useRef<LayerType>(null)

  return (
    <div>
      Try to trag and image into the stage:
      <br />
      <img
        alt="lion"
        src="https://konvajs.org/assets/lion.png"
        draggable="true"
        onDragStart={(e: any) => {
          dragUrl.current = e.target.src;
        }}
      />
      <div
        onDrop={(e) => {
          e.preventDefault();
          // register event position
          stageRef.current?.setPointersPositions(e);
          // add image
          setImages(
            images.concat([
              {
                ...stageRef.current?.getPointerPosition(),
                src: dragUrl.current,
              },
            ])
          );
          var circle = new Konva.Circle({
            x: stageRef.current?.getPointerPosition()?.x,
            y: stageRef.current?.getPointerPosition()?.y,
            radius: 50,
            fill: 'green',
          });

          layerRef.current?.add(circle)
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ border: '1px solid grey' }}
          ref={stageRef}
        >
          <Layer ref={layerRef}>
            {images.map((image: any) => {
              return <URLImage image={image} />;
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default App;
