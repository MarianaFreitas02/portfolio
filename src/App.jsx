import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Shield, GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0f1014] text-gray-300 font-sans selection:bg-blue-500/30">
      
      {/* Container Principal Largo */}
      <div className="w-full max-w-[1600px] mx-auto p-4 md:p-8 lg:p-12">
        
        <div className="flex flex-col lg:flex-row gap-8 relative">
          
          {/* ====================
              COLUNA DA ESQUERDA (SIDEBAR FIXA & CENTRALIZADA) 
             ==================== */}
          <aside className="w-full lg:w-[350px] shrink-0">
            <div className="bg-[#18181b] rounded-3xl p-8 border border-[#27272a] sticky top-8 flex flex-col items-center text-center">
              
              {/* Foto de Perfil */}
              <div className="mb-6 relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <img 
                  src="/perfil.jpg"   /* Certifique-se que sua foto na pasta public tem este nome */
                  alt="Mariana Freitas" 
                  className="relative w-32 h-32 rounded-2xl object-cover border-2 border-[#27272a] shadow-2xl"
                />
              </div>

              <h1 className="text-3xl font-bold text-white tracking-tight">Mariana Freitas</h1>
              <p className="text-blue-400 font-medium mt-2 text-lg">Engenharia de Computação</p>
              <p className="text-gray-500 mt-1">Data Analytics & Security</p>

              {/* Botões de Contato */}
              <div className="mt-8 flex flex-col gap-3 w-full">
                <a href="https://github.com/MarianaFreitas02" target="_blank" className="flex items-center justify-center gap-4 text-sm font-medium text-gray-300 hover:text-white transition group bg-[#27272a]/50 p-3 rounded-xl hover:bg-[#27272a]">
                  <div className="p-2 bg-[#0f1014] rounded-lg group-hover:scale-110 transition"><Github size={20}/></div>
                  Github
                </a>
                <a href="https://www.linkedin.com/in/ymarianafreitas/" target="_blank" className="flex items-center justify-center gap-4 text-sm font-medium text-gray-300 hover:text-white transition group bg-[#27272a]/50 p-3 rounded-xl hover:bg-[#27272a]">
                  <div className="p-2 bg-[#0f1014] rounded-lg group-hover:scale-110 transition"><Linkedin size={20} className="group-hover:text-blue-400"/></div>
                  LinkedIn
                </a>
                <a href="mailto:marianagfreitasr@outlook.com" className="flex items-center justify-center gap-4 text-sm font-medium text-gray-300 hover:text-white transition group bg-[#27272a]/50 p-3 rounded-xl hover:bg-[#27272a]">
                  <div className="p-2 bg-[#0f1014] rounded-lg group-hover:scale-110 transition"><Mail size={20}/></div>
                  Email
                </a>
              </div>

              {/* Skills */}
              <div className="mt-8 pt-8 border-t border-[#27272a] w-full">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Core Skills</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-lg border border-blue-500/20">Python</span>
                  <span className="px-3 py-1.5 bg-yellow-500/10 text-yellow-400 text-xs font-bold rounded-lg border border-yellow-500/20">Power BI</span>
                  <span className="px-3 py-1.5 bg-green-500/10 text-green-400 text-xs font-bold rounded-lg border border-green-500/20">Security</span>
                  <span className="px-3 py-1.5 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-lg border border-purple-500/20">React</span>
                </div>
              </div>
            </div>
          </aside>


          {/* ====================
              COLUNA DA DIREITA (CONTEÚDO EXPANDIDO) 
             ==================== */}
          <main className="flex-1 space-y-8 min-w-0">
            
            {/* SOBRE MIM */}
            <section className="bg-[#18181b] p-8 rounded-3xl border border-[#27272a]">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span> 
                Sobre
              </h2>
              <p className="leading-loose text-gray-400 text-lg">
                Estudante do 6º semestre de Engenharia de Computação. 
                Atualmente atuo desenvolvendo soluções corporativas com Power Platform e Web, mas meu 
                <b className="text-white"> objetivo profissional é a Cibersegurança</b>.
                <br /><br />
                Tenho direcionado meus estudos avançados para criptografia, proteção de dados e arquiteturas seguras, buscando me especializar e atuar focada em defesa cibernética.
              </p>
            </section>

            {/* PROJETO DESTAQUE (CARD GRANDE) */}
            <section>
              <div className="bg-[#18181b] rounded-3xl overflow-hidden border border-[#27272a] hover:border-gray-600 transition duration-300 group shadow-2xl shadow-black/50">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-green-500/10 rounded-2xl text-green-400 border border-green-500/20 group-hover:scale-110 transition">
                        <Shield size={40} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Secure Vault</h3>
                        <p className="text-gray-500 text-sm">TCC • Client-Side Encryption</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                       <span className="px-3 py-1 text-xs uppercase font-bold bg-gray-800 rounded-full text-gray-400 border border-gray-700">Open Source</span>
                       <span className="px-3 py-1 text-xs uppercase font-bold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 animate-pulse">Beta</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                    Aplicação de armazenamento onde a criptografia ocorre no cliente (browser) via <b>Web Crypto API</b>. 
                    O servidor recebe apenas dados cifrados, garantindo privacidade matemática e arquitetura Zero-Knowledge.
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-500 mb-8 p-4 bg-black/20 rounded-xl border border-white/5">
                    <div className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>React.js</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div>Node.js</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>AES-GCM-256</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 bg-yellow-500 rounded-full"></div>MongoDB</div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="https://tcc-vault.vercel.app/login" target="_blank" className="flex items-center justify-center gap-2 bg-white text-black py-4 rounded-xl font-bold text-base hover:bg-gray-200 transition">
                      <ExternalLink size={18}/> Ver Deploy (Live)
                    </a>
                    <a href="https://github.com/MarianaFreitas02/tcc-vault" target="_blank" className="flex items-center justify-center gap-2 bg-[#27272a] text-white py-4 rounded-xl font-bold text-base border border-gray-700 hover:bg-[#3f3f46] transition">
                      <Github size={18}/> Ver Código
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* EXPERIÊNCIA */}
            <section className="grid grid-cols-1 gap-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span> Experiência
              </h2>
              
              <div className="bg-[#18181b] rounded-3xl p-8 border border-[#27272a] hover:bg-[#18181b]/80 transition">
                <div className="flex flex-col sm:flex-row justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">Santa Casa de Lorena</h3>
                    <p className="text-blue-400 font-medium">Estagiária de Desenvolvimento</p>
                  </div>
                  <div className="text-left sm:text-right mt-2 sm:mt-0">
                    <p className="text-gray-400 font-medium">Set 2025 - Presente</p>
                    <p className="text-gray-600 text-sm flex items-center sm:justify-end gap-1"><MapPin size={14}/> Lorena, SP</p>
                  </div>
                </div>
                
                <ul className="space-y-4 text-gray-400 list-disc list-inside marker:text-gray-600 leading-relaxed">
                  <li>Desenvolvimento de soluções low-code com <b className="text-gray-300">Microsoft Power Apps</b> para digitalização de processos hospitalares.</li>
                  <li>Criação de fluxos de automação (RPA) com <b className="text-gray-300">Power Automate</b> para reduzir tarefas manuais.</li>
                  <li>Suporte e manutenção de sistemas web internos e análise de dados para otimização de fluxo.</li>
                </ul>
              </div>
            </section>

            {/* FORMAÇÃO ACADÊMICA */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span> 
                Formação
              </h2>
              
              <div className="bg-[#18181b] rounded-3xl p-8 border border-[#27272a] hover:bg-[#18181b]/80 transition">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex gap-4">
                    <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-400 h-fit">
                        <GraduationCap size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Engenharia de Computação</h3>
                        <p className="text-gray-400 mt-1">UNISAL - Centro Universitário Salesiano de São Paulo</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-bold rounded-lg border border-yellow-500/20">
                      Previsão: Dez 2026
                    </span>
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
        
        {/* FOOTER */}
        <footer className="mt-20 border-t border-[#27272a] pt-8 text-center text-gray-600 text-sm">
          <p>© 2024 Mariana Freitas. Construído com React, Tailwind & Segurança.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;