/// <reference types="cypress" />
describe("testando a inclusao de contato", ()=>{

    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app')
    
    })
    it('Testando formulario',()=>{
        cy.get('[type="text"]').should('have.length', 1) // verifica se tem um input nome
        cy.get('[type="text"]').type('Lucas Rodrigues')// preenche o campo com o nome 
        cy.get('[type="email"]').should('have.length', 1)// verifica se tem um input email
        cy.get('[type="email"]').type('luscasrq@gmail.com')// preenche o campo com o email
        cy.get('[type="tel"]').should('have.length', 1)// verifica se tem um input telefone
        cy.get('[type="tel"]').type('11 9640503028')// preenche o campo com o telefone
        cy.get('.adicionar').click()
        
    })
    it('testando inclusao', () => {
        // como a aplicacao ja vem com 3 contatos salvos, aqui verifica se tem 4 se tiver 4 significa que adicionou 1 contato
        cy.get('.contato').should('have.length',4)

    });

    
    it('testando a remocao do contato', ()=>{
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })


    it('testando a alteracao de um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app');  // Substitua pela URL da sua aplicação
    
        // Clica no botão de editar do primeiro contato da lista
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
    
        // Limpa e altera os inputs
        cy.get('[type="text"]').clear().type('alterando contato');
        cy.get('[type="email"]').clear().type('alterandocontato@gmail.com');
        cy.get('[type="tel"]').clear().type('12 1231131233');
    
        // Clica no botão de alterar (supondo que '.alterar' é o seletor correto)
        cy.get('.alterar').click();
    });
})