'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CatImage from './CatImage';
import ControlPanel from './ControlPanel';

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

const API_KEY = 'live_zM6D7W9w1iJfjWly4xRYZ0SQURnQoKvQxvmis3Ic1MxyhIKAIz1syGy0xGDIybuh';

const CatViewer = () => {
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const fetchCat = async () => {
    if (!enabled) return;
    
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&limit=1', {
        headers: {
          'x-api-key': API_KEY,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setImageUrl(data[0].url);
    } catch (error) {
      console.error('Error fetching cat:', error);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoRefresh && enabled) {
      interval = setInterval(fetchCat, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoRefresh, enabled]);

  return (
    <Container>
      <ControlPanel
        enabled={enabled}
        autoRefresh={autoRefresh}
        onEnabledChange={setEnabled}
        onAutoRefreshChange={setAutoRefresh}
        onGetCat={fetchCat}
      />
      {imageUrl && <CatImage imageUrl={imageUrl} />}
    </Container>
  );
};

export default CatViewer; 