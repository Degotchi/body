import React, { useState, useEffect, useRef } from 'react';
import { LogEntry, Translations } from '../types';
import { LOG_MESSAGES } from '../constants';

interface TerminalProps {
  t: Translations['terminal'];
}

export const Terminal: React.FC<TerminalProps> = ({ t }) => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial logs
    const initialLogs: LogEntry[] = [
      { id: 0, timestamp: new Date().toLocaleTimeString(), message: "Initializing Degotchi Protocol...", type: 'info' },
      { id: 1, timestamp: new Date().toLocaleTimeString(), message: "Connecting to Solana Mainnet-Beta...", type: 'success' },
    ];
    setLogs(initialLogs);

    const interval = setInterval(() => {
      const randomMsg = LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
      const newLog: LogEntry = {
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString(),
        message: randomMsg.text,
        type: randomMsg.type as any
      };

      setLogs(prev => {
        const newLogs = [...prev, newLog];
        // Keep only last 8 logs to prevent clutter
        if (newLogs.length > 8) return newLogs.slice(newLogs.length - 8);
        return newLogs;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const getColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-degotchi-green';
      case 'warning': return 'text-degotchi-yellow';
      case 'error': return 'text-red-500';
      default: return 'text-gray-300';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 md:mt-12 bg-degotchi-dark border-2 border-degotchi-green rounded-sm overflow-hidden shadow-[0_0_20px_rgba(0,255,65,0.2)]">
      {/* Terminal Header */}
      <div className="bg-degotchi-green px-4 py-1 flex justify-between items-center">
        <span className="font-pixel text-black text-xs">{t.header}</span>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-black rounded-full opacity-50"></div>
          <div className="w-3 h-3 bg-black rounded-full opacity-50"></div>
        </div>
      </div>
      
      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="h-64 p-4 font-mono text-xs md:text-sm overflow-y-auto scroll-smooth relative"
      >
        <div className="absolute top-2 right-4 text-degotchi-green text-xs opacity-50 animate-pulse">
           {t.status}
        </div>
        
        {logs.map((log) => (
          <div key={log.id} className="mb-2 break-words">
            <span className="text-gray-500 mr-2">[{log.timestamp}]</span>
            <span className="text-degotchi-purple mr-2">{'>'}</span>
            <span className={`${getColor(log.type)}`}>{log.message}</span>
          </div>
        ))}
        <div className="animate-pulse text-degotchi-green">_</div>
      </div>
    </div>
  );
};