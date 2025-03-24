# Setup Instructions

To resolve the MODULE_NOT_FOUND error, please follow these steps:

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install the required dependencies:
```bash
npm install
```

This will install all dependencies listed in package.json, including the newly added:
- jsonwebtoken
- bcryptjs

3. Restart your Node.js server after the installation is complete:
```bash
npm run dev
# or
npm start
```

If you encounter any further issues, please check that:
- All dependencies were installed successfully (check node_modules folder exists)
- Node.js server was restarted after installation
- There are no typos in the import statements in your code
- File paths are using correct forward slashes (/) even on Windows
- You are running a compatible Node.js version (v16+ recommended)

For Windows Users:
- Ensure you're in the correct directory path
- Try running `npm cache clean --force` before `npm install`
- If using PowerShell, try using Command Prompt instead
- Check that the project files have correct read permissions