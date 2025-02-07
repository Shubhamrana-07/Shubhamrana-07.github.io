import React from "react";
import "./Ai_Chatbot.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import ai_chatbor from "../../assets/ai_chatbot.png";

const AiChatbot = () => {
  return (
    <div id="ai-chatbot" className="ai-chatbot">
      <div className="ai-chatbot-title">
        <h1>Ai Chatbot</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="ai-chatbot-sections">
        <div className="ai-chatbot-left">
        <a href="https://ai-chatbot-xi-two.vercel.app/"><img src={ai_chatbor} alt="" /></a>
        <a href="https://ai-chatbot-xi-two.vercel.app/"><h2>Click to see live demo</h2></a>
        </div>
        <div className="ai-chatbot-right">
          <div className="ai-chatbot-para">
            <p>
            I developed an AI-powered chatbot for a coffee company to assist customers with product recommendations, brewing tips, and order guidance. It uses natural language processing (NLP) to understand queries and provide accurate responses, making interactions more seamless and efficient.
            </p>
            <p>
            The chatbot integrates APIs to fetch real-time product details, offers, and promotions. This ensures customers receive up-to-date information about new coffee blends, discounts, and brewing accessories, enhancing their shopping experience.
            </p>
            <p>Additionally, the chatbot is designed to handle multiple queries simultaneously, improving customer support efficiency. It helps users explore different coffee options, learn about brewing methods, and get personalized suggestions based on their preferences.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AiChatbot;
