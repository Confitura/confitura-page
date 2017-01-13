import {CookiesComponent} from "./cookies.component";
import {FooterComponent} from "./footer.component";
import {NavigationComponent} from "./navigation.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
@NgModule({
    imports: [BrowserModule],
    declarations: [CookiesComponent, FooterComponent, NavigationComponent],
    exports: [CookiesComponent, FooterComponent, NavigationComponent]
})
export  class LayoutModule{

}