import { MainLayout } from "@/layout/main";
import { CanvasProvider } from "./canvas/layerContext";
import ImageDownloader from "./components/image-download/ImageDownload";

const App = () => {
  return (
    <div className="w-full h-full">
      <CanvasProvider>
        <MainLayout />
      </CanvasProvider>
      <ImageDownloader />
    </div>
  );
};

export default App;
