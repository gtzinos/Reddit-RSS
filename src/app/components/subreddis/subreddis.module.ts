import { Component, OnInit, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SubreddisComponent } from "./subreddis.component";
import { RedditService } from "../../providers/reddit.service";
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatSelectModule,
  MatIconModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    RouterModule.forChild([{ path: "", component: SubreddisComponent }]),
    MatInputModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  declarations: [SubreddisComponent],
  providers: [RedditService]
})
export class SubreddisModule {}
