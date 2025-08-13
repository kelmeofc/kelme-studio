"use client"

/**
 * ARQUIVO REFATORADO
 * 
 * Este componente foi completamente refatorado seguindo os princípios de Clean Code.
 * A implementação atual está em:
 * - components/navbar/index.tsx (componente principal)
 * - components/navbar/icon-mapper.tsx (mapeamento de ícones)
 * - components/navbar/use-nav-menus.tsx (hook para gerenciamento de menus)
 * - components/navbar/styles.tsx (estilos reutilizáveis)
 * - components/navbar/mobile-menu.tsx (componente de menu móvel)
 * 
 * Este arquivo é mantido apenas para compatibilidade com código existente.
 */

import { Navbar as NavigationBar } from "@/components/navbar/index"

/**
 * Componente wrapper para manter compatibilidade com importações existentes.
 * Todo o código foi movido para a implementação modular em components/navbar/
 */
export function Navbar() {
  return <NavigationBar />;
}
