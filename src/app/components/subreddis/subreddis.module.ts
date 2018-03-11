import { Component, OnInit, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SubreddisComponent } from "./subreddis.component";
import { RedditService } from "../../providers/reddit.service";
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatListModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    RouterModule.forChild([{ path: "", component: SubreddisComponent }]),
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  declarations: [SubreddisComponent],
  providers: [RedditService]
})
export class SubreddisModule {}
