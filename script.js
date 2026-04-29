const ctx = document.getElementById('chart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1', '5', '10', '15', '20', '25', '30'],
        datasets: [{
            label: 'Tráfico',
            data: [4000, 3800, 5000, 4600, 6000, 5800, 7000],
            borderColor: '#ff2d55',
            tension: 0.4
        }]
    },
    options: {
        plugins: {
            legend: {
                labels: { color: 'white' }
            }
        },
        scales: {
            x: { ticks: { color: 'white' }},
            y: { ticks: { color: 'white' }}
        }
    }
});

function crearCampaña() {
    alert("Nueva campaña creada 🚀");
}