describe("Libtayo BCC", () => {
    beforeEach(() => {
        cy.eyesOpen({
            ignoreDisplacements: true,
            batchName: 'Libtayo HCP-Home page Prod vs vs 3.0.1 comparison',
            appName: 'Libtayo HCP home page-Prod vs 3.0.1 comparison',
            browser:
                [
                    { width: 1440, height: 900, name: 'safari' },
                    { width: 1600, height: 900, name: 'chrome' },
                    { width: 1080, height: 720, name: 'edgechromium' },
                    { width: 1024, height: 768, name: 'ie11' },
                    { deviceName: 'Galaxy S9 Plus', screenOrientation: 'portrait', name: 'chrome' },
                    { deviceName: 'Pixel 2', screenOrientation: 'portrait', name: 'chrome' },
                    {
                        iosDeviceInfo: {
                            deviceName: 'iPhone X', screenOrientation: 'portrait'
                        }
                    },
                    {
                        iosDeviceInfo: {
                            deviceName: 'iPad Air (2nd generation)',
                        }
                    }
                ],
        });
    })

    afterEach(() => {
        cy.eyesClose();
    });

    function removeisi() {
        cy.window().then(win => {
            win.document.querySelector('.score-container.isi.sticky').remove();
        });
    }

    const url = 'https://www.libtayohcp.com/'
    beforeEach(() => {
        //Visit site
        cy.visit(url)
    })

    it("home Page", () => {
        removeisi();
        cy.eyesCheckWindow('Home Page');
    })

})