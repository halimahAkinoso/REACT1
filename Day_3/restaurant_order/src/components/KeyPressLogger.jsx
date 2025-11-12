import { useState, useEffect }  from 'react';

function KeyPressLogger() {
  const [lastKey, setLastKey] = useState('');
  const [keyCount, setKeyCount] = useState(0);
  
  useEffect(() => {
    function handleKeyPress(event) {
      setLastKey(event.key);
      setKeyCount(prev => prev + 1);
    }
    
    window.addEventListener('keypress', handleKeyPress);
    
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);
  
  return (
    <div>
      <h2>Key Press Logger</h2>
      <p>Last key pressed: <strong>{lastKey || 'None'}</strong></p>
      <p>Total keys pressed: {keyCount}</p>
      <p style={{ color: '#666' }}>Press any key to test</p>
    </div>
  );
}

export default KeyPressLogger;