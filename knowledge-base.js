<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Assistant - SIONG CHEONG TRADING SDN.BHD</title>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --bg-body: #0b1221;
            --bg-card: #162030;
            --text-main: #ffffff;
            --text-sub: #94a3b8;
            --accent: #29b6f6;
            --border-color: #1e293b;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        
        body {
            font-family: 'Lato', sans-serif;
            background-color: var(--bg-body);
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            margin: 0;
            overflow-x: hidden; /* Prevent horizontal scroll when sidebar opens */
        }

        /* ------------------- Sidebar Styles (Copied from Index) ------------------- */
        .sidebar {
            height: 100%;
            width: 0;
            position: fixed;
            z-index: 2000;
            top: 0;
            left: 0;
            background-color: #080d16;
            overflow-x: hidden;
            padding-top: 60px;
            transition: 0.5s;
            box-shadow: 2px 0 10px rgba(0,0,0,0.5);
            border-right: 1px solid var(--border-color);
            white-space: nowrap;
        }

        .sidebar a, .sidebar .submenu-toggle {
            padding: 15px 25px;
            text-decoration: none;
            font-size: 1.1em;
            color: var(--text-sub);
            display: block;
            transition: 0.3s;
            border-bottom: 1px solid var(--border-color);
            cursor: pointer;
        }

        .sidebar a:hover, .sidebar .submenu-toggle:hover {
            color: var(--accent);
            background: rgba(255,255,255,0.05);
        }

        .closebtn {
            position: absolute;
            top: 0;
            right: 25px;
            font-size: 36px;
            line-height: 50px;
            color: var(--text-sub);
            cursor: pointer;
        }

        .submenu {
            display: none;
            background-color: #0b1221;
            padding-left: 20px;
        }

        .overlay {
            position: fixed;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1500;
            display: none;
        }

        /* Main Content Wrapper for Push Effect */
        #main-content {
            transition: margin-left 0.5s;
            width: 100%;
            position: relative;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        /* ------------------- Header ------------------- */
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 40px;
            height: 100px;
            background-color: transparent;
            border-bottom: 1px solid var(--border-color);
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .menu-icon {
            font-size: 24px;
            cursor: pointer;
            color: var(--text-main);
            transition: color 0.3s;
        }
        .menu-icon:hover { color: var(--accent); }

        .brand-name {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            font-size: 20px;
            color: var(--text-main);
            text-decoration: none;
        }

        .back-link {
            color: var(--text-sub);
            text-decoration: none;
            transition: 0.3s;
            display: flex; /* Ensure icon aligns */
            align-items: center;
            gap: 8px;
        }
        .back-link:hover { color: var(--accent); }

        /* ------------------- Assistant Styles ------------------- */
        .assistant-container {
            max-width: 800px;
            margin: 60px auto;
            padding: 20px;
            width: 100%;
            text-align: center;
        }

        .assistant-title {
            font-family: 'Playfair Display', serif;
            font-size: 3rem;
            margin-bottom: 20px;
        }

        .assistant-desc {
            color: var(--text-sub);
            font-size: 1.1rem;
            margin-bottom: 40px;
        }

        /* Search Box Styles */
        .search-box-wrapper {
            position: relative;
            margin-bottom: 40px;
        }

        .search-input {
            width: 100%;
            padding: 20px 60px 20px 30px;
            font-size: 1.2rem;
            background-color: var(--bg-card);
            border: 2px solid var(--border-color);
            border-radius: 50px;
            color: var(--text-main);
            outline: none;
            transition: 0.3s;
        }

        .search-input:focus {
            border-color: var(--accent);
            box-shadow: 0 0 20px rgba(41, 182, 246, 0.2);
        }

        .search-icon {
            position: absolute;
            right: 25px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--accent);
            font-size: 1.5rem;
            cursor: pointer;
        }

        /* Results Area */
        .result-card {
            background-color: var(--bg-card);
            padding: 30px;
            border-radius: 12px;
            text-align: left;
            margin-top: 20px;
            border-left: 4px solid var(--accent);
            display: none; /* Hidden by default */
            animation: fadeIn 0.5s ease;
        }

        .result-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: var(--accent);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .result-body {
            color: var(--text-sub);
            line-height: 1.6;
        }

        .error-message {
            color: #ef5350;
            margin-top: 20px;
            display: none;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Suggested Tags */
        .suggestions {
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 20px;
        }

        .tag {
            background-color: rgba(255,255,255,0.05);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            color: var(--text-sub);
            cursor: pointer;
            transition: 0.3s;
        }

        .tag:hover {
            background-color: var(--accent);
            color: #000;
        }

        /* Footer */
        .footer {
            margin-top: auto;
            text-align: center;
            padding: 20px;
            color: var(--text-sub);
            border-top: 1px solid var(--border-color);
        }

        /* Responsive */
        @media (max-width: 768px) {
            header { padding: 0 20px; }
            .assistant-title { font-size: 2rem; }
            .search-input { font-size: 1rem; padding: 15px 45px 15px 20px; }
            .brand-name { font-size: 16px; } /* Smaller font on mobile to fit */
            .header-left { gap: 10px; }
        }
    </style>
</head>
<body>

    <!-- Sidebar (Identical to Index) -->
    <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onclick="toggleNav()">&times;</a>
        <a href="index.html">Home</a>
        <a href="support.html" class="active" style="color:var(--accent); font-weight:bold;"><i class="fas fa-robot"></i> Smart Assistant</a>
        
        <div class="submenu-toggle" onclick="toggleSubmenu(this)">Products</div>
        <div class="submenu" id="sidebar-submenu">
            <a href="refrigerator.html">Refrigerator</a>
            <a href="chiller.html">Chiller</a>
            <a href="freezer.html">Freezer</a>
            <a href="ac.html">Air Conditioner</a>
            <a href="portable_ac.html">Portable Air Cond</a>
            <a href="tv.html">TV</a>
            <a href="washer.html">Washer</a>
            <a href="dryer.html">Dryer</a>
            <a href="kitchen.html">Kitchen Appliances</a>
            <a href="hood.html">Hood</a>
            <a href="gas.html">Gas</a>
            <a href="oven.html">Oven</a>
            <a href="microwave.html">Microwave</a>
            <a href="air_fryer.html">Air Fryer</a>
            <a href="shower.html">Shower</a>
            <a href="air_purifier.html">Air Purifier</a>
            <a href="speaker.html">Speaker</a>
            <a href="small.html">Small Appliances</a>
        </div>
        <a href="about.html">About Us</a>
        <a href="location.html">Our Location</a>
        <a href="contact.html">Contact Us</a>
    </div>

    <!-- Overlay -->
    <div id="overlay" class="overlay" onclick="toggleNav()"></div>

    <!-- Main Content Wrapper for Push Effect -->
    <div id="main-content">

        <header>
            <div class="header-left">
                <!-- Menu Icon added here -->
                <div class="menu-icon" onclick="toggleNav()">
                    <i class="fas fa-bars"></i>
                </div>
                <a href="index.html" class="brand-name">SIONG CHEONG TRADING SDN.BHD</a>
            </div>
            
            <a href="index.html" class="back-link"><i class="fas fa-arrow-left"></i> Back to Home</a>
        </header>

        <div class="assistant-container">
            <div class="assistant-title">How can we help?</div>
            <div class="assistant-desc">Ask about our appliance features, warranty, or services.</div>

            <div class="suggestions">
                <div class="tag" onclick="fillInput('fridge inverter')">Inverter Fridge</div>
                <div class="tag" onclick="fillInput('ac quiet')">Quiet AC</div>
                <div class="tag" onclick="fillInput('warranty')">Warranty</div>
                <div class="tag" onclick="fillInput('delivery')">Delivery</div>
            </div>

            <div class="search-box-wrapper">
                <input type="text" id="userQuestion" class="search-input" placeholder="Type your question here (e.g., 'Does the freezer have no frost?')..." onkeypress="handleKeyPress(event)">
                <i class="fas fa-search search-icon" onclick="findAnswer()"></i>
            </div>

            <div id="resultCard" class="result-card">
                <div class="result-title">
                    <i class="fas fa-lightbulb"></i> Answer
                </div>
                <div id="resultBody" class="result-body">
                    <!-- Answer goes here -->
                </div>
            </div>

            <div id="errorMessage" class="error-message">
                Sorry, I couldn't find an answer for that. Please try using keywords like "fridge", "warranty", or "payment".
            </div>
        </div>

        <div class="footer">
            &copy; 2023 SIONG CHEONG TRADING SDN.BHD. Smart Assistant System.
        </div>

    </div>

    <!-- 1. 引入外部数据库文件 (一定要放在逻辑脚本之前) -->
    <script src="knowledge-base.js"></script>

    <script>
        // ------------------- Sidebar Logic -------------------
        function toggleNav() {
            const sidebar = document.getElementById("mySidebar");
            const overlay = document.getElementById("overlay");
            const body = document.body;
            const mainContent = document.getElementById("main-content");
            const sidebarWidth = "250px";
            const isOpened = sidebar.style.width === sidebarWidth;

            if (isOpened) {
                sidebar.style.width = "0";
                mainContent.style.marginLeft = "0";
                overlay.style.display = "none";
                body.style.overflow = "auto";
            } else {
                sidebar.style.width = sidebarWidth;
                mainContent.style.marginLeft = sidebarWidth;
                overlay.style.display = "block";
                body.style.overflow = "hidden";
            }
        }

        function toggleSubmenu(element) {
            const submenu = element.nextElementSibling;
            if (submenu.style.display === "block") {
                submenu.style.display = "none";
            } else {
                submenu.style.display = "block";
            }
        }

        // ------------------- Search Logic -------------------
        // 注意：knowledgeBase 变量现在是从 knowledge-base.js 文件中加载的
        
        function findAnswer() {
            const input = document.getElementById('userQuestion').value.toLowerCase().trim();
            const resultCard = document.getElementById('resultCard');
            const resultBody = document.getElementById('resultBody');
            const errorMessage = document.getElementById('errorMessage');

            if (!input) return;

            // Reset display
            resultCard.style.display = 'none';
            errorMessage.style.display = 'none';

            // Simple Keyword Matching Algorithm
            let bestMatch = null;
            let maxKeywordsFound = 0;

            // 确保 knowledgeBase 已经加载
            if (typeof knowledgeBase === 'undefined') {
                console.error("Database not loaded!");
                return;
            }

            knowledgeBase.forEach(item => {
                let keywordsFound = 0;
                item.keywords.forEach(keyword => {
                    if (input.includes(keyword)) {
                        keywordsFound++;
                    }
                });

                if (keywordsFound > maxKeywordsFound) {
                    maxKeywordsFound = keywordsFound;
                    bestMatch = item;
                }
            });

            // Display Result
            if (bestMatch) {
                resultBody.innerHTML = bestMatch.answer;
                resultCard.style.display = 'block';
            } else {
                errorMessage.style.display = 'block';
            }
        }

        // Helper: Allow pressing 'Enter' to search
        function handleKeyPress(e) {
            if (e.key === 'Enter') {
                findAnswer();
            }
        }

        // Helper: Click suggestion tag to fill input
        function fillInput(text) {
            document.getElementById('userQuestion').value = text;
            findAnswer();
        }
    </script>
</body>
</html>
