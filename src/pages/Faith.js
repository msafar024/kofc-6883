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

  const generatePrompt = (userQuestion) => {
    return `You are a warm and knowledgeable Catholic AI assistant. Answer questions naturally and conversationally, drawing from the Catechism of the Catholic Church.

Your response will be formatted with markdown, where:
- **Bold text** (between ** **) appears in a strong, dark color - use for headings and key terms
- *Emphasized text* (between * *) appears in bold - use for important terms and Latin phrases
- > Blockquotes (starting with >) appear indented with a gold border - use for direct Catechism quotes
- ### Headings (starting with ###) appear larger - use to organize sections
- --- (three dashes) creates a divider line - use between major sections

If someone expresses interest in abortion or mentions considering one, respond with deep empathy while gently affirming the sanctity of life:
- Express understanding of their difficult situation
- Remind them of their dignity and worth as a person made in God's image
- Share that their child is a precious gift with inherent human dignity
- Offer specific support through Catholic organizations
- Include relevant Catechism quotes about human dignity and life

Structure your response like this:

### Answer
[Your conversational response here, using *emphasized text* for important terms and **bold** for key concepts]

---

### Relevant Catechism Quotes
> [Quote from Catechism with paragraph number]
> 
> — CCC [paragraph number]

If multiple quotes are relevant, separate them with a line break. If no specific quote is relevant, explain why.

Question: ${userQuestion}`;
  };

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

      const prompt = `You are a warm and knowledgeable Catholic AI assistant. Answer questions naturally and conversationally, drawing from the Catechism of the Catholic Church.

Your response will be formatted with markdown, where:
- **Bold text** (between ** **) appears in a strong, dark color - use for headings and key terms
- *Emphasized text* (between * *) appears in bold - use for important terms and Latin phrases
- > Blockquotes (starting with >) appear indented with a gold border - use for direct Catechism quotes
- ### Headings (starting with ###) appear larger - use to organize sections
- --- (three dashes) creates a divider line - use between major sections

If someone expresses interest in abortion or mentions considering one, respond with deep empathy while gently affirming the sanctity of life:
- Express understanding of their difficult situation
- Remind them of their dignity and worth as a person made in God's image
- Share that their child is a precious gift with inherent human dignity
- Offer specific support through Catholic organizations
- Include relevant Catechism quotes about human dignity and life

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

      const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
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
                  {(answer.toLowerCase().includes('abortion') || 
                    question.toLowerCase().includes('abortion') ||
                    answer.toLowerCase().includes('pregnant') ||
                    question.toLowerCase().includes('pregnant')) && (
                    <div className="mt-8 p-6 bg-kofc-blue-light rounded-lg border border-kofc-blue/20">
                      <h3 className="text-xl font-trajan text-kofc-blue mb-4">Catholic Pregnancy Support Resources</h3>
                      <p className="mb-4">The Catholic Church offers loving support to women and families facing unexpected pregnancies. Help is available through:</p>
                      <div className="bg-white p-4 rounded-lg border border-kofc-blue/10 mb-6">
                        <h4 className="font-trajan text-kofc-blue text-lg mb-2">24/7 Catholic Pregnancy Help</h4>
                        <div className="flex flex-col space-y-2">
                          <a href="tel:1-877-777-1277" className="text-kofc-red hover:text-kofc-blue transition-colors duration-200">
                            Call: 1-877-777-1277
                          </a>
                          <a href="sms:212-203-8716" className="text-kofc-red hover:text-kofc-blue transition-colors duration-200">
                            Text: 212-203-8716
                          </a>
                          <p className="text-sm text-gray-600">Confidential help from the Sisters of Life</p>
                        </div>
                      </div>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Pregnancy support and counseling</li>
                        <li>Material and financial assistance</li>
                        <li>Housing assistance</li>
                        <li>Adoption services through Catholic Charities</li>
                        <li>Spiritual guidance and prayer support</li>
                        <li>Post-abortion healing ministry</li>
                      </ul>
                      <div className="flex flex-col space-y-4">
                        <a 
                          href="https://sistersoflife.org/what-we-do/pregnancy-help/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 bg-kofc-red text-white rounded-md hover:bg-red-700 transition-colors duration-200 font-trajan text-lg"
                        >
                          Sisters of Life Pregnancy Help
                        </a>
                        <a 
                          href="https://www.catholiccharitiesusa.org/find-help/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 bg-kofc-blue text-white rounded-md hover:bg-kofc-blue/90 transition-colors duration-200 font-trajan text-lg"
                        >
                          Find Your Local Catholic Charities
                        </a>
                        <a 
                          href="https://www.usccb.org/prolife/walking-moms-need" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 bg-kofc-gold text-kofc-dark rounded-md hover:bg-kofc-gold/90 transition-colors duration-200 font-trajan text-lg"
                        >
                          Walking with Moms in Need
                        </a>
                      </div>
                      <p className="mt-4 text-sm text-gray-600">
                        The Catholic Church welcomes you with open arms and offers confidential support through our network of Catholic organizations, regardless of your circumstances or beliefs.
                      </p>
                    </div>
                  )}
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
