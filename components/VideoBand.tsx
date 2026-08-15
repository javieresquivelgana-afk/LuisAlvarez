import LazyVideo from "@/components/LazyVideo";

const stats = [
  { n: "Clase A", t: "Máxima categoría del registro SEC" },
  { n: "BT + MT", t: "Baja y media tensión" },
  { n: "09", t: "Líneas de servicio" },
  { n: "TE1", t: "Instalaciones declarables" },
];

export default function VideoBand() {
  return (
    <section className="band">
      <LazyVideo name="franja-subestacion" />
      <div className="wrap band-in">
        <span className="kicker">Capacidad técnica</span>
        <h2>Obras donde la electricidad no admite improvisación</h2>
        <p>
          Subestaciones, salas eléctricas, tableros de fuerza y redes en
          operación: trabajos que exigen licencia para firmar lo que se
          ejecuta.
        </p>

        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.n}>
              <b>{s.n}</b>
              <span>{s.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
