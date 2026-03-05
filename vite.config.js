import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ``
      }
    },
    // CSS Modules: output ONLY a short hash — no readable class names
    modules: {
      generateScopedName: '[hash:base64:6]',
    },
    // Minify CSS (remove all comments, whitespace, structure hints)
    devSourcemap: false,
  },

  build: {
    // Never emit source maps — expose nothing about source structure
    sourcemap: false,

    // Use Terser for maximum JS obfuscation
    minify: 'terser',
    terserOptions: {
      compress: {
        // Remove all dead code
        dead_code: true,
        // Drop console.* calls so devtools reveal no logs
        drop_console: true,
        drop_debugger: true,
        // Inline small functions aggressively
        inline: 3,
        // Remove unreachable code after conditionals
        conditionals: true,
        evaluate: true,
        // Flatten sequences
        sequences: true,
        // Collapse single-use variables
        collapse_vars: true,
        reduce_vars: true,
        // Aggressive boolean/comparison rewriting
        booleans: true,
        comparisons: true,
        // Hoist functions to confuse structure reading
        hoist_funs: true,
        hoist_vars: false,
        // Negate IIFEs
        negate_iife: true,
        // Pass 3 for deeper compression
        passes: 3,
      },
      mangle: {
        // Mangle ALL variable/function/class names to symbols
        toplevel: true,
        // Also mangle property names (breaks readable object keys)
        properties: false, // keep false — true can break React runtime
        // Mangle eval'd code context too
        eval: false,
      },
      format: {
        // Strip ALL comments (licenses, author hints, etc.)
        comments: false,
        // Single-line output — no readable structure
        beautify: false,
        // Remove redundant semicolons
        semicolons: true,
        ascii_only: false,
      },
    },

    rollupOptions: {
      output: {
        // Hash-only file names — no readable module names
        entryFileNames:  'assets/[hash].js',
        chunkFileNames:  'assets/[hash].js',
        assetFileNames:  'assets/[hash][extname]',

        // Split into many small chunks to further obscure structure
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Group vendor libs under opaque hashes (no readable package names)
            return 'v';
          }
        },
      },
    },

    // Strip the auto-generated module preload polyfill comment header
    modulePreload: { polyfill: true },

    // Raise the warning threshold (we know the bundle is large)
    chunkSizeWarningLimit: 2000,
  },
})
