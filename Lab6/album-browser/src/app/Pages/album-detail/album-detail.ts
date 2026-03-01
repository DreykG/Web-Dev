import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit {
  album: Album | null = null;
  loading = true;
  error = '';
  editedTitle = '';
  saving = false;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load album';
        this.loading = false;
      },
    });
  }
  save(): void {
    if (!this.album) return;

    const updated: Album = { ...this.album, title: this.editedTitle };

    this.saving = true;
    this.albumService.updateAlbum(updated).subscribe({
      next: (saved) => {
        this.album = saved;
        this.editedTitle = saved.title;
        this.saving = false;
      },
      error: () => {
        this.error = 'Failed to save album';
        this.saving = false;
      },
    });
  }

  back(): void {
    this.location.back();
  }
}
