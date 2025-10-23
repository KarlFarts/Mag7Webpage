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
    google: [{ icon: '<img src="assets/alphabet.png" alt="Alphabet logo" class="ticker-logo">', symbol: 'GOOGL', price: '$140', cap: '$3.12T' }],
    amazon: [{ icon: '<img src="assets/aws.png" alt="Amazon Web Services logo" class="ticker-logo">', symbol: 'AMZN', price: '$130', cap: '$2.15T' }],
    nvidia: [{ icon: '<img src="assets/nvidia.png" alt="NVIDIA logo" class="ticker-logo">', symbol: 'NVDA', price: '$500', cap: '$3.95T' }],
    meta: [{ icon: '<img src="assets/meta.png" alt="Meta logo" class="ticker-logo">', symbol: 'META', price: '$300', cap: '$1.48T' }],
    tesla: [{ icon: '<img src="assets/TESLA.png" alt="Tesla logo" class="ticker-logo">', symbol: 'TSLA', price: '$200', cap: '$1.60T' }],
    total: [
        { icon: '<img src="assets/apple.png" alt="Apple logo" class="ticker-logo">', symbol: 'AAPL', price: '$150', cap: '$3.58T' },
        { icon: '<img src="assets/microsoft.png" alt="Microsoft logo" class="ticker-logo">', symbol: 'MSFT', price: '$300', cap: '$4.02T' },
        { icon: '<img src="assets/alphabet.png" alt="Alphabet logo" class="ticker-logo">', symbol: 'GOOGL', price: '$140', cap: '$3.12T' },
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

const companyContent = {
    total: {
        header: "OUR ECONOMIC MIGHT OUTSHINES CHINA!!!1!!!!",
        paragraph: "They don’t call us the Magnificent Seven for nothing more than our #Grind – in fact, our Market Cap™ makes the regulator “nerds” look like WEAK wimps! Just look at us – our market cap OUTSHINES the United Kingdom, France, Japan (actually, the entire European Union), and even India. But that’s nothing – we’re currently beating the entire economy of China! Take that, Grandpa Xi! (And we’re coming for you, too, America!) We often spend more money on lobbying than big oil (aka, grandpa silicon) and pharmaceutical corporations. Think about this great investment! Those stories about the one-lobbyist-per-five-member-of-congress? Absolutely true, but it is only because we care! And if it were not our investment/thought leaders – the Vanguard Group and Blackrock – we wouldn’t be able to show our care to our consumers. Thank you, President Trump, for helping American consumers thrive!"
    },
    apple: {
        header: "The iPhone Empire's Hidden Vulnerabilities",
        paragraph: "While Apple dominates the premium smartphone market with its ecosystem lock-in, the company's future growth depends entirely on iPhone sales which represent over 50% of revenue. As emerging markets saturate and competition from Chinese manufacturers intensifies, Apple's premium pricing strategy faces unprecedented pressure. The App Store's 30% commission model, already under regulatory scrutiny, could be dismantled by EU and US antitrust actions, potentially costing billions in annual revenue."
    },
    microsoft: {
        header: "AI's Double-Edged Sword for the Software Giant",
        paragraph: "Microsoft's transformation into an AI-first company through its OpenAI partnership has fueled explosive growth, but the strategy carries immense risks. The company's $13+ billion investment in OpenAI remains largely unmonetized while infrastructure costs for AI data centers skyrocket. Azure cloud growth is decelerating as the market matures, and Microsoft's dependence on a handful of hyperscalers for AI chips creates dangerous concentration risk."
    },
    google: {
        header: "Search Monopoly Under Siege",
        paragraph: "Alphabet's 90%+ dominance of search advertising generates unparalleled cash flow, but the foundation is cracking. AI-powered alternatives like ChatGPT and Perplexity threaten Google's core business model, while the Department of Justice antitrust case could force divestitures of Chrome, Android, or the entire ad business. With 80% of revenue tied to advertising, any disruption to this ecosystem would be catastrophic."
    },
    amazon: {
        header: "E-commerce Margins vs. Cloud Dominance",
        paragraph: "Amazon's dual business model creates constant tension between razor-thin retail margins and highly profitable cloud services. The e-commerce division operates at 2-3% margins, vulnerable to economic downturns and labor pressures from unionization efforts. AWS, while dominant, faces slowing growth as enterprises complete their cloud migrations and competitors gain ground. This margin compression threatens Amazon's ability to sustain its aggressive expansion."
    },
    nvidia: {
        header: "AI Bubble or Semiconductor Revolution?",
        paragraph: "NVIDIA's stock price assumes perpetual AI growth, but the company's valuation now exceeds the market caps of Intel, AMD, and TSMC combined. While data center sales boom, NVIDIA faces existential threats: customers could develop their own AI chips, US export restrictions eliminate 25% of addressable markets, and any slowdown in AI hype could trigger a devastating correction. The company's future depends on AI becoming the computing paradigm it claims to be."
    },
    meta: {
        header: "Social Media's Adolescence Crisis",
        paragraph: "Meta's platforms are losing their grip on younger users as TikTok, Snapchat, and BeReal capture Gen Z attention. The metaverse vision, costing $40+ billion annually, shows no path to profitability while Apple's privacy changes have already cost $10+ billion in ad revenue. With advertising as the sole revenue driver, Meta's inability to evolve beyond its 2010s social media model creates an existential crisis for the world's largest social network."
    },
    tesla: {
        header: "Autonomous Driving Dreams vs. Automotive Reality",
        paragraph: "Tesla's market cap assumes Full Self-Driving will revolutionize transportation, but the technology remains years from commercial viability. Meanwhile, every major automaker now produces competitive EVs, forcing Tesla into repeated price cuts that erode margins from 30% to the low 20s. The company's growth depends on robotaxis materializing, but competition from traditional automakers and new EV startups threatens Tesla's premium positioning."
    }
};

function updateInfoBox(company) {
    const infoContent = document.querySelector('.info-content');
    infoContent.innerHTML = '';

    // Use consistent header and paragraph layout for all views including total
    const content = companyContent[company];
    const companyItem = document.createElement('div');
    companyItem.className = 'info-section';
    companyItem.innerHTML = `
        <div class="info-header">${content.header}</div>
        <div class="info-paragraph">${content.paragraph}</div>
    `;
    infoContent.appendChild(companyItem);
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
    animation: {
        duration: 1000,
        easing: 'easeInOutQuart'
    },
    transitions: {
        active: {
            animation: {
                duration: 800
            }
        }
    },
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
            padding: 12,
            callbacks: {
                label: function(context) {
                    let value = context.parsed.y;
                    return '$' + (value * 1000000000000).toLocaleString();
                }
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            max: 21,
            ticks: {
                color: '#ffffff',
                font: { size: 10, weight: 'bold' },
                callback: function(value) {
                    return '$' + (value * 1000000000000).toLocaleString();
                },
                stepSize: 3
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

const iconMap = {
    total: 'assets/WHITE skull cash logo.png',
    apple: 'assets/apple.png',
    microsoft: 'assets/microsoft.png',
    google: 'assets/alphabet.png',
    amazon: 'assets/aws.png',
    nvidia: 'assets/nvidia.png',
    meta: 'assets/meta.png',
    tesla: 'assets/TESLA.png'
};

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

        // Set dynamic watermark
        watermark.src = iconMap[company];
        watermark.classList.add('visible');

        // Apply white filter for Apple logo
        if (company === 'apple') {
            watermark.classList.add('white-filter');
        } else {
            watermark.classList.remove('white-filter');
        }

        // Update y-axis scaling based on company
        if (company === 'total') {
            chart.options.scales.y.max = 21;
            chart.options.scales.y.ticks.stepSize = 3;
        } else {
            delete chart.options.scales.y.max;
            chart.options.scales.y.ticks.stepSize = 0.5;
        }

        if (company === 'total') {
            dynamicTitle.innerHTML = '<span class="stock-code">OUR</span> Combined Market Capitalization';
            dangerTitle.textContent = '▼ WHAT IS THE MAGNIFICENT SEVEN?';
        } else {
            const stockCode = button.dataset.stock;
            dynamicTitle.innerHTML = `<span class="stock-code">${stockCode}</span> Market Capitalization`;
            const companyName = button.querySelector('.button-name').textContent;
            dangerTitle.textContent = `▼ RISKS & DANGERS: ${companyName.toUpperCase()}`;
        }

        chart.update('active');
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

// Initialize watermark with white skull logo for default total view
watermark.src = 'assets/WHITE skull cash logo.png';
watermark.classList.add('visible');
