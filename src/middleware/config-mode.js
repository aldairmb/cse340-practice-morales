const devMiddleware = (req, res, next) => {
    res.locals.port = process.env.PORT;
    res.locals.isDevMode = process.env.MODE === 'dev';
    res.locals.scripts = [];
    res.locals.styles = [];

    if (res.locals.isDevMode) {
        res.locals.devModeMsg = '<p class="dev-mode-msg">Warning: Development Mode Enabled</p>';
        
        const devModeStyles = `.dev-mode-msg { color: red; font-weight: bold; }`;
        res.locals.styles.push(devModeStyles);

        res.locals.scripts.push(`
            <script>
                const ws = new WebSocket('ws://127.0.0.1:${parseInt(process.env.PORT) + 1}');
                ws.onclose = () => {
                    setTimeout(() => location.reload(), 2000);
                };
            </script>
        `);
    }

    next();
};

export default devMiddleware;
