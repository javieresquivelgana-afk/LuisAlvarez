export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="wrap hero-in">
        <div>
          <span className="hero-badge">
            <span className="dot" />
            Instalador Eléctrico Clase A
          </span>

          <h1>
            Ingeniería eléctrica profesional para <em>empresas</em>, locales
            comerciales y proyectos
          </h1>

          <p className="hero-sub">
            Servicios de redes de baja y media tensión, fuerza, mantenimiento
            eléctrico, empalmes y proyectos fotovoltaicos, liderados por
            instalador eléctrico Clase A.
          </p>

          <div className="hero-actions">
            <a className="btn btn-volt" href="#agendar">
              Agendar visita técnica
            </a>
            <a className="btn btn-ghost" href="#agendar">
              Solicitar cotización
            </a>
          </div>

          <div className="hero-specs">
            <div className="spec">
              <b>BT / MT</b>
              <span>Baja y media tensión</span>
            </div>
            <div className="spec">
              <b>Clase A</b>
              <span>Máxima licencia SEC</span>
            </div>
            <div className="spec">
              <b>Comercial</b>
              <span>Empresas y edificios</span>
            </div>
          </div>
        </div>

        {/* Esquemático eléctrico decorativo */}
        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 420 420" fill="none">
            {/* Marco de tablero */}
            <rect
              x="30"
              y="20"
              width="360"
              height="380"
              rx="6"
              stroke="rgba(148,170,200,0.3)"
              strokeWidth="1.5"
            />
            <rect
              x="50"
              y="40"
              width="320"
              height="340"
              rx="3"
              stroke="rgba(148,170,200,0.15)"
            />
            {/* Líneas de circuito animadas */}
            <path
              className="circuit-flow"
              d="M50 110 H170 V180 H290 V250 H370"
              stroke="#ffd60a"
              strokeWidth="2"
            />
            <path
              className="circuit-flow"
              d="M50 320 H140 V250 H220 V140 H370"
              stroke="rgba(255,214,10,0.45)"
              strokeWidth="1.5"
              style={{ animationDelay: "-0.8s" }}
            />
            {/* Nodos */}
            {[
              [170, 110],
              [170, 180],
              [290, 180],
              [290, 250],
              [140, 320],
              [140, 250],
              [220, 250],
              [220, 140],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="4" fill="#ffd60a" />
            ))}
            {/* Breakers */}
            {[70, 130, 190, 250, 310].map((x) => (
              <g key={x}>
                <rect
                  x={x}
                  y="56"
                  width="40"
                  height="26"
                  rx="2"
                  stroke="rgba(148,170,200,0.4)"
                  fill="rgba(18,28,41,0.9)"
                />
                <rect x={x + 14} y="61" width="12" height="16" rx="1" fill="#ffd60a" opacity="0.85" />
              </g>
            ))}
            {/* Símbolo de rayo central */}
            <g transform="translate(186 256)">
              <circle
                cx="24"
                cy="24"
                r="46"
                stroke="rgba(255,214,10,0.35)"
                strokeDasharray="4 6"
              />
              <path
                d="M30 2 L10 28 H22 L18 46 L38 20 H26 Z"
                fill="#ffd60a"
              />
            </g>
            {/* Etiquetas técnicas */}
            <text
              x="56"
              y="370"
              fill="rgba(154,168,187,0.7)"
              fontSize="10"
              fontFamily="var(--font-m)"
              letterSpacing="2"
            >
              TABLERO GENERAL · BT/MT
            </text>
            <text
              x="290"
              y="370"
              fill="rgba(255,214,10,0.8)"
              fontSize="10"
              fontFamily="var(--font-m)"
              letterSpacing="2"
            >
              380V ~
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
