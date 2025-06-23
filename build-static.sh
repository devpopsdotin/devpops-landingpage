#!/bin/bash

echo "Building static version of DevPops website..."

# Create dist directory
mkdir -p dist

# Copy static HTML file
cp client/index.static.html dist/index.html

# Build with simpler Vite config
npx vite build --config vite.config.static.ts --mode production

echo "Static build complete! Files are in the 'dist' directory."
echo ""
echo "To deploy on Replit Static Sites:"
echo "1. Go to your Replit dashboard"
echo "2. Create a new 'Static Site' deployment"
echo "3. Upload the contents of the 'dist' folder"
echo "4. Your website will be live at a .replit.app URL"
echo ""
echo "The contact form will open the user's email client with pre-filled message."