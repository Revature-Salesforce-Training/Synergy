import {LightningElement} from 'lwc';
import welcomeLink from '@salesforce/resourceUrl/welcome';

export default class login extends LightningElement{
    handleMenu(e){
        this.dispatchEvent(new CustomEvent('menuchange', {detail : e.target.title}));
        console.log(e.target.title);
    }

    welcomeUrl=  `${welcomeLink}#welcome`
}