import React, { useState } from 'react';
import { Menu, X, ArrowRight, Shield, Code2, Cpu, Globe, CheckCircle, Github, Linkedin, Mail, Database, Terminal, Server, FileCode, MessageCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- DADOS DOS PROJETOS ---
  const projects = [
    {
      title: "Secure Vault (TCC)",
      description: "Sistema de criptografia client-side focado em Zero-Knowledge. Garante que nem o servidor tenha acesso aos dados brutos do usuário. Desenvolvido com foco em privacidade.",
      tags: ["React", "Node.js", "Cryptography", "Security"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop", 
      repoLink: "https://github.com/MarianaFreitas02/tcc-vault",
      demoLink: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Interface administrativa para visualização de dados complexos. Integração com APIs de Data Science para gerar gráficos interativos e relatórios de segurança.",
      tags: ["React", "Python", "Pandas", "Recharts"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", 
      repoLink: "https://github.com/MarianaFreitas02",
      demoLink: "#"
    },
    {
      title: "Corporate Landing Page",
      description: "Site institucional de alta performance com foco em SEO, acessibilidade e conversão. Design moderno totalmente responsivo utilizando Tailwind CSS.",
      tags: ["HTML5", "Tailwind CSS", "JavaScript", "SEO"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      repoLink: "https://github.com/MarianaFreitas02",
      demoLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* --- BACKGROUND GLOWS (Luzes de Fundo) --- */}
      <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 px-6 py-6 backdrop-blur-md bg-background/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold flex items-center gap-2 hover:opacity-80 transition">
            <span className="text-white">Mariana</span>
            <span className="text-cyan-400">Freitas</span>
          </a>

          {/* Links Desktop */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Início</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Habilidades</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projetos</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Serviços</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">Sobre</a>
          </div>

          {/* Grupo da Direita: WhatsApp + Botão CTA */}
          <div className="hidden md:flex items-center gap-5">
            {/* Ícone do WhatsApp */}
            <a 
              href="https://wa.me/5512991079417" // SEU NÚMERO AQUI
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-300 hover:text-green-400 transition-colors"
              title="Falar no WhatsApp"
            >
              <MessageCircle size={26} />
            </a>

            {/* Botão Fale Comigo */}
            <a href="#contact" className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm hover:opacity-90 transition shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              Fale Comigo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 text-center shadow-2xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-cyan-400">Início</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-cyan-400">Habilidades</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-cyan-400">Projetos</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-cyan-400">Serviços</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-cyan-400">Contato</a>
            <a href="https://wa.me/5511999999999" className="text-lg text-green-400 font-bold flex justify-center items-center gap-2">
              <MessageCircle size={20} /> WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION (Seção Principal) --- */}
      <section id="home" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
        
        {/* LADO ESQUERDO: Texto */}
        <div className="z-10 space-y-6">
          <div className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/20 text-cyan-400 text-xs font-semibold tracking-wider">
            DISPONÍVEL PARA PROJETOS
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Olá, meu nome é <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Mariana Freitas.</span>
          </h1>
          
          <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
            Front-end Developer & Security Enthusiast. Construindo o futuro da web com pixels perfeitos e dados seguros.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/25">
              Ver Projetos
            </a>
            <a href="https://github.com/MarianaFreitas02" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition text-white font-medium backdrop-blur-sm flex items-center gap-2">
              <Github size={20} /> GitHub
            </a>
          </div>
        </div>

        {/* LADO DIREITO: Composição Visual 3D */}
        <div className="relative z-10 flex justify-center perspective-container">
          
          {/* 1. Glow de Fundo */}
          <div className="absolute inset-0 bg-blue-600/30 blur-[100px] rounded-full transform scale-75 -z-10"></div>
          
          {/* 2. Container Flutuante Principal */}
          <div className="relative animate-float-slow">
            
            {/* Imagem Principal */}
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
              alt="Cybersecurity Interface" 
              className="relative w-full max-w-lg rounded-2xl shadow-2xl border border-white/10 opacity-90 hover:opacity-100 transition duration-500"
            />

            {/* 3. Elemento Flutuante 1 (Card de Código) */}
            <div className="absolute -bottom-6 -left-4 md:-left-12 bg-slate-900/90 backdrop-blur-xl p-4 rounded-xl border border-cyan-500/30 shadow-2xl animate-float-medium hidden md:block">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-3 w-3 rounded-full bg-red-500"/>
                <div className="h-3 w-3 rounded-full bg-yellow-500"/>
                <div className="h-3 w-3 rounded-full bg-green-500"/>
              </div>
              <div className="space-y-2 font-mono text-[10px] text-cyan-300">
                <p>const secure = true;</p>
                <p>while(data) &#123;</p>
                <p className="pl-2">encrypt(data);</p>
                <p>&#125;</p>
              </div>
            </div>

            {/* 4. Elemento Flutuante 2 (Ícone de Segurança) */}
            <div className="absolute -top-6 -right-4 md:-right-8 bg-gradient-to-br from-blue-600 to-cyan-500 p-4 rounded-2xl shadow-lg animate-float-fast shadow-cyan-500/20 hidden md:block">
              <Shield size={32} className="text-white" />
            </div>

            {/* 5. Elemento Flutuante 3 (Badge de Status) */}
            <div className="absolute top-1/2 -right-8 md:-right-16 bg-slate-800/80 backdrop-blur-md py-2 px-4 rounded-lg border border-white/10 shadow-xl animate-float-slow delay-700 hidden md:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs font-bold text-white">System Active</span>
            </div>

          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION (Sistema Solar Expandido) --- */}
      <section id="skills" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO ESQUERDO: Categorias de Skills */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Arsenal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Tecnológico
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-cyan-500/30 pl-6">
              Meu stack combina a agilidade do desenvolvimento web moderno com a robustez da engenharia de dados e segurança ofensiva.
            </p>
            
            <div className="space-y-4">
              {/* Frontend */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition group">
                <div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400 group-hover:scale-110 transition"><Code2 size={24}/></div>
                <div>
                  <h4 className="font-bold text-white">Frontend & Core</h4>
                  <p className="text-xs text-slate-500">React, JavaScript (ES6+), Tailwind CSS</p>
                </div>
              </div>

              {/* Backend & Data */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition group">
                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400 group-hover:scale-110 transition"><Database size={24}/></div>
                <div>
                  <h4 className="font-bold text-white">Backend & Data</h4>
                  <p className="text-xs text-slate-500">Node.js, MySQL, Python (Pandas), MongoDB</p>
                </div>
              </div>

              {/* Security & OS */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 transition group">
                <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400 group-hover:scale-110 transition"><Terminal size={24}/></div>
                <div>
                  <h4 className="font-bold text-white">Security & OS</h4>
                  <p className="text-xs text-slate-500">Kali Linux, Linux Admin, Git, Azure</p>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Órbita Animada */}
          <div className="relative h-[600px] flex items-center justify-center perspective-container">
            {/* Fundo decorativo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl" />
            
            {/* ÓRBITAS */}
            <div className="absolute border border-white/5 rounded-full w-[250px] h-[250px] animate-spin-slow duration-[15s]" />
            <div className="absolute border border-white/5 rounded-full w-[400px] h-[400px] animate-spin-slow duration-[25s]" />
            <div className="absolute border border-white/5 rounded-full w-[550px] h-[550px] animate-spin-slow duration-[40s]" />

            {/* NÚCLEO */}
            <div className="relative z-10 w-24 h-24 bg-slate-950 border border-cyan-500/50 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.4)] animate-pulse-slow">
              <Cpu size={48} className="text-cyan-400" />
            </div>

            {/* --- SATÉLITES --- */}
            {/* 1. Kali Linux */}
            <div className="absolute top-0 animate-float-slow">
              <div className="bg-slate-900/90 backdrop-blur-md border border-purple-500/30 p-3 rounded-xl flex items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:scale-110 transition cursor-default">
                <span className="text-purple-400"><Terminal size={20}/></span>
                <span className="font-bold text-sm text-purple-100">Kali Linux</span>
              </div>
            </div>

            {/* 2. JavaScript */}
            <div className="absolute right-0 md:right-10 top-1/4 animate-float-medium delay-75">
              <div className="bg-slate-900/90 backdrop-blur-md border border-yellow-500/30 p-3 rounded-xl flex items-center gap-2 shadow-xl hover:border-yellow-400 transition cursor-default">
                <span className="text-yellow-400"><FileCode size={20}/></span>
                <span className="font-bold text-sm">JavaScript</span>
              </div>
            </div>

            {/* 3. React */}
            <div className="absolute left-0 md:left-10 top-1/3 animate-float-fast delay-100">
              <div className="bg-slate-900/90 backdrop-blur-md border border-cyan-400/30 p-3 rounded-xl flex items-center gap-2 shadow-xl hover:border-cyan-400 transition cursor-default">
                <span className="text-cyan-400"><Code2 size={20}/></span>
                <span className="font-bold text-sm">React</span>
              </div>
            </div>

            {/* 4. MySQL */}
            <div className="absolute bottom-20 right-10 animate-float-slow delay-150">
              <div className="bg-slate-900/90 backdrop-blur-md border border-blue-600/30 p-3 rounded-xl flex items-center gap-2 shadow-xl hover:border-blue-500 transition cursor-default">
                <span className="text-blue-500"><Database size={20}/></span>
                <span className="font-bold text-sm">MySQL</span>
              </div>
            </div>

            {/* 5. Node.js */}
            <div className="absolute bottom-10 left-16 animate-float-medium delay-200">
              <div className="bg-slate-900/90 backdrop-blur-md border border-green-500/30 p-3 rounded-xl flex items-center gap-2 shadow-xl hover:border-green-500 transition cursor-default">
                <span className="text-green-500"><Server size={20}/></span>
                <span className="font-bold text-sm">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJETOS RECENTES (Cards de Projetos) --- */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos <span className="text-cyan-400">Em Destaque</span>
          </h2>
          <p className="text-slate-400">Uma seleção do que tenho construído recentemente.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col">
              
              {/* Imagem */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-white/5">
                  <a href={project.repoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                    <Github size={16} /> Código
                  </a>
                  {project.demoLink !== "#" && (
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors ml-auto">
                      <Globe size={16} /> Demo <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <a href="https://github.com/MarianaFreitas02?tab=repositories" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition text-white text-sm">
                Ver todos os repositórios <ArrowRight size={16} />
            </a>
        </div>
      </section>

      {/* --- SERVIÇOS/PLANOS --- */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus <span className="text-cyan-400">Serviços</span>
          </h2>
          <p className="text-slate-400">Como posso ajudar no seu próximo projeto.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Landing Page */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-slate-600 transition flex flex-col">
            <h3 className="text-cyan-400 font-bold text-sm mb-2">WEB DESIGN</h3>
            <div className="text-3xl font-bold text-white mb-2">Landing Pages</div>
            <p className="text-slate-500 text-sm mb-8">Páginas de alta conversão para seu negócio.</p>
            <ul className="space-y-3 mb-8 text-slate-300 text-sm flex-grow">
              <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-500"/> Design Responsivo</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-500"/> HTML5 & CSS3</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-500"/> Formulários de Contato</li>
            </ul>
            <a href="mailto:marianagfreitasr@outlook.com" className="w-full block text-center py-3 rounded-xl border border-white/20 hover:bg-white/5 transition text-white mt-auto">Orçar Projeto</a>
          </div>

          {/* Card 2: Aplicação Completa */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] transform md:-translate-y-4 flex flex-col">
            <div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
            <h3 className="text-white font-bold text-sm mb-2">FULL STACK</h3>
            <div className="text-3xl font-bold text-white mb-2">Aplicações Web</div>
            <p className="text-slate-500 text-sm mb-8">Sistemas complexos com React.</p>
            <ul className="space-y-3 mb-8 text-white text-sm flex-grow">
              <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-400"/> Single Page Apps (SPA)</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-400"/> Integração com APIs</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-400"/> Autenticação Segura</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-400"/> Dashboard Admin</li>
            </ul>
            <a href="mailto:marianagfreitasr@outlook.com" className="w-full block text-center py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold mt-auto">Solicitar Agora</a>
          </div>

          {/* Card 3: Manutenção */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-slate-600 transition flex flex-col">
            <h3 className="text-cyan-400 font-bold text-sm mb-2">MANUTENÇÃO</h3>
            <div className="text-3xl font-bold text-white mb-2">Otimização</div>
            <p className="text-slate-500 text-sm mb-8">Melhorias em sites já existentes.</p>
            <ul className="space-y-3 mb-8 text-slate-300 text-sm flex-grow">
              <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-500"/> SEO Técnico</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-500"/> Performance (Core Vitals)</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-500"/> Correção de Bugs</li>
            </ul>
            <a href="mailto:marianagfreitasr@outlook.com" className="w-full block text-center py-3 rounded-xl border border-white/20 hover:bg-white/5 transition text-white mt-auto">Consultar</a>
          </div>

        </div>
      </section>

      {/* --- SOBRE MIM (Com Imagem na Direita) --- */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LADO ESQUERDO: Texto */}
        <div className="order-2 lg:order-1 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Sobre <span className="text-blue-500">Mim</span>
          </h2>
          
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-8">
            <p>
              Sou uma desenvolvedora apaixonada por tecnologia. Comecei minha jornada explorando o básico da web e me apaixonei pela possibilidade de criar interfaces interativas que impactam usuários reais.
            </p>
            <p>
              Atualmente, passo meus dias codando, estudando novas tecnologias como 
              <strong className="text-cyan-400 font-normal"> React</strong> e 
              <strong className="text-cyan-400 font-normal"> CyberSecurity</strong>. 
              Busco constantemente melhorar minha lógica de programação e arquitetura de software para entregar soluções não apenas funcionais, mas seguras e performáticas.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="https://linkedin.com/in/ymarianafreitas/" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition flex items-center gap-2 shadow-lg shadow-blue-500/25">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="mailto:marianagfreitasr@outlook.com" className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition text-white font-medium backdrop-blur-sm flex items-center gap-2">
              <Mail size={20} /> Entre em Contato
            </a>
          </div>
        </div>

        {/* LADO DIREITO: Imagem Tecnológica */}
        <div className="order-1 lg:order-2 relative flex justify-center">
           {/* Glow Azul no fundo da imagem */}
           <div className="absolute inset-0 bg-blue-600/20 blur-[80px] rounded-full transform scale-90 -z-10"></div>
           
           {/* Container da Imagem com Borda Neon sutil */}
           <div className="relative rounded-2xl border border-white/10 p-2 bg-slate-900/50 backdrop-blur-sm">
             <img 
               src="https://codemasters.com.br/wp-content/uploads/2025/04/8546.jpg" 
               alt="Woman working with Tech" 
               className="rounded-xl shadow-2xl w-full max-w-md object-cover hover:scale-[1.02] transition duration-500 opacity-90 hover:opacity-100"
             />
             
             {/* Elemento flutuante decorativo (Card pequeno de 'Security') */}
             <div className="absolute -bottom-6 -left-6 bg-slate-900 p-4 rounded-xl border border-cyan-500/30 shadow-xl hidden md:flex items-center gap-3 animate-float-slow">
               <div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400">
                 <Shield size={24} />
               </div>
               <div>
                 <p className="text-xs text-slate-400">Status</p>
                 <p className="text-sm font-bold text-white">Protected</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="py-10 text-center border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © 2025 Mariana Freitas. Feito com React & Tailwind.
          </div>
          
          <div className="flex gap-6 items-center">
            {/* GitHub */}
            <a href="https://github.com/MarianaFreitas02" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
                <Github size={20} />
            </a>
            
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/ymarianafreitas/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
                <Linkedin size={20} />
            </a>
            
            {/* E-mail */}
            <a href="mailto:marianagfreitasr@outlook.com" className="text-slate-400 hover:text-cyan-400 transition">
                <Mail size={20} />
            </a>

            {/* WhatsApp (Rodapé) */}
            <a 
              href="https://wa.me/5512991079417" // TROQUE PELO SEU NÚMERO
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-green-400 transition"
              title="Conversar no WhatsApp"
            >
                <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;