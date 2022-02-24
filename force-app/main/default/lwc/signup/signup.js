import {LightningElement} from 'lwc';
import signupURL from '@salesforce/resourceUrl/signup';


export default class signup extends LightningElement{


    handleMenu(e){
        this.dispatchEvent(new CustomEvent('menuchange', {detail : e.target.title}));
        console.log(e.target.title);
    }

    signupLink=  `${signupURL}#signup`

}