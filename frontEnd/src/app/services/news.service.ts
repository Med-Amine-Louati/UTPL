
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders  } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import * as AppUtil from '../../app/common/common.utill'

// @Injectable()
// export class TasksService {

//   constructor(private http :HttpClient) { }

//   createAuthHeader(headers: Headers){
//     const token = localStorage.getItem(AppUtil.AUTH_Token);
//     headers.append('Authorization', `Bearer ${token}`);
//   }

//   saveTask(task) {
//     const headers = new HttpHeaders();
//     this.createAuthHeader(headers);

//     return this.http.post('tasks/add', task, { headers })
//       .subscribe(resp => console.log(resp));
//   }

//   getTasks(query) {
//     const headers = new Headers();
//     this.createAuthHeader(headers);

//     return this.http.post('tasks/list', query, { headers })
//       .subscribe(resp => console.log(resp));
//   }

//   deleteTask(taskId) {
//     const headers = new Headers();
//     this.createAuthHeader(headers);

//     const url = `tasks/remove/${taskId}`;
//     return this.http.delete(url, { headers })
//       .subscribe(resp => console.log(resp));
//   }

// }
