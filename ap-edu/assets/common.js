var Site = {
    
    initialize: function() {
        // Hide content shown when JS is disabled
        document.body.className = "js";
        
        // Load deferred elements
        let deferredElements = document.getElementsByClassName("deferred");
        for (let i = 0; i < deferredElements.length; i++) {
            if (deferredElements[i].getAttribute("data-src")) {
                deferredElements[i].setAttribute(
                    "src",
                    deferredElements[i].getAttribute("data-src")
                );
            }
        }
        
        let toggleButtons = document.getElementsByClassName("toggle");
        for (let i = 0; i < toggleButtons.length; i++) {
            let targetId = toggleButtons[i].getAttribute("targetId");
            let attributeName = toggleButtons[i].getAttribute("targetAttr");
            if (targetId && attributeName) {
                toggleButtons[i].addEventListener(
                    "click",
                    function (e) {
                        Site.toggleAttribute(targetId, attributeName);
                    }
                );
            }
        }
        
        let modalButtons = document.getElementsByClassName("modal");
        for (let i = 0; i < modalButtons.length; i++) {
            let targetId = modalButtons[i].getAttribute("targetId");
            if (targetId) {
                modalButtons[i].addEventListener(
                    "click",
                    function (e) {
                        Site.showModal(targetId);
                    }
                );
            }
        }
        
        // Set maximum height for the modal window
        let viewportHeight = (Math.max(window.clientHeight || 0, window.innerHeight || 0) - 50) + "px";
        document.getElementById("modal-inner").style.maxHeight = viewportHeight;
        
        Site.showModal("modal-mockup");
    },
    
    showModal: function(containerId) {
        let modal = document.getElementById("modal-inner");
        let containerElement = document.getElementById(containerId);
        
        if (modal && containerElement) {
            modal.innerHTML = "";
            for (var i = 0; i < containerElement.childNodes.length; i++) {
                modal.append(containerElement.childNodes[i].cloneNode(true));
            }
            Site.toggleAttribute("modal", "active");
        }
    },
    
    toggleAttribute: function(elementId, attributeName) {
        let container = document.getElementById(elementId);
        let state = (container.getAttribute(attributeName) == "true") ? "false" : "true";
        container.setAttribute(attributeName, state);
        container.removeAttribute("prehidden");
    },
    
};

window.addEventListener("DOMContentLoaded", Site.initialize);
