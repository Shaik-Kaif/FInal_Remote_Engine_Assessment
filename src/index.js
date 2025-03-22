import React from 'react';
import ReactDOM from 'react-dom/client';
import LeftContent from './component/LeftContent';
import RightSide from './component/RightSide';

const AppLayout = () => {
  console.log("Rendering React...");
  return (
    <div className="mainapp">
      <LeftContent />
      <RightSide />
    </div>
  );
};

const root1 = ReactDOM.createRoot(document.getElementById("root")); 
root1.render(<AppLayout />);
export default AppLayout;