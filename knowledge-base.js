// 这是智能助手的“大脑”数据库
// 格式: { keywords: ["关键词1", "关键词2"], answer: "你的回答" }
// 注意：保持格式正确，逗号和引号不能少

const knowledgeBase = [
    {
        keywords: ["fridge", "refrigerator", "cold", "food", "inverter", "冰箱"],
        answer: "Our refrigerators are equipped with advanced **Inverter Technology** which saves up to 40% energy. They also feature **No-Frost** systems. (我们的冰箱配备了变频技术，节能高达40%，并且无霜。)"
    },
    {
        keywords: ["freezer", "ice", "frozen", "冷冻"],
        answer: "Our Chest Freezers offer massive storage capacity with **Dual Cooling** modes (can be used as fridge or freezer). They feature rapid freezing to lock in nutrients."
    },
    {
        keywords: ["ac", "air conditioner", "cool", "hot", "quiet", "空调", "冷气"],
        answer: "Our Air Conditioners operate at an ultra-quiet **21dB**. They come with **Smart Wi-Fi Control** allowing you to cool your room before you arrive home using your phone."
    },
    {
        keywords: ["washer", "washing", "laundry", "clean", "clothes", "洗衣机"],
        answer: "We offer Top Load and Front Load washers. Key features include **Steam Hygiene** (removes 99.9% bacteria) and **Water Magic Cube** technology for less tangling."
    },
    {
        keywords: ["tv", "television", "screen", "4k", "smart", "电视"],
        answer: "Our Smart TVs feature **4K UHD resolution** with Android TV systems built-in. You can easily access Netflix, YouTube, and cast from your phone."
    },
    {
        keywords: ["delivery", "shipping", "ship", "arrive", "送货"],
        answer: "We provide delivery within **3-5 working days**. For large appliances like Fridges and Washing Machines, we also offer basic installation services."
    },
    {
        keywords: ["payment", "pay", "card", "cash", "installment", "付款"],
        answer: "We accept Visa, Mastercard, Online Transfer, and E-Wallets. **0% Installment Plans** are available for purchases above RM500 (Terms Apply)."
    },
    {
        keywords: ["warranty", "repair", "broken", "guarantee", "保修"],
        answer: "All Siong Cheong Trading appliances come with a minimum **1-Year General Warranty**. Compressors and Motors typically have a **5-10 Year Warranty**. Please keep your receipt!"
    },
    {
        keywords: ["contact", "phone", "email", "address", "location", "联系", "地址"],
        answer: "You can find us at our showroom. Or call us at +60-12-345-6789. Click 'Contact Us' in the menu for the map location."
    }
];
