import { DesignProvider } from "@/app/providers/DesignContext";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { PropertiesPanel } from "@/components/PropertiesPanel/PropertiesPanel";

function App() {
  return (
    <DesignProvider>
      <TooltipProvider>
        <div className='min-h-screen bg-muted/50 flex items-start justify-center p-8'>
          <div className='w-full max-w-lg'>
            <PropertiesPanel />
          </div>
        </div>
      </TooltipProvider>
    </DesignProvider>
  );
}

export default App;
