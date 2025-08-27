# Kelme Studio - Guia para Agentes de IA

## Visão Geral do Projeto

Este é um site multilíngue para uma agência digital/estúdio criativo construído com Next.js 15, utilizando o App Router moderno e seguindo melhores práticas de arquitetura e desenvolvimento frontend.

## Tecnologias Principais

- **Next.js 15**: Aplicação React com App Router
- **next-intl**: Sistema de internacionalização para suporte a múltiplos idiomas (pt/en)
- **TailwindCSS**: Para estilização, com esquema de cores personalizado
- **Radix UI**: Componentes de UI acessíveis
- **Lucide Icons**: Biblioteca de ícones utilizada em toda a aplicação

## Arquitetura e Estrutura do Projeto

### Estrutura de Pastas

```
kelme-studio/
├── app/                      # Estrutura de rotas do Next.js com App Router
│   ├── [locale]/             # Rotas com localização de idiomas
│   │   ├── layout.tsx        # Layout principal das páginas localizadas
│   │   ├── page.tsx          # Página inicial
│   │   └── contact/          # Subpáginas (exemplo: contato)
│   └── globals.css           # Estilos globais e variáveis de tema
├── components/               # Componentes reutilizáveis
│   ├── ui/                   # Componentes de UI básicos e reutilizáveis
│   ├── blocks/               # Blocos maiores que compõem seções
│   ├── navbar/               # Componentes relacionados à navegação
│   ├── contact/              # Componentes específicos para a página de contato
│   └── [outros]/             # Componentes específicos para cada seção do site
├── i18n/                     # Configuração do sistema de internacionalização
├── layouts/                  # Layouts reutilizáveis
├── lib/                      # Utilitários e helpers
├── messages/                 # Arquivos JSON contendo traduções (en.json, pt.json)
└── public/                   # Arquivos estáticos e imagens
```

### Padrões de Design Adotados

Seguimos uma arquitetura baseada em princípios de Design Atômico e Limpo:

#### 1. Design Atômico

Os componentes são organizados seguindo uma hierarquia de complexidade:

- **Átomos**: Componentes básicos como botões, inputs, ícones (`components/ui/`)
- **Moléculas**: Combinações de átomos formando componentes funcionais simples
- **Organismos**: Seções complexas de UI como headers, footers, etc.
- **Templates**: Layouts que definem a estrutura mas não o conteúdo específico
- **Páginas**: Templates populados com dados reais para interação do usuário

#### 2. Container-Presentational Pattern

Separamos os componentes com lógica de negócio (containers) dos componentes puramente de apresentação:

- **Container Components**: Lidam com a lógica, estado, e requisições
- **Presentational Components**: Focam apenas em renderizar UI baseado em props

#### 3. Data Fetching Patterns

Utilizamos os padrões recomendados pelo Next.js para busca de dados:

- **Server Components**: Priorizamos a busca de dados no servidor sempre que possível
- **Parallelization**: Utilizamos requisições paralelas quando apropriado
- **Fetch Where Needed**: Buscamos dados no componente que precisa deles, aproveitando a memorização automática do Next.js

## Padrões e Convenções

### Internacionalização

- Utilizamos o sistema `next-intl` para gerenciar traduções e rotas localizadas
- Strings são definidas em arquivos JSON em `messages/[locale].json` 
- Acesse as traduções com hooks: `useTranslations()` e `useMessages()`
- Para links entre páginas, use o componente `Link` de `@/i18n/navigation`

```tsx
// Exemplo de como usar traduções
import { useTranslations, useMessages } from 'next-intl';

export function Component() {
  const t = useTranslations();
  const messages: any = useMessages();
  
  return (
    <div>
      <h2>{t("section.title")}</h2>
      <p>{messages.section.content}</p>
    </div>
  );
}
```

### Componentes da Interface

- Os componentes de página principais estão em `/components/`
- Cada seção importante tem seu próprio componente (Hero, Services, Work, etc.)
- Os componentes de UI reutilizáveis estão em `/components/ui/`

### Navegação

- A navegação principal é gerenciada pelo componente `Navbar`
- O hook `useNavMenus()` em `components/navbar/use-nav-menus.tsx` gerencia os dados dos menus
- Ícones para itens do menu são mapeados em `components/navbar/icon-mapper.tsx`
- A interface visual utiliza a nova cor de destaque verde (#27D182) em substituição ao dourado anterior

### Gerenciamento de Estado

- Utilizamos principalmente React Hooks (`useState`, `useReducer`) para estado local
- Para estado global, utilizamos React Context quando necessário
- Minimizamos o estado do cliente usando Server Components sempre que possível

### Tratamento de Erros

- Implementamos error boundaries para capturar erros de renderização
- Usamos try/catch para chamadas de API
- Fornecemos mensagens de erro amigáveis para o usuário

## Melhores Práticas

### Componentes

1. **Nomenclatura**: Use PascalCase para componentes e camelCase para funções/variáveis
2. **Organização**: Cada componente deve ter seu próprio diretório quando necessário
3. **Tipagem**: Use TypeScript para definir props de forma explícita com interfaces e maps
4. **Props**: Desestruture props e use valores padrão quando aplicável
5. **Server vs Client**: Prefira Server Components quando não houver necessidade de estado ou interatividade
6. **Modularização**: Mantenha componentes pequenos e focados em uma única responsabilidade

```tsx
// Exemplo de estrutura de componente
// components/feature/FeatureName/FeatureName.tsx

import styles from './FeatureName.module.css';

export interface IFeatureName {
  prop1: string;
  prop2?: number;
}

export default function FeatureName({ prop1, prop2 = 0 }: IFeatureName) {
  return (
    <div className={styles.container}>
      <h3>{prop1}</h3>
      <p>{prop2}</p>
    </div>
  );
}
```

### Performance

1. **Lazy Loading**: Use dynamic imports para componentes grandes ou raramente usados
2. **Imagens**: Otimize imagens usando o componente `next/image`
3. **Memoização**: Use `useMemo` e `useCallback` para prevenir renderizações desnecessárias
4. **Server Components**: Priorize Server Components para reduzir JavaScript enviado ao cliente

### SEO e Acessibilidade

1. **Metadata**: Use metadados apropriados em cada página
2. **Semântica**: Use elementos HTML semânticos e apropriados
3. **ARIA**: Adicione atributos ARIA e ALT quando necessário para melhorar a acessibilidade
4. **Contraste**: Garanta que as cores tenham contraste suficiente

## Fluxos de Trabalho

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Construir para produção
npm run build
```

### Adicionando Novas Seções/Componentes

1. Verifique se o componente deve ser um Server ou Client Component
2. Crie o componente em `/components/`
3. Adicione as strings de tradução em `messages/en.json` e `messages/pt.json`
4. Priorize o uso de estilos das variáveis definidas em `globals.css`
3. Importe e use o componente nas páginas relevantes

### Modificando Estilos

- Priorize o uso de estilos das variáveis definidas em `globals.css` para accent, primary, secondary, background, text colors
- Use classes Tailwind diretamente nos componentes quando não houver uma variável correspondente em `globals.css`
- Para cores consistentes, use as variáveis definidas em globals.css
- Esquema principal: Fundo escuro (#0F0E0D), texto claro (#F7F7F7), destaque verde (#27D182)
- Gradient principal: Azul (#017DDD) → Verde (#27D182) → Amarelo (#FAD007) com stops em 0%, 52%, 100%

## Escalabilidade e Manutenção

À medida que o projeto cresce, é importante seguir algumas práticas para garantir escalabilidade e manutenção:

### Código Limpo e Legível

1. **Convenções de Nomenclatura**: Mantenha consistência na nomenclatura de arquivos, componentes e funções
2. **Comentários**: Documente código complexo ou não intuitivo
3. **Formatação**: Use formatadores como Prettier para manter consistência
4. **Refatoração**: Refatore regularmente para melhorar a qualidade do código

### Monitorando Performance

1. **Lighthouse**: Execute testes regulares de performance com Lighthouse
2. **Bundle Size**: Monitore o tamanho do bundle JavaScript para evitar crescimento excessivo
3. **Web Vitals**: Acompanhe métricas como CLS, FID e LCP
4. **Renderização no Servidor**: Utilize Server Components para reduzir o trabalho no cliente

### Testing

1. **Testes Unitários**: Escreva testes para componentes e funções isoladas
2. **Testes de Integração**: Teste a interação entre diferentes partes do sistema
3. **Testes de UI**: Verifique a aparência e comportamento dos componentes
4. **Testes de Acessibilidade**: Assegure que o site seja acessível a todos os usuários usando playwright MCP

### MCP (Model-Centric Programming)

1. **Firecrawl**: Para pesquisar sites online e extrair dados em formato markdown
2. **Playwright**: Para testes end-to-end de UI e acessibilidade

## Copywriting e Estratégia de Conteúdo

### Tom de Voz e Estilo de Escrita

- **Estilo Dave Gerhardt**: Direto, conversacional e orientado a resultados
- **Tom de Voz**: Confiante, inovador, profissional mas acessível, inspirador
- **Características principais**:
  - Linguagem clara e direta
  - Foco em inovação, crescimento e resultados sustentáveis
  - Storytelling para ilustrar transformações digitais
  - Uso seletivo de perguntas retóricas para engajamento
  - Incorporação de elementos relacionados à inovação e sustentabilidade

### Estrutura de Textos

1. **Títulos e Cabeçalhos**:
   - Diretos e orientados a benefícios
   - Preferencialmente até 60 caracteres
   - Incluir palavras-chave relevantes para SEO

2. **Corpo do Texto**:
   - Parágrafos curtos (máximo 3-4 linhas)
   - Uso de listas e marcadores para facilitar a leitura
   - Hierarquia de informação clara (pirâmide invertida)

3. **CTAs (Chamadas para Ação)**:
   - Verbos de ação no imperativo
   - Criar senso de urgência quando apropriado
   - Enfatizar o valor que o usuário receberá

### Diretrizes por Seção

- **Página Inicial**: Foco em comunicar visão e diferenciais da Kelme
- **Sobre Nós**: Storytelling sobre a história e valores da agência
- **Serviços**: Destacar benefícios antes de recursos técnicos
- **Portfólio**: Narrativa orientada a resultados para cada case
- **Contato**: Tom acolhedor e acessível

## Identidade Visual

### Paleta de Cores

- **Verde** (#27D182): Cor primária de destaque, representa crescimento e inovação
- **Azul** (#017DDD): Cor complementar, representa confiança e profissionalismo
- **Amarelo** (#FAD007): Cor de apoio, representa criatividade e otimismo
- **Branco** (#F7F7F7): Cor secundária, representa clareza e espaço
- **Preto/Cinza Escuro** (#0F0E0D): Cor de fundo, representa solidez e elegância
- **Verde Secundário** (#3F9E59): Cor de apoio para áreas verdes
- **Cinza Claro** (#D7D7D7): Cor para elementos neutros secundários

**Uso das Cores:**
- Verde: Elementos de destaque, CTAs, acentos principais
- Azul: Elementos interativos secundários, seções de destaque
- Amarelo: Elementos de notificação, destaques terciários
- Branco: Texto principal, áreas de respiro
- Preto/Cinza Escuro: Fundos, textos secundários

### Simbolismo e Elementos da Marca

- **Conceitos-Chave**: Crescimento, inovação, fluidez, visão além do horizonte, perspectiva superior
- **Logo**: Águia com cabeça voltada à esquerda, garras à vista, com elementos destacados em gradiente verde-azul
- **Metáforas Visuais**: Altitude, expansão, liberdade, visão estratégica, transformação digital

### Componentes de Design

- **Iconografia**: 
  - Biblioteca principal: Lucide Icons para interface
  - Simple Icons para redes sociais e empresas
  - Estilo minimalista com linhas finas
- **Cards**: Design futurista com efeito glassmorphism e acentos em gradiente verde-azul
- **Botões**: Arredondados com gradientes de verde a azul ou bordas verdes (raio: 8px)
- **Tipografia**: 
  - Fonte principal: Satoshi (pesos: 300, 400, 500, 700)
  - Títulos: Rubik
  - Corpo: Satoshi Regular/Light

### Diretrizes de Imagem

- **Estilo Fotográfico**: Imagens de alta resolução com tons contrastantes
- **Tratamento**: Leve sobreposição com gradiente verde-azul nas imagens para unidade visual
- **Temas Visuais**: Ambientes modernos, tecnologia, profissionalismo, inovação, sustentabilidade
- **Composição**: Espaço negativo generoso, regra dos terços, linhas direcionais ascendentes

### Animações e Interações

- **Princípios**: Suaves, elegantes, com propósito funcional
- Utilize a biblioteca GSAP para animações
- **Transições**: Curvas de easing naturais, duração média de 300-500ms
- **Hover**: Efeitos sutis de escala (1.02-1.05) com destaque em verde (#27D182)
- **Scroll**: Animações de fade e slide em elementos ao entrar na viewport
- **Microinterações**: Feedback visual para ações do usuário com acentos em gradiente verde-azul
- **Gradientes**: Transições fluidas entre azul (#017DDD), verde (#27D182) e amarelo (#FAD007)

### Design Responsivo

- **Abordagem**: Mobile-first com breakpoints estratégicos
- **Breakpoints principais**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
  - Desktop grande: > 1280px
- **Técnicas**:
  - Unidades flexíveis (rem, %, vh/vw)
  - Grid e Flexbox para layouts adaptativos
  - Conteúdo priorizado por relevância em telas menores
- **Imagens**: Responsivas com srcset para diferentes densidades de pixel
- **Touch**: Áreas de toque generosas (mínimo 44x44px) para interfaces móveis

### Diretrizes de Acessibilidade

- **Conformidade**: Segue diretrizes WCAG 2.1 nível AA
- **Contraste de Cores**: Mínimo 4.5:1 para textos padrão, 3:1 para textos grandes (verde #27D182 deve ser usado em elementos maiores ou com contraste reforçado)
- **Navegação por Teclado**: Todos os elementos interativos são acessíveis via teclado
- **Atributos ARIA**: Utilizados para melhorar a experiência com leitores de tela
- **Estados de Foco**: Visíveis e consistentes com contornos em verde (#27D182)
- **Textos Alternativos**: Todas as imagens possuem descrições apropriadas
- **Estrutura Semântica**: Uso apropriado de cabeçalhos (H1-H6) e elementos HTML5
- **Formulários**: Labels explícitos e mensagens de erro acessíveis
- **Testes**: Verificação regular com ferramentas automatizadas e testes manuais


### Princípios de Desenvolvimento

1. **DRY (Don't Repeat Yourself)**: Evite duplicação de código
2. **KISS (Keep It Simple, Stupid)**: Mantenha soluções simples e diretas
3. **YAGNI (You Aren't Gonna Need It)**: Não adicione funcionalidades antes de precisar delas
4. **Composição sobre Herança**: Prefira composição de componentes à herança
5. **Imutabilidade**: Trate dados como imutáveis para evitar efeitos colaterais

Este guia serve como referência para manter a consistência e qualidade do código no projeto Kelme Studio. As práticas e padrões aqui descritos devem ser seguidos por todos os membros da equipe para garantir um desenvolvimento eficiente e sustentável.
