import React, { useState } from 'react';
import EditableText from './components/EditableText';
import { EditableText_TypeProps } from './components/EditableText/_type';
import './App.css';

const App: React.FC = () => {
  const [type, setType] = useState<EditableText_TypeProps>('text');
  const handleTypeSwitch = () => {
    setType(type === 'textarea' ? 'text' : 'textarea');
  };

  return (
    <div className="App">
      <button type="button" onClick={handleTypeSwitch}>
        {type === 'text' ? 'Edit text' : 'Save text'}
      </button>
      <br />
      <br />
      <EditableText type={type} cols={50} rows={20}>
        Demo text
      </EditableText>
    </div>
  );
};

export default App;
