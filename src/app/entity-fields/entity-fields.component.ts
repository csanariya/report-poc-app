import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityService } from '../services/entity.service';
import { Entity, EntityField } from '../shared/models/entity.interface';

@Component({
  selector: 'app-entity-fields',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entity-fields.component.html',
  styleUrls: ['./entity-fields.component.scss', '../shared/styles/badges.scss']
})
export class EntityFieldsComponent implements OnInit {
  entities: Entity[] = [];

  constructor(private entityService: EntityService) {}

  ngOnInit(): void {
    this.loadEntities();
  }

  loadEntities(): void {
    this.entityService.getEntities().subscribe({
      next: (entities: Entity[]) => {
        this.entities = entities;
      },
      error: (error: Error) => {
        console.error('Error loading entities:', error);
      }
    });
  }
} 