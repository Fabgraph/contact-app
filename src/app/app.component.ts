/**
 *Pour déclarer une classe comme composant de
 * notre application, on importe "Component"
 * via @angular/core
 */
import {Component} from '@angular/core';
import {Contact} from './models/contact';


/**
 * @Component est ce qu'on appelle un décorateur.
 * il va nous permettre de définir 3 paramètres
 * essentiels à notre application...
 */
@Component({
  /**
   * Le sélecteur (selector) détermine la
   * manière dont le composant sera affiché
   * dans notre HTML : <app-root></app-root>
   * vous devez OBLIGATOIREMENT avoir la balise
   * d'ouverture et de fermeture.
   *
   */
  selector: 'app-root',
  /**
   * "templateUrl" ou "tempnlate" estla
   * partie visible du composant. c'est
   * ce qui s'affiche à l'écran lorsque
   * le composant est utilisé.
   */
  // template: `
  //  <h1>Bienvenue au PoleS</h1>
  //  <p>Les apprenants crèvent de chaud !</p>
  //  `,
  templateUrl: './app.component.html',
  /**
   * La déclaration des styles avec
   * "StyleUrls" ou "styles[]"
   */
  styleUrls: ['./app.component.css']
})

/**
 * La classe contient les données du composant,
 * mais aussi son comportement.
 * Dans notre contexte MVVM, notre classe
 * correspond au Model.
 */
export class AppComponent {
  // -- déclaration d'une variable
  title = 'Gestionnaire de contacts';

  // -- Contact choisi par mon utilisateur
  contactActif: Contact;

  // -- Déclaration d'un Objet contact
  unContact: Contact = {
    id: 1,
    name: 'Fabrice Domoison',
    username: 'fabgraph',
    email: 'fabrice.domoison@lepoles.com'
  };

  // -- Tableau de Contacts
  mesContacts: Contact[] = [{
      id: 1,
      name: 'Fabrice DOMOISON',
      username: 'fabgraph',
      email: 'fabrice.domoison@lepoles.com'
  },{
    id: 2,
    name: 'Setti BELKACEM',
    username: 'settibelkacem',
    email: 'setti.belkacem@lepoles.com'
  },{
    id: 3,
    name: 'Andrée BAPTISTE',
    username: 'andreebaptiste',
    email: 'andree.baptiste@lepoles.com'
  },{
    id: 4,
    name: 'Akbar KHAN',
    username: 'akbarkhan',
    email: 'akbar.khan@lepoles.com'
  }




  ]

  /**
   * Ma fonction showContact, prend un contact
   * en paramètre.
   * @param {Contact} contactCliqueParMonUtilisateur
   */
  showContact(contactCliqueParMonUtilisateur: Contact) {
    this.contactActif = contactCliqueParMonUtilisateur;
  }
}
