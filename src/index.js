import App from "./App";
import './index.css';
import {createRoot} from 'react-dom/client'
import { AuthProvider } from "./hooks/useAuth";
const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
<AuthProvider>
<App/>
</AuthProvider>
);
