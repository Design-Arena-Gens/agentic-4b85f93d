const quickAudit = [
  {
    title: "Título e SEO",
    bullets: [
      "Título atual não comunica claramente estilo, instrumento, momento de uso ou artista – dificulta buscas e cliques.",
      "Ausência de palavras-chave com volume em worship instrumental (ex.: 'louvor instrumental para oração', 'soaking worship').",
      "Sem indicação de duração/ambiente (ex.: estudo bíblico, oração da madrugada) que melhora taxa de clique.",
    ],
  },
  {
    title: "Thumbnail",
    bullets: [
      "Thumbnail escura e pouco contrastada; elementos centrais pequenos em telas mobile.",
      "Não há elementos visuais que transmitam sensação de adoração/contemplação (ex.: luzes, mãos em oração, instrumentos).",
      "Tipografia e logo ainda não transmitem identidade memorável ou profissional.",
    ],
  },
  {
    title: "Descrição e Metadados",
    bullets: [
      "Descrição curta sem CTA para playlist, inscrição ou tempo de audição.",
      "Sem timestamps/tempos ou tags estratégicas (ex.: 'worship instrumental', 'oração e adoração').",
      "Links sociais inexistentes – desperdício de potencial de retenção fora do YouTube.",
    ],
  },
  {
    title: "Conteúdo",
    bullets: [
      "Apenas 1 vídeo; algoritmo não tem sinais de consistência ou audiência.",
      "Sem playlists, trailer do canal ou seções destacando ambientes de uso.",
      "Não há prova social nem engajamento inicial (comentários fixados, resposta do creator).",
    ],
  },
];

const timeline = [
  {
    label: "Dia 0-3 • Reparo imediato",
    objectives: [
      "Reposicionar vídeo com título/descrição/thumbnail otimizados e gatilhos emocionais.",
      "Criar identidade visual mínima (logo dark elegante, padrões para thumbnails).",
      "Ativar comentários, CTA de inscrição e fixar mensagem pedindo feedback.",
    ],
    tasks: [
      "Reescrever título com palavras-chave + benefício: ex. 'Louvor Instrumental para Oração Intensa (1h) | Worship Cinemático AGNUS Sound'.",
      "Escrever descrição de 3-4 parágrafos: narrativa, ambientes de uso, CTA ('Inscreva-se', 'Ouça playlist'), hashtags (#louvorinstrumental #soakingworship).",
      "Atualizar tags com termos de cauda longa (sugeridos via vidIQ/Tubebuddy).",
      "Produzir thumbnail com alto contraste (fundo escuro com luz dourada, título curto em tipografia serif/clean).",
      "Responder comentários existentes, fixar comentário com pergunta ('Em que momento você usou essa trilha?').",
    ],
  },
  {
    label: "Semana 1-2 • Fundamentos e biblioteca inicial",
    objectives: [
      "Publicar mínimo 3 vídeos adicionais, gerando sinal de consistência para o algoritmo.",
      "Organizar o canal com branding, playlists e sessão 'para quem é'.",
      "Coletar tráfego inicial via comunitários e micro-parcerias.",
    ],
    tasks: [
      "Planejar 3 moods principais (ex.: 'Adoração Contemplativa', 'Oração da Madrugada', 'Meditação Bíblica').",
      "Usar Suno ou ferramentas similares para criar faixas originais com variações instrumentais.",
      "Editar áudio com transições suaves, loop de 60min, normalizar volume (-14 LUFS).",
      "Criar thumbnails padronizadas (logo no canto, cor distinta por mood).",
      "Configurar banner, avatar e descrição do canal com proposta de valor + promessa dark channel.",
      "Criar playlists temáticas (Min. 3) e definir vídeo em destaque para visitantes não inscritos.",
      "Distribuir vídeos em grupos de oração, comunidades gospel no WhatsApp/Telegram, Reddit r/ChristianMusic, fóruns e Discords.",
    ],
  },
  {
    label: "Mês 1-2 • Crescimento previsível",
    objectives: [
      "Subir biblioteca a 12-15 vídeos (3 uploads/semana), maximizando watch time.",
      "Iniciar estratégia de SEO + Shorts de reciclagem para funil de descoberta.",
      "Criar linha editorial de comentários e comunidade para prova social.",
    ],
    tasks: [
      "Publicar 3 vídeos semanais (seg/qua/sex 7h ou 21h BRT, testando horários).",
      "Extrair trechos de 60s para Shorts com CTA: 'Link completo na descrição'.",
      "Postar community posts semanais com perguntas e trechos devocionais.",
      "Adicionar capítulos (ex.: Introdução, Clímax, Final prayer pad) para retenção.",
      "Testar títulos otimizados com variações (A/B via mudanças quinzenais).",
      "Solicitar feedback de líderes de ministérios via email/Instagram.",
    ],
  },
  {
    label: "Mês 3-4 • Escala e monetização",
    objectives: [
      "Atingir 1.000 inscritos e 4.000 horas com mix de conteúdo evergreen e eventos ao vivo.",
      "Abrir novas fontes de receita (streaming, bundles, prints de partitura).",
      "Iniciar lives de oração instrumental 1x/semana para watch time contínuo.",
    ],
    tasks: [
      "Programar lives de 2-3h com loop e chat moderado, incentivando superchat/apoiadores.",
      "Lançar campanha de inscrição: 'Rumo aos 1k – presente exclusivo quando alcançarmos'.",
      "Converter faixas em álbuns no DistroKid/Amuse e linkar na descrição.",
      "Construir landing page simples (Notion/Typedream) para capturar email (newsletter devocional).",
      "Aplicar para Programa de Parcerias assim que bater critérios; revisar políticas de conteúdo reutilizado.",
      "Ativar membros do canal com recompensas (wallpapers, stems, ringtones).",
    ],
  },
];

const kpiChecklist = [
  {
    metric: "Publicação",
    target: "3 vídeos longos por semana + 3 Shorts de reciclagem",
    why: "Sinaliza consistência, amplia superfícies de descoberta (Shorts -> long form).",
  },
  {
    metric: "Watch Time",
    target: "Meta: 350h/mês até Mês 2; 500h/mês no Mês 3",
    why: "Ritmo necessário para acumular 4000h em ~8-10 meses, acelerado por lives.",
  },
  {
    metric: "CTR",
    target: "Meta 6-8% nos primeiros 30 dias",
    why: "Reflete qualidade de thumbnail/título; abaixo de 4% indica urgente otimização.",
  },
  {
    metric: "Retenção de 1 minuto",
    target: "Acima de 60% no minuto 1",
    why: "Mostra se intros estão eficientes e se público engata na atmosfera rapidamente.",
  },
  {
    metric: "Engajamento",
    target: "Responder 100% dos comentários em até 24h",
    why: "Aumenta sinais de comunidade e prioriza vídeos em recomendações.",
  },
  {
    metric: "Inscrições",
    target: "15-20 novos inscritos/semana até Mês 2",
    why: "Marcação mínima para ritmo de monetização em 6-7 meses.",
  },
];

const monetizationNotes = [
  "Guideline principal: evitar conteúdo reutilizado; deixe claro que as faixas são autorais/IA assistidas com curadoria própria.",
  "Mantenha registros de criação (arquivos fonte do Suno, ajustes no DAW) para comprovar originalidade em eventual revisão.",
  "Use descrições para declarar uso de IA + arranjos próprios, destacando trabalho de mix/master.",
  "Ao atingir 1k/4k, reúna prints de analytics mostrando origem de tráfego orgânico + lives para reforçar autenticidade.",
  "Considere diversificar para streaming (Spotify, Apple Music) e monetização cruzada (Symphonic, CD Baby) – reforça legitimidade.",
  "Respeite direitos de imagem/arte nos thumbnails (use bancos como Unsplash, Pexels, Midjourney próprio).",
];

const resources = [
  {
    name: "vidIQ / TubeBuddy",
    detail: "Pesquisa de palavras-chave, análise de concorrentes, acompanhamento de CTR.",
  },
  {
    name: "Canva Pro ou Photopea",
    detail:
      "Templates consistentes para thumbnails (usar grades 16:9 com foco no centro e texto máximo de 3 palavras).",
  },
  {
    name: "DaVinci Resolve / Premiere / CapCut Desktop",
    detail: "Masterização leve e aplicação de efeitos visuais (luz, partículas) para loops em vídeo.",
  },
  {
    name: "Notion ou Airtable",
    detail: "Planejamento editorial, calendário e acompanhamento de métricas semanais.",
  },
  {
    name: "OBS + Restream",
    detail: "Lives programadas com cenário animado, contador e CTA de inscrição.",
  },
  {
    name: "Mailerlite / Beehiiv",
    detail: "Newsletter devocional quinzenal para criar base fora do YouTube e aumentar retorno.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 text-zinc-100">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:px-8 lg:px-12">
        <header className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-200">
            AGNUS Sound • Dark Worship Instrumental
          </div>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Diagnóstico completo e plano de ação para crescer e monetizar um
            canal dark de worship instrumental.
          </h1>
          <p className="max-w-3xl text-lg text-zinc-300">
            Objetivo: atingir monetização YouTube (1.000 inscritos + 4.000 horas)
            em até 6-8 meses com estratégia fundada em conteúdo autoral/IA
            curado, otimização de SEO, consistência editorial e construção de
            comunidade.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
            <a
              href="https://youtube.com/@agnussound?si=VrSSVo66rxv7FzB9"
              className="rounded-full border border-zinc-700 px-4 py-2 transition hover:border-emerald-400 hover:text-emerald-200"
              target="_blank"
              rel="noreferrer"
            >
              Visitar canal
            </a>
            <a
              href="https://youtu.be/x7vOCYb6rFA?si=35bxy24ihPoIC-Y9"
              className="rounded-full border border-zinc-700 px-4 py-2 transition hover:border-emerald-400 hover:text-emerald-200"
              target="_blank"
              rel="noreferrer"
            >
              Analisar vídeo atual
            </a>
            <span className="rounded-full border border-zinc-700 px-4 py-2">
              Nicho: Worship instrumental, devocional, oração, soaking
            </span>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {quickAudit.map((item) => (
            <article
              key={item.title}
              className="space-y-4 rounded-3xl border border-white/5 bg-white/[0.03] p-6 shadow-lg shadow-black/40"
            >
              <h2 className="text-xl font-semibold text-emerald-200">
                {item.title}
              </h2>
              <ul className="space-y-3 text-sm leading-relaxed text-zinc-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="space-y-8 rounded-3xl border border-white/10 bg-white/[0.04] p-10">
          <header className="space-y-2">
            <h2 className="text-3xl font-semibold text-emerald-100">
              Roadmap passo a passo
            </h2>
            <p className="max-w-3xl text-sm uppercase tracking-wider text-zinc-400">
              Checklist acionável com foco em SEO, consistência e construção de
              autoridade para monetização.
            </p>
          </header>
          <div className="space-y-8">
            {timeline.map((phase) => (
              <article
                key={phase.label}
                className="rounded-3xl border border-white/5 bg-black/40 p-8"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <h3 className="text-2xl font-semibold text-emerald-200">
                    {phase.label}
                  </h3>
                  <div className="max-w-2xl space-y-3 text-sm text-zinc-300">
                    <p className="font-medium uppercase tracking-wider text-zinc-400">
                      Objetivos centrais
                    </p>
                    <ul className="space-y-2">
                      {phase.objectives.map((objective) => (
                        <li key={objective} className="flex gap-3">
                          <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <p className="font-medium uppercase tracking-wider text-zinc-400">
                    Checklist
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    {phase.tasks.map((task) => (
                      <li key={task} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-white/5 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-semibold text-emerald-100">
              KPI e métricas de pista
            </h2>
            <ul className="space-y-4 text-sm text-zinc-300">
              {kpiChecklist.map((item) => (
                <li
                  key={item.metric}
                  className="rounded-2xl border border-white/5 bg-black/40 p-4"
                >
                  <p className="text-base font-semibold text-emerald-200">
                    {item.metric}
                  </p>
                  <p className="text-sm font-medium text-zinc-200">
                    Alvo: {item.target}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-zinc-400">
                    Por quê
                  </p>
                  <p className="text-sm">{item.why}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-emerald-50">
            <h2 className="text-2xl font-semibold text-emerald-50">
              YouTube Partner Program: evitar reprovação
            </h2>
            <ul className="space-y-3 text-sm">
              {monetizationNotes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-300" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.02] p-10">
          <header className="space-y-2">
            <h2 className="text-3xl font-semibold text-emerald-100">
              Embalagem, branding e retenção
            </h2>
            <p className="text-sm uppercase tracking-wider text-zinc-400">
              Diretrizes práticas para fortalecer marca e sinalizar valor ao algoritmo.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="space-y-3 rounded-2xl border border-white/5 bg-black/40 p-6">
              <h3 className="text-xl font-semibold text-emerald-200">
                Identidade visual
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>
                  Paleta: tons escuros (preto, cinza grafite) com acentos
                  dourados/verde-emerald para transmitir reverência e esperança.
                </li>
                <li>
                  Tipografia: serif elegante (Playfair, Cinzel) ou sans fina (Montserrat).
                </li>
                <li>
                  Logo minimalista com símbolo agnus (cordeiro) estilizado; usar
                  em thumbnails e watermark.
                </li>
                <li>
                  Pack de motion backgrounds (luz em movimento, partículas) para looping em 60fps.
                </li>
              </ul>
            </article>
            <article className="space-y-3 rounded-2xl border border-white/5 bg-black/40 p-6">
              <h3 className="text-xl font-semibold text-emerald-200">
                Experiência do vídeo
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>
                  Intros com fade-in suave de 8s e mensagem-sussurro ("Abra seu momento devocional...").
                </li>
                <li>
                  Inserir visualizador de onda discreto ou partículas reagindo à música para retenção visual.
                </li>
                <li>
                  Metadado "localização" configurada para países com maior público gospel (Brasil, EUA).
                </li>
                <li>
                  Finalizar com CTA em tela final para playlists e inscrição, usando cards nos primeiros 30s.
                </li>
              </ul>
            </article>
            <article className="space-y-3 rounded-2xl border border-white/5 bg-black/40 p-6">
              <h3 className="text-xl font-semibold text-emerald-200">
                Distribuição e parcerias
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>
                  Parcerias com perfis cristãos no Instagram/TikTok para usar trechos, com crédito e link fixado.
                </li>
                <li>
                  Disponibilizar versão sem voz para igrejas + pack gratuito de 3 faixas em troca de inscrição.
                </li>
                <li>
                  Participar de lives colaborativas com canais de oração (narradores, pregadores).
                </li>
                <li>
                  Criar playlist colaborativa com outras trilhas instrumentais cristãs para ampliar watch time.
                </li>
              </ul>
            </article>
            <article className="space-y-3 rounded-2xl border border-white/5 bg-black/40 p-6">
              <h3 className="text-xl font-semibold text-emerald-200">
                Expansão de receita
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>
                  Produtos digitais: stems, partituras, pacotes de ambientações sonoras para igrejas/estúdios.
                </li>
                <li>
                  Afiliados: equipamentos de áudio, apps devocionais, cursos de produção musical cristã.
                </li>
                <li>
                  Programa de membros com bastidores, devocionais guiados, acesso antecipado às faixas.
                </li>
                <li>
                  Patreon/apoia-se com recompensas espirituais (devocionais em PDF, wallpapers bíblicos).
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-white/5 bg-white/[0.03] p-10">
          <header className="space-y-2">
            <h2 className="text-3xl font-semibold text-emerald-100">
              Ferramentas recomendadas e stack operacional
            </h2>
            <p className="text-sm uppercase tracking-wider text-zinc-400">
              Otimize tempo, padronize entregas e gere provas de originalidade.
            </p>
          </header>
          <div className="grid gap-4 md:grid-cols-2">
            {resources.map((resource) => (
              <article
                key={resource.name}
                className="rounded-2xl border border-white/5 bg-black/40 p-6"
              >
                <p className="text-lg font-semibold text-emerald-200">
                  {resource.name}
                </p>
                <p className="mt-2 text-sm text-zinc-300">{resource.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-emerald-500/10 bg-emerald-500/10 p-10 text-emerald-50">
          <header className="space-y-2">
            <h2 className="text-3xl font-semibold">Checklist de rotinas</h2>
            <p className="text-sm uppercase tracking-wider text-emerald-200">
              Atualize semanalmente e ajuste conforme métricas.
            </p>
          </header>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-emerald-400/30 bg-black/30 p-6">
              <h3 className="text-xl font-semibold text-emerald-50">
                Segunda-feira
              </h3>
              <ul className="space-y-2 text-sm">
                <li>Revisar analytics (CTR, retenção, origem do tráfego).</li>
                <li>Planejar roteiro sonoro das faixas da semana.</li>
                <li>Agendar post comunidade com devocional/versículo.</li>
              </ul>
            </div>
            <div className="space-y-3 rounded-2xl border border-emerald-400/30 bg-black/30 p-6">
              <h3 className="text-xl font-semibold text-emerald-50">
                Terça-feira
              </h3>
              <ul className="space-y-2 text-sm">
                <li>Produção musical (Suno + DAW) e refinamento de mix.</li>
                <li>Gerar visual loop + inserir branding.</li>
                <li>Criar 1 Short derivado (trecho de clímax).</li>
              </ul>
            </div>
            <div className="space-y-3 rounded-2xl border border-emerald-400/30 bg-black/30 p-6">
              <h3 className="text-xl font-semibold text-emerald-50">
                Quinta-feira
              </h3>
              <ul className="space-y-2 text-sm">
                <li>Upload de vídeo longo e Short correspondente.</li>
                <li>Revisar SEO (cards, telas finais, palavras-chave).</li>
                <li>Programar disparo em grupos/comunidades.</li>
              </ul>
            </div>
            <div className="space-y-3 rounded-2xl border border-emerald-400/30 bg-black/30 p-6">
              <h3 className="text-xl font-semibold text-emerald-50">
                Sábado
              </h3>
              <ul className="space-y-2 text-sm">
                <li>Live ou première com chat ativo e moderador convidado.</li>
                <li>Responder todos os comentários e fixar testemunhos.</li>
                <li>Atualizar dashboard de métricas e ajustar próximos testes.</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-sm text-zinc-400">
          <p>
            Lembre-se: consistência + qualidade percebida + comunidade =
            algoritmo a seu favor. Mantenha narrativa de canal "refúgio sonoro"
            e documente cada evolução. Ajuste títulos/thumbnail sempre que CTR
            cair. A monetização é consequência direta de watch time, então dê
            prioridade a experiências longas (60-120 min) e lives regulares.
          </p>
        </footer>
      </main>
    </div>
  );
}
