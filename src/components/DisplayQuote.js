import axios from 'axios';
import { useEffect, useState } from 'react';

const Quote = () => {
  const [quoteData, setQuoteData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = 'Z/jC41Y2tB1gmkr21J31oQ==Zp7GxADGcmY7LfUe';

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=government', {
          headers: { 'X-Api-Key': apiKey },
        });
        setQuoteData(response.data[0] || {});
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  let quoteContent;
  if (isLoading) {
    quoteContent = <p>Fetching Quote......</p>;
  } else if (error) {
    quoteContent = (
      <p>
        Error:
        {error}
      </p>
    );
  } else if (quoteData.quote && quoteData.author) {
    quoteContent = (
      <div>
        <p>
          &apos;
          {quoteData.quote}
          &apos;
        </p>
        <p>
          {quoteData.author}
        </p>
      </div>
    );
  } else {
    quoteContent = <p>No quote available</p>;
  }

  return <div>{quoteContent}</div>;
};

export default Quote;
