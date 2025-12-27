(function() {
    // Prevent double‑injection
    if (window.__camcookieTranslateLoaded) return;
    window.__camcookieTranslateLoaded = true;

    // Create container for the dropdown
    const container = document.createElement("div");
    container.id = "google_translate_element";
    container.style.position = "fixed";
    container.style.bottom = "20px";
    container.style.right = "20px";
    container.style.zIndex = "999999";
    container.style.background = "white";
    container.style.padding = "8px 12px";
    container.style.borderRadius = "6px";
    container.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    container.style.fontSize = "14px";
    document.body.appendChild(container);

    // Inject Google Translate script
    const gtScript = document.createElement("script");
    gtScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(gtScript);

    // Define callback
    window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement(
            {
                pageLanguage: "en",      // Default language
                includedLanguages: "",   // Empty = ALL languages
                layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
            },
            "google_translate_element"
        );
    };
})();