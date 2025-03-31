document.addEventListener('DOMContentLoaded', documentEvents  , false);


function documentEvents() {
    const links = {
        platformLocal: "http://localhost:3200/api",
        surgeryLocal: "http://localhost:3300/api",
        paymentLocal: "http://localhost:3400/api",
        catalogLocal: "http://localhost:3500/api",
        hospitalLocal: "http://localhost:4200",
        bobLocal: "http://localhost:3000/docs",
        surgeryDev: "http://casechek-dev-surgery-service.casechek-test.com/api",
        surgeryStaging: "http://casechek-staging-surgery-service.casechek-test.com/api",
        platformDev: "http://casechek-dev-platform-management.casechek-test.com/api",
        platformStaging: "http://casechek-staging-platform-management.casechek-test.com/api",
        paymentDev: "http://casechek-dev-payment-service.casechek-test.com/api",
        paymentStaging: "http://casechek-staging-payment-service.casechek-test.com/api",
        hospitalDev: "http://hospital-dev.casechek-test.com/api",
        hospitalStaging: "http://hospital-staging.casechek-test.com/api",
        catalogDev: "http://casechek-dev-catalog-service.casechek-test.com/api",
        catalogStaging: "http://casechek-staging-catalog-service.casechek-test.com/api",
        bobDev: "https://bob-develop.casechek-test.com/docs",
        bobStaging: "https://bob-staging.casechek-test.com/docs",
    };

    document.getElementById('surgeryPr').addEventListener('click', () => {
        const prNum = document.getElementById('prNum').value;
    
        chrome.tabs.create({
            url: `http://casechek-pr-${prNum}-surgery-service.casechek-test.com/api`
        })
    })

    document.getElementById('paymentPr').addEventListener('click', () => {
        const prNum = document.getElementById('prNum').value;
    
        chrome.tabs.create({
            url: `http://casechek-pr-${prNum}-payment-service.casechek-test.com/api`
        })
    })

    document.getElementById('platformPr').addEventListener('click', () => {
        const prNum = document.getElementById('prNum').value;
    
        chrome.tabs.create({
            url: `http://casechek-pr-${prNum}-platform-management.casechek-test.com/api`
        })
    })

    document.getElementById('catalogPr').addEventListener('click', () => {
        const prNum = document.getElementById('prNum').value;
    
        chrome.tabs.create({
            url: `http://casechek-pr-${prNum}-catalog-service.casechek-test.com/api`
        })
    })

    document.getElementById('hospitalPr').addEventListener('click', () => {
        const prNum = document.getElementById('prNum').value;
    
        chrome.tabs.create({
            url: `https://hospital-pr-${prNum}.casechek-test.com/`
        })
    })

    document.getElementById('bobPr').addEventListener('click', () => {
        const prNum = document.getElementById('prNum').value;
    
        chrome.tabs.create({
            url: `https://bob-${prNum}.casechek-test.com/docs`
        })
    })

    for (const [id, url] of Object.entries(links)) {
        document.getElementById(id).addEventListener('click', () => {
            chrome.tabs.create({
                url: url
            })
        })
    }
}
