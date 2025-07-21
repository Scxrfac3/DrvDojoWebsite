import React from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const WhatsAppStickyButton = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <>
      {/* Enhanced WhatsApp Button */}
      <motion.a
        href="https://wa.me/447487228866?text=Hey%20Drive%20Dojo!%20💫%20I'm%20ready%20to%20start%20my%20driving%20journey%20with%20you%20guys!%20🚗✨"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 hover:from-green-500 hover:via-emerald-500 hover:to-green-700 text-white font-bold py-4 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center z-50 group overflow-hidden"
        style={{
          animation: "gentlePulse 3s ease-in-out infinite, floatUpDown 4s ease-in-out infinite",
        }}
        whileHover={{
          scale: 1.1,
          rotate: [0, -2, 2, -2, 0],
          transition: { duration: 0.3 }
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-50 blur-lg animate-pulse"></div>
        
        {/* Sparkle effects */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full animate-bounce"></div>
        
        {/* Main content */}
        <div className="relative flex items-center">
          <motion.div
            className="mr-3 text-2xl"
            animate={{
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            💬
          </motion.div>
          
          <div className="flex flex-col items-start">
            <motion.div
              className="text-lg font-extrabold tracking-wide"
              animate={{
                textShadow: [
                  "0 0 5px rgba(255,255,255,0.5)",
                  "0 0 10px rgba(255,255,255,0.8)",
                  "0 0 5px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Let's Chat!
            </motion.div>
            <motion.div
              className="text-xs font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Start your journey ✨
            </motion.div>
          </div>
          
          <motion.div
            className="ml-2 text-xl"
            animate={{
              x: [0, 3, 0],
              rotate: [0, 15, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🚗
          </motion.div>
        </div>
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse"></div>
        
        {/* Hover ripple effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{
            scale: 1.5,
            opacity: [0, 0.3, 0],
            transition: { duration: 0.6 }
          }}
        />
      </motion.a>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes gentlePulse {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
            }
          }
          @keyframes floatUpDown {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-5px);
            }
          }
          @keyframes shine {
            0% {
              box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
            }
            50% {
              box-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
            }
            100% {
              box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
            }
          }
          @keyframes pulse {
            0% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
            }
            70% {
              transform: scale(1.1);
              box-shadow: 0 0 0 10px rgba(74, 222, 128, 0);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
            }
          }
        `}
      </style>
    </>
  );
};

export default WhatsAppStickyButton;
