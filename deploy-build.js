#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🚀 Starting deployment build process...');

try {
  // Step 1: Run the normal build
  console.log('📦 Building the application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Step 2: Fix the directory structure for deployment
  const distPublicPath = path.join(__dirname, 'dist', 'public');
  const distPath = path.join(__dirname, 'dist');
  
  if (fs.existsSync(distPublicPath)) {
    console.log('📁 Restructuring build output for deployment...');
    
    // Get all files and directories in dist/public
    const items = fs.readdirSync(distPublicPath);
    
    for (const item of items) {
      const srcPath = path.join(distPublicPath, item);
      const destPath = path.join(distPath, item);
      
      // Copy each item to the dist root
      if (fs.statSync(srcPath).isDirectory()) {
        // Copy directory recursively
        fs.cpSync(srcPath, destPath, { recursive: true });
      } else {
        // Copy file
        fs.copyFileSync(srcPath, destPath);
      }
    }
    
    // Remove the public subdirectory
    fs.rmSync(distPublicPath, { recursive: true, force: true });
    
    console.log('✅ Build structure updated for deployment');
    
    // Verify the structure
    const distContents = fs.readdirSync(distPath);
    console.log('📋 Deployment files in dist/:');
    distContents.forEach(file => {
      console.log(`   - ${file}`);
    });
    
    // Check for index.html specifically
    if (fs.existsSync(path.join(distPath, 'index.html'))) {
      console.log('✅ index.html found in dist/ root - deployment ready!');
    } else {
      console.log('❌ index.html not found in dist/ root');
    }
    
  } else {
    console.log('❌ dist/public directory not found after build');
    process.exit(1);
  }
  
  console.log('🎉 Deployment build completed successfully!');
  console.log('💡 Your app is now ready for Replit deployment');
  
} catch (error) {
  console.error('❌ Deployment build failed:', error.message);
  process.exit(1);
}