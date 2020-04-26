import { Component, OnInit } from '@angular/core';
import { EntreprisesService } from 'src/app/utils/services/entreprises.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprises-list',
  templateUrl: './entreprises-list.component.html',
  styleUrls: ['./entreprises-list.component.scss']
})
export class EntreprisesListComponent implements OnInit {
  entreprises: any = []
  constructor(private entrepriseService:EntreprisesService, private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
    this.refreshEntreprises();
  }

  refreshEntreprises(){
    this.entrepriseService.getAllEntreprises().subscribe(res => {
      console.log(res);
      this.entreprises  = res;
    })
  }
  deleteMethod(id){
    if(confirm("T'es sûr de supprimer cette entreprise? ")) {
        this.entrepriseService.deleteEntreprise(id).subscribe((res) => {
          this.refreshEntreprises();
          this.toastr.success('Supprimée avec succés');
        }, (e) => {
          this.toastr.error(e.error.message);
        })
     }
  }

  goToeditPage(id){
    this.router.navigate(['/update-entreprise', id]);
  }

}
