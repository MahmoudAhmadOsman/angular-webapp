import { HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  deleteUserUrl: String;
  constructor(private http: HttpClientModule) {}

  deleteUser(id: String) {
    return this.http.delete<any>(this.deleteUserUrl, id);
  }
}
