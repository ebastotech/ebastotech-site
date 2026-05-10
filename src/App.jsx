import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function EBastoTechSite() {
  useEffect(() => {
    document.title = "EBasto Tech | Limpeza, Formatação e Otimização de PCs em Mondim de Basto";
    const description = "EBasto Tech em Mondim de Basto: limpeza de PCs, formatação, otimização, pasta térmica e manutenção preventiva.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, []);
  const services = [
    {
      icon: "💻",
      title: "Limpeza & Otimização",
      text: "Remoção de pó, verificação geral e otimização para melhor desempenho.",
    },
    {
      icon: "🌡️",
      title: "Pasta térmica & Manutenção preventiva",
      text: "Aplicação de pasta térmica, limpeza interna e verificação básica para melhores temperaturas e estabilidade.",
    },
    {
      icon: "🛠️",
      title: "Formatação & Otimização",
      text: "Sistema mais limpo, rápido e estável para uso diário ou gaming.",
    },
  ];

  const values = [
    { icon: "🛡️", label: "Confiança" },
    { icon: "⚡", label: "Desempenho" },
    { icon: "🧠", label: "Cuidado técnico" },
  ];

  const setupImage = "https://i.imgur.com/bYQjvAD.jpeg";
  const logoImage = "https://i.imgur.com/u8kaoEP.png";

  const galleryItems = [
    {
      title: "Setup pessoal EBasto Tech",
      label: "Projeto real",
      image: setupImage,
    },
    {
      title: "Identidade EBasto Tech",
      label: "Marca",
      image: logoImage,
    },
  ];

  const socials = [
    {
      name: "Instagram",
      icon: "📸",
      url: "https://www.instagram.com/ebastotech/",
    },
    {
      name: "Facebook",
      icon: "📘",
      url: "https://www.facebook.com/profile.php?id=61589279948684&locale=pt_PT",
    },
    {
      name: "TikTok em breve",
      icon: "🎵",
      url: "#contactos",
    },
  ];

  const shopBuilds = [
    {
      name: "EBasto Starter",
      price: "desde 499€",
      tag: "Gaming acessível",
      specs: ["PC otimizado", "SSD rápido", "Bom airflow", "Pronto a usar"],
      note: "Ideal para quem quer começar a jogar sem gastar uma fortuna.",
    },
    {
      name: "EBasto Performance",
      price: "desde 599€",
      tag: "Melhor custo/benefício",
      specs: ["Build equilibrada", "Gráfica dedicada", "Windows otimizado", "Testes básicos incluídos"],
      note: "Pensado para boa performance em jogos e uso diário.",
    },
    {
      name: "EBasto Custom",
      price: "sob orçamento",
      tag: "À medida",
      specs: ["Escolha de peças", "Montagem cuidada", "Limpeza visual", "Ajustado ao teu objetivo"],
      note: "Para quem quer algo mais personalizado conforme orçamento.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white scroll-smooth">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center bg-[#030712]"
      >
        <div className="text-center">
          <img
            src={logoImage}
            alt="EBasto Tech"
            className="mx-auto h-28 w-auto animate-pulse mix-blend-screen drop-shadow-[0_0_35px_rgba(59,130,246,0.55)]"
          />
          <p className="mt-4 text-lg font-bold tracking-[0.3em] text-blue-300">EBASTO TECH</p>
        </div>
      </motion.div>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="EBasto Tech" className="h-10 w-auto mix-blend-screen" />
            <span className="text-lg font-black tracking-wide">
              EBasto <span className="text-blue-400">Tech</span>
            </span>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <a href="#servicos" className="text-sm font-semibold text-slate-300 transition hover:text-blue-400">Serviços</a>
            <a href="#processo" className="text-sm font-semibold text-slate-300 transition hover:text-blue-400">Como funciona</a>
            <a href="#loja" className="text-sm font-semibold text-slate-300 transition hover:text-blue-400">Loja</a>
            <a href="#contactos" className="text-sm font-semibold text-slate-300 transition hover:text-blue-400">Contactos</a>
          </div>
        </div>
      </motion.nav>

      <section className="relative flex min-h-screen items-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.35),transparent_35%),radial-gradient(circle_at_20%_40%,rgba(14,165,233,0.18),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              Mondim de Basto
            </div>

            <div className="mb-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
              <img
                src={logoImage}
                alt="EBasto Tech Logo"
                className="h-16 w-auto mix-blend-screen drop-shadow-[0_0_25px_rgba(59,130,246,0.45)] sm:h-20 md:h-24"
              />

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                EBasto <span className="text-blue-400">Tech</span>
              </h1>
            </div>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300 sm:text-xl md:text-2xl">
              Limpeza, manutenção e otimização de PCs com cuidado, confiança e desempenho.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-2xl bg-blue-500 px-6 py-3 font-bold shadow-lg shadow-blue-500/25 transition hover:bg-blue-400" href="mailto:ebastotech@gmail.com">
                Vamos melhorar o teu setup
              </a>
              <a className="rounded-2xl border border-white/15 px-6 py-3 font-bold transition hover:bg-white/10" href="#servicos">
                Ver serviços
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {socials.map((social) => (
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  key={social.name}
                  href={social.url}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400/40 hover:bg-blue-500/10"
                >
                  <span className="text-lg">{social.icon}</span>
                  {social.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
              {values.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-blue-500/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-blue-300/20 bg-slate-950/80 p-6 shadow-2xl shadow-blue-950/40">
              <div className="relative flex aspect-video items-end overflow-hidden rounded-3xl border border-white/10 bg-black">
                <img src={setupImage} alt="Setup pessoal EBasto Tech" className="absolute inset-0 h-full w-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-blue-950/20" />

                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-black/30 px-3 py-1 text-xs text-blue-200 backdrop-blur-md">
                    <span>💙 Setup pessoal da EBasto Tech</span>
                    <img
                      src={logoImage}
                      alt="EBasto Tech"
                      className="h-4 w-auto opacity-90 mix-blend-screen drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]"
                    />
                  </div>

                  <h3 className="text-3xl font-black tracking-wide">PERFORMANCE • QUALIDADE</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="servicos" className="relative border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="font-bold uppercase tracking-widest text-blue-400">Serviços</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">O essencial para deixar o PC melhor.</h2>
            <p className="mt-4 text-lg text-slate-400">Começamos simples, bem feito e com foco na confiança.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <motion.div key={service.title} whileHover={{ y: -6 }} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-xl transition hover:border-blue-400/40">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-3xl">{service.icon}</div>
                <h3 className="text-2xl font-black">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-widest text-blue-400">Valores base</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Preços simples para começar.</h2>
            <p className="mt-4 text-lg text-slate-400">
              Preços base transparentes para começar, sempre explicados antes de qualquer serviço.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Limpeza completa", price: "35€", desc: "Remoção de pó, limpeza interna e verificação geral do equipamento." },
              { name: "Formatação simples", price: "25€", desc: "Windows, drivers, updates e preparação básica do sistema." },
              { name: "Formatação + otimização", price: "35€", desc: "Sistema mais limpo, rápido e estável para uso diário ou gaming." },
              { name: "Pasta térmica + manutenção preventiva", price: "35€", desc: "Pasta térmica, limpeza interna e verificação básica de temperaturas." },
            ].map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-blue-500/10 to-white/[0.03] p-7 transition hover:border-blue-400/40"
              >
                <h3 className="text-2xl font-black">{item.name}</h3>
                <p className="mt-4 text-4xl font-black text-blue-400">{item.price}</p>
                <p className="mt-4 leading-relaxed text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-widest text-blue-400">Galeria inicial</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">A identidade visual da EBasto Tech.</h2>
            <p className="mt-4 text-lg text-slate-400">
              Para já, começa com o setup pessoal e a imagem da marca. Mais tarde entram trabalhos reais, antes/depois e manutenções.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {galleryItems.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl transition hover:border-blue-400/40"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="rounded-full border border-blue-400/20 bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-200 backdrop-blur-md">
                      {item.label}
                    </span>
                    <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-widest text-blue-400">Como funciona?</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Processo simples, direto e transparente.</h2>
            <p className="mt-4 text-lg text-slate-400">
              Uma forma simples e transparente de perceber como funciona o serviço.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Mensagem", text: "Envia mensagem com o problema ou serviço pretendido." },
              { step: "02", title: "Análise", text: "Vejo o estado do equipamento e explico o que faz sentido fazer." },
              { step: "03", title: "Confirmação", text: "Tudo é explicado antes do serviço para não existirem surpresas." },
              { step: "04", title: "Serviço", text: "Manutenção feita com cuidado, testes e atenção ao detalhe." },
            ].map((item) => (
              <motion.div key={item.step} whileHover={{ y: -6 }} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-blue-400/40 hover:bg-blue-500/10">
                <div className="mb-5 text-4xl font-black text-blue-400/70 group-hover:text-blue-300">{item.step}</div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="loja" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-widest text-blue-400">Loja / PCs EBasto Tech</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">PCs acessíveis, bem montados e otimizados.</h2>
            <p className="mt-4 text-lg text-slate-400">
              Ideia futura: montar PCs com bom custo/benefício para quem quer jogar, trabalhar ou estudar sem gastar valores absurdos.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {shopBuilds.map((build) => (
              <motion.div key={build.name} whileHover={{ y: -6 }} className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-7 shadow-xl transition hover:border-blue-400/40">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-blue-400/20 bg-blue-500/15 px-3 py-1 text-sm font-bold text-blue-200">{build.tag}</span>
                  <span className="text-2xl">🖥️</span>
                </div>
                <h3 className="text-2xl font-black">{build.name}</h3>
                <p className="mt-2 text-3xl font-black text-blue-400">{build.price}</p>
                <p className="mt-4 leading-relaxed text-slate-400">{build.note}</p>
                <ul className="mt-6 space-y-3">
                  {build.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-3 text-slate-200">
                      <span className="h-2 w-2 rounded-full bg-blue-400" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-blue-400/20 bg-blue-500/10 p-6 text-slate-300">
            <strong className="text-white">Nota:</strong> Esta secção pode começar apenas como conceito/portfolio e evoluir para loja quando houver stock, peças e número profissional.
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="font-bold uppercase tracking-widest text-blue-400">O que define a EBasto Tech</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Simples, transparente e focado em qualidade.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                icon: "🧼",
                title: "Cuidado real",
                text: "Cada equipamento é tratado com atenção e respeito.",
              },
              {
                icon: "⚡",
                title: "Performance",
                text: "Foco em temperaturas, estabilidade e desempenho.",
              },
              {
                icon: "🎮",
                title: "Gaming & Tech",
                text: "Projeto criado por paixão genuína pela tecnologia.",
              },
              {
                icon: "💬",
                title: "Transparência",
                text: "Comunicação simples e orçamento explicado antes do serviço.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-8 transition hover:border-blue-400/40"
              >
                <div className="mb-5 text-5xl">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-400">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-widest text-blue-400">Perguntas rápidas</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Informação simples antes de pedir orçamento.</h2>
            <p className="mt-4 text-lg text-slate-400">
              Pequenos detalhes para o cliente perceber logo como funciona o serviço.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                q: "Quanto custa uma limpeza completa?",
                a: "A limpeza completa tem um valor base de 35€, já com limpeza interna e verificação geral.",
              },
              {
                q: "Fazes formatações?",
                a: "Sim. Formatação e otimização para deixar o sistema mais limpo, rápido e estável.",
              },
              {
                q: "Trabalhas com portáteis?",
                a: "Sim, mediante análise. Cada portátil pode ter acessos e desmontagem diferentes.",
              },
              {
                q: "Onde estás localizado?",
                a: "Mondim de Basto. Para já, o contacto é feito por mensagem privada ou email.",
              },
              {
                q: "Quanto tempo demora o serviço?",
                a: "Depende do estado do equipamento, mas tento sempre ser claro no tempo previsto antes de avançar.",
              },
              {
                q: "Tenho de levar o PC?",
                a: "Para já sim, o serviço é combinado por mensagem e tratado em Mondim de Basto.",
              },
              {
                q: "Fazes diagnóstico?",
                a: "Posso fazer uma análise básica e indicar o que parece fazer sentido antes de qualquer serviço.",
              },
            ].map((item) => (
              <motion.div
                key={item.q}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-blue-400/40 hover:bg-blue-500/10"
              >
                <h3 className="text-xl font-black text-white">{item.q}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-slate-950 to-[#030712] p-10 shadow-2xl shadow-blue-950/30"
          >
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="font-bold uppercase tracking-widest text-blue-300">
                  Pronto para melhorar o teu setup?
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                  Dá uma nova vida ao teu PC.
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
                  Limpeza, otimização e manutenção com foco em performance, temperaturas e cuidado real pelo equipamento.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <div className="mb-2">
                  <img
                    src="https://i.imgur.com/okzWK8Q.png"
                    alt="EBasto Tech"
                    className="h-20 w-auto drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]"
                  />
                </div>

                <a
                  href="mailto:ebastotech@gmail.com"
                  className="w-full rounded-2xl bg-blue-500 px-8 py-4 text-center text-lg font-black shadow-lg shadow-blue-500/30 transition hover:bg-blue-400 lg:w-auto"
                >
                  Vamos melhorar o teu setup
                </a>

                <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
                  <a
                    href="https://www.instagram.com/ebastotech/"
                    className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-bold transition hover:border-pink-400/40 hover:bg-pink-500/10"
                  >
                    📸 Instagram
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61589279948684&locale=pt_PT"
                    className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-bold transition hover:border-blue-400/40 hover:bg-blue-500/10"
                  >
                    📘 Facebook
                  </a>

                  <a
                    href="mailto:ebastotech@gmail.com"
                    className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-bold transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
                  >
                    📧 Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contactos" className="border-y border-white/10 bg-slate-950/70 px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-400">Sobre</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Projeto criado com paixão por tecnologia.</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              A EBasto Tech nasceu para ajudar quem quer um PC mais limpo, mais estável e com melhor desempenho. Trabalho feito com atenção ao detalhe, comunicação simples e respeito pelo equipamento de cada cliente.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8">
            <h3 className="mb-5 text-2xl font-black">Contactos</h3>
            <div className="space-y-4 text-slate-200">
              <p className="flex items-center gap-3">📧 ebastotech@gmail.com</p>
              <p className="flex items-center gap-3">📍 Mondim de Basto</p>
              <p className="flex items-center gap-3">💬 Contacto por mensagem privada</p>
            </div>
          </div>
        </div>
      </section>

      <a
        href="mailto:ebastotech@gmail.com"
        className="fixed bottom-5 right-5 z-40 rounded-full bg-blue-500 px-5 py-4 text-sm font-black text-white shadow-2xl shadow-blue-500/30 transition hover:bg-blue-400"
      >
        📩 Orçamento
      </a>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <img
              src={logoImage}
              alt="EBasto Tech"
              className="h-12 w-auto mix-blend-screen opacity-90"
            />

            <div>
              <p className="text-lg font-black text-white">
                EBasto <span className="text-blue-400">Tech</span>
              </p>
              <p className="text-sm text-slate-500">
                Confiança, desempenho e cuidado 💙.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a href="https://www.instagram.com/ebastotech/" className="transition hover:text-pink-400">
              Instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=61589279948684&locale=pt_PT" className="transition hover:text-blue-400">
              Facebook
            </a>
            <a href="mailto:ebastotech@gmail.com" className="transition hover:text-cyan-400">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
