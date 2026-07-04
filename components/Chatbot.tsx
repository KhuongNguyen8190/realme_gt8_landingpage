"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Chào bạn! Tôi là trợ lý AI chuyên gia về Realme GT8 Pro. Bạn cần tư vấn về hiệu năng hay giá bán?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Đã có lỗi kết nối mạng, bạn hãy thử lại nhé." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Khung Chat */}
      {isOpen && (
        <div className="w-[320px] sm:w-[380px] h-[500px] max-h-[80vh] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl mb-4 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right">
          
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-bold text-sm">Chuyên gia GT8 Pro</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1.5 rounded-full transition-colors">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900/50 text-sm">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                  msg.sender === "user" 
                    ? "bg-blue-600 text-white rounded-tr-none" 
                    : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tl-none border border-gray-300 dark:border-gray-700"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none flex gap-1.5 items-center">
                   <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                   <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Hỏi tôi về GT8 Pro..."
              className="flex-1 bg-gray-100 dark:bg-gray-800 border border-transparent px-4 py-3 rounded-xl text-sm focus:bg-white focus:border-blue-400 focus:outline-none transition-colors"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Nút Toggle Bong Bóng */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl shadow-blue-500/40 transition-all duration-300 active:scale-90 flex items-center justify-center ${isOpen ? 'rotate-90 scale-0 opacity-0 absolute' : 'rotate-0 scale-100 opacity-100 relative'}`}
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}