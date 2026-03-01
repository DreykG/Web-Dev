import { Routes } from '@angular/router';

import { Home } from './Pages/home/home';
import { About } from './Pages/about/about';
import { Albums } from './Pages/albums/albums';
import { AlbumDetail } from './Pages/album-detail/album-detail';
import { AlbumPhotos } from './Pages/album-photos/album-photos';



export const routes: Routes = [
    { path: '', component: Home},
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'albums', component: Albums},
    {path: 'albums/:id', component: AlbumDetail},
    {path: 'albums/:id/photos', component: AlbumPhotos},

];
