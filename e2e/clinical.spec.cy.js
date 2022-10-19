describe("Test components on this page",()=>{
  beforeEach(()=>{
    cy.login("string:en","superman","Admin123","Nextgen Academy")
    cy.dashboard();

  })
  
  it("test1-  tests if the clinical tile is clickable",()=>{
    cy.wait(5000)
  
    cy.get('.fa-stethoscope').click()

  })
  it("test2-selects a patient from the list of registered patients by typing their name",()=>{
   
    cy.get('.fa-stethoscope').click()

    cy.get("#patientIdentifier")
    .type("Jedidah Muchai",({enter:true}))
  })
  it("test3-selects an active patient from the list of registered patients and then viewing them and then adding additional items on the menu list ",()=>{
   
      cy.get('.fa-stethoscope').click()
    
      cy.get('.tabs > ul > :nth-child(1) > a').click()
      cy.get('ul > [style=""]').click()
      cy.get('ul > [style=""]',{force:true})
      cy.wait(2000)
      cy.get('.dashboard-header > .opd-header-bottom > bm-back-links > ul > li > #patients-link > .fa').click({force:true})
      cy.get('ul > [style=""]',{force:true})
      cy.wait(2000)
      //cy.get('#addDashboardButton').click()
      
  })
  it("test4-begins a consulatation",()=>{
   
    cy.get('.fa-stethoscope').click()
  
    cy.get('.tabs > ul > :nth-child(1) > a').click()
    cy.get('ul > [style=""]').click()
    
    cy.get('ul > [style=""]',{force:true})
    cy.wait(2000)
    cy.get('.btn--left').click()
    cy.wait(2500)
    cy.get('#observation_4').type("Stomachache")
    cy.get('.small-btn').click()
    cy.get('.duration-value').type("7")
    cy.get('.duration-unit').select("Days")
    cy.get("#observation_5").type("Severe stomachache")
    cy.wait(2000)
    cy.get("#observation_7").type("Most likely tiredness due to hardwork engaged in but still needs observation")
    cy.get(':nth-child(2) > .grid-row-element').click()
    cy.get('.message-container')
    cy.get('.confirm').click()
  })
  it("test5-Accessing the diagnosis tab and viewing past diagnoses",()=>{
   
    cy.get('.fa-stethoscope').click()
  
    cy.get('.tabs > ul > :nth-child(1) > a').click()
    cy.get('ul > [style=""]').click()
    
    cy.get('ul > [style=""]',{force:true})
    cy.wait(2000)
    cy.get('.btn--left').click()
    cy.wait(2500)
    cy.get('.opd-header-bottom > .header-tabs > :nth-child(2) > a').click()
    cy.wait(1000)
    cy.get('#name-0').type("Malaria")
    cy.get('#accept-button-0').click()
    cy.get('#order-0 > :nth-child(1)').click()
    cy.get('#certainty-0 > :nth-child(2)').click()
    cy.get('#status-0 > .btn').click()
    cy.get('#name-1').type("Malaria symptoms")
    cy.get('#accept-button-1').click()
    cy.get('#order-0 > :nth-child(1)').click()
    cy.get('#certainty-1 > :nth-child(2)').click()
    cy.get('#status-1 > .btn').click()
    cy.get('.history-diagnosis > .table-header > .col1 > span').click()
    cy.get('.view-past > .toggle > .fa').click()
    cy.wait(500)
    cy.get('#name').type("James Macharia")
    cy.get('#accept-button > span').click()
    cy.get(':nth-child(2) > .col2 > .btn-group > :nth-child(1)').click()
    cy.get('.view-past > .toggle > .fa').click()
    cy.wait(500)
    cy.get('.col3 > .form-field').type("2022/10/18")
    cy.get('.confirm').click()
    
  })
  it("test6-Accessing the treatment plan tab",()=>{
   
    cy.get('.fa-stethoscope').click()
  
    cy.get('.tabs > ul > :nth-child(1) > a').click()
    cy.get('ul > [style=""]').click()
    
    cy.get('ul > [style=""]',{force:true})
    cy.wait(2000)
    cy.get('.btn--left').click()
    cy.wait(2500)
    cy.get('.opd-header-bottom > .header-tabs > :nth-child(3) > a').click()
    cy.wait(500)
    cy.get('.ng-pristine').type("The patient has shown some adjustment since introduction to the program")
    cy.get('.confirm').click()

  })
    it("test7-Accessing the orders tab, and searching items then making an order",()=>{
      cy.get('.fa-stethoscope').click()
  
      cy.get('.tabs > ul > :nth-child(1) > a').click()
      cy.get('ul > [style=""]').click()
      
      cy.get('ul > [style=""]',{force:true})
      cy.wait(2000)
      cy.get('.btn--left').click()
      cy.wait(2500)
      cy.get('.opd-header-bottom > .header-tabs > :nth-child(4) > a').click()
      cy.wait(500)
      cy.get('.order_search_mobile').type("DLC{enter}")
      cy.get('.grid-row-element').click()
      cy.get(':nth-child(2) > .active').click()
      cy.get('.multi-select-lab-tests > ul > :nth-child(1) > .active').click()
      cy.get('.order_search_mobile').type("CBC{enter}").clear({force:true})
      cy.wait(250)
      
      
      cy.get('.multi-select-lab-tests > ul > :nth-child(2) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()
    

      cy.get('.multi-select-lab-tests > ul > :nth-child(3) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()
      

      cy.get('.multi-select-lab-tests > ul > :nth-child(4) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()
      //cy.get('.order_search_mobile').type("Semen").clear({force:true})

      cy.get('.multi-select-lab-tests > ul > :nth-child(5) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()

      cy.get('.multi-select-lab-tests > ul > :nth-child(6) > a').click()
      cy.get('.orderBtnContainer > ul > li > .grid-row-element').click()
     

      cy.get('.multi-select-lab-tests > ul > :nth-child(7) > a').click()
      

      cy.get('.multi-select-lab-tests > ul > :nth-child(8) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(3) > .grid-row-element').click()
      //cy.get('.order_search_mobile').type("CSF").clear({force:true})

      cy.get('.multi-select-lab-tests > ul > :nth-child(9) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()
      //cy.get('.order_search_mobile').type("Tissue").clear({force:true})

      cy.get('.multi-select-lab-tests > ul > :nth-child(10) > a').click()
      cy.get('.orderBtnContainer > ul > li > .grid-row-element').click()
  

      cy.get('.multi-select-lab-tests > ul > :nth-child(11) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(4) > .grid-row-element').click()
      //cy.get('.order_search_mobile').type("LJ(Asitic Fluid)").clear({force:true})

      cy.get('.multi-select-lab-tests > ul > :nth-child(12) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()
  
      cy.get('.multi-select-lab-tests > ul > :nth-child(13) > a').click()
     

      cy.get('.multi-select-lab-tests > ul > :nth-child(14) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()

      cy.get('.multi-select-lab-tests > ul > :nth-child(15) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()
      

      cy.get('.multi-select-lab-tests > ul > :nth-child(16) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()
      

      cy.get('.multi-select-lab-tests > ul > :nth-child(17) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()
      

      cy.get('.multi-select-lab-tests > ul > :nth-child(18) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()
      

      cy.get('.multi-select-lab-tests > ul > :nth-child(19) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()
      
      cy.get('.multi-select-lab-tests > ul > :nth-child(20) > a').click()
      
      cy.get('.multi-select-lab-tests > ul > :nth-child(21) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()
      
      cy.get('.multi-select-lab-tests > ul > :nth-child(22) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()
      
      cy.get('.multi-select-lab-tests > ul > :nth-child(23) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()
      

      cy.get('.multi-select-lab-tests > ul > :nth-child(24) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()
      

      cy.get('.multi-select-lab-tests > ul > :nth-child(25) > a').click()
      cy.get('[style=""] > order-selector > fieldset > [ng-show="hasTests()"] > .orderBtnContainer > ul > :nth-child(1) > .grid-row-element').click()
      
      cy.get(':nth-child(2) > .order-grid > .order-title').click()
      cy.get(':nth-child(3) > .grid-row-element')

      //cy.get('.clearfix.active > .order-grid > .order-title')

      

    })
     it("test8-Accessing the medication tab",()=>{
   
        cy.get('.fa-stethoscope').click()
  
        cy.get('.tabs > ul > :nth-child(1) > a').click()
        cy.get('ul > [style=""]').click()
        
        cy.get('ul > [style=""]',{force:true})
        cy.wait(2000)
        cy.get('.btn--left').click()
        cy.wait(2500)
        cy.get('.opd-header-bottom > .header-tabs > :nth-child(5) > a').click()
        cy.wait(500)
        cy.get('#drug-name').type("Ibuprofen{enter}")
        cy.get('#accept-button > span').click()
        cy.get('#uniform-dose').type("2")
        cy.get('#uniform-dose-unit').select("mg")
        cy.get("#frequency").select("Once a day")
        cy.get("#route").select("Oral")
        cy.get("#duration").type("8")
        cy.get("#duration-unit").select("Week(s)")
        cy.get('#total-quantity-unit').select("ml")
        cy.get("#SOS").click()
        cy.get('#instructions').select("Before meals")
        cy.get("#additional-instructions").type("Watch out for any danger signs")
        cy.get('.add-drug-btn').click()
        cy.get('[ng-click="edit(newTreatment, $index)"] > .fa').click()
        cy.wait(500)
        
      })
    it("test9-Accessing the diagnosis tab",()=>{
   
      cy.get('.fa-stethoscope').click()
  
    cy.get('.tabs > ul > :nth-child(1) > a').click()
    cy.get('ul > [style=""]').click()
    
    cy.get('ul > [style=""]',{force:true})
    cy.wait(2000)
    cy.get('.btn--left').click()
    cy.wait(2500)
    })
      it("test10-Accessing the diagnosis tab",()=>{
   
        cy.get('.fa-stethoscope').click()
  
        cy.get('.tabs > ul > :nth-child(1) > a').click()
        cy.get('ul > [style=""]').click()
        cy.get('ul > [style=""]',{force:true})
        cy.wait(2000)
        cy.get('.btn--left').click()
        cy.wait(2500)
      })
})
   
