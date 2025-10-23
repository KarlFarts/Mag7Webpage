const marketCapData = {
    total: {
        labels: ['Jan 2015', 'Jan 2016', 'Jan 2017', 'Jan 2018', 'Jan 2019', 'Jan 2020', 'Jan 2021', 'Jan 2022', 'Jan 2023', 'Jan 2024', 'Oct 2025'],
        data: [1.8, 2.2, 2.9, 4.1, 3.9, 5.8, 8.2, 9.5, 7.8, 12.5, 20.9],
        color: '#ff4500'
    },
    apple: {
        labels: ['Jan 2015', 'Jan 2016', 'Jan 2017', 'Jan 2018', 'Jan 2019', 'Jan 2020', 'Jan 2021', 'Jan 2022', 'Jan 2023', 'Jan 2024', 'Oct 2025'],
        data: [0.72, 0.53, 0.74, 0.89, 0.75, 1.39, 2.08, 2.91, 2.09, 2.95, 3.58],
        color: '#555555'
    },
    microsoft: {
        labels: ['Jan 2015', 'Jan 2016', 'Jan 2017', 'Jan 2018', 'Jan 2019', 'Jan 2020', 'Jan 2021', 'Jan 2022', 'Jan 2023', 'Jan 2024', 'Oct 2025'],
        data: [0.38, 0.42, 0.51, 0.71, 0.78, 1.21, 1.68, 2.53, 1.82, 3.12, 4.02],
        color: '#00a4ef'
    },
    google: {
        labels: ['Jan 2015', 'Jan 2016', 'Jan 2017', 'Jan 2018', 'Jan 2019', 'Jan 2020', 'Jan 2021', 'Jan 2022', 'Jan 2023', 'Jan 2024', 'Oct 2025'],
        data: [0.37, 0.49, 0.58, 0.73, 0.74, 0.92, 1.39, 1.92, 1.15, 1.78, 3.12],
        color: '#4285f4'
    },
    amazon: {
        labels: ['Jan 2015', 'Jan 2016', 'Jan 2017', 'Jan 2018', 'Jan 2019', 'Jan 2020', 'Jan 2021', 'Jan 2022', 'Jan 2023', 'Jan 2024', 'Oct 2025'],
        data: [0.18, 0.25, 0.39, 0.69, 0.73, 0.93, 1.63, 1.69, 0.88, 1.52, 2.15],
        color: '#ff9900'
    },
    nvidia: {
        labels: ['Jan 2015', 'Jan 2016', 'Jan 2017', 'Jan 2018', 'Jan 2019', 'Jan 2020', 'Jan 2021', 'Jan 2022', 'Jan 2023', 'Jan 2024', 'Oct 2025'],
        data: [0.01, 0.02, 0.06, 0.13, 0.08, 0.15, 0.32, 0.62, 0.48, 1.22, 3.95],
        color: '#76b900'
    },
    meta: {
        labels: ['Jan 2015', 'Jan 2016', 'Jan 2017', 'Jan 2018', 'Jan 2019', 'Jan 2020', 'Jan 2021', 'Jan 2022', 'Jan 2023', 'Jan 2024', 'Oct 2025'],
        data: [0.22, 0.31, 0.40, 0.54, 0.45, 0.59, 0.84, 0.56, 0.38, 0.98, 1.48],
        color: '#0668e1'
    },
    tesla: {
        labels: ['Jan 2015', 'Jan 2016', 'Jan 2017', 'Jan 2018', 'Jan 2019', 'Jan 2020', 'Jan 2021', 'Jan 2022', 'Jan 2023', 'Jan 2024', 'Oct 2025'],
        data: [0.03, 0.03, 0.04, 0.05, 0.06, 0.08, 0.63, 0.93, 0.39, 0.61, 1.60],
        color: '#ff4500'
    }
};

const tickerData = {
    apple: [{ icon: '<img src="assets/apple.png" alt="Apple logo" class="ticker-logo">', symbol: 'AAPL', price: '$150', cap: '$3.58T' }],
    microsoft: [{ icon: '<img src="assets/microsoft.png" alt="Microsoft logo" class="ticker-logo">', symbol: 'MSFT', price: '$300', cap: '$4.02T' }],
    google: [{ icon: '<img src="assets/placeholder.txt" alt="Google logo placeholder" class="ticker-logo">', symbol: 'GOOGL', price: '$140', cap: '$3.12T' }],
    amazon: [{ icon: '<img src="assets/aws.png" alt="Amazon Web Services logo" class="ticker-logo">', symbol: 'AMZN', price: '$130', cap: '$2.15T' }],
    nvidia: [{ icon: '<img src="assets/nvidia.png" alt="NVIDIA logo" class="ticker-logo">', symbol: 'NVDA', price: '$500', cap: '$3.95T' }],
    meta: [{ icon: '<img src="assets/meta.png" alt="Meta logo" class="ticker-logo">', symbol: 'META', price: '$300', cap: '$1.48T' }],
    tesla: [{ icon: '<img src="assets/TESLA.png" alt="Tesla logo" class="ticker-logo">', symbol: 'TSLA', price: '$200', cap: '$1.60T' }],
    total: [
        { icon: '<img src="assets/apple.png" alt="Apple logo" class="ticker-logo">', symbol: 'AAPL', price: '$150', cap: '$3.58T' },
        { icon: '<img src="assets/microsoft.png" alt="Microsoft logo" class="ticker-logo">', symbol: 'MSFT', price: '$300', cap: '$4.02T' },
        { icon: '<img src="assets/placeholder.txt" alt="Google logo placeholder" class="ticker-logo">', symbol: 'GOOGL', price: '$140', cap: '$3.12T' },
        { icon: '<img src="assets/aws.png" alt="Amazon Web Services logo" class="ticker-logo">', symbol: 'AMZN', price: '$130', cap: '$2.15T' },
        { icon: '<img src="assets/nvidia.png" alt="NVIDIA logo" class="ticker-logo">', symbol: 'NVDA', price: '$500', cap: '$3.95T' },
        { icon: '<img src="assets/meta.png" alt="Meta logo" class="ticker-logo">', symbol: 'META', price: '$300', cap: '$1.48T' },
        { icon: '<img src="assets/TESLA.png" alt="Tesla logo" class="ticker-logo">', symbol: 'TSLA', price: '$200', cap: '$1.60T' }
    ]
};

function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function updateInfoBox(company) {
    const infoContent = document.querySelector('.info-content');
    infoContent.innerHTML = '';

    if (company === 'total') {
        // For total view, show combined market cap and key metrics
        const totalItem = document.createElement('div');
        totalItem.className = 'info-section';
        totalItem.innerHTML = `
            <div class="info-metric">
                <span class="metric-label">TOTAL MARKET CAP</span>
                <span class="metric-value">$20.9T</span>
            </div>
            <div class="info-metric">
                <span class="metric-label">S&P 500 SHARE</span>
                <span class="metric-value">40%</span>
            </div>
            <div class="info-metric">
                <span class="metric-label">GDP EQUIVALENT</span>
                <span class="metric-value">US + China</span>
            </div>
        `;
        infoContent.appendChild(totalItem);
    } else {
        // For individual companies, show company-specific metrics
        const companyData = tickerData[company][0]; // Get first item since individual companies have single entry
        const companyItem = document.createElement('div');
        companyItem.className = 'info-section';
        companyItem.innerHTML = `
            <div class="info-metric">
                <span class="metric-label">MARKET CAP</span>
                <span class="metric-value">${companyData.cap}</span>
            </div>
            <div class="info-metric">
                <span class="metric-label">STOCK SYMBOL</span>
                <span class="metric-value">${companyData.symbol}</span>
            </div>
            <div class="info-metric">
                <span class="metric-label">CURRENT PRICE</span>
                <span class="metric-value">${companyData.price}</span>
            </div>
        `;
        infoContent.appendChild(companyItem);
    }
}

// Initialize Chart
const ctx = document.getElementById('marketCapChart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: marketCapData.total.labels,
        datasets: [{
            label: 'Combined Market Cap',
            data: marketCapData.total.data,
            borderColor: marketCapData.total.color,
            backgroundColor: hexToRgba(marketCapData.total.color, 0.1),
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointRadius: 6,
            pointHoverRadius: 8,
            pointBackgroundColor: marketCapData.total.color,
            pointBorderColor: '#000',
            pointBorderWidth: 2,
            spanGaps: false
        }]
    },
options: {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2.0,
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 0
        }
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            titleColor: '#ff4500',
            bodyColor: '#ffffff',
            borderColor: '#ff4500',
            borderWidth: 2,
            padding: 12
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                color: '#ffffff',
                font: { size: 12, weight: 'bold' },
                callback: function(value) {
                    return '$' + value + 'T';
                }
            },
            grid: {
                color: '#333333',
                lineWidth: 1
            }
        },
        x: {
            offset: false,
            ticks: {
                color: '#ffffff',
                font: { size: 12, weight: 'bold' },
                maxRotation: 0,
                minRotation: 0,
                autoSkip: false
            },
            grid: {
                color: '#333333',
                lineWidth: 1,
                offset: false,
                drawBorder: true,
                drawOnChartArea: true
            }
        }
    }
}
});

// Button Click Handlers
const buttons = document.querySelectorAll('.company-button');
const dangerContents = document.querySelectorAll('.danger-content');
const dangerTitle = document.getElementById('dangerTitle');
const dynamicTitle = document.getElementById('dynamicTitle');
const watermark = document.querySelector('.watermark');
const explainerBox = document.querySelector('.explainer-box');
const explainerTitle = document.querySelector('.explainer-title');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const company = button.dataset.company;

        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        dangerContents.forEach(content => content.classList.remove('active'));
        document.getElementById(`danger-${company}`).classList.add('active');

        const data = marketCapData[company];
        chart.data.labels = data.labels;
        chart.data.datasets[0].data = data.data;
        chart.data.datasets[0].borderColor = data.color;
        chart.data.datasets[0].backgroundColor = hexToRgba(data.color, 0.1);
        chart.data.datasets[0].pointBackgroundColor = data.color;

        updateInfoBox(company);

        if (company === 'total') {
            dynamicTitle.innerHTML = '<span class="stock-code">OUR</span> Combined Market Capitalization';
            dangerTitle.textContent = '▼ WHAT IS THE MAGNIFICENT SEVEN?';
            watermark.classList.add('visible');
        } else {
            const stockCode = button.dataset.stock;
            dynamicTitle.innerHTML = `<span class="stock-code">${stockCode}</span> Market Capitalization`;
            const companyName = button.querySelector('.button-name').textContent;
            dangerTitle.textContent = `▼ RISKS & DANGERS: ${companyName.toUpperCase()}`;
            watermark.classList.remove('visible');
        }

        chart.update('none');
    });
});

// Explainer Box Toggle
explainerTitle.addEventListener('click', () => {
    explainerBox.classList.toggle('collapsed');
    const isCollapsed = explainerBox.classList.contains('collapsed');
    const currentText = dangerTitle.textContent.substring(2);
    dangerTitle.textContent = (isCollapsed ? '▼ ' : '▲ ') + currentText;
});

// Initialize info box with total data
updateInfoBox('total');
