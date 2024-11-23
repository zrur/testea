import React from 'react';
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg">
        <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
        <p className="text-lg font-medium text-gray-700">Carregando...</p>
      </div>
    </div>
  );
}