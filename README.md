# 🚀 EvoNexus Kem Setup

Deploy do EvoNexus em minutos via Coolify.

---

## ⚡ Como Instalar no Coolify (Web UI)

### Passo 1 — Criar o recurso

No Coolify: **Projeto** → **+ Novo Recurso** → **Docker Compose**

### Passo 2 — Colar o arquivo

Cole o conteúdo de `docker-compose.yml` no campo de conteúdo do Compose.

### Passo 3 — Configurar o domínio

Na aba **Environment Variables**, adicione:

```
DOMAIN = seu.dominio.com.br
```

> ⚠️ **Atenção**: O domínio precisa ser configurado em **dois lugares** no Coolify:
>
> 1. **Environment Variables** → `DOMAIN=seu.dominio.com.br`  
>    *(para a aplicação saber sua URL pública)*
>
> 2. **Aba "Domains" do serviço `evonexus_dashboard`** → adicione `seu.dominio.com.br`  
>    *(para o Traefik rotear o tráfego e gerar o SSL)*

### Passo 4 — Deploy

Clique em **Save** e depois **Deploy**. Aguarde 2-3 minutos.

### Passo 5 — Configurar a chave da IA

Após o deploy, acesse `https://seu.dominio.com.br` e vá em **Configurações → Providers**.  
Adicione sua `ANTHROPIC_API_KEY` para ativar o scheduler e o bot Telegram.

### Passo 6 — Pronto! ✅

```
https://seu.dominio.com.br
```

---

## 📦 O Que Você Ganha

| Item | Quantidade |
|---|---|
| Agentes de IA | 38 (Clawdia, Flux, Atlas, Oracle, Pulse, Sage, Pixel, etc.) |
| Skills de automação | 175+ |
| Volumes persistentes | 15 (dados não se perdem em updates) |
| SSL automático | ✅ (Let's Encrypt via Traefik) |

---

## 🔄 Como Atualizar

Quando houver nova versão do EvoNexus:

1. Copie o novo `docker-compose.yml` deste repositório
2. Cole no Coolify → **Save & Redeploy**
3. Seus dados persistem automaticamente (volumes Docker)

---

## 🆘 Problemas Comuns

| Problema | Solução |
|---|---|
| `Network 'coolify' not found` | No servidor: `docker network create coolify` |
| Site não abre (503) | Verifique se o domínio está na aba "Domains" do serviço |
| Site não abre (DNS) | Confirme que o DNS aponta para o IP do servidor |
| Dashboard abre mas IA não responde | Configure `ANTHROPIC_API_KEY` nas Configurações |
| Scheduler em loop de restart | Normal até configurar a `ANTHROPIC_API_KEY` |

---

## 📚 O Que é EvoNexus?

EvoNexus é uma plataforma de **IA + Automação** com:

- **38 agentes especializados** (operações, finanças, marketing, CS, engenharia, etc.)
- **Agentes proativos** que trabalham no horário agendado sem você pedir
- **175+ skills** de automação prontas para usar
- **Memória persistente** entre sessões — os agentes lembram do contexto
- **Integrações** com Discord, Telegram, Stripe, GitHub, Linear, Omie, etc.

---

**v0.33.0-kem-ready.2**
