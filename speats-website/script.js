// Mobile menu toggle functions - Ottimizzato per prestazioni
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navWrapper = document.querySelector('.nav-wrapper');
    
    hamburger.classList.toggle('active');
    navWrapper.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = hamburger.classList.contains('active') ? 'hidden' : 'auto';
    
    // Accessibilità - Aggiorna attributi ARIA
    const isExpanded = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
    navWrapper.setAttribute('aria-hidden', !isExpanded);
}

function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navWrapper = document.querySelector('.nav-wrapper');
    
    hamburger.classList.remove('active');
    navWrapper.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navWrapper = document.querySelector('.nav-wrapper');
    const hamburger = document.querySelector('.hamburger');
    
    // Check if menu is open and click is outside the nav
    if (navWrapper.classList.contains('active') && 
        !navWrapper.contains(event.target) && 
        !hamburger.contains(event.target)) {
        closeMenu();
    }
});

// Close menu when window is resized to desktop view
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

// Optional: Consultation form function (placeholder)
function openConsultationForm() {
    // Add your code to open consultation form
    console.log('Opening consultation form');
}

// Language menu toggle function
function toggleLanguageMenu() {
    const languageMenu = document.getElementById('languageMenu');
    languageMenu.classList.toggle('active');
}

// Close language menu when clicking outside
document.addEventListener('click', function(event) {
    const languageMenu = document.getElementById('languageMenu');
    const globeIcon = document.querySelector('.globe-icon');
    
    if (languageMenu && globeIcon && !globeIcon.contains(event.target) && !languageMenu.contains(event.target)) {
        languageMenu.classList.remove('active');
    }
});

// Definizione delle traduzioni disponibili
const translations = {
    'en': {
      // Header
      'nav_home': 'Home',
      'nav_services': 'Services',
      'nav_odoo_ai': 'Odoo AI',
      'nav_brokerai': 'BrokerAI',
      'nav_about': 'About',
      'nav_contact': 'Contact',
      'get_started': 'Get Started',
      
      // Hero section
      'hero_title': 'Custom AI Agents That Automate Your Business Operations',
      'hero_description': 'From WhatsApp chatbots to lead automation and customer support - we create personalized AI agents that work 24/7 for your business. Join companies saving up to 50% on operational costs.',
      'explore_solutions': 'Request Free Demo',
      'view_demo': 'View Live Demo',
      'hero_benefit_1': 'WhatsApp & Email Automation',
      'hero_benefit_2': '24/7 Customer Support',
      'hero_benefit_3': 'Lead Generation & Qualification',
      'contact_direct': 'Or contact us directly:',
      'email_us': 'Or email us:',
      'contact_us_directly': 'Or contact us directly:',
      'translate_language': 'Translate language Or contact us directly:',
      
      // Stats section
      'stat_cost_reduction': 'Average Cost Reduction',
      'stat_efficiency_increase': 'Increase in Efficiency',
      'stat_roi': 'ROI Within 6 Months',
      
      // Services section
      'services_title': 'Our AI Solutions.',
      'services_description': 'We create powerful technology that solves real business problems, enhances productivity, and delivers measurable results.',
      
      // Service cards
      'service_intelligent_agents_title': 'Intelligent Agents',
      'service_intelligent_agents_description': 'Our autonomous AI agents can perceive your business environment, make decisions, and take actions to achieve specific goals without human intervention. They seamlessly handle complex workflows, customer interactions, and data analysis.',
      'service_key_benefits': 'Key Benefits:',
      'service_key_benefit_1': '24/7 operation without fatigue',
      'service_key_benefit_2': 'Consistent performance',
      'service_key_benefit_3': 'Scalable across departments',
      'service_key_benefit_4': 'Self-learning capabilities',
      
      'service_process_automation_title': 'Process Automation',
      'service_process_automation_description': 'Streamline workflows and eliminate repetitive tasks with our advanced automation solutions, allowing your team to focus on high-value work while reducing operational costs and improving accuracy.',
      'service_automation_areas': 'Automation Areas:',
      'service_automation_area_1': 'Document processing & analysis',
      'service_automation_area_2': 'Customer service operations',
      'service_automation_area_3': 'Supply chain optimization',
      'service_automation_area_4': 'Regulatory compliance',
      
      'service_custom_ai_applications_title': 'Custom AI Applications',
      'service_custom_ai_applications_description': 'We design and develop tailored AI applications that address your specific business challenges and optimize operational efficiency with solutions built specifically for your unique needs.',
      'service_features': 'Features:',
      'service_feature_1': 'Predictive analytics',
      'service_feature_2': 'Natural language processing',
      'service_feature_3': 'Computer vision solutions',
      'service_feature_4': 'Decision support systems',
      
      // Approach section
      'approach_title': 'Our Approach',
      'approach_description': 'We follow a structured approach to understand your needs and deliver solutions that exceed expectations.',
      
      // Process steps
      'process_step_1_title': 'Discovery',
      'process_step_1_description': 'We analyze your challenges and identify opportunities for AI and automation.',
      'process_step_2_title': 'Design',
      'process_step_2_description': 'We architect tailored solutions with cutting-edge AI technology.',
      'process_step_3_title': 'Development',
      'process_step_3_description': 'Our experts build and refine your solution using agile methodologies.',
      'process_step_4_title': 'Deployment',
      'process_step_4_description': 'We implement, test, and optimize for maximum impact and ROI.',
      
      // CTA section
      'cta_title': 'Ready to Transform Your Business?',
      'cta_description': 'Let\'s discuss how our AI solutions can help you achieve your goals and stay ahead of the competition.',
      'cta_call_us': 'Call +41 79 450 89 27',
      'cta_send_mail': 'Send Mail',
      
      // BrokerAI section
      'brokerai_title': 'BrokerAI - Revolutionize Insurance Policy Management',
      'brokerai_description': 'A cutting-edge platform that combines advanced artificial intelligence with an intuitive interface to transform how brokers analyze, compare, and manage insurance policies.',
      'brokerai_access': 'Access BrokerAI',
      
      // BrokerAI features
      'brokerai_feature_ai_title': 'Advanced AI Analysis',
      'brokerai_feature_ai_description': 'Automatic content extraction from policy PDF documents with intelligent coverage analysis through advanced AI models. Precise identification of clauses, limits, and deductibles.',
      'brokerai_feature_ai_1': 'Batch processing for multiple coverages',
      'brokerai_feature_ai_2': 'Confidence scoring for reliability',
      'brokerai_feature_ai_3': 'Automatic clause identification',
      
      'brokerai_feature_compare_title': 'Intelligent Comparison',
      'brokerai_feature_compare_description': 'Automatic comparison of coverages between different insurance companies with detailed comparative analysis and highlighting of key differences.',
      'brokerai_feature_compare_1': 'Automatic multi-company comparison',
      'brokerai_feature_compare_2': 'Save comparisons for future consultations',
      'brokerai_feature_compare_3': 'Complete analysis history',
      
      'brokerai_feature_management_title': 'Structured Management',
      'brokerai_feature_management_description': 'Professional dashboard with organized database for companies and insurance types, intelligent mapping and advanced full-text search in content.',
      'brokerai_feature_management_1': 'Dashboard with real-time statistics',
      'brokerai_feature_management_2': 'Step-by-step guided workflow',
      'brokerai_feature_management_3': 'Responsive design for every device',
      
      // BrokerAI benefits
      'brokerai_benefits_title': 'Benefits for Professionals',
      'brokerai_benefit_time_title': 'Time Savings',
      'brokerai_benefit_time_description': 'Reduce from hours to minutes the time needed to analyze a policy with automatic comparisons and batch processing.',
      'brokerai_benefit_precision_title': 'Increased Precision',
      'brokerai_benefit_precision_description': 'Eliminate human errors in clause interpretation with standardized and consistent analysis.',
      'brokerai_benefit_productivity_title': 'Improved Productivity',
      'brokerai_benefit_productivity_description': 'Centralized dashboard with always accessible analysis history and optimized workflows.',
      'brokerai_benefit_service_title': 'Superior Customer Service',
      'brokerai_benefit_service_description': 'Detailed comparisons to present to clients with professional analysis and quick responses.',

      // Odoo AI Section
      'odoo_ai_title': 'AI Product Description Generator for Odoo',
      'odoo_ai_subtitle': 'Transform your product catalog in minutes with professional AI-generated descriptions. Save 97% of your time!',
      'odoo_stat_time_saved': 'Time Saved',
      'odoo_stat_generation_time': 'Generation Time',
      'odoo_stat_price': 'One-Time Price',

      // Odoo AI Features
      'odoo_feature_oneclick_title': 'One-Click Generation',
      'odoo_feature_oneclick_description': 'Open any product, click "Generate with AI", and get a professional description in 3 seconds. It\'s that simple.',
      'odoo_feature_templates_title': '3 Smart Templates',
      'odoo_feature_templates_description': 'Choose Brief (50 words), Standard (100 words), or Detailed (200 words). Perfect for any use case.',
      'odoo_feature_edit_title': 'Edit Before Saving',
      'odoo_feature_edit_description': 'Preview and modify the generated description before applying. Full control, zero waste.',
      'odoo_feature_regenerate_title': 'Regenerate Anytime',
      'odoo_feature_regenerate_description': 'Not happy? Click "Regenerate" for a fresh version. Different words, same quality.',
      'odoo_feature_secure_title': 'Secure Configuration',
      'odoo_feature_secure_description': 'Your OpenAI API key is stored encrypted. Test connection with one click.',
      'odoo_feature_error_title': 'Smart Error Handling',
      'odoo_feature_error_description': 'Clear error messages with troubleshooting steps. Never stuck, always supported.',

      // Odoo AI Screenshots
      'odoo_screenshots_title': 'See It in Action',
      'odoo_screenshot_1_title': 'Generate with One Click',
      'odoo_screenshot_1_description': 'Open any product and click "Generate AI Description". The wizard opens instantly.',
      'odoo_screenshot_2_title': 'Smart Button in Product Form',
      'odoo_screenshot_2_description': 'The "Generate AI Description" button is integrated directly in your product form.',
      'odoo_screenshot_3_title': 'Easy Configuration',
      'odoo_screenshot_3_description': 'Add your OpenAI API key, test the connection, and you\'re ready to go!',

      // Odoo AI Benefits
      'odoo_benefits_title': 'Why Choose Our Solution?',
      'odoo_benefit_time_title': 'Save Hours of Work',
      'odoo_benefit_time_description': '200 products = 30 minutes instead of 50 hours. Automatic comparisons and batch processing.',
      'odoo_benefit_quality_title': 'Consistent Quality',
      'odoo_benefit_quality_description': 'SEO-optimized descriptions with standardized format across all products.',
      'odoo_benefit_cost_title': 'Minimal Costs',
      'odoo_benefit_cost_description': '€29 one-time + ~€0.02 per description. 100 products ≈ €2 API cost.',
      'odoo_benefit_unlimited_title': 'Unlimited Use',
      'odoo_benefit_unlimited_description': 'Pay once, use forever. No subscriptions, no hidden fees. Lifetime updates included.',

      // Odoo AI CTA
      'odoo_cta_title': 'Ready to Transform Your Product Catalog?',
      'odoo_cta_description': 'Join hundreds of Odoo users saving hours every week.',
      'odoo_cta_button': 'Get It Now on Odoo Apps',
      'odoo_cta_guarantee': '30-day money-back guarantee • Compatible: Odoo 17, 18, 19',

      // Footer
      'footer_company': 'Company',
      'footer_about_us': 'About Us',
      'footer_services': 'Services',
      'footer_case_studies': 'Case Studies',
      'footer_careers': 'Careers',
      'footer_solutions': 'Solutions',
      'footer_ai_applications': 'AI Applications',
      'footer_intelligent_agents': 'Intelligent Agents',
      'footer_process_automation': 'Process Automation',
      'footer_data_analytics': 'Data Analytics',
      'footer_contact_us': 'Contact Us',
      'footer_copyright': '© 2025 Speats. All Rights Reserved.',
      'footer_description': 'Leveraging cutting-edge AI technology, we empower businesses to streamline operations, drive innovation, and deliver exceptional customer experiences.'
    },
    'it': {
      // Header
      'nav_home': 'Home',
      'nav_services': 'Servizi',
      'nav_odoo_ai': 'Odoo AI',
      'nav_brokerai': 'BrokerAI',
      'nav_about': 'Chi Siamo',
      'nav_contact': 'Contatti',
      'get_started': 'Inizia Ora',
      
      // Hero section
      'hero_title': 'Agenti AI Personalizzati che Automatizzano il Tuo Business',
      'hero_description': 'Da chatbot WhatsApp ad automazione lead e supporto clienti - creiamo agenti AI su misura che lavorano 24/7 per la tua azienda. Unisciti alle aziende che risparmiano fino al 50% sui costi operativi.',
      'explore_solutions': 'Richiedi Demo Gratuita',
      'view_demo': 'Guarda Demo Live',
      'hero_benefit_1': 'Automazione WhatsApp & Email',
      'hero_benefit_2': 'Supporto Clienti 24/7',
      'hero_benefit_3': 'Generazione & Qualifica Lead',
      'contact_direct': 'O contattaci direttamente:',
      'email_us': 'O inviaci un\'email:',
      'contact_us_directly': 'O contattaci direttamente:',
      'translate_language': 'Cambia lingua O contattaci direttamente:',
      
      // Stats section
      'stat_cost_reduction': 'Riduzione Media dei Costi',
      'stat_efficiency_increase': 'Aumento dell\'Efficienza',
      'stat_roi': 'ROI Entro 6 Mesi',
      
      // Services section
      'services_title': 'Le Nostre Soluzioni AI',
      'services_description': 'Creiamo tecnologie potenti che risolvono problemi aziendali reali, migliorano la produttività e offrono risultati misurabili.',
      
      // Service cards
      'service_intelligent_agents_title': 'Agenti Intelligenti',
      'service_intelligent_agents_description': 'I nostri agenti AI autonomi possono percepire l\'ambiente aziendale, prendere decisioni e intraprendere azioni per raggiungere obiettivi specifici senza intervento umano. Gestiscono facilmente flussi di lavoro complessi, interazioni con i clienti e analisi dei dati.',
      'service_key_benefits': 'Benefici Principali:',
      'service_key_benefit_1': 'Funzionamento 24/7 senza affaticamento',
      'service_key_benefit_2': 'Prestazioni costanti',
      'service_key_benefit_3': 'Scalabilità tra i reparti',
      'service_key_benefit_4': 'Capacità di auto-apprendimento',
      
      'service_process_automation_title': 'Automazione dei Processi',
      'service_process_automation_description': 'Ottimizza i flussi di lavoro ed elimina le attività ripetitive con le nostre soluzioni di automazione avanzate, consentendo al tuo team di concentrarsi su lavori ad alto valore aggiunto riducendo i costi operativi e migliorando la precisione.',
      'service_automation_areas': 'Aree di Automazione:',
      'service_automation_area_1': 'Elaborazione e analisi documenti',
      'service_automation_area_2': 'Operazioni di servizio clienti',
      'service_automation_area_3': 'Ottimizzazione della catena di fornitura',
      'service_automation_area_4': 'Conformità normativa',
      
      'service_custom_ai_applications_title': 'Applicazioni AI Personalizzate',
      'service_custom_ai_applications_description': 'Progettiamo e sviluppiamo applicazioni AI su misura che affrontano le sfide specifiche della tua azienda e ottimizzano l\'efficienza operativa con soluzioni costruite appositamente per le tue esigenze uniche.',
      'service_features': 'Caratteristiche:',
      'service_feature_1': 'Analisi predittiva',
      'service_feature_2': 'Elaborazione del linguaggio naturale',
      'service_feature_3': 'Soluzioni di computer vision',
      'service_feature_4': 'Sistemi di supporto decisionale',
      
      // Approach section
      'approach_title': 'Il Nostro Approccio',
      'approach_description': 'Seguiamo un approccio strutturato per comprendere le tue esigenze e offrire soluzioni che superano le aspettative.',
      
      // Process steps
      'process_step_1_title': 'Scoperta',
      'process_step_1_description': 'Analizziamo le tue sfide e identifichiamo opportunità per l\'AI e l\'automazione.',
      'process_step_2_title': 'Progettazione',
      'process_step_2_description': 'Progettiamo soluzioni su misura con tecnologia AI all\'avanguardia.',
      'process_step_3_title': 'Sviluppo',
      'process_step_3_description': 'I nostri esperti costruiscono e perfezionano la tua soluzione utilizzando metodologie agili.',
      'process_step_4_title': 'Implementazione',
      'process_step_4_description': 'Implementiamo, testiamo e ottimizziamo per il massimo impatto e ROI.',
      
      // CTA section
      'cta_title': 'Pronto a Trasformare la Tua Azienda?',
      'cta_description': 'Discutiamo di come le nostre soluzioni AI possono aiutarti a raggiungere i tuoi obiettivi e restare avanti alla concorrenza.',
      'cta_call_us': 'Chiama +41 79 450 89 27',
      'cta_send_mail': 'Invia Email',
      
      // BrokerAI section
      'brokerai_title': 'BrokerAI - Rivoluziona la Gestione delle Polizze Assicurative',
      'brokerai_description': 'Una piattaforma all\'avanguardia che combina intelligenza artificiale avanzata con un\'interfaccia intuitiva per trasformare il modo in cui i broker analizzano, confrontano e gestiscono le polizze assicurative.',
      'brokerai_access': 'Accedi a BrokerAI',
      
      // BrokerAI features
      'brokerai_feature_ai_title': 'Analisi AI Avanzata',
      'brokerai_feature_ai_description': 'Estrazione automatica del contenuto da documenti PDF delle polizze con analisi intelligente delle garanzie tramite modelli AI avanzati. Identificazione precisa di clausole, massimali e franchigie.',
      'brokerai_feature_ai_1': 'Elaborazione in batch per multiple garanzie',
      'brokerai_feature_ai_2': 'Confidence scoring per affidabilità',
      'brokerai_feature_ai_3': 'Identificazione automatica clausole',
      
      'brokerai_feature_compare_title': 'Confronto Intelligente',
      'brokerai_feature_compare_description': 'Confronto automatico delle garanzie tra diverse compagnie assicurative con analisi comparativa dettagliata ed evidenziazione delle differenze principali.',
      'brokerai_feature_compare_1': 'Confronto multi-compagnia automatico',
      'brokerai_feature_compare_2': 'Salvataggio confronti per consultazioni future',
      'brokerai_feature_compare_3': 'Storico completo delle analisi',
      
      'brokerai_feature_management_title': 'Gestione Strutturata',
      'brokerai_feature_management_description': 'Dashboard professionale con database organizzato per compagnie e tipologie assicurative, mapping intelligente e ricerca full-text avanzata nei contenuti.',
      'brokerai_feature_management_1': 'Dashboard con statistiche in tempo reale',
      'brokerai_feature_management_2': 'Workflow guidato step-by-step',
      'brokerai_feature_management_3': 'Design responsive per ogni dispositivo',
      
      // BrokerAI benefits
      'brokerai_benefits_title': 'Vantaggi per i Professionisti',
      'brokerai_benefit_time_title': 'Risparmio di Tempo',
      'brokerai_benefit_time_description': 'Riduci da ore a minuti il tempo necessario per analizzare una polizza con confronti automatici e batch processing.',
      'brokerai_benefit_precision_title': 'Precisione Aumentata',
      'brokerai_benefit_precision_description': 'Elimina errori umani nell\'interpretazione delle clausole con analisi standardizzata e consistente.',
      'brokerai_benefit_productivity_title': 'Produttività Migliorata',
      'brokerai_benefit_productivity_description': 'Dashboard centralizzata con storico delle analisi sempre accessibile e workflow ottimizzati.',
      'brokerai_benefit_service_title': 'Servizio Clienti Superiore',
      'brokerai_benefit_service_description': 'Confronti dettagliati da presentare ai clienti con analisi professionali e risposte rapide.',

      // Odoo AI Section
      'odoo_ai_title': 'Generatore AI di Descrizioni Prodotti per Odoo',
      'odoo_ai_subtitle': 'Trasforma il tuo catalogo prodotti in pochi minuti con descrizioni professionali generate dall\'AI. Risparmia il 97% del tempo!',
      'odoo_stat_time_saved': 'Tempo Risparmiato',
      'odoo_stat_generation_time': 'Tempo di Generazione',
      'odoo_stat_price': 'Prezzo Una Tantum',

      // Odoo AI Features
      'odoo_feature_oneclick_title': 'Generazione con Un Click',
      'odoo_feature_oneclick_description': 'Apri qualsiasi prodotto, clicca "Genera con AI", e ottieni una descrizione professionale in 3 secondi. È così semplice.',
      'odoo_feature_templates_title': '3 Template Intelligenti',
      'odoo_feature_templates_description': 'Scegli Breve (50 parole), Standard (100 parole), o Dettagliato (200 parole). Perfetto per ogni esigenza.',
      'odoo_feature_edit_title': 'Modifica Prima di Salvare',
      'odoo_feature_edit_description': 'Anteprima e modifica la descrizione generata prima di applicarla. Pieno controllo, zero sprechi.',
      'odoo_feature_regenerate_title': 'Rigenera Quando Vuoi',
      'odoo_feature_regenerate_description': 'Non soddisfatto? Clicca "Rigenera" per una nuova versione. Parole diverse, stessa qualità.',
      'odoo_feature_secure_title': 'Configurazione Sicura',
      'odoo_feature_secure_description': 'La tua API key OpenAI è memorizzata criptata. Testa la connessione con un click.',
      'odoo_feature_error_title': 'Gestione Intelligente Errori',
      'odoo_feature_error_description': 'Messaggi di errore chiari con passaggi di risoluzione. Mai bloccato, sempre supportato.',

      // Odoo AI Screenshots
      'odoo_screenshots_title': 'Guarda Come Funziona',
      'odoo_screenshot_1_title': 'Genera con Un Click',
      'odoo_screenshot_1_description': 'Apri qualsiasi prodotto e clicca "Genera Descrizione AI". Il wizard si apre istantaneamente.',
      'odoo_screenshot_2_title': 'Pulsante Smart nel Form Prodotto',
      'odoo_screenshot_2_description': 'Il pulsante "Genera Descrizione AI" è integrato direttamente nel form del prodotto.',
      'odoo_screenshot_3_title': 'Configurazione Semplice',
      'odoo_screenshot_3_description': 'Aggiungi la tua API key OpenAI, testa la connessione, e sei pronto!',

      // Odoo AI Benefits
      'odoo_benefits_title': 'Perché Scegliere la Nostra Soluzione?',
      'odoo_benefit_time_title': 'Risparmia Ore di Lavoro',
      'odoo_benefit_time_description': '200 prodotti = 30 minuti invece di 50 ore. Confronti automatici e elaborazione batch.',
      'odoo_benefit_quality_title': 'Qualità Consistente',
      'odoo_benefit_quality_description': 'Descrizioni ottimizzate SEO con formato standardizzato su tutti i prodotti.',
      'odoo_benefit_cost_title': 'Costi Minimi',
      'odoo_benefit_cost_description': '€29 una tantum + ~€0.02 per descrizione. 100 prodotti ≈ €2 costo API.',
      'odoo_benefit_unlimited_title': 'Uso Illimitato',
      'odoo_benefit_unlimited_description': 'Paghi una volta, usi per sempre. Nessun abbonamento, nessun costo nascosto. Aggiornamenti a vita inclusi.',

      // Odoo AI CTA
      'odoo_cta_title': 'Pronto a Trasformare il Tuo Catalogo Prodotti?',
      'odoo_cta_description': 'Unisciti a centinaia di utenti Odoo che risparmiano ore ogni settimana.',
      'odoo_cta_button': 'Ottienilo Ora su Odoo Apps',
      'odoo_cta_guarantee': 'Garanzia rimborso 30 giorni • Compatibile: Odoo 17, 18, 19',

      // Footer
      'footer_company': 'Azienda',
      'footer_about_us': 'Chi Siamo',
      'footer_services': 'Servizi',
      'footer_case_studies': 'Casi Studio',
      'footer_careers': 'Carriere',
      'footer_solutions': 'Soluzioni',
      'footer_ai_applications': 'Applicazioni AI',
      'footer_intelligent_agents': 'Agenti Intelligenti',
      'footer_process_automation': 'Automazione Processi',
      'footer_data_analytics': 'Analisi Dati',
      'footer_contact_us': 'Contattaci',
      'footer_copyright': '© 2025 Speats. Tutti i Diritti Riservati.',
      'footer_description': 'Sfruttando la tecnologia AI all\'avanguardia, permettiamo alle aziende di ottimizzare le operazioni, guidare l\'innovazione e offrire esperienze clienti eccezionali.'
    },
    'fr': {
      // Header
      'nav_home': 'Accueil',
      'nav_services': 'Services',
      'nav_odoo_ai': 'Odoo IA',
      'nav_brokerai': 'BrokerAI',
      'nav_about': 'À Propos',
      'nav_contact': 'Contact',
      'get_started': 'Commencer',
      
      // Hero section
      'hero_title': 'Agents IA Personnalisés qui Automatisent Vos Opérations',
      'hero_description': 'Des chatbots WhatsApp à l\'automatisation des prospects et support client - nous créons des agents IA sur mesure qui travaillent 24h/24 pour votre entreprise. Rejoignez les entreprises qui économisent jusqu\'à 50% sur les coûts opérationnels.',
      'explore_solutions': 'Demander une Démo Gratuite',
      'view_demo': 'Voir Démo en Direct',
      'hero_benefit_1': 'Automatisation WhatsApp & Email',
      'hero_benefit_2': 'Support Client 24h/24',
      'hero_benefit_3': 'Génération & Qualification Prospects',
      'contact_direct': 'Ou contactez-nous directement :',
      'email_us': 'Ou envoyez-nous un email :',
      'contact_us_directly': 'Ou contactez-nous directement :',
      'translate_language': 'Changer de langue Ou contactez-nous directement :',
      
      // Stats section
      'stat_cost_reduction': 'Réduction Moyenne des Coûts',
      'stat_efficiency_increase': 'Augmentation de l\'Efficacité',
      'stat_roi': 'ROI en 6 Mois',
      
      // Services section
      'services_title': 'Nos Solutions IA',
      'services_description': 'Nous créons des technologies puissantes qui résolvent des problèmes commerciaux réels, améliorent la productivité et offrent des résultats mesurables.',
      
      // Service cards
      'service_intelligent_agents_title': 'Agents Intelligents',
      'service_intelligent_agents_description': 'Nos agents IA autonomes peuvent percevoir votre environnement commercial, prendre des décisions et agir pour atteindre des objectifs spécifiques sans intervention humaine. Ils gèrent facilement des flux de travail complexes, des interactions avec les clients et l\'analyse de données.',
      'service_key_benefits': 'Avantages Clés:',
      'service_key_benefit_1': 'Fonctionnement 24/7 sans fatigue',
      'service_key_benefit_2': 'Performance constante',
      'service_key_benefit_3': 'Évolutivité entre les départements',
      'service_key_benefit_4': 'Capacités d\'auto-apprentissage',
      
      'service_process_automation_title': 'Automatisation des Processus',
      'service_process_automation_description': 'Optimisez les flux de travail et éliminez les tâches répétitives avec nos solutions d\'automatisation avancées, permettant à votre équipe de se concentrer sur un travail à haute valeur ajoutée tout en réduisant les coûts opérationnels et en améliorant la précision.',
      'service_automation_areas': 'Domaines d\'Automatisation:',
      'service_automation_area_1': 'Traitement et analyse de documents',
      'service_automation_area_2': 'Opérations de service client',
      'service_automation_area_3': 'Optimisation de la chaîne d\'approvisionnement',
      'service_automation_area_4': 'Conformité réglementaire',
      
      'service_custom_ai_applications_title': 'Applications IA Personnalisées',
      'service_custom_ai_applications_description': 'Nous concevons et développons des applications IA sur mesure qui répondent aux défis spécifiques de votre entreprise et optimisent l\'efficacité opérationnelle avec des solutions construites spécifiquement pour vos besoins uniques.',
      'service_features': 'Caractéristiques:',
      'service_feature_1': 'Analyse prédictive',
      'service_feature_2': 'Traitement du langage naturel',
      'service_feature_3': 'Solutions de vision par ordinateur',
      'service_feature_4': 'Systèmes d\'aide à la décision',
      
      // Approach section
      'approach_title': 'Notre Approche',
      'approach_description': 'Nous suivons une approche structurée pour comprendre vos besoins et fournir des solutions qui dépassent les attentes.',
      
      // Process steps
      'process_step_1_title': 'Découverte',
      'process_step_1_description': 'Nous analysons vos défis et identifions les opportunités pour l\'IA et l\'automatisation.',
      'process_step_2_title': 'Conception',
      'process_step_2_description': 'Nous concevons des solutions sur mesure avec une technologie IA de pointe.',
      'process_step_3_title': 'Développement',
      'process_step_3_description': 'Nos experts construisent et affinent votre solution en utilisant des méthodologies agiles.',
      'process_step_4_title': 'Déploiement',
      'process_step_4_description': 'Nous implémentons, testons et optimisons pour un impact et un ROI maximaux.',
      
      // CTA section
      'cta_title': 'Prêt à Transformer Votre Entreprise?',
      'cta_description': 'Discutons de la façon dont nos solutions IA peuvent vous aider à atteindre vos objectifs et à rester en avance sur la concurrence.',
      'cta_call_us': 'Appelez +41 79 450 89 27',
      'cta_send_mail': 'Envoyer un Email',
      
      // BrokerAI section
      'brokerai_title': 'BrokerAI - Révolutionnez la Gestion des Polices d\'Assurance',
      'brokerai_description': 'Une plateforme de pointe qui combine l\'intelligence artificielle avancée avec une interface intuitive pour transformer la façon dont les courtiers analysent, comparent et gèrent les polices d\'assurance.',
      'brokerai_access': 'Accéder à BrokerAI',
      
      // BrokerAI features
      'brokerai_feature_ai_title': 'Analyse IA Avancée',
      'brokerai_feature_ai_description': 'Extraction automatique du contenu des documents PDF de polices avec analyse intelligente des garanties via des modèles IA avancés. Identification précise des clauses, plafonds et franchises.',
      'brokerai_feature_ai_1': 'Traitement par lots pour multiples garanties',
      'brokerai_feature_ai_2': 'Score de confiance pour la fiabilité',
      'brokerai_feature_ai_3': 'Identification automatique des clauses',
      
      'brokerai_feature_compare_title': 'Comparaison Intelligente',
      'brokerai_feature_compare_description': 'Comparaison automatique des garanties entre différentes compagnies d\'assurance avec analyse comparative détaillée et mise en évidence des principales différences.',
      'brokerai_feature_compare_1': 'Comparaison automatique multi-compagnies',
      'brokerai_feature_compare_2': 'Sauvegarde des comparaisons pour consultations futures',
      'brokerai_feature_compare_3': 'Historique complet des analyses',
      
      'brokerai_feature_management_title': 'Gestion Structurée',
      'brokerai_feature_management_description': 'Tableau de bord professionnel avec base de données organisée pour les compagnies et types d\'assurance, mappage intelligent et recherche textuelle avancée dans le contenu.',
      'brokerai_feature_management_1': 'Tableau de bord avec statistiques en temps réel',
      'brokerai_feature_management_2': 'Flux de travail guidé étape par étape',
      'brokerai_feature_management_3': 'Design responsive pour tous les appareils',
      
      // BrokerAI benefits
      'brokerai_benefits_title': 'Avantages pour les Professionnels',
      'brokerai_benefit_time_title': 'Gain de Temps',
      'brokerai_benefit_time_description': 'Réduisez d\'heures à minutes le temps nécessaire pour analyser une police avec des comparaisons automatiques et le traitement par lots.',
      'brokerai_benefit_precision_title': 'Précision Accrue',
      'brokerai_benefit_precision_description': 'Éliminez les erreurs humaines dans l\'interprétation des clauses avec une analyse standardisée et cohérente.',
      'brokerai_benefit_productivity_title': 'Productivité Améliorée',
      'brokerai_benefit_productivity_description': 'Tableau de bord centralisé avec historique des analyses toujours accessible et flux de travail optimisés.',
      'brokerai_benefit_service_title': 'Service Client Supérieur',
      'brokerai_benefit_service_description': 'Comparaisons détaillées à présenter aux clients avec analyses professionnelles et réponses rapides.',

      // Odoo AI Section
      'odoo_ai_title': 'Générateur IA de Descriptions de Produits pour Odoo',
      'odoo_ai_subtitle': 'Transformez votre catalogue de produits en quelques minutes avec des descriptions professionnelles générées par l\'IA. Économisez 97% de votre temps!',
      'odoo_stat_time_saved': 'Temps Économisé',
      'odoo_stat_generation_time': 'Temps de Génération',
      'odoo_stat_price': 'Prix Unique',

      // Odoo AI Features
      'odoo_feature_oneclick_title': 'Génération en Un Clic',
      'odoo_feature_oneclick_description': 'Ouvrez n\'importe quel produit, cliquez sur "Générer avec IA", et obtenez une description professionnelle en 3 secondes. C\'est aussi simple que ça.',
      'odoo_feature_templates_title': '3 Modèles Intelligents',
      'odoo_feature_templates_description': 'Choisissez Bref (50 mots), Standard (100 mots), ou Détaillé (200 mots). Parfait pour tous les cas d\'usage.',
      'odoo_feature_edit_title': 'Modifier Avant d\'Enregistrer',
      'odoo_feature_edit_description': 'Prévisualisez et modifiez la description générée avant de l\'appliquer. Contrôle total, zéro gaspillage.',
      'odoo_feature_regenerate_title': 'Régénérer à Tout Moment',
      'odoo_feature_regenerate_description': 'Pas satisfait? Cliquez sur "Régénérer" pour une nouvelle version. Mots différents, même qualité.',
      'odoo_feature_secure_title': 'Configuration Sécurisée',
      'odoo_feature_secure_description': 'Votre clé API OpenAI est stockée cryptée. Testez la connexion en un clic.',
      'odoo_feature_error_title': 'Gestion Intelligente des Erreurs',
      'odoo_feature_error_description': 'Messages d\'erreur clairs avec étapes de dépannage. Jamais bloqué, toujours supporté.',

      // Odoo AI Screenshots
      'odoo_screenshots_title': 'Voyez-le en Action',
      'odoo_screenshot_1_title': 'Générer en Un Clic',
      'odoo_screenshot_1_description': 'Ouvrez n\'importe quel produit et cliquez sur "Générer Description IA". L\'assistant s\'ouvre instantanément.',
      'odoo_screenshot_2_title': 'Bouton Intelligent dans le Formulaire Produit',
      'odoo_screenshot_2_description': 'Le bouton "Générer Description IA" est intégré directement dans votre formulaire produit.',
      'odoo_screenshot_3_title': 'Configuration Facile',
      'odoo_screenshot_3_description': 'Ajoutez votre clé API OpenAI, testez la connexion, et c\'est parti!',

      // Odoo AI Benefits
      'odoo_benefits_title': 'Pourquoi Choisir Notre Solution?',
      'odoo_benefit_time_title': 'Économisez des Heures de Travail',
      'odoo_benefit_time_description': '200 produits = 30 minutes au lieu de 50 heures. Comparaisons automatiques et traitement par lots.',
      'odoo_benefit_quality_title': 'Qualité Constante',
      'odoo_benefit_quality_description': 'Descriptions optimisées SEO avec format standardisé sur tous les produits.',
      'odoo_benefit_cost_title': 'Coûts Minimaux',
      'odoo_benefit_cost_description': '€29 paiement unique + ~€0.02 par description. 100 produits ≈ €2 coût API.',
      'odoo_benefit_unlimited_title': 'Utilisation Illimitée',
      'odoo_benefit_unlimited_description': 'Payez une fois, utilisez pour toujours. Pas d\'abonnement, pas de frais cachés. Mises à jour à vie incluses.',

      // Odoo AI CTA
      'odoo_cta_title': 'Prêt à Transformer Votre Catalogue de Produits?',
      'odoo_cta_description': 'Rejoignez des centaines d\'utilisateurs Odoo qui économisent des heures chaque semaine.',
      'odoo_cta_button': 'Obtenez-le Maintenant sur Odoo Apps',
      'odoo_cta_guarantee': 'Garantie satisfait ou remboursé 30 jours • Compatible: Odoo 17, 18, 19',

      // Footer
      'footer_company': 'Entreprise',
      'footer_about_us': 'À Propos de Nous',
      'footer_services': 'Services',
      'footer_case_studies': 'Études de Cas',
      'footer_careers': 'Carrières',
      'footer_solutions': 'Solutions',
      'footer_ai_applications': 'Applications IA',
      'footer_intelligent_agents': 'Agents Intelligents',
      'footer_process_automation': 'Automatisation des Processus',
      'footer_data_analytics': 'Analyse de Données',
      'footer_contact_us': 'Contactez-Nous',
      'footer_copyright': '© 2025 Speats. Tous Droits Réservés.',
      'footer_description': 'En exploitant la technologie IA de pointe, nous permettons aux entreprises d\'optimiser leurs opérations, de stimuler l\'innovation et d\'offrir des expériences client exceptionnelles.'
    },
    'de': {
      // Header
      'nav_home': 'Startseite',
      'nav_services': 'Dienstleistungen',
      'nav_odoo_ai': 'Odoo KI',
      'nav_brokerai': 'BrokerAI',
      'nav_about': 'Über Uns',
      'nav_contact': 'Kontakt',
      'get_started': 'Loslegen',
      
      // Hero section
      'hero_title': 'Personalisierte KI-Agenten, die Ihre Geschäftsprozesse Automatisieren',
      'hero_description': 'Von WhatsApp-Chatbots bis zur Lead-Automatisierung und Kundensupport - wir erstellen maßgeschneiderte KI-Agenten, die 24/7 für Ihr Unternehmen arbeiten. Schließen Sie sich Unternehmen an, die bis zu 50% der Betriebskosten sparen.',
      'explore_solutions': 'Kostenlose Demo Anfordern',
      'view_demo': 'Live-Demo Ansehen',
      'hero_benefit_1': 'WhatsApp & E-Mail Automatisierung',
      'hero_benefit_2': '24/7 Kundensupport',
      'hero_benefit_3': 'Lead-Generierung & Qualifizierung',
      'contact_direct': 'Oder kontaktieren Sie uns direkt:',
      'email_us': 'Oder mailen Sie uns:',
      'contact_us_directly': 'Oder kontaktieren Sie uns direkt:',
      'translate_language': 'Sprache ändern Oder kontaktieren Sie uns direkt:',
      
      // Stats section
      'stat_cost_reduction': 'Durchschnittliche Kostenreduzierung',
      'stat_efficiency_increase': 'Effizienzsteigerung',
      'stat_roi': 'ROI Innerhalb von 6 Monaten',
      
      // Services section
      'services_title': 'Unsere KI-Lösungen',
      'services_description': 'Wir entwickeln leistungsstarke Technologien, die reale Geschäftsprobleme lösen, die Produktivität steigern und messbare Ergebnisse liefern.',
      
      // Service cards
      'service_intelligent_agents_title': 'Intelligente Agenten',
      'service_intelligent_agents_description': 'Unsere autonomen KI-Agenten können Ihre Geschäftsumgebung wahrnehmen, Entscheidungen treffen und Maßnahmen ergreifen, um bestimmte Ziele ohne menschliches Eingreifen zu erreichen. Sie bewältigen komplexe Arbeitsabläufe, Kundeninteraktionen und Datenanalysen mühelos.',
      'service_key_benefits': 'Hauptvorteile:',
      'service_key_benefit_1': '24/7-Betrieb ohne Ermüdung',
      'service_key_benefit_2': 'Konstante Leistung',
      'service_key_benefit_3': 'Skalierbarkeit über Abteilungen hinweg',
      'service_key_benefit_4': 'Selbstlernfähigkeiten',
      
      'service_process_automation_title': 'Prozessautomatisierung',
      'service_process_automation_description': 'Optimieren Sie Arbeitsabläufe und eliminieren Sie repetitive Aufgaben mit unseren fortschrittlichen Automatisierungslösungen, damit sich Ihr Team auf hochwertige Arbeit konzentrieren kann, während die Betriebskosten gesenkt und die Genauigkeit verbessert wird.',
      'service_automation_areas': 'Automatisierungsbereiche:',
      'service_automation_area_1': 'Dokumentenverarbeitung & -analyse',
      'service_automation_area_2': 'Kundendienstoperationen',
      'service_automation_area_3': 'Optimierung der Lieferkette',
      'service_automation_area_4': 'Regulatorische Compliance',
      
      'service_custom_ai_applications_title': 'Maßgeschneiderte KI-Anwendungen',
      'service_custom_ai_applications_description': 'Wir entwerfen und entwickeln maßgeschneiderte KI-Anwendungen, die Ihre spezifischen Geschäftsherausforderungen adressieren und die betriebliche Effizienz mit Lösungen optimieren, die speziell für Ihre einzigartigen Bedürfnisse entwickelt wurden.',
      'service_features': 'Funktionen:',
      'service_feature_1': 'Prädiktive Analytik',
      'service_feature_2': 'Verarbeitung natürlicher Sprache',
      'service_feature_3': 'Computer-Vision-Lösungen',
      'service_feature_4': 'Entscheidungsunterstützungssysteme',
      
      // Approach section
      'approach_title': 'Unser Ansatz',
      'approach_description': 'Wir verfolgen einen strukturierten Ansatz, um Ihre Bedürfnisse zu verstehen und Lösungen zu liefern, die die Erwartungen übertreffen.',
      
      // Process steps
      'process_step_1_title': 'Entdeckung',
      'process_step_1_description': 'Wir analysieren Ihre Herausforderungen und identifizieren Möglichkeiten für KI und Automatisierung.',
      'process_step_2_title': 'Design',
      'process_step_2_description': 'Wir entwerfen maßgeschneiderte Lösungen mit modernster KI-Technologie.',
      'process_step_3_title': 'Entwicklung',
      'process_step_3_description': 'Unsere Experten bauen und verfeinern Ihre Lösung mit agilen Methoden.',
      'process_step_4_title': 'Bereitstellung',
      'process_step_4_description': 'Wir implementieren, testen und optimieren für maximale Wirkung und ROI.',
      
      // CTA section
      'cta_title': 'Bereit, Ihr Unternehmen zu Transformieren?',
      'cta_description': 'Lassen Sie uns besprechen, wie unsere KI-Lösungen Ihnen helfen können, Ihre Ziele zu erreichen und der Konkurrenz voraus zu sein.',
      'cta_call_us': 'Rufen Sie an +41 79 450 89 27',
      'cta_send_mail': 'E-Mail Senden',
      
      // BrokerAI section
      'brokerai_title': 'BrokerAI - Revolutionieren Sie das Versicherungspolizzen-Management',
      'brokerai_description': 'Eine hochmoderne Plattform, die fortschrittliche künstliche Intelligenz mit einer intuitiven Benutzeroberfläche kombiniert, um die Art und Weise zu transformieren, wie Makler Versicherungspolizzen analysieren, vergleichen und verwalten.',
      'brokerai_access': 'Zugang zu BrokerAI',
      
      // BrokerAI features
      'brokerai_feature_ai_title': 'Erweiterte KI-Analyse',
      'brokerai_feature_ai_description': 'Automatische Inhaltsextraktion aus Polizzen-PDF-Dokumenten mit intelligenter Deckungsanalyse durch fortschrittliche KI-Modelle. Präzise Identifikation von Klauseln, Limits und Selbstbehalten.',
      'brokerai_feature_ai_1': 'Batch-Verarbeitung für mehrere Deckungen',
      'brokerai_feature_ai_2': 'Vertrauensbewertung für Zuverlässigkeit',
      'brokerai_feature_ai_3': 'Automatische Klauselidentifikation',
      
      'brokerai_feature_compare_title': 'Intelligenter Vergleich',
      'brokerai_feature_compare_description': 'Automatischer Vergleich von Deckungen zwischen verschiedenen Versicherungsunternehmen mit detaillierter Vergleichsanalyse und Hervorhebung der wichtigsten Unterschiede.',
      'brokerai_feature_compare_1': 'Automatischer Multi-Unternehmen-Vergleich',
      'brokerai_feature_compare_2': 'Vergleiche für zukünftige Konsultationen speichern',
      'brokerai_feature_compare_3': 'Vollständige Analysehistorie',
      
      'brokerai_feature_management_title': 'Strukturiertes Management',
      'brokerai_feature_management_description': 'Professionelles Dashboard mit organisierter Datenbank für Unternehmen und Versicherungstypen, intelligentes Mapping und erweiterte Volltextsuche in Inhalten.',
      'brokerai_feature_management_1': 'Dashboard mit Echtzeit-Statistiken',
      'brokerai_feature_management_2': 'Schritt-für-Schritt geführter Workflow',
      'brokerai_feature_management_3': 'Responsive Design für jedes Gerät',
      
      // BrokerAI benefits
      'brokerai_benefits_title': 'Vorteile für Fachleute',
      'brokerai_benefit_time_title': 'Zeitersparnis',
      'brokerai_benefit_time_description': 'Reduzieren Sie von Stunden auf Minuten die Zeit, die für die Analyse einer Police benötigt wird, mit automatischen Vergleichen und Batch-Verarbeitung.',
      'brokerai_benefit_precision_title': 'Erhöhte Präzision',
      'brokerai_benefit_precision_description': 'Eliminieren Sie menschliche Fehler bei der Klauselinterpretation mit standardisierter und konsistenter Analyse.',
      'brokerai_benefit_productivity_title': 'Verbesserte Produktivität',
      'brokerai_benefit_productivity_description': 'Zentralisiertes Dashboard mit immer zugänglicher Analysehistorie und optimierten Workflows.',
      'brokerai_benefit_service_title': 'Überlegener Kundenservice',
      'brokerai_benefit_service_description': 'Detaillierte Vergleiche zur Präsentation an Kunden mit professionellen Analysen und schnellen Antworten.',

      // Odoo AI Section
      'odoo_ai_title': 'KI-Produktbeschreibungsgenerator für Odoo',
      'odoo_ai_subtitle': 'Transformieren Sie Ihren Produktkatalog in Minuten mit professionellen KI-generierten Beschreibungen. Sparen Sie 97% Ihrer Zeit!',
      'odoo_stat_time_saved': 'Zeit Gespart',
      'odoo_stat_generation_time': 'Generierungszeit',
      'odoo_stat_price': 'Einmalpreis',

      // Odoo AI Features
      'odoo_feature_oneclick_title': 'Ein-Klick-Generierung',
      'odoo_feature_oneclick_description': 'Öffnen Sie ein beliebiges Produkt, klicken Sie auf "Mit KI Generieren", und erhalten Sie in 3 Sekunden eine professionelle Beschreibung. So einfach ist das.',
      'odoo_feature_templates_title': '3 Intelligente Vorlagen',
      'odoo_feature_templates_description': 'Wählen Sie Kurz (50 Wörter), Standard (100 Wörter) oder Detailliert (200 Wörter). Perfekt für jeden Anwendungsfall.',
      'odoo_feature_edit_title': 'Vor dem Speichern Bearbeiten',
      'odoo_feature_edit_description': 'Vorschau und Änderung der generierten Beschreibung vor der Anwendung. Volle Kontrolle, keine Verschwendung.',
      'odoo_feature_regenerate_title': 'Jederzeit Neu Generieren',
      'odoo_feature_regenerate_description': 'Nicht zufrieden? Klicken Sie auf "Neu Generieren" für eine neue Version. Andere Worte, gleiche Qualität.',
      'odoo_feature_secure_title': 'Sichere Konfiguration',
      'odoo_feature_secure_description': 'Ihr OpenAI API-Schlüssel wird verschlüsselt gespeichert. Testen Sie die Verbindung mit einem Klick.',
      'odoo_feature_error_title': 'Intelligente Fehlerbehandlung',
      'odoo_feature_error_description': 'Klare Fehlermeldungen mit Lösungsschritten. Nie festgefahren, immer unterstützt.',

      // Odoo AI Screenshots
      'odoo_screenshots_title': 'Sehen Sie es in Aktion',
      'odoo_screenshot_1_title': 'Mit Einem Klick Generieren',
      'odoo_screenshot_1_description': 'Öffnen Sie ein beliebiges Produkt und klicken Sie auf "KI-Beschreibung Generieren". Der Assistent öffnet sich sofort.',
      'odoo_screenshot_2_title': 'Smart Button im Produktformular',
      'odoo_screenshot_2_description': 'Der Button "KI-Beschreibung Generieren" ist direkt in Ihr Produktformular integriert.',
      'odoo_screenshot_3_title': 'Einfache Konfiguration',
      'odoo_screenshot_3_description': 'Fügen Sie Ihren OpenAI API-Schlüssel hinzu, testen Sie die Verbindung, und los geht\'s!',

      // Odoo AI Benefits
      'odoo_benefits_title': 'Warum Unsere Lösung Wählen?',
      'odoo_benefit_time_title': 'Sparen Sie Stunden Arbeit',
      'odoo_benefit_time_description': '200 Produkte = 30 Minuten statt 50 Stunden. Automatische Vergleiche und Batch-Verarbeitung.',
      'odoo_benefit_quality_title': 'Konsistente Qualität',
      'odoo_benefit_quality_description': 'SEO-optimierte Beschreibungen mit standardisiertem Format für alle Produkte.',
      'odoo_benefit_cost_title': 'Minimale Kosten',
      'odoo_benefit_cost_description': '€29 einmalig + ~€0.02 pro Beschreibung. 100 Produkte ≈ €2 API-Kosten.',
      'odoo_benefit_unlimited_title': 'Unbegrenzte Nutzung',
      'odoo_benefit_unlimited_description': 'Einmal zahlen, für immer nutzen. Kein Abonnement, keine versteckten Gebühren. Lebenslange Updates inklusive.',

      // Odoo AI CTA
      'odoo_cta_title': 'Bereit, Ihren Produktkatalog zu Transformieren?',
      'odoo_cta_description': 'Schließen Sie sich Hunderten von Odoo-Benutzern an, die jede Woche Stunden sparen.',
      'odoo_cta_button': 'Jetzt bei Odoo Apps Holen',
      'odoo_cta_guarantee': '30 Tage Geld-zurück-Garantie • Kompatibel: Odoo 17, 18, 19',

      // Footer
      'footer_company': 'Unternehmen',
      'footer_about_us': 'Über Uns',
      'footer_services': 'Dienstleistungen',
      'footer_case_studies': 'Fallstudien',
      'footer_careers': 'Karriere',
      'footer_solutions': 'Lösungen',
      'footer_ai_applications': 'KI-Anwendungen',
      'footer_intelligent_agents': 'Intelligente Agenten',
      'footer_process_automation': 'Prozessautomatisierung',
      'footer_data_analytics': 'Datenanalyse',
      'footer_contact_us': 'Kontaktieren Sie Uns',
      'footer_copyright': '© 2025 Speats. Alle Rechte vorbehalten.',
      'footer_description': 'Durch den Einsatz modernster KI-Technologie ermöglichen wir Unternehmen, Abläufe zu optimieren, Innovation zu fördern und außergewöhnliche Kundenerlebnisse zu bieten.'
    }
};
  
// Lingua predefinita
let currentLanguage = 'en';
  
// Funzione per cambiare lingua
function changeLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Lingua "${lang}" non supportata.`);
        return;
    }
    
    currentLanguage = lang;
    updatePageText();
    updateFlagIcon(lang);
    
    // Salva la preferenza dell'utente
    localStorage.setItem('language', lang);
    
    // Close the language menu after selection
    const languageMenu = document.getElementById('languageMenu');
    if (languageMenu) {
        languageMenu.classList.remove('active');
    }
}

// Funzione per aggiornare l'icona della bandiera
function updateFlagIcon(lang) {
    const flagIcon = document.querySelector('.flag-icon');
    if (flagIcon) {
        switch(lang) {
            case 'en':
                flagIcon.textContent = '🇬🇧';
                break;
            case 'it':
                flagIcon.textContent = '🇮🇹';
                break;
            case 'fr':
                flagIcon.textContent = '🇫🇷';
                break;
            case 'de':
                flagIcon.textContent = '🇩🇪';
                break;
            default:
                flagIcon.textContent = '🇬🇧';
        }
    }
}
  
// Funzione per aggiornare il testo della pagina
function updatePageText() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (translations[currentLanguage][key]) {
            if (key.includes('html_')) {
                // Per contenuti con HTML
                element.innerHTML = translations[currentLanguage][key];
            } else {
                // Per contenuti testuali semplici
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}
  
// Funzione per rilevare la lingua preferita del browser
function detectBrowserLanguage() {
    // Ottiene le preferenze di lingua dal browser
    const browserLang = navigator.language || navigator.userLanguage;
    
    // Estrae il codice lingua principale (es. 'it' da 'it-IT')
    const primaryLang = browserLang.split('-')[0].toLowerCase();
    
    // Controlla se la lingua è supportata
    if (translations[primaryLang]) {
        return primaryLang;
    }
    
    // Fallback su inglese se la lingua non è supportata
    return 'en';
}

// Inizializza la lingua all'avvio
document.addEventListener('DOMContentLoaded', function() {
    // Controlla se c'è una preferenza salvata
    const savedLanguage = localStorage.getItem('language');
    
    // Imposta la lingua salvata, altrimenti usa la lingua del browser
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
        updateFlagIcon(savedLanguage);
    } else {
        // Rileva la lingua del browser
        const browserLanguage = detectBrowserLanguage();
        currentLanguage = browserLanguage;
        updateFlagIcon(browserLanguage);
        
        // Salva la preferenza rilevata
        localStorage.setItem('language', browserLanguage);
    }
    
    // Iniziale sostituzione dei testi
    updatePageText();
    
    // Ottimizzazione SEO - Lazy loading per immagini
    setupLazyLoading();
    
    // Ottimizzazione SEO - Aggiungi attributi alt mancanti
    addMissingAltAttributes();
    
    // Ottimizzazione SEO - Aggiungi hreflang per supporto multilingua
    addHreflangTags();
    
    // Ottimizzazione SEO - Aggiungi tracciamento eventi
    setupEventTracking();
});

// Funzione per implementare lazy loading delle immagini
function setupLazyLoading() {
    // Seleziona tutte le immagini che non sono nella hero section
    const images = document.querySelectorAll('img:not(.hero-image img)');
    
    // Configura l'Intersection Observer
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Carica l'immagine se ha un attributo data-src
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    // Osserva ogni immagine
    images.forEach(img => {
        img.classList.add('lazy-load');
        imageObserver.observe(img);
    });
}

// Funzione per aggiungere attributi alt mancanti
function addMissingAltAttributes() {
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
        // Cerca di determinare un alt text appropriato dal contesto
        const parentText = img.parentElement.textContent.trim();
        const nearestHeading = img.closest('section')?.querySelector('h1, h2, h3, h4, h5, h6')?.textContent;
        
        // Imposta un alt text basato sul contesto o un valore generico
        img.alt = parentText || nearestHeading || 'Immagine Speats';
    });
}

// Funzione per aggiungere tag hreflang per SEO multilingua
function addHreflangTags() {
    const head = document.querySelector('head');
    const languages = Object.keys(translations);
    const currentUrl = window.location.href.split('#')[0]; // URL base senza hash
    
    languages.forEach(lang => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        link.href = currentUrl + (currentUrl.includes('?') ? '&' : '?') + 'lang=' + lang;
        head.appendChild(link);
    });
    
    // Aggiungi anche il tag x-default
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = currentUrl;
    head.appendChild(defaultLink);
}

// Funzione per tracciare eventi per analisi SEO
function setupEventTracking() {
    // Traccia clic sui link di navigazione
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('Navigation', 'Click', this.textContent);
        });
    });
    
    // Traccia clic sui pulsanti CTA
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('CTA', 'Click', this.textContent);
        });
    });
    
    // Traccia cambio lingua
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function() {
            trackEvent('Language', 'Change', this.textContent);
        });
    });
}

// Funzione per tracciare eventi (placeholder - da integrare con sistema analytics reale)
function trackEvent(category, action, label) {
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
    // Qui si integrerebbe con Google Analytics, Matomo, ecc.
    if (window.gtag) {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}
