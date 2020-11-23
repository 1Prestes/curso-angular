import { Filme } from "src/app/shared/models/filme";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material";

import { FilmesService } from "./../../core/filmes.service";
import { AlertaComponent } from "src/app/shared/components/alerta/alerta.component";
import { Alerta } from "src/app/shared/models/alerta";

@Component({
  selector: "dio-visualizar-filmes",
  templateUrl: "./visualizar-filmes.component.html",
  styleUrls: ["./visualizar-filmes.component.scss"],
})
export class VisualizarFilmesComponent implements OnInit {
  readonly semFoto =
    "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";
  filme: Filme;
  id: number;

  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private filmesService: FilmesService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.visualizar();
  }

  editar(id: number): void {
    this.router.navigateByUrl("filmes/cadastro/" + this.id);
  }

  excluir(): void {
    const config = {
      data: {
        titulo: "Você tem certeza que deseja excluir?",
        descricao: "Caso você tenha certeza que deseja excluir, clique em OK",
        corBtnCancelar: "primary",
        corBtnSucesso: "warn",
        possuiBtnFechar: true,
      } as Alerta,
    };
    const dialogRef = this.dialog.open(AlertaComponent, config);
    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.filmesService
          .excluir(this.id)
          .subscribe(() => this.router.navigateByUrl("/filmes"));
      }
    });
  }

  private visualizar(): void {
    this.filmesService
      .visualizar(this.id)
      .subscribe((filme: Filme) => (this.filme = filme));
  }
}
