import {LightningElement, track, api} from 'lwc';
import updateLeadFromLogin from '@salesforce/apex/updateLeadFromLogin.updateLeadFromLogin';
import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';
import welcomeLink from '@salesforce/resourceUrl/MichaelCat1';


export default class login extends LightningElement{

    // track property changes so that they are not lost when the component is re-rendered

    @track email;
    @track password;
    @track cookie;
    @track error;
    @api loginemail;

    welcomeUrl=  `${welcomeLink}#cat`

    handleMenu(e){
        this.dispatchEvent(new CustomEvent('menuchange', {detail : e.target.title}));
        console.log(e.target.title);
    }

    handleMenu1(e){
        console.log('Hello');
        // loops through all input fields and captures the value of the email and password fields

        let inp=this.template.querySelectorAll("input");
        console.log(inp);
        inp.forEach(function(element){
            if(element.name == "pass")
                this.password=element.value;

            else if(element.name == "user")
                this.email=element.value;
            
        },this);

        updateLeadFromLogin({ email: this.email, password: this.password })
        .then((result) => {
            this.cookie = result;
            console.log(result);
            if(this.cookie == true)
            {
            this.dispatchEvent(new CustomEvent('changetoemail', {detail : this.email}));
            }
            this.cookie =false;
            this.error = undefined;
        })
        .catch((error) => {
            this.error = error;
            this.cookie = undefined;
        });
        
        
    }

}