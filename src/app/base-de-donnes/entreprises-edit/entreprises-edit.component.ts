import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntreprisesService } from 'src/app/utils/services/entreprises.service';
import { ToastrService } from 'ngx-toastr';
import { Entreprise } from 'src/app/models/Entreprise';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entreprises-edit',
  templateUrl: './entreprises-edit.component.html',
  styleUrls: ['./entreprises-edit.component.scss']
})
export class EntreprisesEditComponent implements OnInit,OnDestroy {
  id: number;
  private sub: any;
  entreprise: Entreprise = new Entreprise();
  constructor(private route: ActivatedRoute,private entrepriseService:EntreprisesService, private toastr: ToastrService, private router: Router) { }
    nom = new FormControl(this.entreprise.nom, [
      Validators.required
    ]);
  
    adresse = new FormControl(this.entreprise.adresse, [
      Validators.required
    ]);
  
    Tel = new FormControl(this.entreprise.Tel, [
      Validators.required
    ]);
  
    type = new FormControl(this.entreprise.type, [
      Validators.required
    ]);
  
    mail = new FormControl(this.entreprise.mail, [
      Validators.required
    ]);
  
    visavis = new FormControl(this.entreprise.visavis, [
      Validators.required
    ]);
  
    postevisavis = new FormControl(this.entreprise.postevisavis, [
      Validators.required
    ]);
  
    mailvisavis = new FormControl(this.entreprise.mailvisavis, [
      Validators.required
    ]);
  
    telvisavis = new FormControl(this.entreprise.telvisavis, [
      Validators.required
    ]);
    entrepriseForm: FormGroup;
  
  

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getUserById(this.entreprise._id);
    this.entrepriseForm  =  new FormGroup({
      'nom':this.nom,
      'adresse':this.adresse,
      'Tel':this.Tel,
      'type':this.type,
      'mail':this.mail,
      'visavis':this.visavis,
      'mailvisavis':this.mailvisavis,
      'telvisavis':this.telvisavis,
      'postevisavis':this.postevisavis,
    });
  }
 

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getUserById(id){
    this.entrepriseService.getEntreprise(id).subscribe(res => {
      console.log(res);
      this.entreprise  = res;
    })
    
  }

  editEntreprise(id) {
    
    if(this.entrepriseForm.invalid){
      return this.toastr.error('Veuillez saisir les champs manquants');
    }
    this.entreprise.nom = this.nom.value;
    this.entreprise.adresse = this.adresse.value;
    this.entreprise.Tel =  this.Tel.value;
    this.entreprise.type = this.type.value;
    this.entreprise.mail = this.mail.value;
    this.entreprise.visavis =  this.visavis.value;
    this.entreprise.postevisavis =  this.postevisavis.value;
    this.entreprise.telvisavis = this.telvisavis.value;
    this.entreprise.mailvisavis = this.mailvisavis.value;
    this.entrepriseService.editEntreprise(id).subscribe(res => {
      this.entreprise = res;
      

      this.toastr.success('Entreprise modifié avec succès');
      this.router.navigate(['/dashboard/baseDeDonnees/']);
      
    
    
    }, (err) => {
      console.log(err);
      this.toastr.error(err.error.message);

    })
  }

}


