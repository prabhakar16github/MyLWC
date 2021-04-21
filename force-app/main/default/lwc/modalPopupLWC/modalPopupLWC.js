import { LightningElement, track } from 'lwc';

export default class ModalPopupLWC extends LightningElement {
    @track isOpenModal = false;

    toggleModal(){
        let temp = this.isOpenModal;
        this.isOpenModal = !temp;
    }
}