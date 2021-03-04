import { LightningElement, track } from 'lwc';
import {createRecord} from "lightning/uiRecordApi";
export default class LDS_CreateContact extends LightningElement {
    @track name;
    @track email;
    @track phone;

    handleValueChange(event){
        var fieldName = event.target.label;
        if(fieldName == 'Name'){
            this.name = event.target.value;
        }if(fieldName == 'Email'){
            this.email = event.target.value;
        }if(fieldName == 'Phone'){
            this.phone = event.target.value;
        }

    }
    saveContact(){
        const fields = {'LastName':this.name,'Email':this.email,'Phone':this.phone};
        const record = {apiName : 'Contact',fields};

        createRecord(record).then(response=>{
            alert(response.id);

        }).catch(error=>{
            alert(error.body.message);

        });

    }
}