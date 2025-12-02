# Gemini AI Integration Setup Guide

This guide explains how to set up and configure the Gemini AI API for the MindWell Student Platform's AI chatbot.

## Overview

The AI chatbot has been enhanced with Google's Gemini AI for:
- **Advanced Sentiment Analysis**: Real-time analysis of user messages to detect emotions, crisis indicators, and mental health concerns
- **Intelligent Response Generation**: Context-aware responses that adapt to user sentiment and conversation history
- **Crisis Detection**: Automatic detection of suicidal ideation and self-harm indicators with immediate professional help recommendations

## Features Added

### 1. Sentiment Analysis
- Analyzes user messages for emotional content
- Detects crisis situations (suicide, self-harm)
- Provides confidence scores and emotion detection
- Supports both English and Hindi languages

### 2. AI-Powered Responses
- Context-aware conversation generation
- Maintains conversation history for better responses
- Adapts responses based on detected sentiment
- Provides empathetic and supportive language

### 3. Visual Indicators
- Sentiment icons displayed next to user messages
- AI mode indicator in chat header (AI Powered vs Basic Mode)
- Color-coded sentiment display (green=positive, yellow=negative, red=crisis)

## Setup Instructions

### Step 1: Get Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### Step 2: Configure Environment Variables

1. Open the `.env` file in your project root
2. Replace `your_gemini_api_key_here` with your actual API key:

```env
VITE_GEMINI_API_KEY=your_actual_gemini_api_key_here
```

3. Save the file

### Step 3: Install Dependencies

The required dependency has already been installed:
```bash
npm install @google/generative-ai
```

### Step 4: Restart Development Server

```bash
npm start
```

## Configuration Status

The application will automatically detect if Gemini is properly configured:

- **AI Powered Mode**: When API key is correctly set
- **Basic Mode**: When API key is missing or invalid (fallback responses)

You can see the current mode in the chat header.

## API Usage

### Sentiment Analysis
```javascript
const sentimentData = await geminiService.analyzeSentiment(message, language);
// Returns: { sentiment, confidence, emotions, crisis_indicators, recommended_response_type }
```

### Response Generation
```javascript
const response = await geminiService.generateResponse(
  userMessage, 
  conversationHistory, 
  language, 
  sentimentData
);
```

## Fallback Behavior

If Gemini API is not configured or fails:
- Falls back to rule-based sentiment analysis
- Uses predefined response templates
- Maintains basic functionality without AI features

## Security Considerations

1. **API Key Protection**: Never commit your API key to version control
2. **Environment Variables**: Use `.env` files for local development
3. **Rate Limiting**: Gemini API has usage limits - monitor your usage
4. **Data Privacy**: User messages are sent to Google's servers for processing

## Troubleshooting

### Common Issues

1. **"Gemini API key not configured" warning**
   - Check that `VITE_GEMINI_API_KEY` is set in `.env`
   - Ensure the API key is valid and active

2. **API errors in console**
   - Verify your API key has proper permissions
   - Check your internet connection
   - Monitor API usage limits

3. **Fallback mode always active**
   - Restart the development server after adding the API key
   - Check browser console for configuration errors

### Testing the Integration

1. Start a conversation in the AI chat interface
2. Send messages with different emotional content
3. Observe sentiment indicators next to your messages
4. Check that responses are contextually appropriate

## File Changes Made

### New Files
- `src/services/geminiService.js` - Main Gemini API service
- `.env.example` - Environment variable template
- `GEMINI_SETUP.md` - This setup guide

### Modified Files
- `src/pages/ai-chat-interface/index.jsx` - Updated to use Gemini API
- `src/pages/ai-chat-interface/components/ChatMessage.jsx` - Added sentiment display
- `src/pages/ai-chat-interface/components/ChatHeader.jsx` - Added AI mode indicator
- `package.json` - Added @google/generative-ai dependency

## Support

For issues related to:
- **Gemini API**: Check [Google AI Studio documentation](https://ai.google.dev/docs)
- **Application**: Check the browser console for error messages
- **Setup**: Verify all environment variables are correctly configured

## Cost Considerations

- Gemini API has a free tier with usage limits
- Monitor your usage in Google AI Studio
- Consider implementing caching for repeated queries
- Set up usage alerts to avoid unexpected charges

