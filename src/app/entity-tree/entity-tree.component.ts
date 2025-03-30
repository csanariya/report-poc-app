import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityService } from '../services/entity.service';
import { Entity } from '../models/entity.interface';

interface TreeNode {
  entity: Entity;
  children: TreeNode[];
  expanded: boolean;
}

@Component({
  selector: 'app-entity-tree',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2>Entity Hierarchy</h2>
      <div class="tree-view">
        <div *ngFor="let root of rootNodes" class="tree-node">
          <div class="entity-item" (click)="toggleNode(root)">
            <span class="toggle-icon">{{ root.children.length ? (root.expanded ? '▼' : '▶') : '' }}</span>
            <span class="entity-name">{{ root.entity.name }}</span>
          </div>
          <div class="children" *ngIf="root.expanded">
            <div *ngFor="let child of root.children" class="tree-node child-node">
              <div class="entity-item" (click)="toggleNode(child)">
                <span class="toggle-icon">{{ child.children.length ? (child.expanded ? '▼' : '▶') : '' }}</span>
                <span class="entity-name">{{ child.entity.name }}</span>
              </div>
              <div class="children" *ngIf="child.expanded">
                <div *ngFor="let grandChild of child.children" class="tree-node grandchild-node">
                  <div class="entity-item">
                    <span class="entity-name">{{ grandChild.entity.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tree-view {
      margin-top: 20px;
    }
    .tree-node {
      margin: 5px 0;
    }
    .entity-item {
      display: flex;
      align-items: center;
      padding: 8px;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.2s;
    }
    .entity-item:hover {
      background-color: #f5f5f5;
    }
    .toggle-icon {
      margin-right: 8px;
      font-size: 12px;
      color: #666;
    }
    .entity-name {
      font-size: 14px;
    }
    .children {
      margin-left: 20px;
      border-left: 1px solid #ddd;
    }
    .child-node {
      margin-left: 10px;
    }
    .grandchild-node {
      margin-left: 10px;
    }
  `]
})
export class EntityTreeComponent implements OnInit {
  entities: Entity[] = [];
  rootNodes: TreeNode[] = [];

  constructor(private entityService: EntityService) {}

  ngOnInit(): void {
    this.loadEntities();
  }

  loadEntities(): void {
    this.entityService.getEntities().subscribe(entities => {
      this.entities = entities;
      this.buildTree();
    });
  }

  buildTree(): void {
    // Create a map of all entities
    const entityMap = new Map<number, Entity>();
    this.entities.forEach(entity => entityMap.set(entity.id, entity));

    // Build the tree structure
    this.rootNodes = this.entities
      .filter(entity => entity.parentId === null)
      .map(entity => this.createTreeNode(entity, entityMap));
  }

  createTreeNode(entity: Entity, entityMap: Map<number, Entity>): TreeNode {
    const children = this.entities
      .filter(e => e.parentId === entity.id)
      .map(child => this.createTreeNode(child, entityMap));

    return {
      entity,
      children,
      expanded: true
    };
  }

  toggleNode(node: TreeNode): void {
    node.expanded = !node.expanded;
  }
} 