import Accordion from 'accordion-js';
//import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion', {elementClass: 'content-box',
    triggerClass: 'accordion-button',
    panelClass: 'content',
    duration: '400',
    showMultiple: true,
})