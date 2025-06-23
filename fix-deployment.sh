#!/bin/bash

echo "Fixing deployment directory structure..."

# Check if dist/public exists
if [ -d "dist/public" ]; then
    echo "Moving files from dist/public to dist root..."
    
    # Move all files from dist/public to dist
    mv dist/public/* dist/ 2>/dev/null
    
    # Remove empty public directory
    rmdir dist/public 2>/dev/null
    
    echo "✓ Files moved to dist/ root"
    
    # Verify index.html exists
    if [ -f "dist/index.html" ]; then
        echo "✓ index.html found in dist/ - ready for deployment"
    else
        echo "✗ index.html not found in dist/"
    fi
    
    # Show current structure
    echo "Current dist/ contents:"
    ls -la dist/
else
    echo "dist/public directory not found"
    if [ -d "dist" ]; then
        echo "Current dist/ contents:"
        ls -la dist/
    else
        echo "No dist directory found - run build first"
    fi
fi