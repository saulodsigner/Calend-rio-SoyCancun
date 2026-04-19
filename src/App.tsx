import React from 'react';

// Data strictly parsed from the prompt
const tableData = [
  { id: "1", date: "21/04", day: "Terça", week: "Semana 1", format: "📄 Post Estático", pillar: "Autoridade", theme: "Otimização VIP: O maior luxo em Cancún é o seu tempo, não o hotel.", notes: "Destaque: Alerta elegante sobre perda de tempo. Legenda: Como evitar gastar de 3 a 4 horas das férias ouvindo palestras de hotéis (timeshare). O suporte foca em otimizar cada minuto. CTA: Planeje com especialistas." },
  { id: "2", date: "23/04", day: "Quinta", week: "Semana 1", format: "🎬 Reel", pillar: "Descoberta", theme: "POV: A chegada dos sonhos no Caribe — aspiracional focado em casais.", notes: "POV aspiracional puro (sem rosto). Clips dinâmicos da chegada até o primeiro brinde na praia. Áudio trend de luxo. Legenda: Ativador de desejo. CTA: Manda para quem vai viver isso com você." },
  { id: "3", date: "24/04", day: "Sexta", week: "Semana 1", format: "📄 Post Estático", pillar: "Conversão", theme: "Batalha de Parques: Xcaret vs Xel-Há — Qual combina mais com você?", notes: "Destaque: Arte visual dividida (This vs That). Legenda: Comparativo técnico. Xcaret = Cultura, show. Xel-Há = Água, open bar. Direciona o cliente para a escolha certa. CTA: Qual a sua vibe? Me chame no direct." },
  { id: "4", date: "25/04", day: "Sábado", week: "Semana 1", format: "🎬 Reel", pillar: "Autoridade", theme: "O verdadeiro segredo para ser tratado como VIP no México.", notes: "Tom posture concierge. Estrutura: Explica que o segredo não é dinheiro, mas ter logística de guias brasileiros e suporte 24h que resolve perrengues. CTA: Link na bio para consultoria." },
  { id: "5", date: "28/04", day: "Terça", week: "Semana 2", format: "🎬 Reel", pillar: "Educação", theme: "Custos 2026: Quanto levar para os passeios em Cancún?", notes: "Reel dinâmico com preços em dólares aparecendo rápido (ancoragem de preço). Legenda: Detalhamento da média de gastos para evitar surpresas financeiras. Quebra a objeção de \"não sei quanto vou gastar\". CTA: Salve este vídeo." },
  { id: "6", date: "30/04", day: "Quinta", week: "Semana 2", format: "🎠 Carrossel", pillar: "Autoridade", theme: "O Roteiro Perfeito de 5 Dias em Cancún — mesclando descanso e aventura.", notes: "Slide 1: Capa hook. Slides 2-5: Divisão lógica por dias (ex: Dia 1 Praia, Dia 2 Isla Mujeres, Dia 3 Xcaret). Slide 6: Como a Soy Cancún cuida da logística. CTA: Peça seu orçamento pelo WhatsApp." },
  { id: "7", date: "01/05", day: "Sexta", week: "Semana 2", format: "📄 Post Estático", pillar: "Utilidade", theme: "3 itens que você vai se arrepender de não trazer na mala do Brasil.", notes: "Destaque: Formato checklist. Legenda: Dica de economia prática. 1. Sapatilha aquática (evita pedras). 2. Capinha impermeável. 3. Remédio para enjoo (mar balança). CTA: Já anotou tudo? Salve o post." },
  { id: "8", date: "02/05", day: "Sábado", week: "Semana 2", format: "🎬 Reel", pillar: "Descoberta", theme: "A verdade sobre o mar de Cancún: O segredo para fugir do Sargaço.", notes: "POV aspiracional. Visual de águas 100% cristalinas. Legenda: Explica como a agência monitora as praias ativamente para garantir o \"azul perfeito\". CTA: Comente \"EU QUERO\" para receber nosso contato." },
  { id: "9", date: "05/05", day: "Terça", week: "Semana 3", format: "📄 Post Estático", pillar: "Educação", theme: "Atualização Oficial: Como funciona o Visto Mexicano para Brasileiros hoje.", notes: "Destaque: Arte com visual \"Aviso Importante\". Legenda: Explicação mastigada sobre diferença do visto eletrônico, físico e isenção pelo visto americano. CTA: Tem dúvidas sobre a documentação? Pergunte nos comentários." },
  { id: "10", date: "07/05", day: "Quinta", week: "Semana 3", format: "🎬 Reel", pillar: "Descoberta", theme: "POV Família: Criando as memórias que seus filhos nunca vão esquecer.", notes: "POV aspiracional (sem rosto). Clima emocional. Clips de crianças interagindo com a natureza. Legenda: Focada em pais que querem a viagem perfeita em família, com segurança. CTA: Compartilhe com quem vai com você." },
  { id: "11", date: "08/05", day: "Sexta", week: "Semana 3", format: "📄 Post Estático", pillar: "Conversão", theme: "O Mito Financeiro: Levar Real para trocar no aeroporto.", notes: "Destaque: Formato \"Citação/Twitter\". Legenda: Prova matemática de quanto se perde na dupla conversão no aeroporto. A solução: levar dólar e usar cartões globais (Nomad/Wise). CTA: Salve para não perder dinheiro." },
  { id: "12", date: "09/05", day: "Sábado", week: "Semana 3", format: "🎬 Reel", pillar: "Autoridade", theme: "O verdadeiro valor de ter guias brasileiros na sua viagem.", notes: "Tom empático. Aborda o medo dos brasileiros com o espanhol rápido e como os guias locais em português trazem segurança e protegem contra golpes. CTA: Me chama no direct." },
  { id: "13", date: "12/05", day: "Terça", week: "Semana 4", format: "🎬 Reel", pillar: "Descoberta", theme: "Trend Estética: A vibe caribenha que está te esperando.", notes: "Reel de ritmo rápido. Cortes sincronizados com música em alta (Margaritas, mariachis, mar, tacos). Legenda: Texto curto de alto impacto ativando o puro desejo de estar lá. CTA: Marque o @ de quem vai pagar um drink pra você." },
  { id: "14", date: "14/05", day: "Quinta", week: "Semana 4", format: "🎠 Carrossel", pillar: "Autoridade", theme: "Vai para o México com crianças? 4 cuidados essenciais na viagem.", notes: "Slide 1: Capa hook. Slides 2-4: Dicas (protetor, ritmo dos parques para não esgotar as crianças). Slide 5: A importância de transfers privativos para famílias. Slide 6: O suporte premium da agência. CTA: Salve este post." },
  { id: "15", date: "15/05", day: "Sexta", week: "Semana 4", format: "📄 Post Estático", pillar: "Conversão", theme: "Posicionamento: Nós não vendemos ingressos. Compramos o seu tempo.", notes: "Destaque: Foto de extremo impacto (Chichén Itzá vazia). Legenda: Um manifesto. \"Quem foca só em preço, paga com o tempo de férias. Nós entregamos planejamento VIP e segurança.\" CTA: Agende no direct." },
  { id: "16", date: "16/05", day: "Sábado", week: "Semana 4", format: "🎬 Reel", pillar: "Descoberta", theme: "O sinal que você precisava: Agenda aberta.", notes: "POV aspiracional puro. Pôr do sol perfeito. Texto na tela: \"Você trabalhou muito esse ano. Você merece esse azul.\" Legenda: Gatilho de escassez sutil, últimas vagas. CTA: Clica no link da bio agora." }
];

// Color mapping for columns based on prompt rules
const getFormatStyle = (format: string) => {
  if (format.includes("Estático")) return "bg-[#E0F2FE] text-[#0369A1] font-bold"; // Fundo Azul Claro Pastel
  if (format.includes("Reel")) return "bg-[#F3E8FF] text-[#6B21A8] font-bold"; // Fundo Roxo/Lilás Claro
  if (format.includes("Carrossel")) return "bg-[#FFEDD5] text-[#C2410C] font-bold"; // Fundo Laranja Claro Pastel
  return "bg-gray-100 text-gray-800 font-bold";
};

const getPillarStyle = (pillar: string) => {
  if (pillar === "Autoridade") return "text-[#1E3A8A] font-extrabold"; // Texto Azul Escuro
  if (pillar === "Descoberta") return "text-[#14532D] font-extrabold"; // Texto Verde Escuro
  if (pillar === "Conversão") return "text-[#be123c] font-extrabold"; // Texto Rosa/Vermelho Escuro (Rose-700)
  if (pillar === "Educação") return "text-[#a16207] font-extrabold"; // Texto Amarelo/Mostarda (Yellow-700)
  return "text-[#4b5563] font-extrabold"; // Fallback para "Utilidade" na linha 7
};

const getWeekRowStyle = (week: string) => {
  if (week === "Semana 1" || week === "Semana 3") return "bg-[#FEFCE8]"; // Amarelo bem claro
  if (week === "Semana 2" || week === "Semana 4") return "bg-[#EFF6FF]"; // Azul bem claro
  return "bg-[#FFFFFF]";
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#000000] font-['Helvetica_Neue',Helvetica,Arial,sans-serif] p-4 md:p-8 lg:p-12 selection:bg-[#34DCC2]/30">
      <div className="w-full max-w-[1900px] mx-auto">
        
        {/* Header Title Layer */}
        <div className="mb-6 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-[24px] md:text-[32px] font-black tracking-[-1px] mb-1 leading-tight">
            Planilha Visual de Calendário de Conteúdo
          </h1>
          <h2 className="text-[#0A97C6] font-bold text-[14px] uppercase tracking-[2px]">
            SOY CANCUN BRASIL • 2026
          </h2>
        </div>

        {/* Desktop Landscape Table View (Hidden on Mobile/Tablet) */}
        <div className="hidden xl:block rounded-xl overflow-x-auto shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-200 bg-white">
          <table className="w-full min-w-[1300px] text-left border-collapse table-auto">
            <thead className="bg-gradient-to-r from-[#0A97C6] to-[#34DCC2] text-white">
              <tr>
                <th className="py-4 px-4 w-[40px] text-center font-bold text-[12px] uppercase tracking-wider">#</th>
                <th className="py-4 px-4 w-[75px] text-center font-bold text-[12px] uppercase tracking-wider">Data</th>
                <th className="py-4 px-4 w-[85px] text-center font-bold text-[12px] uppercase tracking-wider">Dia</th>
                <th className="py-4 px-4 w-[100px] text-center font-bold text-[12px] uppercase tracking-wider">Semana</th>
                <th className="py-4 px-4 w-[160px] font-bold text-[12px] uppercase tracking-wider">Formato</th>
                <th className="py-4 px-4 w-[140px] font-bold text-[12px] uppercase tracking-wider">Pilar</th>
                <th className="py-4 px-6 w-[340px] font-bold text-[12px] uppercase tracking-wider">Tema / Conteúdo</th>
                <th className="py-4 px-6 font-bold text-[12px] uppercase tracking-wider">Estrutura / Nota</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/50">
              {tableData.map((row, index) => {
                // Logical check for Week Separation Horizontal Line
                const isNewWeek = index > 0 && row.week !== tableData[index - 1].week;

                return (
                  <tr 
                    key={row.id} 
                    className={`hover:opacity-80 transition-opacity duration-150 ${getWeekRowStyle(row.week)} ${
                      isNewWeek ? "border-t-[3px] border-[#0A97C6]/30" : ""
                    }`}
                  >
                    <td className="py-5 px-4 text-center align-top font-mono text-[12px] text-gray-400 font-bold">
                      {row.id}
                    </td>
                    <td className="py-5 px-4 text-center align-top font-bold text-[14px]">
                      {row.date}
                    </td>
                    <td className="py-5 px-4 text-center align-top text-[14px] text-gray-600 font-medium">
                      {row.day}
                    </td>
                    <td className="py-5 px-4 text-center align-top text-[13px] font-bold text-[#0A97C6] tracking-wide">
                      {row.week}
                    </td>
                    <td className="py-5 px-4 align-top">
                      <span className={`inline-flex items-center px-3 py-[6px] rounded-full text-[11.5px] whitespace-nowrap tracking-wide border border-transparent shadow-sm ${getFormatStyle(row.format)}`}>
                        {row.format}
                      </span>
                    </td>
                    <td className="py-5 px-4 align-top">
                      <span className={`text-[12px] uppercase tracking-[1px] ${getPillarStyle(row.pillar)}`}>
                        {row.pillar}
                      </span>
                    </td>
                    <td className="py-5 px-6 align-top text-[15px] font-bold leading-relaxed text-[#000000]">
                      {row.theme}
                    </td>
                    <td className="py-5 px-6 align-top text-[14px] leading-relaxed text-[#000000] opacity-90">
                      {row.notes}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet Card View (Hidden on Desktop) */}
        <div className="flex flex-col gap-4 xl:hidden mt-2">
          {tableData.map((row, index) => {
            const isNewWeek = index === 0 || row.week !== tableData[index - 1].week;
            
            return (
              <React.Fragment key={row.id}>
                {isNewWeek && (
                  <div className="text-[13px] font-black uppercase tracking-[2px] text-white bg-gradient-to-r from-[#0A97C6] to-[#34DCC2] py-2 px-4 rounded-lg mt-4 shadow-sm self-start">
                    {row.week}
                  </div>
                )}
                
                <div 
                  className={`flex flex-col gap-4 p-5 rounded-xl border border-black/5 shadow-sm transition-transform duration-200 hover:-translate-y-1 ${getWeekRowStyle(row.week)}`}
                >
                  <div className="flex justify-between items-center border-b border-black/5 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[16px] text-gray-900">{row.date}</span>
                      <span className="text-[13px] text-gray-500 font-medium">{row.day}</span>
                    </div>
                    <span className="text-[12px] font-mono font-bold text-gray-400">#{row.id}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className={`inline-flex items-center px-3 py-[6px] rounded-full text-[11px] whitespace-nowrap tracking-wide border border-transparent shadow-sm ${getFormatStyle(row.format)}`}>
                      {row.format}
                    </span>
                    <span className={`px-2 py-[4px] flex items-center text-[11px] uppercase tracking-[1px] bg-white/80 rounded-md shadow-sm border border-black/5 ${getPillarStyle(row.pillar)}`}>
                      {row.pillar}
                    </span>
                  </div>

                  <div className="mt-1">
                    <h4 className="text-[16px] font-bold leading-[1.4] text-gray-900 mb-2">
                      {row.theme}
                    </h4>
                    <p className="text-[14px] leading-[1.5] text-gray-800 bg-white/60 p-4 rounded-lg border border-white/50">
                      {row.notes}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
