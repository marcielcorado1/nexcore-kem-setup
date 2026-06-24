/**
 * claude-bridge.js — Terminal Bypass Fix
 * 
 * Problema: no Docker, o processo roda como root, e Claude/OpenClaude bloqueia
 * a flag --dangerously-skip-permissions
 * 
 * Solução: converter a flag em variável de ambiente CLAUDE_DANGEROUSLY_SKIP_PERMISSIONS=1
 * 
 * Alteração: linha ~65-70
 * 
 * ANTES:
 *   const bypassEnv = dangerouslySkipPermissions ? { CLAUDE_DANGEROUSLY_SKIP_PERMISSIONS: '1' } : {};
 *   // nunca era usado porque a flag vinha sem valor
 * 
 * DEPOIS:
 *   const bypassEnv = (dangerouslySkipPermissions || process.env.CLAUDE_DANGEROUSLY_SKIP_PERMISSIONS === '1') 
 *     ? { CLAUDE_DANGEROUSLY_SKIP_PERMISSIONS: '1' } 
 *     : {};
 * 
 * Resultado: Terminal funciona no Docker com env var setada no docker-compose
 */

// O arquivo completo é copiado do container oficial
// Esta é apenas uma referência do patch aplicado
