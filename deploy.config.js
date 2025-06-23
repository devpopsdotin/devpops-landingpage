// Deployment configuration for Replit
// This configuration ensures the build output is structured correctly for deployment

const fs = require('fs');
const path = require('path');

const config = {
  // Build configuration
  build: {
    command: 'npm run build',
    outputDir: 'dist',
    publicDir: 'dist/public'
  },
  
  // Post-build processing to fix directory structure
  postBuild: () => {
    const distPublicPath = path.join(__dirname, 'dist', 'public');
    const distPath = path.join(__dirname, 'dist');
    
    if (fs.existsSync(distPublicPath)) {
      console.log('Moving files from dist/public to dist root for deployment...');
      
      // Copy all files from dist/public to dist
      const files = fs.readdirSync(distPublicPath);
      files.forEach(file => {
        const srcPath = path.join(distPublicPath, file);
        const destPath = path.join(distPath, file);
        
        if (fs.statSync(srcPath).isDirectory()) {
          fs.cpSync(srcPath, destPath, { recursive: true });
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      });
      
      // Remove the public subdirectory
      fs.rmSync(distPublicPath, { recursive: true, force: true });
      
      console.log('✓ Deployment structure fixed: files moved to dist/ root');
    } else {
      console.log('Warning: dist/public directory not found');
    }
  }
};

module.exports = config;