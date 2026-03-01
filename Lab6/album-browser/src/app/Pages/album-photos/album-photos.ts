import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';


@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos implements OnInit {
  albumId = 0;
  photos: Photo[] = [];
  loading = true;
  error = '';

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;

        console.log('PHOTOS DATA SAMPLE:', data[0]);
        this.photos = data;
        this.loading = false;

      },

      
      error: () => {
        this.error = 'Failed to load photos';
        this.loading = false;
      },
    });
  }

  
}
