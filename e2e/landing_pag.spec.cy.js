
describe(`The user is able to see the labels and controls including text-boxes, buttons and labels on the Login Page and can interacted with.`, () => {
  beforeEach(() => {
    cy.visit("https://testnextgen.intellisoftkenya.com/")
  
  });
  
  it.only("test1-clicks on the laboratory module",()=>{
    cy.get(':nth-child(3) > .launch').click() 
  })
  it.only("test2-clicks on the stock and inventory module",()=>{
    cy.get('#erp-app-link').click()
  })
  it.only("test3-checks that the clincial module can be clicked and is functional",()=>{
    cy.get(':nth-child(2) > .launch').click()
    
  })
})
