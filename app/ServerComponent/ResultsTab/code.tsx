import React from "react";
import { Play } from "lucide-react";

export default function Code({ codeSnippet }: { codeSnippet: string }) {
  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      <div className="bg-[#E9E8E8] rounded-lg overflow-hidden shadow-lg">
        <div className="p-4 font-mono text-sm text-black relative">
          {codeSnippet.split("\n").map((line, index) => (
            <div key={index} className="flex">
              <span className="w-8 text-right mr-4 text-gray-500">
                {index + 1}
              </span>
              <span>{line}</span>
            </div>
          ))}
          <button className="absolute bottom-4 right-4 bg-[#201C1D] rounded-full p-2 hover:bg-gray-600 transition-colors">
            <Play className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
