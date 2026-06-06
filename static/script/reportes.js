
//  REPORTES 
const reports = [
    { id: "ventas", title: "Reporte de Ventas", icon: "bi-cash-stack", color: "ventas" },
    { id: "pedidos", title: "Reporte de Pedidos", icon: "bi-box-seam", color: "pedidos" },
    { id: "rentabilidad", title: "Rentabilidad", icon: "bi-graph-up-arrow", color: "rentabilidad" },
    { id: "clientes", title: "Clientes", icon: "bi-people-fill", color: "clientes" },
    { id: "deudas", title: "Deudas", icon: "bi-exclamation-triangle-fill", color: "deudas" },
    { id: "visitas", title: "Visitas Técnicas", icon: "bi-geo-alt-fill", color: "visitas" },
    { id: "precios", title: "Precios de Insumos", icon: "bi-tag-fill", color: "precios" },
    { id: "productos", title: "Productos Más Vendidos", icon: "bi-boxes", color: "productos" },
    { id: "mayoristas", title: "Mayoristas / Minoristas", icon: "bi-building", color: "mayoristas" },
    { id: "pagos", title: "Pagos Contraentrega", icon: "bi-credit-card", color: "pagos" },
    { id: "consolidado", title: "Consolidado del Negocio", icon: "bi-bar-chart-line-fill", color: "consolidado" }
];

// CARGAR TARJETAS 
function loadReportCards() {
    const container = document.getElementById('report-cards');
    container.innerHTML = '';

    reports.forEach(report => {
        const cardHTML = `
            <div class="report-card" onclick="selectReport('${report.id}')">
                <div class="icon-circle ${report.color}">
                    <i class="bi ${report.icon}"></i>
                </div>
                <h6>${report.title}</h6>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}



//  FUNCIONES DE CADA REPORTE 

function loadSalesReport() {
    document.getElementById('report-title').textContent = "Reporte de Ventas";
    
    const content = `
        <div class="row g-4 mb-4">
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">VENTAS MES</small>
                    <h3 class="text-success mb-0">S/ 85,420</h3>
                    <small class="text-success">+4.1% <i class="bi bi-arrow-up"></i></small>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">KILOS VENDIDOS</small>
                    <h3 class="mb-0">32,400</h3>
                    <small class="text-success">+4%</small>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">TICKET PROMEDIO</small>
                    <h3 class="mb-0">S/ 1,820</h3>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">N° TRANSACCIONES</small>
                    <h3 class="mb-0">248</h3>
                </div>
            </div>
        </div>
        <div class="chart-container">
            <canvas id="salesChart"></canvas>
        </div>
    `;

    document.getElementById('dynamic-report-content').innerHTML = content;
    renderSalesChart();
}

//  PEDIDOS 
function loadPedidosReport() {
    document.getElementById('report-title').textContent = "Reporte de Pedidos";
    
    const content = `
        <div class="row g-4 mb-4">
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">TOTAL PEDIDOS</small>
                    <h3 class="text-info mb-0">1,284</h3>
                    <small class="text-success">+12% <i class="bi bi-arrow-up"></i></small>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">PENDIENTES</small>
                    <h3 class="text-warning mb-0">87</h3>
                    <small class="text-danger">-3</small>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">ENTREGADOS</small>
                    <h3 class="text-success mb-0">1,152</h3>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">TIEMPO PROMEDIO</small>
                    <h3 class="mb-0">2.4 días</h3>
                </div>
            </div>
        </div>
        <div class="chart-container">
            <canvas id="pedidosChart"></canvas>
        </div>
    `;

    document.getElementById('dynamic-report-content').innerHTML = content;
    renderPedidosChart();
}

//  RENTABILIDAD 
function loadRentabilidadReport() {
    document.getElementById('report-title').textContent = "Rentabilidad";
    
    const content = `
        <div class="row g-4 mb-4">
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">MARGEN BRUTO</small>
                    <h3 class="text-success mb-0">38.4%</h3>
                    <small class="text-success">+2.1%</small>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">MARGEN NETO</small>
                    <h3 class="text-success mb-0">21.7%</h3>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">ROI</small>
                    <h3 class="mb-0">2.8x</h3>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">COSTOS TOTALES</small>
                    <h3 class="text-danger mb-0">S/ 48,920</h3>
                </div>
            </div>
        </div>
        <div class="chart-container">
            <canvas id="rentabilidadChart"></canvas>
        </div>
    `;

    document.getElementById('dynamic-report-content').innerHTML = content;
    renderRentabilidadChart();
}

//  CLIENTES 
function loadClientesReport() {
    document.getElementById('report-title').textContent = "Clientes";
    
    const content = `
        <div class="row g-4 mb-4">
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">TOTAL CLIENTES</small>
                    <h3 class="mb-0">2,845</h3>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">CLIENTES ACTIVOS</small>
                    <h3 class="text-success mb-0">1,732</h3>
                    <small class="text-success">+8%</small>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">NUEVOS ESTE MES</small>
                    <h3 class="mb-0">184</h3>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">RETENCIÓN</small>
                    <h3 class="text-success mb-0">76%</h3>
                </div>
            </div>
        </div>
        <div class="chart-container">
            <canvas id="clientesChart"></canvas>
        </div>
    `;

    document.getElementById('dynamic-report-content').innerHTML = content;
    renderClientesChart();
}

//  DEUDAS 
function loadDeudasReport() {
    document.getElementById('report-title').textContent = "Deudas";
    
    const content = `
        <div class="row g-4 mb-4">
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">TOTAL POR COBRAR</small>
                    <h3 class="text-warning mb-0">S/ 124,500</h3>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">VENCIDAS</small>
                    <h3 class="text-danger mb-0">S/ 38,200</h3>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">COBRADO ESTE MES</small>
                    <h3 class="text-success mb-0">S/ 67,800</h3>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">CLIENTES MOROSOS</small>
                    <h3 class="mb-0">47</h3>
                </div>
            </div>
        </div>
        <div class="chart-container">
            <canvas id="deudasChart"></canvas>
        </div>
    `;

    document.getElementById('dynamic-report-content').innerHTML = content;
    renderDeudasChart();
}

//   MAS VENDIDOS 
function loadProductosReport() {
    document.getElementById('report-title').textContent = "Productos Más Vendidos";
    
    const content = `
        <div class="row g-4 mb-4">
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">PRODUCTO #1</small>
                    <h3 class="mb-0">Fertilizante X</h3>
                    <small>8,450 kg</small>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">PRODUCTO #2</small>
                    <h3 class="mb-0">Semilla Y</h3>
                    <small>6,320 kg</small>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">VENTAS TOTALES</small>
                    <h3 class="text-success mb-0">S/ 92,400</h3>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">TOP 5</small>
                    <h3 class="mb-0">87%</h3>
                    <small>del total</small>
                </div>
            </div>
        </div>
        <div class="chart-container">
            <canvas id="productosChart"></canvas>
        </div>
    `;

    document.getElementById('dynamic-report-content').innerHTML = content;
    renderProductosChart();
}

//  CONSOLIDADO 
function loadConsolidadoReport() {
    document.getElementById('report-title').textContent = "Consolidado del Negocio";
    
    const content = `
        <div class="row g-4 mb-4">
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">INGRESOS TOTALES</small>
                    <h3 class="text-success mb-0">S/ 248,650</h3>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">UTILIDAD NETA</small>
                    <h3 class="text-success mb-0">S/ 68,420</h3>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">CRECIMIENTO</small>
                    <h3 class="text-success mb-0">+18.4%</h3>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-dark p-3 rounded-3">
                    <small class="text-muted">EFICIENCIA</small>
                    <h3 class="mb-0">94%</h3>
                </div>
            </div>
        </div>
        <div class="chart-container">
            <canvas id="consolidadoChart"></canvas>
        </div>
    `;

    document.getElementById('dynamic-report-content').innerHTML = content;
    renderConsolidadoChart();
}

//  REPORTES SIMPLES 
function loadVisitasReport() { 
    document.getElementById('report-title').textContent = "Visitas Técnicas";
    simpleReport("Visitas Técnicas", "Registro, efectividad y seguimiento de visitas técnicas.");
}

function loadPreciosReport() { 
    document.getElementById('report-title').textContent = "Precios de Insumos";
    simpleReport(" Precios de Insumos", "Evolución de precios y costos de insumos.");
}

function loadMayoristasReport() { 
    document.getElementById('report-title').textContent = "Mayoristas / Minoristas";
    simpleReport(" Mayoristas vs Minoristas", "Comparativa de ventas por tipo de cliente.");
}

function loadPagosReport() { 
    document.getElementById('report-title').textContent = "Pagos Contraentrega";
    simpleReport("Pagos Contraentrega", "Control y seguimiento de pagos en entrega.");
}

function simpleReport(title, description) {
    document.getElementById('dynamic-report-content').innerHTML = `
        <div class="text-center py-5">
            <h4 class="text-info">${title}</h4>
            <p class="text-secondary">${description}</p>
            <small class="text-muted">Este reporte se completará próximamente con métricas y gráficas.</small>
        </div>
    `;
}



//  SELECCIONAR REPORTE 
function selectReport(reportId) {
    switch(reportId) {
        case "ventas":      loadSalesReport(); break;
        case "pedidos":     loadPedidosReport(); break;
        case "rentabilidad": loadRentabilidadReport(); break;
        case "clientes":    loadClientesReport(); break;
        case "deudas":      loadDeudasReport(); break;
        case "visitas":     loadVisitasReport(); break;
        case "precios":     loadPreciosReport(); break;
        case "productos":   loadProductosReport(); break;
        case "mayoristas":  loadMayoristasReport(); break;
        case "pagos":       loadPagosReport(); break;
        case "consolidado": loadConsolidadoReport(); break;
        default:
            loadSalesReport();
    }
}

//  EXPORTAR 
function exportReport(type) {
    const title = document.getElementById('report-title').textContent;
    alert(`Exportando "${title}" en formato ${type.toUpperCase()}...`);
}

//  INICIALIZACIÓN 
document.addEventListener('DOMContentLoaded', () => {
    loadReportCards();
    loadSalesReport(); 
});














// ==================== graficoss ====================

//  VENTAS FRAGICO 
function renderSalesChart() {
    const ctx = document.getElementById('salesChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
            datasets: [{
                label: 'S/ Ventas',
                data: [18500, 22000, 19500, 24500, 26800, 23000, 27500, 31000],
                backgroundColor: '#ffeb3b',
                borderColor: '#ffd700',
                borderWidth: 1,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { grid: { color: '#333' }, ticks: { color: '#aaa' } },
                x: { grid: { color: '#333' }, ticks: { color: '#aaa' } }
            }
        }
    });
}


function renderPedidosChart() {
    new Chart(document.getElementById('pedidosChart'), {
        type: 'line',
        data: { labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago'],
                datasets: [{ label: 'Pedidos', data: [120,145,132,168,155,180,195,210], borderColor: '#00b8d4', tension: 0.4 }]},
        options: { responsive: true, maintainAspectRatio: false }
    });
}

function renderRentabilidadChart() {
    new Chart(document.getElementById('rentabilidadChart'), {
        type: 'bar',
        data: { labels: ['Ene','Feb','Mar','Abr','May','Jun'],
                datasets: [{ label: 'Margen %', data: [35,37,36,39,38,41], backgroundColor: '#00c853' }]},
        options: { responsive: true, maintainAspectRatio: false }
    });
}

function renderClientesChart() {
    new Chart(document.getElementById('clientesChart'), {
        type: 'bar',
        data: { labels: ['Ene','Feb','Mar','Abr','May','Jun'],
                datasets: [{ label: 'Nuevos Clientes', data: [45,52,48,61,55,70], backgroundColor: '#3f51b5' }]},
        options: { responsive: true, maintainAspectRatio: false }
    });
}

function renderDeudasChart() {
    new Chart(document.getElementById('deudasChart'), {
        type: 'pie',
        data: { labels: ['Al Día','Vencidas 30d','Vencidas +60d'],
                datasets: [{ data: [65,25,10], backgroundColor: ['#00c853','#ff9800','#f44336'] }]},
        options: { responsive: true, maintainAspectRatio: false }
    });
}

function renderProductosChart() {
    new Chart(document.getElementById('productosChart'), {
        type: 'bar',
        data: { labels: ['Fertilizante X','Semilla Y','Pesticida Z','Abono Org'],
                datasets: [{ label: 'Kilos Vendidos', data: [8450,6320,4120,3850], backgroundColor: '#9c27b0' }]},
        options: { responsive: true, maintainAspectRatio: false }
    });
}

function renderConsolidadoChart() {
    new Chart(document.getElementById('consolidadoChart'), {
        type: 'line',
        data: { labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago'],
                datasets: [{ label: 'Utilidad Neta', data: [42000,48500,45100,52000,49800,61000,67500,68420], borderColor: '#ffd700', tension: 0.3 }]},
        options: { responsive: true, maintainAspectRatio: false }
    });
}