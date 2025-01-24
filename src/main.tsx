import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const adjustScale = () => {
    const width = window.innerWidth;
    const targetWidth = 375;
    const scale = Math.min(width / targetWidth, 1);
    const innerWrapper = document.querySelector('.inner-wrapper') as HTMLElement;
    if (innerWrapper) {
        innerWrapper.style.transform = `scale(${scale})`;
    }
};

adjustScale();
window.addEventListener('resize', adjustScale);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="outer-wrapper">
            <div className="inner-wrapper">
                <App />
            </div>
        </div>
    </StrictMode>
);
