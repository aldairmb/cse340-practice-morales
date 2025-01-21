
// Add these imports to your existing imports
import { fileURLToPath } from 'url';
import path from 'path';

// Create __dirname and __filename variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from 'express';

const app = express();

const PORT = 3000;

// Place before all other calls to app
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

 // Serve static files from the public directory
 app.use(express.static(path.join(__dirname, 'public')));

 // Place after your existing app.use(express.static(...)) call
app.set('views', path.join(__dirname, 'views'));

// Example of the home route using the layout
app.get('/', (req, res) => {
    const title = 'Home Page';
    const content = '<h1>Welcome to the Home Page</h1>';
    res.render('index', { title, content });
});