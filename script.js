// Elementy DOM
const statusContainer = document.querySelector('.status');

// API údaje
const endpoints = [
  {
    name: 'Bluelights Roleplay',
    url: 'https://bluelightsroleplay.eu/',
    apiKey: 'prj_RexLQc3XybFa2ZfhZGJDBIaYupC9'
  },
  {
    name: 'Bluelights Admin Panel',
    url: 'https://admin.bluelightsroleplay.eu/',
    apiKey: 'prj_1hh6H6SKSJLIp5iaiArtZGvwosRw'
  }
];

// Funkce pro získání statusu webu
async function fetchStatus(endpoint) {
  try {
    const response = await fetch(endpoint.url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${endpoint.apiKey}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch status');
    }

    const data = await response.json();
    return {
      name: endpoint.name,
      url: endpoint.url,
      online: true,
      uptime: data.uptime || 'N/A',
      lastChecked: new Date().toLocaleString()
    };
  } catch (error) {
    return {
      name: endpoint.name,
      url: endpoint.url,
      online: false,
      uptime: 'N/A',
      lastChecked: new Date().toLocaleString()
    };
  }
}

// Aktualizace statusu
async function updateStatus() {
  statusContainer.innerHTML = ''; // Vyprázdnit container

  for (const endpoint of endpoints) {
    const status = await fetchStatus(endpoint);

    const statusItem = document.createElement('div');
    statusItem.classList.add('status-item');

    statusItem.innerHTML = `
      <h3>${status.name}</h3>
      <p>URL: <a href="${status.url}" target="_blank">${status.url}</a></p>
      <p>Status: <span class="status-value">${status.online ? 'Online' : 'Offline'}</span></p>
      <p>Uptime: <span class="uptime">${status.uptime}</span></p>
      <p>Last Checked: ${status.lastChecked}</p>
    `;

    statusContainer.appendChild(statusItem);
  }
}

// Načtení statusu při načtení stránky a každých 5 minut
updateStatus();
setInterval(updateStatus, 300000);
