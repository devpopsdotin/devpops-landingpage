import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import BrasovBrews from "@/pages/brasov-brews";
import TechStartSolutions from "@/pages/techstart-solutions";
import ArtisanCrafts from "@/pages/artisan-crafts";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/devpops" component={Home} />
      <Route path="/brasov-brews" component={BrasovBrews} />
      <Route path="/techstart-solutions" component={TechStartSolutions} />
      <Route path="/artisan-crafts" component={ArtisanCrafts} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
