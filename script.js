// Client data with HTML file paths
const clients = [
    {
        id: 1,
        name: "Eaglercraft 1.5.2",
        version: "1.5.2",
        description: "Just Minecraft 1.5.2 (is not very optimized)",
        features: ["Limited Multiplayer Support", "Texture Packs"],
        icon: "fa-gamepad",
        htmlFile: "clients/1.5.2.html"
    },
    {
        id: 2,
        name: "Eaglercraft 1.8 (WASM)",
        version: "1.8.8",
        description: "The most stable version of Eaglercraft with excellent performance and compatibility. Perfect for older systems and reliable gameplay.",
        features: ["Multiplayer Support", "Texture Packs", "Stable Performance", "Better Performance"],
        icon: "fa-gamepad",
        htmlFile: "clients/1.8-wasm.html"
    },
    {
        id: 3,
        name: "Eaglercraft 1.8 (JS)",
        version: "1.8.8",
        description: "he most stable version of Eaglercraft with excellent performance and compatibility. Perfect for older systems and reliable gameplay.",
        features: ["Multiplayer Support", "Texture Packs", "Stable Performance", "Lower Performance"],
        icon: "fa-gamepad",
        htmlFile: "clients/1.8-js.html"
    },
    {
        id: 4,
        name: "Eaglercraft 1.12 (WASM)",
        version: "1.12.2",
        description: "Enhanced version with more features and improved graphics. Includes additional blocks and entities from later Minecraft updates.",
        features: ["More Blocks", "Better Mobs", "Enhanced Graphics", "Combat Update", "Multiplayer Support", "Texture Packs", "Stable Performance", "Better Performance"],
        icon: "fa-gamepad",
        htmlFile: "clients/1.12-wasm.html"
    },
    {
        id: 5,
        name: "Eaglercraft 1.12 (JS)",
        version: "1.12.2",
        description: "Enhanced version with more features and improved graphics. Includes additional blocks and entities from later Minecraft updates.",
        features: ["More Blocks", "Better Mobs", "Enhanced Graphics", "Combat Update", "Multiplayer Support", "Texture Packs", "Stable Performance", "Lower Performance"],
        icon: "fa-gamepad",
        htmlFile: "clients/1.12-js.html"
    },
    {
        id: 6,
        name: "Astra Client (WASM)",
        version: "1.6.0",
        description: "Astra client is a PvP client that is well optimized in every way.",
        features: ["1.8 Features", "Mods", "Easy To Use UI", "Cosmetics","Better Performance"],
        icon: "fa-exclamation-triangle",
        htmlFile: "clients/astra-wasm.html"
    },
    {
        id: 7,
        name: "Astra Client (JS)",
        version: "1.6.0",
        description: "Astra client is a PvP client that is well optimized in every way.",
        features: ["1.8 Features", "Mods", "Easy To Use UI", "Cosmetics", "Lower Performance"],
        icon: "fa-exclamation-triangle",
        htmlFile: "clients/astra-js.html"
    },
    {
        id: 8,
        name: "DragonX V3",
        version: "1.8.8",
        description: "DragonX Hacked Client is a modified client for the browser-based version of Minecraft known as Eaglercraft. This hacked client includes various features that give players advantages in gameplay.",
        features: ["1.8 Features", "Easy To Use UI", "Hacks", "Lower Performance"],
        icon: "fa-dragon",
        htmlFile: "clients/dragonx.html"
    },
    {
        id: 9,
        name: "Resent Client",
        version: "4.0.0",
        description: "Resent Client is a highly popular and modified client designed specifically for the browser-based version of Minecraft, known as Eaglercraft. It is widely recognized as one of the best PvP (Player vs. Player) clients for enhancing gameplay performance and customization/",
        features: ["1.8 Features", "Mods", "Easy To Use UI", "Lower Performance"],
        icon: "fa-history",
        htmlFile: "clients/resent.html"
    },
    {
        id: 10,
        name: "Pixel Client 1.8 (WASM)",
        version: "1.8.8",
        description: "Pixel Client is a popular and powerful hacked client designed specifically for the browser-based version of Minecraft, known as Eaglercraft. It is built to provide players with a significant edge in multiplayer gameplay, particularly on PvP (Player vs. Player) and anarchy servers, through an extensive suite of cheats, utilities, and customization options.",
        features: ["1.8 Features", "Mods", "Easy To Use UI", "Better Performance"],
        icon: "fa-cube",
        htmlFile: "clients/1.8-pixel-wasm.html"
    },
    {
        id: 11,
        name: "Pixel Client 1.8 (JS)",
        version: "1.8.8",
        description: "Pixel Client is a popular and powerful hacked client designed specifically for the browser-based version of Minecraft, known as Eaglercraft. It is built to provide players with a significant edge in multiplayer gameplay, particularly on PvP (Player vs. Player) and anarchy servers, through an extensive suite of cheats, utilities, and customization options.",
        features: ["1.8 Features", "Mods", "Easy To Use UI", "Lower Performance"],
        icon: "fa-cube",
        htmlFile: "clients/1.8-pixel-js.html"
    },
    {
        id: 12,
        name: "Pixel Client 1.12 (WASM)",
        version: "1.12.2",
        description: "Pixel Client is a popular and powerful hacked client designed specifically for the browser-based version of Minecraft, known as Eaglercraft. It is built to provide players with a significant edge in multiplayer gameplay, particularly on PvP (Player vs. Player) and anarchy servers, through an extensive suite of cheats, utilities, and customization options.",
        features: ["1.12 Features", "Mods", "Easy To Use UI", "Better Performance"],
        icon: "fa-cube",
        htmlFile: "clients/1.12-pixel-wasm.html"
    },
    {
        id: 13,
        name: "Pixel Client 1.12 (JS)",
        version: "1.12.2",
        description: "Pixel Client is a popular and powerful hacked client designed specifically for the browser-based version of Minecraft, known as Eaglercraft. It is built to provide players with a significant edge in multiplayer gameplay, particularly on PvP (Player vs. Player) and anarchy servers, through an extensive suite of cheats, utilities, and customization options.",
        features: ["1.12 Features", "Mods", "Easy To Use UI", "Lower Performance"],
        icon: "fa-cube",
        htmlFile: "clients/1.12-pixel-js.html"
    },
    {
        id: 14,
        name: "Tuff Client (WASM)",
        version: "1.12.2",
        description: "Tuff Client is a modern, feature-rich hacked client designed specifically for the browser-based version of Minecraft, Eaglercraft. It has gained popularity for its stability, user-friendly interface, and powerful array of cheats and utilities tailored for competitive multiplayer, particularly on PvP (Player vs. Player) and anarchy servers.",
        features: ["1.12 Features", "Mods", "Easy To Use UI", "Better Performance"],
        icon: "fa-gamepad",
        htmlFile: "clients/tuff-wasm.html"
    },
    {
        id: 15,
        name: "Tuff Client (JS)",
        version: "1.12.2",
        description: "Tuff Client is a modern, feature-rich hacked client designed specifically for the browser-based version of Minecraft, Eaglercraft. It has gained popularity for its stability, user-friendly interface, and powerful array of cheats and utilities tailored for competitive multiplayer, particularly on PvP (Player vs. Player) and anarchy servers.",
        features: ["1.12 Features", "Mods", "Easy To Use UI", "Lower Performance"],
        icon: "fa-gamepad",
        htmlFile: "clients/tuff-js.html"
    }
];

// DOM elements
const clientList = document.getElementById('clientList');
const clientInfo = document.getElementById('clientInfo');
const launchButton = document.getElementById('launchButton');
const searchInput = document.getElementById('searchInput');
const confirmationModal = document.getElementById('confirmationModal');
const modalClientName = document.getElementById('modalClientName');
const modalConfirm = document.getElementById('modalConfirm');
const modalCancel = document.getElementById('modalCancel');

let selectedClient = null;

// Initialize the client list
function initClientList() {
    clients.forEach(client => {
        const clientCard = document.createElement('div');
        clientCard.className = 'client-card';
        clientCard.dataset.id = client.id;
                
        clientCard.innerHTML = `
            <i class="fas ${client.icon}"></i>
            <h3>${client.name}</h3>
            <p>v${client.version}</p>
        `;
                
        clientCard.addEventListener('click', () => selectClient(client));
        clientList.appendChild(clientCard);
    });
}

// Select a client
function selectClient(client) {
    selectedClient = client;
            
    // Update UI to show selected client
    document.querySelectorAll('.client-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelector(`.client-card[data-id="${client.id}"]`).classList.add('selected');
            
    // Update client info
    clientInfo.innerHTML = `
        <h3>${client.name} v${client.version}</h3>
        <p>${client.description}</p>
                
        <div class="file-info">
            <h4>HTML File:</h4>
            <div class="file-path">${client.htmlFile}</div>
            <p><small>This file will open when you launch the client</small></p>
        </div>
                
        <h4>Key Features:</h4>
        <div class="feature-list">
            ${client.features.map(feature => `<div class="feature">${feature}</div>`).join('')}
        </div>
    `;
            
    // Enable launch button
    launchButton.disabled = false;
}

// Launch functionality
launchButton.addEventListener('click', () => {
    if (selectedClient) {
        // Show confirmation modal
        modalClientName.textContent = selectedClient.name;
        confirmationModal.style.display = 'flex';
    }
});

// Confirm launch
modalConfirm.addEventListener('click', () => {
    if (selectedClient) {
        // Close modal
        confirmationModal.style.display = 'none';
                
        // Simulate loading
        launchButton.textContent = 'Launching...';
        launchButton.disabled = true;
                
        // Open the HTML file in a new tab after a short delay
        setTimeout(() => {
            window.open(selectedClient.htmlFile, '_blank');
                    
            // Reset button after a moment
            setTimeout(() => {
                launchButton.textContent = 'Launch Client';
                launchButton.disabled = false;
            }, 2000);
        }, 1000);
    }
});

// Cancel launch
modalCancel.addEventListener('click', () => {
    confirmationModal.style.display = 'none';
});

// Search functionality
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
            
    document.querySelectorAll('.client-card').forEach(card => {
        const clientId = card.dataset.id;
        const client = clients.find(c => c.id == clientId);
        const clientName = client.name.toLowerCase();
                
        if (clientName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Close modal if clicked outside
window.addEventListener('click', (event) => {
    if (event.target === confirmationModal) {
        confirmationModal.style.display = 'none';
    }
});

// Initialize the page
initClientList();

// Security Measures
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('securityOverlay');
    const progressBar = document.getElementById('progressBar');
    const steps = [
        document.getElementById('step1'),
        document.getElementById('step2'),
        document.getElementById('step3'),
        document.getElementById('step4')
    ];

    // CAPTCHA elements
    const captchaText = document.getElementById('captchaText');
    const captchaInput = document.getElementById('captchaInput');
    const captchaError = document.getElementById('captchaError');
    const verifyCaptchaBtn = document.getElementById('verifyCaptcha');
    const newCaptchaBtn = document.getElementById('newCaptcha');

    // Human activity tracking
    let humanActivityDetected = false;
    let activityTimeout;

    // Generate random CAPTCHA code
    function generateCaptcha() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ23456789';
        let code = '';
        for (let i = 0; i < 6; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        captchaText.textContent = code;
        captchaInput.value = '';
        captchaError.style.display = 'none';
        return code;
    }

    let currentCaptcha = generateCaptcha();

    // Track human activity
    function trackHumanActivity() {
        if (!humanActivityDetected) {
            humanActivityDetected = true;
            clearTimeout(activityTimeout);
            console.log('Human activity detected');
        }
    }

    // Set up activity listeners
    document.addEventListener('mousemove', trackHumanActivity);
    document.addEventListener('touchstart', trackHumanActivity);
    document.addEventListener('keydown', trackHumanActivity);
    document.addEventListener('click', trackHumanActivity);
            
    // Simulate security verification process
    let currentStep = 0;
    const totalSteps = steps.length;
    const totalTime = 5000; // 5 seconds total
    const stepTime = totalTime / totalSteps;
            
    function updateProgress() {
        if (currentStep < totalSteps) {
            // Update current step
            steps[currentStep].classList.add('completed');
                    
            // Update progress bar
            const progress = ((currentStep + 1) / totalSteps) * 100;
            progressBar.style.width = progress + '%';
                    
            currentStep++;
                    
            if (currentStep === totalSteps) {
                // All steps completed
                setTimeout(() => {
                    // Hide overlay and show content
                    overlay.classList.add('hidden');
                    document.getElementById('mainContent').style.display = 'block';
                            
                    // Remove overlay from DOM after transition
                    setTimeout(() => {
                        overlay.style.display = 'none';
                    }, 800);
                }, 1000);
            } else {
                // Continue to next step
                setTimeout(updateProgress, stepTime);
            }
        }
    }

    function completeVerification() {
        // Hide overlay
        overlay.classList.add('hidden');

        // Remove overlay from DOM after transition
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 800);
    }

    function showCaptcha() {
        // Mark the human verification steo as failed
        steps[2].classList.remove('completed');
        steps[2].classList.add('failed');
        steps[2].textContent = 'Human verification failed - CAPTCHA required';

        securityContainer.style.display = 'none';
        captchaContainer.classList.add('visible');

        // Focus on CAPTCHA input
        setTimeout(() => {
            captchaInput.focus();
        }, 100);
    }

    // CAPTCHA verification
    verifyCaptchaBtn.addEventListener('click', verifyCaptcha);
    captchaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            verifyCaptcha();
        }
    });

    function verifyCaptcha() {
        const userInput = captchaInput.value.toUpperCase().replace(/\s/g, '');

        if (userInput === CurrentCaptcha) {
            // CAPTCHA successful
            completeVerification();
        } else {
            // CAPTCHA failed
            captchaError.style.display = 'block';
            generateCaptcha();
            captchaInput.focus();
        }
    }

    // New CAPTCHA code
    newCaptchaBtn.addEventListener('click', function() {
        currentCaptcha = generateCaptcha();
        captchaInput.focus();
    });
            
    // Start the verification process
    setTimeout(updateProgress, 1000);

    // Set timeout for human activity detection
    activityTimeout = setTimeout(() => {
        if (!humanActivityDetected) {
            console.log('No human activity detected within timeout period');
        }
    }, 3000);
});