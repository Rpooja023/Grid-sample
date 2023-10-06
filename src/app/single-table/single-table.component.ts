import { Component, Input, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-single-table',
  templateUrl: './single-table.component.html',
  styleUrls: ['./single-table.component.scss'],
})
export class SingleTableComponent implements OnInit {
  @Input() formData: any[] = [];
  currentPage = 1;
  pageSize = 5;
  searchItem = '';

  totalItems!: number;
  totalPages!: number;
  filteredData: any[] = [];

  constructor() {}
  ngOnInit() {
    this.totalItems = this.formData.length;
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    // this.filteredData = this.formData.slice();
  }

  // Function to change the current page
  setPage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
    }
  }

  onSearch() {
    // Filter data based on the search query
    this.currentPage = 1;
  }

  getFilteredData(){
    return this.formData.filter((item) =>
      item.name.toLowerCase().includes(this.searchItem.toLowerCase())
    );
  }

  onPageSizeChange() {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.currentPage = 1; // Reset to the first page when the page size changes
  }

  // Function to get the data for the current page
  getCurrentPageData(): any[] {
    const filteredData = this.getFilteredData();
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return filteredData.slice(startIndex, endIndex);
  }
}
