import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ProjectDetailPage from "@/pages/project-detail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/:id" component={ProjectDetailPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="noise-bg"></div>
      <Router />
      <Toaster />
      
      <style dangerouslySetInnerHTML={{ __html: `
        .noise-bg::before {
          content: '';
          position: fixed;
          top: -400px;
          left: -400px;
          right: -400px;
          bottom: -400px;
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c4zIgwAAAAZklEQVR4Ab3OMQGAMAzAsIF0F7oK/z+rD5hIOacyVrvm9g2nabe2vaXN911C0UB0QsGCDYIVCj6YIdigoEKiQF+eiIILTiiYxBINaigI2EUADgp2GAho0ErA4vYLAa/Zf9A/6O58AG21EJPYSw5CAAAAAElFTkSuQmCC');
          opacity: 0.03;
          animation: grain 8s steps(10) infinite;
          pointer-events: none;
          z-index: -1;
        }
        
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          30% { transform: translate(3%, -15%); }
          50% { transform: translate(12%, 9%); }
          70% { transform: translate(9%, 4%); }
          90% { transform: translate(-1%, 7%); }
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: #121212;
          color: #ffffff;
        }
      `}} />
    </QueryClientProvider>
  );
}

export default App;
