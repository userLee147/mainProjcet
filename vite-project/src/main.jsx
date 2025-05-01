import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App /> // 컴포넌트 -> 태그방식으로 이용한다.
)
