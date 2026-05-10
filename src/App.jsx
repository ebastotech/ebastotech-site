export default function App() {
  const setupImage = "https://i.imgur.com/bYQjvAD.jpeg";
  const logoImage = "https://i.imgur.com/u8kaoEP.png";
  const fullLogoImage = "https://i.imgur.com/okzWK8Q.png";

  const services = [
    {
      icon: "🧹",
      title: "Limpeza completa",
      price: "35€",
      text: "Remoção de pó, limpeza interna e verificação geral do equipamento.",
    },
    {
      icon: "🌡️",
      title: "Pasta térmica + manutenção preventiva",
      price: "35€",
      text: "Aplicação de pasta térmica, limpeza interna e verificação básica para melhores temperaturas e estabilidade.",
    },
    {
      icon: "💻",
      title: "Formatação simples",
      price: "25€",
      text: "Instalação de Windows, drivers, updates e preparação básica do sistema.",
    },
    {
      icon: "⚡",
      title: "Formatação + otimização",
      price: "35€",
      text: "Sistema otimizado com programas essenciais e melhor desempenho diário.",
    },
  ];

  const steps = [
    ["01", "Mensagem", "Envia mensagem com o problema ou serviço pretendido."],
    ["02", "Análise", "Vejo o estado do equipamento e explico o que faz sentido fazer."],
    ["03", "Confirmação", "Tudo é explicado antes do serviço para não existirem surpresas."],
    ["04", "Serviço", "Serviço feito com cuidado, testes e atenção ao detalhe."],
  ];

  const values = [
    ["🛡️", "Confiança", "Trabalho feito com cuidado e respeito pelo equipamento."],
    ["⚡", "Desempenho", "Foco em estabilidade, temperaturas e performance."],
    ["💬", "Transparência", "Tudo explicado antes de qualquer serviço."],
    ["🎮", "Gaming & Tech", "Projeto criado por paixão real por tecnologia."],
  ];

  const shopBuilds = [
    ["EBasto Starter", "desde 499€", "Gaming acessível", "PC otimizado, SSD rápido, bom airflow e pronto a usar."],
    ["EBasto Performance", "desde 599€", "Melhor custo/benefício", "Build equilibrada para jogos, trabalho e uso diário."],
    ["EBasto Custom", "sob orçamento", "À medida", "Escolha de peças, montagem cuidada e otimização conforme objetivo."],
  ];

  const faq = [
    ["Quanto custa uma limpeza completa?", "A limpeza completa tem um valor base de 35€, com limpeza interna e verificação geral."],
    ["Fazes formatações?", "Sim. Formatação simples ou formatação com otimização e programas essenciais."],
    ["Trabalhas com portáteis?", "Sim, mediante análise. Cada portátil pode ter acessos e desmontagem diferentes."],
    ["Onde estás localizado?", "Mondim de Basto. Para já, o contacto é feito por mensagem privada ou email."],
  ];

  const container = {
    width: "min(1200px, calc(100% - 40px))",
    margin: "0 auto",
  };

  const card = {
    border: "1px solid rgba(255,255,255,0.10)",
    background: "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.035))",
    borderRadius: "28px",
    padding: "28px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
  };

  const title = {
    color: "#ffffff",
    margin: "10px 0 12px",
    fontSize: "clamp(34px, 5vw, 54px)",
    fontWeight: 900,
    lineHeight: 1.05,
  };

  const subtitle = {
    color: "#e2e8f0",
    fontSize: 18,
    lineHeight: 1.6,
  };

  const blueButton = {
    background: "linear-gradient(135deg, #2563eb, #38bdf8)",
    color: "white",
    padding: "14px 20px",
    borderRadius: 16,
    fontWeight: 900,
    textDecoration: "none",
    boxShadow: "0 14px 38px rgba(37,99,235,0.35)",
    display: "inline-block",
  };

  const ghostButton = {
    border: "1px solid rgba(255,255,255,0.16)",
    color: "white",
    padding: "14px 20px",
    borderRadius: 16,
    fontWeight: 800,
    textDecoration: "none",
    display: "inline-block",
    background: "rgba(255,255,255,0.04)",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#030712", color: "white", fontFamily: "Arial, sans-serif", overflowX: "hidden" }}>
      <style>{`
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #030712; color: white; }
        * { box-sizing: border-box; }
        a { transition: 0.25s ease; }
        a:hover { filter: brightness(1.18); transform: translateY(-1px); }
        .lift { transition: 0.25s ease; }
        .lift:hover { transform: translateY(-6px); border-color: rgba(96,165,250,0.45) !important; }
        @media (max-width: 760px) {
          .desktopNav { display: none !important; }
          .heroGrid { grid-template-columns: 1fr !important; }
          .heroTitle { font-size: 44px !important; }
          .setupBadgeTitle { font-size: 22px !important; }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 78% 18%, rgba(37,99,235,0.38), transparent 34%), radial-gradient(circle at 18% 35%, rgba(14,165,233,0.22), transparent 30%), linear-gradient(to bottom, #030712, #020617 45%, #000000)",
        }}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.17,
          backgroundImage:
            "linear-gradient(to right, #0ea5e9 1px, transparent 1px), linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <header style={{ position: "sticky", top: 0, zIndex: 20, borderBottom: "1px solid rgba(255,255,255,0.10)", background: "rgba(3,7,18,0.82)", backdropFilter: "blur(14px)" }}>
        <div style={{ ...container, padding: "16px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src={logoImage} alt="EBasto Tech" style={{ height: 42, filter: "drop-shadow(0 0 18px rgba(59,130,246,0.45))" }} />
            <strong style={{ color: "white", fontSize: 20, letterSpacing: 0.3 }}>EBasto <span style={{ color: "#60a5fa" }}>Tech</span></strong>
          </div>
          <nav className="desktopNav" style={{ display: "flex", gap: 18, flexWrap: "wrap", fontSize: 14 }}>
            <a href="#servicos" style={{ color: "#e2e8f0", textDecoration: "none" }}>Serviços</a>
            <a href="#precos" style={{ color: "#e2e8f0", textDecoration: "none" }}>Preços</a>
            <a href="#loja" style={{ color: "#e2e8f0", textDecoration: "none" }}>Loja</a>
            <a href="#contactos" style={{ color: "#e2e8f0", textDecoration: "none" }}>Contactos</a>
          </nav>
        </div>
      </header>

      <main style={{ position: "relative", zIndex: 1 }}>
        <section style={{ padding: "90px 0 70px" }}>
          <div className="heroGrid" style={{ ...container, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 60, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(96,165,250,0.35)", background: "rgba(59,130,246,0.12)", color: "#bfdbfe", padding: "9px 14px", borderRadius: 999, fontSize: 14, marginBottom: 24 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: "#60a5fa", boxShadow: "0 0 14px #60a5fa" }} /> Mondim de Basto
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24, flexWrap: "wrap" }}>
                <img src={logoImage} alt="EBasto Tech" style={{ height: 92, filter: "drop-shadow(0 0 24px rgba(59,130,246,0.45))" }} />
                <h1 className="heroTitle" style={{ color: "white", margin: 0, fontSize: "clamp(50px, 7vw, 76px)", lineHeight: 0.95, fontWeight: 900 }}>
                  EBasto <span style={{ color: "#60a5fa" }}>Tech</span>
                </h1>
              </div>

              <p style={{ color: "#f8fafc", fontSize: 22, lineHeight: 1.45, maxWidth: 620, margin: "0 0 28px" }}>
                Limpeza, manutenção e otimização de PCs com cuidado, confiança e desempenho.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 30 }}>
                <a href="mailto:ebastotech@gmail.com" style={blueButton}>Vamos melhorar o teu setup</a>
                <a href="#servicos" style={ghostButton}>Ver serviços</a>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))", gap: 12, maxWidth: 560 }}>
                <div style={{ ...card, color: "white", padding: 16, borderRadius: 18 }}>🛡️ Confiança</div>
                <div style={{ ...card, color: "white", padding: 16, borderRadius: 18 }}>⚡ Desempenho</div>
                <div style={{ ...card, color: "white", padding: 16, borderRadius: 18 }}>🧠 Cuidado técnico</div>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -20, borderRadius: 36, background: "rgba(59,130,246,0.20)", filter: "blur(40px)" }} />
              <div style={{ position: "relative", ...card, padding: 22 }}>
                <div style={{ position: "relative", overflow: "hidden", borderRadius: 24, border: "1px solid rgba(255,255,255,0.10)", background: "black" }}>
                  <img src={setupImage} alt="Setup pessoal EBasto Tech" style={{ width: "100%", display: "block", opacity: 0.84 }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.84), rgba(0,0,0,0.10), rgba(30,64,175,0.18))" }} />
                  <div style={{ position: "absolute", left: 24, right: 24, bottom: 24 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 12px", borderRadius: 999, border: "1px solid rgba(96,165,250,0.25)", background: "rgba(0,0,0,0.42)", color: "#bfdbfe", fontSize: 12, marginBottom: 12 }}>
                      <span>💙 Setup pessoal da EBasto Tech</span>
                      <img src={logoImage} alt="EBasto Tech" style={{ height: 16 }} />
                    </div>
                    <h2 className="setupBadgeTitle" style={{ color: "white", margin: 0, fontSize: 32, fontWeight: 900 }}>PERFORMANCE • QUALIDADE</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" style={{ padding: "70px 0", borderTop: "1px solid rgba(255,255,255,0.10)" }}>
          <div style={container}>
            <p style={{ color: "#60a5fa", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>Serviços</p>
            <h2 style={title}>O essencial para deixar o PC melhor.</h2>
            <p style={{ ...subtitle, marginBottom: 34 }}>Começamos simples, bem feito e com foco na confiança.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 22 }}>
              {services.map((service) => (
                <div className="lift" key={service.title} style={card}>
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{service.icon}</div>
                  <h3 style={{ color: "white", margin: "0 0 12px", fontSize: 24 }}>{service.title}</h3>
                  <div style={{ color: "#60a5fa", fontSize: 34, fontWeight: 900, marginBottom: 14 }}>{service.price}</div>
                  <p style={{ color: "#f8fafc", lineHeight: 1.55, margin: 0 }}>{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" style={{ padding: "70px 0", borderTop: "1px solid rgba(255,255,255,0.10)" }}>
          <div style={container}>
            <p style={{ color: "#60a5fa", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>Como funciona?</p>
            <h2 style={title}>Processo simples, direto e transparente.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginTop: 34 }}>
              {steps.map((step) => (
                <div className="lift" key={step[0]} style={card}>
                  <div style={{ color: "#60a5fa", fontWeight: 900, fontSize: 36, marginBottom: 14 }}>{step[0]}</div>
                  <h3 style={{ color: "white", margin: "0 0 10px", fontSize: 22 }}>{step[1]}</h3>
                  <p style={{ color: "#f8fafc", lineHeight: 1.55, margin: 0 }}>{step[2]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="loja" style={{ padding: "70px 0", borderTop: "1px solid rgba(255,255,255,0.10)" }}>
          <div style={container}>
            <p style={{ color: "#60a5fa", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>Loja / PCs EBasto Tech</p>
            <h2 style={title}>PCs acessíveis, bem montados e otimizados.</h2>
            <p style={{ ...subtitle, marginBottom: 34 }}>Ideia futura: montar PCs com bom custo/benefício para quem quer jogar, trabalhar ou estudar sem gastar valores absurdos.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22 }}>
              {shopBuilds.map((build) => (
                <div className="lift" key={build[0]} style={card}>
                  <div style={{ display: "inline-block", color: "#bfdbfe", border: "1px solid rgba(96,165,250,0.25)", background: "rgba(59,130,246,0.12)", borderRadius: 999, padding: "6px 12px", marginBottom: 16, fontSize: 13, fontWeight: 800 }}>{build[2]}</div>
                  <h3 style={{ color: "white", margin: "0 0 10px", fontSize: 26 }}>{build[0]}</h3>
                  <div style={{ color: "#60a5fa", fontSize: 30, fontWeight: 900, marginBottom: 14 }}>{build[1]}</div>
                  <p style={{ color: "#f8fafc", lineHeight: 1.55, margin: 0 }}>{build[3]}</p>
                </div>
              ))}
            </div>
            <div style={{ ...card, color: "#f8fafc", marginTop: 24, borderColor: "rgba(96,165,250,0.25)", background: "rgba(59,130,246,0.10)" }}>
              <strong style={{ color: "white" }}>Nota:</strong> Esta secção pode começar como conceito/portfolio e evoluir quando houver stock, peças e número profissional.
            </div>
          </div>
        </section>

        <section id="precos" style={{ padding: "70px 0", borderTop: "1px solid rgba(255,255,255,0.10)" }}>
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: 38 }}>
              <p style={{ color: "#60a5fa", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>O que define a EBasto Tech</p>
              <h2 style={title}>Simples, transparente e focado em qualidade.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
              {values.map((value) => (
                <div className="lift" key={value[1]} style={card}>
                  <div style={{ fontSize: 40, marginBottom: 14 }}>{value[0]}</div>
                  <h3 style={{ color: "white", margin: "0 0 10px", fontSize: 22 }}>{value[1]}</h3>
                  <p style={{ color: "#f8fafc", lineHeight: 1.55, margin: 0 }}>{value[2]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "70px 0", borderTop: "1px solid rgba(255,255,255,0.10)" }}>
          <div style={container}>
            <p style={{ color: "#60a5fa", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>Perguntas rápidas</p>
            <h2 style={title}>Informação simples antes de contactar.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 34 }}>
              {faq.map((item) => (
                <div className="lift" key={item[0]} style={card}>
                  <h3 style={{ color: "white", margin: "0 0 12px", fontSize: 22 }}>{item[0]}</h3>
                  <p style={{ color: "#f8fafc", lineHeight: 1.55, margin: 0 }}>{item[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contactos" style={{ padding: "70px 0", borderTop: "1px solid rgba(255,255,255,0.10)" }}>
          <div style={container}>
            <div style={{ ...card, background: "linear-gradient(135deg, rgba(59,130,246,0.18), rgba(3,7,18,0.95))", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 30, alignItems: "center" }}>
              <div>
                <p style={{ color: "#bfdbfe", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>Pronto para melhorar o teu setup?</p>
                <h2 style={title}>Dá uma nova vida ao teu PC.</h2>
                <p style={subtitle}>Limpeza, otimização e manutenção com foco em performance, temperaturas e cuidado real pelo equipamento.</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
                <img src={fullLogoImage} alt="EBasto Tech" style={{ width: "min(320px, 100%)", filter: "drop-shadow(0 0 22px rgba(59,130,246,0.35))" }} />
                <a href="mailto:ebastotech@gmail.com" style={blueButton}>Vamos melhorar o teu setup</a>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="https://www.instagram.com/ebastotech/" style={{ color: "#e2e8f0", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: "10px 14px" }}>📸 Instagram</a>
                  <a href="https://www.facebook.com/profile.php?id=61589279948684&locale=pt_PT" style={{ color: "#e2e8f0", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: "10px 14px" }}>📘 Facebook</a>
                  <a href="mailto:ebastotech@gmail.com" style={{ color: "#e2e8f0", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: "10px 14px" }}>📧 Email</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.10)", padding: "34px 0", position: "relative", zIndex: 1 }}>
        <div style={{ ...container, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src={logoImage} alt="EBasto Tech" style={{ height: 48 }} />
            <div>
              <strong style={{ color: "white" }}>EBasto <span style={{ color: "#60a5fa" }}>Tech</span></strong>
              <p style={{ color: "#cbd5e1", margin: "4px 0 0" }}>Confiança, desempenho e cuidado.</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, color: "#e2e8f0", flexWrap: "wrap" }}>
            <a href="https://www.instagram.com/ebastotech/" style={{ color: "inherit", textDecoration: "none" }}>Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61589279948684&locale=pt_PT" style={{ color: "inherit", textDecoration: "none" }}>Facebook</a>
            <a href="mailto:ebastotech@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
