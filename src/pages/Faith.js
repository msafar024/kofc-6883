import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaSpinner, FaCross } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';

const Faith = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [cache] = useState(new Map());

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('API key not configured');
      }

      // Check cache first
      const cacheKey = question.toLowerCase().trim();
      if (cache.has(cacheKey)) {
        setAnswer(cache.get(cacheKey));
        setIsLoading(false);
        return;
      }

      // Initialize Gemini Pro
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      // Prepare the prompt
      const prompt = `You are a warm and knowledgeable Catholic AI assistant. Answer questions naturally and conversationally, drawing from the Catechism of the Catholic Church.

Your response will be formatted with markdown, where:
- **Bold text** (between ** **) appears in a strong, dark color - use for headings and key terms
- *Emphasized text* (between * *) appears in bold - use for important terms and Latin phrases
- > Blockquotes (starting with >) appear indented with a gold border - use for direct Catechism quotes
- ### Headings (starting with ###) appear larger - use to organize sections
- --- (three dashes) creates a divider line - use between major sections

Structure your response like this:

### Answer
[Your conversational response here, using *emphasized text* for important terms and **bold** for key concepts]

---

### Relevant Catechism Quotes
> [Quote from Catechism with paragraph number]
> 
> — CCC [paragraph number]

If multiple quotes are relevant, separate them with a line break. If no specific quote is relevant, explain why.

Question: ${question}`;

      // Generate response
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Cache the response
      cache.set(cacheKey, text);
      setAnswer(text);
    } catch (err) {
      console.error('Error:', err);
      if (err.message.includes('429')) {
        setError('Please try again in a few minutes.');
      } else {
        setError(err.message || 'Failed to get response');
      }
      setAnswer('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-trajan text-kofc-dark mb-4">
            Ask About the Catholic Faith
          </h1>
          <p className="text-xl text-gray-600 font-garamond max-w-2xl mx-auto">
            Get answers based on the Catechism of the Catholic Church
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="question" 
                  className="block text-lg font-garamond text-gray-700 mb-2"
                >
                  Your Question
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask about Catholic teachings or doctrine..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-kofc-gold/50 focus:border-kofc-gold outline-none transition-all duration-300 font-garamond text-lg"
                    disabled={isLoading}
                  />
                  <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <button
                type="submit"
                disabled={!question.trim() || isLoading}
                className={`w-full py-3 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2
                  ${!question.trim() || isLoading
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-kofc-gold hover:bg-kofc-gold/90 text-kofc-dark hover:scale-[1.02]'
                  }`}
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <FaCross />
                    Get Answer
                  </>
                )}
              </button>
            </form>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg"
              >
                {error}
              </motion.div>
            )}

            {answer && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="prose prose-lg max-w-none font-garamond">
                  <ReactMarkdown
                    components={{
                      strong: ({ node, ...props }) => (
                        <span className="font-bold text-kofc-dark" {...props} />
                      ),
                      em: ({ node, ...props }) => (
                        <span className="font-semibold text-gray-900" {...props} />
                      ),
                      p: ({ node, ...props }) => (
                        <p className="mb-4" {...props} />
                      ),
                      blockquote: ({ node, ...props }) => (
                        <blockquote className="border-l-4 border-kofc-gold pl-4 italic text-gray-700 my-4 bg-gray-50 p-4 rounded-r-lg" {...props} />
                      ),
                      h3: ({ node, ...props }) => (
                        <h3 className="text-xl font-trajan text-kofc-dark mt-6 mb-4" {...props} />
                      ),
                      hr: ({ node, ...props }) => (
                        <hr className="my-6 border-t-2 border-kofc-gold/20" {...props} />
                      ),
                    }}
                  >
                    {answer}
                  </ReactMarkdown>
                </div>
                {answer.includes('Relevant Catechism Quotes') && 
                 !answer.includes('No specific quote') && 
                 !answer.includes('N/A') && (
                  <div className="mt-4 text-sm text-gray-500">
                    Source: Catechism of the Catholic Church
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center text-gray-500"
          >
            <p className="font-garamond">
              Note: This feature provides answers based on the Catechism of the Catholic Church.
              For authoritative guidance, please consult with your priest or spiritual director.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Faith;
