describe(`The user is able to see the labels and controls including text-boxes, buttons and labels on the Login Page and can interacted with.`, () => {
  beforeEach(() => {
    cy.visit("https://testnextgen.intellisoftkenya.com/bahmni/home/index.html#/login")
    /*cy.eyesOpen({
      appName: "Login Page",
      testName:
        "Verify that all the labels and controls including text-boxes, buttons, and links are present on the Login page and can be interacted with",
    });*/
  });

 /* it("Test1-Verifying visibility of the page objects", () => {
    cy.eyesCheckWindow({
      tag: "Main Page",
      target: "window",
      fully: true,
    });*/

   it("test1-checks that the user can't  log in with wrong credentials",()=>{
      cy.get("#locale").select("string:en")
      cy.get("#username").type("spiderman")
      cy.get("#password").type("Admin123")
      cy.get("#location").select("Nextgen Academy")
      cy.get('form.ng-dirty > .login-body > .form-footer > .confirm').click()
      cy.get('.ng-submitted > .login-body > .note-container > .note > .text')
      cy.wait(1000)
    })
    
    it("test3- correct login credentials logging into the application and changing language for Italiano language",()=>{
      cy.get("#locale").select("string:it")
      cy.get("#username").type("spiderman")
      cy.get("#password").type("Admin123")
      cy.get("#location").select("Nextgen Nextgen Clinic")
      cy.get('form.ng-dirty > .login-body > .form-footer > .confirm').click()
      cy.get('.ng-submitted > .login-body > .note-container > .note > .text')
  })

    it("test4- correct login credentials logging into the application",()=>{
      cy.get("#locale").select("string:en")
      cy.get("#username").type("superman")
      cy.get("#password").type("Admin123")
      cy.get("#location").select("Nextgen Academy")
      cy.get('form.ng-dirty > .login-body > .form-footer > .confirm').click()
      cy.get('.ng-submitted > .login-body > .note-container > .note > .text')
    })
  })