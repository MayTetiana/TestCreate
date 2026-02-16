function createBtnReportChanges() {
        const btnReportChanges = document.createElement("a");
        btnReportChanges.href = "/field-service/fieldservice-request";
        btnReportChanges.className = "pt_btn pt_action_fsrequest";
        btnReportChanges.style.textDecoration = "none";
        btnReportChanges.innerHTML = "<span>Request Field Service</span>";
        return btnReportChanges;
    }

    function placeBtnReportChanges() {
        const toolbar = document.querySelector(".view-toolbar.grid-actions.clearfix");
        if (toolbar) {
            toolbar.classList.add("pt-first-toolbar");

            if (!toolbar.querySelector(".pt_btn.pt_action_fsrequest")) {
                const btnReportChanges = createBtn();
                toolbar.appendChild(btnReportChanges);                
            }
        }
    };

    document.addEventListener("DOMContentLoaded", function () {
        placeBtnReportChanges()
        $(document).on("loaded", ".entitylist.entity-grid", function () {
        placeBtnReportChanges();
    });

    const filterDropdown = document.getElementById("filterDropdownId");
    if (filterDropdown) {
        const observer = new MutationObserver(() => {
            placeBtnReportChanges();
        });
        observer.observe(filterDropdown, { attributes: true });
    }
});
 
src="/pt_assets_overview.js"s