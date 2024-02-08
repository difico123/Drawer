import { MainLayout } from "@/layout/main";
import { CanvasProvider } from "./canvas/layerContext";


const App = () => {
  return (
    <div className="w-full h-full">
      <CanvasProvider>
        <MainLayout />
      </CanvasProvider>
    </div>
  );
};

export default App;
