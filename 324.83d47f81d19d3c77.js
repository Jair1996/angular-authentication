"use strict";(self.webpackChunkauthentication=self.webpackChunkauthentication||[]).push([[324],{3324:(A,f,r)=>{r.r(f),r.d(f,{AuthModule:()=>l});var d=r(6895),a=r(1766),t=r(8256);class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-layout"]],decls:3,vars:0,consts:[[1,"min-vh-100","d-flex","justify-content-center","align-items-center"],[1,"shadow-lg","p-5","mb-5","bg-body-tertiary","rounded"]],template:function(e,n){1&e&&(t.TgZ(0,"section",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[a.lC],encapsulation:2});var i=r(433),v=r(5226),g=r.n(v),h=r(263),b=r(2925);function Z(o,e){if(1&o&&(t.TgZ(0,"button",15),t._uU(1," Login "),t.qZA()),2&o){const n=t.oxw();t.Q6J("disabled",n.loginForm.invalid)}}function y(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(n);const S=t.oxw();return t.KtG(S.loginWithGoogle())}),t._uU(1,"Login with Google"),t.qZA()}}function T(o,e){1&o&&(t.TgZ(0,"div",17),t._UZ(1,"app-spinner"),t.qZA())}class m{constructor(e,n,u){this.fb=e,this.authService=n,this.router=u,this.showSpinner=!1,this.loginForm=this.fb.group({email:["",[i.kI.required,i.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],password:["",[i.kI.required]]})}isTheFieldInvalid(e){return this.loginForm.controls[e].errors&&this.loginForm.controls[e].dirty}login(){this.showSpinner=!0,this.authService.login(this.loginForm.value).then(e=>{this.router.navigate(["/dashboard"])}).catch(e=>{g().fire({icon:"error",title:"Oops...",text:"Usuario o contrase\xf1a incorrecta"})}).finally(()=>{this.showSpinner=!1})}loginWithGoogle(){this.showSpinner=!0,this.authService.loginWithGoogle().then(e=>{this.router.navigate(["/dashboard"])}).catch(e=>{g().fire({icon:"error",title:"Oops...",text:"Ocurrio un error, int\xe9ntelo neuvamente."})}).finally(()=>{this.showSpinner=!1})}}function w(o,e){if(1&o&&(t.TgZ(0,"button",15),t._uU(1," Register "),t.qZA()),2&o){const n=t.oxw();t.Q6J("disabled",n.registerForm.invalid)}}function _(o,e){1&o&&t._UZ(0,"app-spinner")}m.\u0275fac=function(e){return new(e||m)(t.Y36(i.qu),t.Y36(h.e),t.Y36(a.F0))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-login-page"]],decls:26,vars:8,consts:[[1,"mb-4"],[1,"text-primary","fw-semibold","font-monospace","fs-3","text-center"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","txtEmail",1,"form-label"],["formControlName","email","type","email","id","txtEmail",1,"form-control"],[1,"invalid-feedback"],["for","txtPassword",1,"form-label"],["formControlName","password","type","password","id","txtPassword",1,"form-control"],[1,"mb-3","row","d-flex","justify-content-center"],["type","submit","class","btn btn-primary mb-3",3,"disabled",4,"ngIf"],["class","btn btn-outline-warning","type","button",3,"click",4,"ngIf"],["class","d-flex justify-content-center",4,"ngIf"],[1,"m-0"],["routerLink","/auth/register"],["type","submit",1,"btn","btn-primary","mb-3",3,"disabled"],["type","button",1,"btn","btn-outline-warning",3,"click"],[1,"d-flex","justify-content-center"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"p",1),t._uU(2,"Login"),t.qZA()(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return n.login()}),t.TgZ(4,"div",3)(5,"label",4),t._uU(6,"Email"),t.qZA(),t._UZ(7,"input",5),t.TgZ(8,"div",6),t._uU(9," Email inv\xe1lido "),t.qZA()(),t.TgZ(10,"div",3)(11,"label",7),t._uU(12,"Password"),t.qZA(),t._UZ(13,"input",8),t.TgZ(14,"div",6),t._uU(15," Debe ser mayor o igual a 6 d\xedgitos "),t.qZA()(),t.TgZ(16,"div",9),t.YNc(17,Z,2,1,"button",10),t.YNc(18,y,2,0,"button",11),t.YNc(19,T,2,0,"div",12),t.qZA(),t.TgZ(20,"div")(21,"p",13),t._uU(22,"\xbfNo tienes una cuenta? "),t.TgZ(23,"span")(24,"a",14),t._uU(25,"Reg\xedstrate"),t.qZA()()()()()),2&e&&(t.xp6(3),t.Q6J("formGroup",n.loginForm),t.xp6(4),t.ekj("is-invalid",n.isTheFieldInvalid("email")),t.xp6(6),t.ekj("is-invalid",n.isTheFieldInvalid("password")),t.xp6(4),t.Q6J("ngIf",!n.showSpinner),t.xp6(1),t.Q6J("ngIf",!n.showSpinner),t.xp6(1),t.Q6J("ngIf",n.showSpinner))},dependencies:[d.O5,a.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,b.O],encapsulation:2});class c{constructor(e,n,u){this.fb=e,this.authService=n,this.router=u,this.showSpinner=!1,this.registerForm=this.fb.group({email:["",[i.kI.required,i.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],password:["",[i.kI.required,i.kI.minLength(6)]]})}isTheFieldInvalid(e){return this.registerForm.controls[e].errors&&this.registerForm.controls[e].dirty}register(){this.showSpinner=!0,this.authService.register(this.registerForm.value).then(e=>{g().fire({icon:"success",title:"Good Job!",text:"Registrado correctamente, ahora inicia sesi\xf3n!!!"}).finally(()=>{this.router.navigate(["/auth/login"])})}).catch(e=>{g().fire({icon:"error",title:"Oops...",text:"El correo ya ha sido registrado"})}).finally(()=>{this.showSpinner=!1})}}c.\u0275fac=function(e){return new(e||c)(t.Y36(i.qu),t.Y36(h.e),t.Y36(a.F0))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-register-page"]],decls:26,vars:7,consts:[[1,"mb-4"],[1,"text-primary","fw-semibold","font-monospace","fs-3","text-center"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","txtEmail",1,"form-label"],["formControlName","email","type","email","id","txtEmail",1,"form-control"],[1,"invalid-feedback"],["for","txtPassword",1,"form-label"],["formControlName","password","type","password","id","txtPassword",1,"form-control"],[1,"mb-3","row","d-flex","justify-content-center"],["type","submit","class","btn btn-primary",3,"disabled",4,"ngIf"],[1,"d-flex","justify-content-center"],[4,"ngIf"],[1,"m-0"],["routerLink","/auth/login"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"p",1),t._uU(2,"REGISTER"),t.qZA()(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return n.register()}),t.TgZ(4,"div",3)(5,"label",4),t._uU(6,"Email"),t.qZA(),t._UZ(7,"input",5),t.TgZ(8,"div",6),t._uU(9," Email inv\xe1lido "),t.qZA()(),t.TgZ(10,"div",3)(11,"label",7),t._uU(12,"Password"),t.qZA(),t._UZ(13,"input",8),t.TgZ(14,"div",6),t._uU(15," Debe ser mayor o igual a 6 d\xedgitos "),t.qZA()(),t.TgZ(16,"div",9),t.YNc(17,w,2,1,"button",10),t.TgZ(18,"div",11),t.YNc(19,_,1,0,"app-spinner",12),t.qZA()(),t.TgZ(20,"div")(21,"p",13),t._uU(22,"\xbfYa tienes una cuenta? "),t.TgZ(23,"span")(24,"a",14),t._uU(25,"Ir a Login"),t.qZA()()()()()),2&e&&(t.xp6(3),t.Q6J("formGroup",n.registerForm),t.xp6(4),t.ekj("is-invalid",n.isTheFieldInvalid("email")),t.xp6(6),t.ekj("is-invalid",n.isTheFieldInvalid("password")),t.xp6(4),t.Q6J("ngIf",!n.showSpinner),t.xp6(2),t.Q6J("ngIf",n.showSpinner))},dependencies:[d.O5,a.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,b.O],encapsulation:2});const x=[{path:"",component:p,children:[{path:"login",component:m},{path:"register",component:c},{path:"**",pathMatch:"full",redirectTo:"login"}]}];class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[a.Bz.forChild(x),a.Bz]});var F=r(4466);class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[d.ez,s,a.Bz,i.UX,F.m]})}}]);