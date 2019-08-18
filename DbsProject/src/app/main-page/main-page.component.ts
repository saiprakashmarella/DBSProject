import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $("#addCard").hover(function () {
        $("#add").toggle();
      });
      $("#editCard").hover(function () {
        $("#edit").toggle();
      });
      $("#searchCard").hover(function () {
        $("#search").toggle();
      });
      $("#deleteCard").hover(function () {
        $("#delete").toggle();
      });
    });
    window.addEventListener('load', () => {
      const preload = $(".preloader");
      const content = $("#content");
      preload.addClass('preload-finish');
      content.delay("slow").fadeIn();
    })
  }


}
