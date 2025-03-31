import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityService } from '../services/entity.service';
import { Entity, EntityField } from '../shared/models/entity.interface';

@Component({
  selector: 'app-entity-fields',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2>Entity Fields</h2>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Fields</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let entity of entities">
              <td>
                <div class="entity-name">{{ entity.name }}</div>
                <div class="entity-description">{{ entity.description }}</div>
              </td>
              <td>
                <div class="fields-container">
                  <div *ngFor="let field of entity.fields" class="field-item">
                    <span class="field-name">{{ field.fieldName }}</span>
                    <span class="badge" [attr.data-type]="field.dataType">{{ field.dataType }}</span>
                    <span class="badge" [attr.data-optional]="field.isRequired">{{ field.isRequired ? 'Required' : 'Optional' }}</span>
                    <span class="field-description">{{ field.description }}</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }

    .table-responsive {
      overflow-x: auto;
    }

    .table {
      width: 100%;
      border-collapse: collapse;
    }

    .table th,
    .table td {
      padding: 12px;
      border: 1px solid #ddd;
      text-align: left;
    }

    .table th {
      background-color: #f5f5f5;
      font-weight: 500;
    }

    .entity-name {
      font-weight: 500;
      margin-bottom: 4px;
    }

    .entity-description {
      font-size: 0.875rem;
      color: #666;
    }

    .fields-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .field-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 0;
    }

    .field-name {
      font-weight: 500;
      min-width: 120px;
    }

    .field-description {
      font-size: 0.875rem;
      color: #666;
      margin-left: 8px;
    }
  `],
  styleUrls: ['../shared/styles/badges.scss']
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