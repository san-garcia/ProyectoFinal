import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usuaria',
  imports: [CommonModule],
  templateUrl: './usuaria.component.html',
  styleUrl: './usuaria.component.css'
})

export class UsuariaComponent {
  usuario = {
    nombre: 'Mía',
    apellidos: 'Rodriguez',
    img: 'img/mia.png',  
    ubi: 'Valencia  Ruzafa',
    ultvezconectada: 'En línea',
  };

  mensajes = [
    { sender: 'Mía', text: 'Hola, va todo bien?' },
    { sender: 'Tú', text: 'Hola, necesito llamarte, estas ocupada?' },
  ];

  mensaje: string = '';

  constructor() {}

  ngOnInit(): void {}

  sendMessage(): void {
    if (this.mensaje.trim()) {
      this.mensajes.push({ sender: 'Tú', text: this.mensaje });
      this.mensaje = '';
    }
  }
}
