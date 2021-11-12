import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  loadedContact: Contact[];


  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.loadedContact = this.contactService.contact;

  }

}
