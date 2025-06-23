#!/bin/bash

echo "Building for deployment..."

# Run the normal build process
npm run build

# Move files from dist/public to dist root for deployment
if [ -d "dist/public" ]; then
    echo "Moving files from dist/public to dist root..."
    
    # Copy all files from dist/public to dist
    cp -r dist/public/* dist/
    
    # Remove the public subdirectory
    rm -rf dist/public
    
    echo "Build structure updated for deployment"
    echo "Files are now directly in dist/ directory"
else
    echo "Warning: dist/public directory not found"
fi

echo "Deployment build complete!"