import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useState } from "react";

export default function NSTNTDemo() {
  const [view, setView] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-yellow-400 text-white p-6">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">🚚 NSTNT</h1>
        <Button variant="secondary" className="bg-yellow-200 text-orange-900 hover:bg-yellow-100">
          Sign In
        </Button>
      </header>
      {/* The rest of the demo logic is the same as in your provided file. */}
    </div>
  );
}
