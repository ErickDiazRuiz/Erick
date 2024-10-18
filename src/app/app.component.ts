import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { HistoryComponent } from "./history/history.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, RouterOutlet, HistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dashboard';

  closeMenu() {
    const menuList = document.getElementById('MenuList');
    const contenido =  document.getElementById('Contentido');
    if (menuList && contenido) {
        // Verificamos si el menú está visible
        const isMenuVisible = menuList.classList.contains('show');
        const isContenidoVisible = contenido.classList.contains('show');

        // Alternamos el estado del menú y contenido
        if (isMenuVisible) {
            menuList.classList.remove('show');
        } else {
            menuList.classList.add('show');
        }

        if (isContenidoVisible) {
            contenido.classList.remove('show');
        } else {
            contenido.classList.add('show');
        }
    }
  }

}

