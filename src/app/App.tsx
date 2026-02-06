import { DesignProvider } from '@/app/providers/DesignContext';
import { PropertiesPanel } from '@/components/PropertiesPanel/PropertiesPanel';

function App() {
  return (
    <DesignProvider>
      <div className="min-h-screen bg-muted/50 flex items-start justify-center p-8">
        <div className="w-80">
          <PropertiesPanel />
        </div>
      </div>
    </DesignProvider>
  );
}

export default App;
