import LazyVideo from "@/components/LazyVideo";

const stats = [
  { n: "Clase A", t: "Máxima categoría del registro SEC de instaladores" },
  { n: "BT + MT", t: "Baja y media tensión bajo un mismo equipo" },
  { n: "09", t: "Líneas de servicio, del proyecto a la mantención" },
  { n: "TE1", t: "Instalaciones ejecutadas para quedar declaradas" },
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
          operación. Trabajos que exigen criterio de ingeniería, coordinación
          con la distribuidora y un responsable con licencia para firmar lo que
          se ejecuta.
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
