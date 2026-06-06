const pagos = [
    {
        codigo:"PG-091",
        cliente:"Granja San Pedro",
        metodo:"Transferencia",
        monto:"S/ 4,860",
        fecha:"2026-05-02",
        estado:"Pagado"
    },
    {
        codigo:"PG-090",
        cliente:"Avícola El Sol",
        metodo:"Crédito",
        monto:"S/ 1,240",
        fecha:"2026-04-30",
        estado:"Pendiente"
    },
    {
        codigo:"PG-089",
        cliente:"Postura Andina",
        metodo:"Yape",
        monto:"S/ 8,100",
        fecha:"2026-05-04",
        estado:"Pagado"
    }
];

const contenedor = document.getElementById("pagosContent");

contenedor.innerHTML = `
    <h1 class="section-title">
        Pagos
    </h1>

    <div class="stats-grid">

        <div class="stat-card">
            <div class="stat-icon">
                <i class="bi bi-cash"></i>
            </div>

            <div class="stat-label">
                Cobrado mes
            </div>

            <div class="stat-value">
                S/ 78,420
            </div>
        </div>

        <div class="stat-card">
            <div class="stat-icon">
                <i class="bi bi-wallet2"></i>
            </div>

            <div class="stat-label">
                Por cobrar
            </div>

            <div class="stat-value">
                S/ 12,340
            </div>
        </div>

        <div class="stat-card">
            <div class="stat-icon">
                <i class="bi bi-exclamation-triangle"></i>
            </div>

            <div class="stat-label">
                Vencidos
            </div>

            <div class="stat-value">
                S/ 1,560
            </div>
        </div>

        <div class="stat-card">
            <div class="stat-icon">
                <i class="bi bi-check-circle"></i>
            </div>

            <div class="stat-label">
                Conciliados
            </div>

            <div class="stat-value">
                92%
            </div>
        </div>

    </div>

    <div class="glass-table">
        <table>
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Cliente</th>
                    <th>Método</th>
                    <th>Monto</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                </tr>
            </thead>

            <tbody>
                ${pagos.map(p => `
                    <tr>
                        <td>${p.codigo}</td>
                        <td>${p.cliente}</td>
                        <td>${p.metodo}</td>
                        <td>${p.monto}</td>
                        <td>${p.fecha}</td>
                        <td>
                            <span class="estado ${
                                p.estado === 'Pagado'
                                    ? 'pagado'
                                    : 'pendiente'
                            }">
                                ${p.estado}
                            </span>
                        </td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    </div>
`;