// CORS Proxy Server - للتطوير فقط
import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = 3001;

// تفعيل CORS لكل الطلبات
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
  credentials: true
}));

// Proxy middleware
app.use('/', createProxyMiddleware({
  target: 'http://91.108.121.46:8080',
  changeOrigin: true,
  onProxyReq: (proxyReq, req, ) => {
    console.log(`[Proxy] ${req.method} ${req.url} -> http://91.108.121.46:8080${req.url}`);
    
    // إزالة headers مشبوهة
    proxyReq.removeHeader('origin');
    proxyReq.removeHeader('referer');
  },
  onProxyRes: (proxyRes, req, ) => {
    console.log(`[Response] ${proxyRes.statusCode} ${req.url}`);
    
    // إضافة CORS headers للـ response
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Accept, Authorization';
  },
  onError: (err, req, res) => {
    console.error('[Proxy Error]', err);
    res.status(500).json({ error: 'Proxy error', message: err.message });
  }
}));

app.listen(PORT, () => {
  console.log(`\n🚀 CORS Proxy Server running on http://localhost:${PORT}`);
  console.log(`📡 Forwarding requests to http://91.108.121.46:8080\n`);
});
