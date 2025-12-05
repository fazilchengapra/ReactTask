import { useEffect, useState } from "react";
import './App.css'
function Theme() {
  
  const [switchTheme, setSwitchTheme] = useState('white')
  useEffect(() => {
    console.log("it's only run after component did mount");
  })

  return (
    <div className={`${switchTheme}`} id="container">
      <p>can change the theme using button</p>
      <button onClick={() => setSwitchTheme(prev => {
        if(prev === 'white') return 'black'
        else return 'white'
      })}>switchTheme</button>
    </div>
  );
}

export default Theme;
