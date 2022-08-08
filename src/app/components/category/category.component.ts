import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[] = [];
  dataLoaded : boolean = false
  currentCategory: Category;
  clearCategory : Category;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data
      this.dataLoaded = response.success
    })
  }

  setCurrentCategory(category:Category) {
    this.currentCategory = category
    console.log("CATEGORY ID > " + this.currentCategory.categoryId)
    console.log("CATEGORY NAME > " + this.currentCategory.categoryName);
  }

  getCurrentCategoryClass(category:Category) {
    if (category == this.currentCategory) {
      return "list-group-item active"
    }
    return "list-group-item"
  }

  getAllCategoryClass(){
    if (!this.currentCategory) {
      return "list-group-item active"
    }
    else {
      return "list-group-item"
    }
  }
  clearCurrentCategory() {
    this.currentCategory = this.clearCategory
  }
}
