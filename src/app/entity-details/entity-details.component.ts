import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

type DataType = 'string' | 'date' | 'datetime' | 'int' | 'decimal' | 'boolean' | 'guid' | 'bit';

interface EntityDetails {
  id: number;
  entityId: number;
  fieldName: string;
  description: string;
  dataType: DataType;
  isOptional: boolean;
}

@Component({
  selector: 'app-entity-details',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="container">
      <div class="row mb-4">
        <div class="col-12">
          <a routerLink="/entities" class="btn btn-secondary">
            <i class="bi bi-arrow-left"></i> Back to Entities
          </a>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h3 class="mb-0">Entity Field Details</h3>
              <div>
                <button class="btn btn-warning me-2" (click)="showEditForm()">Edit</button>
                <button class="btn btn-danger" (click)="deleteEntity()">Delete</button>
              </div>
            </div>
            <div class="card-body">
              <!-- Entity Details Form -->
              <div *ngIf="showForm">
                <form (ngSubmit)="onSubmit()">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="entityId" class="form-label">Entity ID</label>
                        <input type="number" class="form-control" id="entityId" [(ngModel)]="formData.entityId" name="entityId" required>
                      </div>
                      <div class="mb-3">
                        <label for="fieldName" class="form-label">Field Name</label>
                        <input type="text" class="form-control" id="fieldName" [(ngModel)]="formData.fieldName" name="fieldName" required>
                      </div>
                      <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea class="form-control" id="description" [(ngModel)]="formData.description" name="description" rows="3" required></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="dataType" class="form-label">Data Type</label>
                        <select class="form-select" id="dataType" [(ngModel)]="formData.dataType" name="dataType" required>
                          <option value="string">String</option>
                          <option value="date">Date</option>
                          <option value="datetime">DateTime</option>
                          <option value="int">Integer</option>
                          <option value="decimal">Decimal</option>
                          <option value="boolean">Boolean</option>
                          <option value="guid">GUID</option>
                          <option value="bit">Bit</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="isOptional" [(ngModel)]="formData.isOptional" name="isOptional">
                          <label class="form-check-label" for="isOptional">Is Optional</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex gap-2">
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                    <button type="button" class="btn btn-secondary" (click)="cancelForm()">Cancel</button>
                  </div>
                </form>
              </div>

              <!-- Entity Details View -->
              <div *ngIf="!showForm" class="table-responsive">
                <table class="table">
                  <tr>
                    <th>ID:</th>
                    <td>{{ entity?.id }}</td>
                  </tr>
                  <tr>
                    <th>Entity ID:</th>
                    <td>{{ entity?.entityId }}</td>
                  </tr>
                  <tr>
                    <th>Field Name:</th>
                    <td>{{ entity?.fieldName }}</td>
                  </tr>
                  <tr>
                    <th>Description:</th>
                    <td>{{ entity?.description }}</td>
                  </tr>
                  <tr>
                    <th>Data Type:</th>
                    <td>
                      <span class="badge bg-primary">{{ entity?.dataType }}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Is Optional:</th>
                    <td>
                      <span class="badge" [ngClass]="entity?.isOptional ? 'bg-success' : 'bg-danger'">
                        {{ entity?.isOptional ? 'Yes' : 'No' }}
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
    .card {
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .badge {
      padding: 8px 12px;
    }
    .table th {
      width: 150px;
      background-color: #f8f9fa;
    }
    .gap-2 {
      gap: 0.5rem;
    }
  `]
})
export class EntityDetailsComponent implements OnInit {
  entity: EntityDetails | null = null;
  showForm = false;
  formData: EntityDetails = {
    id: 0,
    entityId: 0,
    fieldName: '',
    description: '',
    dataType: 'string',
    isOptional: false
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // In a real application, you would fetch the entity details from a service
    // For now, we'll use mock data
    this.entity = {
      id: Number(id),
      entityId: 1,
      fieldName: 'CustomerName',
      description: 'Full name of the customer',
      dataType: 'string',
      isOptional: false
    };
  }

  showEditForm() {
    this.formData = { ...this.entity! };
    this.showForm = true;
  }

  onSubmit() {
    this.entity = { ...this.formData };
    this.showForm = false;
  }

  cancelForm() {
    this.showForm = false;
  }

  deleteEntity() {
    if (confirm('Are you sure you want to delete this entity field?')) {
      // In a real application, you would call a service to delete the entity
      // For now, we'll just navigate back to the entities list
      // You might want to add a router.navigate(['/entities']) here
    }
  }
} 