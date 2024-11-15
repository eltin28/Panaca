import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicoService } from '../../servicios/publico.service';
import { Evento } from '../../models/Evento';

@Component({
  selector: 'app-info-evento-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-evento-admin.component.html',
  styleUrls: ['./info-evento-admin.component.css']
})
export class InfoEventoAdminComponent implements OnInit {
  event: Evento | undefined;

  constructor(
    private route: ActivatedRoute,
    private publicoService: PublicoService
  ) {}

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.verEvento(eventId);
    }
  }

  verEvento(id: string): void {
    this.publicoService.obtenerEvento(id).subscribe({
      next: (data) => {
        this.event = data;
        console.log('Evento obtenido:', data); // Para depurar los datos recibidos
      },
      error: (error) => {
        console.error('Error al obtener el evento:', error);
      }
    });
  }

  editEvent(): void {
    // Redirige a la ruta de edición (ajusta la ruta según tu configuración de rutas)
    const eventId = this.event?.id;
    if (eventId) {
      // Suponiendo que tienes una ruta configurada para editar un evento
      window.location.href = `/editar-evento`;
    }
  }
  
  goBack(): void {
    window.history.back(); // Regresa a la página anterior
  }


}
