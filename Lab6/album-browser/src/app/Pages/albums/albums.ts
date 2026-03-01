import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})

// implements OnInit

// Ты говоришь TypeScript: “Этот класс поддерживает жизненный цикл OnInit”.
// Это означает: у класса будет метод ngOnInit(), который Angular вызовет после создания компонента, когда он готов к работе.
// Зачем: это правильное место, чтобы загрузить данные (альбомы) один раз при открытии страницы.
export class Albums implements OnInit {
  albums: Album[] = [];
  loading: boolean = true;
  error = '';

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load albums. Please try again later.';
        this.loading = false;
      },
    });
  }
  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(album => album.id !== id);
      },
      error: () => {
        this.error = 'Failed to delete album. Please try again later.';
      },
    });
  }
}

