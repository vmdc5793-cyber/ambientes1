import React from 'react';
import {
  Clock,
  ClipboardCheck,
  CheckCircle,
  HelpCircle,
  Lightbulb,
  FileText,
  Tag,
  Download,
} from 'lucide-react';

export const SlideImplementationGuide: React.FC = () => {
  return (
    <div className="w-full space-y-4">
      {/* 4-Step Routine Cycle */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-5 shadow-md">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal-400" />
            <h2 className="text-base font-bold text-white tracking-tight">
              Protocolo Diario: Los 4 Momentos de la Hora de los Sectores
            </h2>
          </div>
          <span className="text-[11px] text-teal-400 bg-teal-950/60 px-2.5 py-0.5 rounded border border-teal-800 font-semibold">
            60 Minutos Diarios
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Moment 1 */}
          <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/60 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="text-teal-400 font-bold text-xs flex items-center justify-between">
                <span>01. Planificación</span>
                <span className="font-mono text-[10px]">10 min</span>
              </div>
              <h3 className="text-xs font-bold text-white">Asamblea Inicial y Elección</h3>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Los niños expresan libremente a qué sector desean acudir. Utilizan su tarjeta con foto en el cartel de aforo (máx. 3-4 niños por rincón).
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-700/50 text-[10px] text-slate-400">
              Rol docente: Registrar preferencias y orientar aforos equilibrados.
            </div>
          </div>

          {/* Moment 2 */}
          <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/60 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="text-sky-400 font-bold text-xs flex items-center justify-between">
                <span>02. Desarrollo</span>
                <span className="font-mono text-[10px]">35 min</span>
              </div>
              <h3 className="text-xs font-bold text-white">Juego Libre y Experimentación</h3>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Manipulación de materiales, construcción de proyectos, lectura de imágenes o experimentos. Se promueve la autonomía y cooperación.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-700/50 text-[10px] text-slate-400">
              Rol docente: Observador participante y mediador sin invadir el juego.
            </div>
          </div>

          {/* Moment 3 */}
          <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/60 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="text-amber-400 font-bold text-xs flex items-center justify-between">
                <span>03. Orden</span>
                <span className="font-mono text-[10px]">10 min</span>
              </div>
              <h3 className="text-xs font-bold text-white">Clasificación y Guardado</h3>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Con una melodía musical de transición, los niños devuelven cada objeto a su contenedor rotulado con silueta o color.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-700/50 text-[10px] text-slate-400">
              Rol docente: Estimular el sentido de pertenencia y cuidado mutuo.
            </div>
          </div>

          {/* Moment 4 */}
          <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/60 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="text-emerald-400 font-bold text-xs flex items-center justify-between">
                <span>04. Socialización</span>
                <span className="font-mono text-[10px]">10 min</span>
              </div>
              <h3 className="text-xs font-bold text-white">Círculo de Comunicación</h3>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Voluntarios comparten qué construyeron, qué descubrieron o cómo resolvieron un conflicto con un compañero.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-700/50 text-[10px] text-slate-400">
              Rol docente: Formular preguntas abiertas que provoquen metacognición.
            </div>
          </div>
        </div>
      </div>

      {/* Two columns: Checklist & Signage guidelines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Checklist */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
          <div className="flex items-center gap-2">
            <ClipboardCheck className="w-4 h-4 text-sky-400" />
            <h3 className="font-bold text-sm text-white">Checklist de Habilitación de Aula</h3>
          </div>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-start gap-2 bg-slate-800/40 p-2 rounded-lg">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Mobiliario bajo sin filos:</strong> Estantes a máx. 85 cm fijados a la pared mediante pernos de anclaje sísmico.</span>
            </div>
            <div className="flex items-start gap-2 bg-slate-800/40 p-2 rounded-lg">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Rótulos multinivel:</strong> Contenedores identificados con imagen real, silueta y palabra en letra imprenta script.</span>
            </div>
            <div className="flex items-start gap-2 bg-slate-800/40 p-2 rounded-lg">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Delimitación visual en suelo:</strong> Tapetes de colores distintos para lectura (verde) y construcción (azul).</span>
            </div>
            <div className="flex items-start gap-2 bg-slate-800/40 p-2 rounded-lg">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Tomas eléctricas seguras:</strong> Enchufes de tecnología con protector infantil hermético a 1.20 m de altura.</span>
            </div>
          </div>
        </div>

        {/* Rotulación y Consejos de Evaluación */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <h3 className="font-bold text-sm text-white">Instrumentos de Evaluación Formativa</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            El trabajo en sectores no se califica con notas numéricas, sino mediante registro anecdotario y listas de cotejo cualitativas:
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/60">
              <span className="font-semibold text-amber-400 block mb-0.5">Cuaderno Anecdotario de Observación</span>
              <p className="text-[11px] text-slate-400">
                Registra interacciones espontáneas, resolución de conflictos espaciales y destrezas comunicativas durante el juego en sectores.
              </p>
            </div>
            <div className="bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/60">
              <span className="font-semibold text-amber-400 block mb-0.5">Portafolio Individual de Producciones</span>
              <p className="text-[11px] text-slate-400">
                Guarda dibujos del sector arte, esquemas gráficos del sector ciencias y fotografías de construcciones tridimensionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
