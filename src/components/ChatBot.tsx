
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { X, SendHorizonal, MessagesSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: "user" | "bot"; content: string }>>([
    {
      role: "bot",
      content: "Hello! I'm your Career Strive assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = input.trim();
    setMessages([...messages, { role: "user", content: userMessage }]);
    setInput("");
    setIsLoading(true);

    // Simulate API call - replace with your actual API call
    setTimeout(() => {
      // Bot responses based on user queries
      let botResponse = "";
      const lowerCaseMessage = userMessage.toLowerCase();

      if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        botResponse = "Hello there! How can I help you with your learning journey today?";
      } else if (lowerCaseMessage.includes("domain")) {
        botResponse = "You can select your domain of interest in the Domain Selection page. We offer paths for coding, design, marketing, data science, and many more!";
      } else if (lowerCaseMessage.includes("roadmap")) {
        botResponse = "Our roadmaps are personalized learning paths created specifically for your chosen domain. They include recommended learning resources, skill progression paths, and milestones.";
      } else if (lowerCaseMessage.includes("study plan") || lowerCaseMessage.includes("timetable")) {
        botResponse = "In the Study Plan section, you can create a customized study schedule that works around your existing commitments. Our AI will suggest the most effective use of your study time.";
      } else if (lowerCaseMessage.includes("progress") || lowerCaseMessage.includes("tracking")) {
        botResponse = "You can track your learning progress in the Progress section. It shows your completion rates, skill improvements, and provides AI-generated feedback on your growth.";
      } else if (lowerCaseMessage.includes("project")) {
        botResponse = "We provide weekly mini-projects tailored to your skill level to help you apply what you've learned. You can find them in the Projects section!";
      } else if (lowerCaseMessage.includes("tool")) {
        botResponse = "In the Tools section, you'll find recommended resources, software, and learning materials specific to your domain. Some are free while others are premium options.";
      } else {
        botResponse = "Thanks for your question! I'm here to help with anything related to your learning journey. You can ask about domains, roadmaps, study plans, progress tracking, projects, or tools.";
      }

      setMessages((prev) => [...prev, { role: "bot", content: botResponse }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className={cn(
          "fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50 transition-colors",
          "bg-[#4A3F3A] hover:bg-[#635249] text-white"
        )}
        aria-label="Open chat"
      >
        <MessagesSquare size={24} />
      </button>

      {/* Chat dialog */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-background border rounded-lg shadow-xl z-50 flex flex-col max-h-[500px] overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">Chat Support</h3>
            <button
              onClick={toggleChat}
              className="p-1 rounded-full hover:bg-muted"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={cn(
                  "max-w-[80%] rounded-lg p-3",
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground ml-auto"
                    : "bg-muted mr-auto"
                )}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="bg-muted max-w-[80%] rounded-lg p-3 mr-auto">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce delay-150" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce delay-300" />
                </div>
              </div>
            )}
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="border-t p-4 flex gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="resize-none min-h-[40px] max-h-32"
              rows={1}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <Button 
              type="submit" 
              size="icon" 
              className="bg-[#4A3F3A] hover:bg-[#635249]"
              disabled={isLoading || !input.trim()}
            >
              <SendHorizonal size={18} />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
