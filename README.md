# 🎥 OBS Cloud P2P

> **Streaming colaborativo com WebRTC P2P e integração OBS Studio**

Plataforma que permite streaming para YouTube com participantes remotos conectados via peer-to-peer, eliminando a necessidade de provedores como Zoom.

## 🚀 Status Atual

- ✅ **Setup Completo** - Next.js 14 + Vercel + GitHub
- ✅ **Interface Base** - UI para host/participantes
- 🔄 **Em Desenvolvimento** - Comunicação WebRTC P2P

## 🌐 Links

- **🔗 Live Demo:** https://obs-cloud-p2p.vercel.app
- **📚 Documentação Completa:** [SETUP_REFERENCE.md](./SETUP_REFERENCE.md)
- **🎯 Especificação do Projeto:** [CLOUD_P2P_PROJECT.md](./CLOUD_P2P_PROJECT.md)

## ⚡ Quick Start

```bash
# Clone e setup
git clone https://github.com/brotto/obs-cloud-p2p.git
cd obs-cloud-p2p
npm install

# Desenvolvimento local
npm run dev
# → http://localhost:3000

# Deploy (automático via push)
git push origin main
# → https://obs-cloud-p2p.vercel.app
```

## 🏗️ Arquitetura

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Web Frontend  │◄──►│  Backend Cloud   │◄──►│  OBS Studio     │
│   (WebRTC P2P)  │    │ (Signaling/TURN) │    │  (Local Host)   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                        │                       │
         ▼                        ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Participantes │    │   YouTube RTMP   │    │  Local Capture  │
│   (WebRTC)      │    │   Streaming      │    │  & Mixing       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 🛠️ Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **P2P:** WebRTC, SimplePeer, Socket.io
- **Deploy:** Vercel (auto-deploy via GitHub)
- **OBS:** Plugin customizado (futuro)

## 📋 Roadmap

### ✅ Fase 0: Setup (Completa)
- [x] Configuração Vercel + GitHub
- [x] Next.js 14 com TypeScript
- [x] Interface base para host/participantes

### 🔄 Fase 1: MVP P2P (Em Andamento)
- [ ] Servidor de sinalização
- [ ] Conexão WebRTC entre 2 participantes
- [ ] Troca de vídeo/áudio básica

### 📅 Fase 2: Integração OBS
- [ ] Plugin OBS para captura web
- [ ] Bridge WebRTC ↔ OBS
- [ ] Streaming RTMP para YouTube

### 📅 Fase 3: Recursos Avançados
- [ ] Múltiplos participantes (até 6)
- [ ] Controles de moderação
- [ ] Chat integrado

## 🔧 Desenvolvimento

```bash
npm run dev      # Servidor desenvolvimento
npm run build    # Build produção
npm run start    # Servidor produção
npm run lint     # ESLint
```

## 📖 Documentação

- **[SETUP_REFERENCE.md](./SETUP_REFERENCE.md)** - Setup completo e configurações
- **[CLOUD_P2P_PROJECT.md](./CLOUD_P2P_PROJECT.md)** - Especificação técnica detalhada

---

**🤖 Desenvolvido com Claude Code**
**📅 Última atualização:** Outubro 2024
