const locators = {
    LOGIN: {
        USER: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        BTN_LOGIN:'.btn',

    },
    
    MENU: {
        SETTINGS: '[data-test="menu-settings"]',
        PAGINA_CONTA : '[href="/contas"]',
        RESET: '[href="/reset"]',
    },

    CONTAS: {
        NOME: '[data-test="nome"]',
        BTN_SALVAR: '.btn',
        EDIT_ACCOUNT: ':nth-child(1) > :nth-child(2) > :nth-child(1) > .far'
    
    },

    MESSAGE: '.toast-message',





}


export default locators