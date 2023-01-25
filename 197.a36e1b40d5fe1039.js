"use strict";(self.webpackChunkauthentication=self.webpackChunkauthentication||[]).push([[197],{8197:(N,y,c)=>{c.r(y),c.d(y,{ProductModule:()=>l});var m=c(6895),d=c(1766),t=c(8256);class f{}f.\u0275fac=function(e){return new(e||f)},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-layout"]],decls:4,vars:0,consts:[[1,"mt-4"],[1,"mb-4","text-center","text-primary"]],template:function(e,o){1&e&&(t.TgZ(0,"main",0)(1,"h2",1),t._uU(2,"Secci\xf3n Producto"),t.qZA(),t._UZ(3,"router-outlet"),t.qZA())},dependencies:[d.lC],encapsulation:2});var b=c(5861),n=c(433),C=c(5226),s=c.n(C),i=c(89),_=c(5525);class a{constructor(e){this.firestore=e}addProduct(e){const o=(0,i.hJ)(this.firestore,"product");return(0,_.ET)(o,e)}getProduct(e){const o=(0,i.JU)(this.firestore,`product/${e}`);return(0,i.QT)(o)}updateProduct(e,o){const u=(0,i.JU)(this.firestore,`product/${e}`);return(0,i.r7)(u,{...o})}getProducts(){const e=(0,i.hJ)(this.firestore,"product");return(0,i.BS)(e,{idField:"id"})}deleteProduct(e){const o=(0,i.JU)(this.firestore,`product/${e.id}`);return(0,i.oe)(o)}}a.\u0275fac=function(e){return new(e||a)(t.LFG(i.gg))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"});var U=c(2925);function T(r,e){if(1&r&&(t.TgZ(0,"button",13),t._uU(1,"Crear"),t.qZA()),2&r){const o=t.oxw();t.Q6J("disabled",o.createForm.invalid)}}function A(r,e){1&r&&(t.TgZ(0,"div",14),t._UZ(1,"app-spinner"),t.qZA())}class g{constructor(e,o){this.fb=e,this.productService=o,this.showSpinner=!1,this.createForm=this.fb.group({name:["",n.kI.required],price:["",n.kI.required],imgUrl:["",n.kI.required]})}createProduct(){var e=this;return(0,b.Z)(function*(){e.showSpinner=!0;try{yield e.productService.addProduct(e.createForm.value),e.createForm.reset(),s().fire({icon:"success",title:"Good Job!",text:"Producto registrado correctamente"})}catch{s().fire({icon:"error",title:"Oops...",text:"Ha ocurrido un error al registrar el producto"})}finally{e.showSpinner=!1}})()}}g.\u0275fac=function(e){return new(e||g)(t.Y36(n.qu),t.Y36(a))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-create-product-page"]],decls:21,vars:3,consts:[[1,"row"],[1,"col-6"],[1,"fw-bold","fs-4","text-center"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","txtName",1,"form-label"],["type","text","formControlName","name","id","txtName",1,"form-control"],["for","txtPrice",1,"form-label"],["type","number","formControlName","price","id","txtPrice",1,"form-control"],["for","txtImg",1,"form-label"],["type","text","formControlName","imgUrl","id","txtImg",1,"form-control"],["type","submit","class","btn btn-primary",3,"disabled",4,"ngIf"],["class","d-flex justify-content-center",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"d-flex","justify-content-center"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div")(3,"p",2),t._uU(4,"Crear producto"),t.qZA()(),t.TgZ(5,"form",3),t.NdJ("ngSubmit",function(){return o.createProduct()}),t.TgZ(6,"div",4)(7,"label",5),t._uU(8,"Nombre"),t.qZA(),t._UZ(9,"input",6),t.qZA(),t.TgZ(10,"div",4)(11,"label",7),t._uU(12,"Precio"),t.qZA(),t._UZ(13,"input",8),t.qZA(),t.TgZ(14,"div",4)(15,"label",9),t._uU(16,"Im\xe1gen URL"),t.qZA(),t._UZ(17,"input",10),t.qZA(),t.YNc(18,T,2,1,"button",11),t.YNc(19,A,2,0,"div",12),t.qZA()(),t._UZ(20,"div",1),t.qZA()),2&e&&(t.xp6(5),t.Q6J("formGroup",o.createForm),t.xp6(13),t.Q6J("ngIf",!o.showSpinner),t.xp6(1),t.Q6J("ngIf",o.showSpinner))},dependencies:[m.O5,n._Y,n.Fj,n.wV,n.JJ,n.JL,n.sg,n.u,U.O],encapsulation:2});const q=function(r){return["/dashboard","product","update",r]};function S(r,e){if(1&r){const o=t.EpF();t.TgZ(0,"tr")(1,"th",3),t._uU(2),t.qZA(),t.TgZ(3,"td",4),t._uU(4),t.qZA(),t.TgZ(5,"td",4),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"td",4),t._UZ(9,"img",5),t.qZA(),t.TgZ(10,"td",6)(11,"div",7)(12,"button",8),t.NdJ("click",function(){const x=t.CHM(o).$implicit,v=t.oxw();return t.KtG(v.seeMore(x.id))}),t._uU(13," Ver m\xe1s "),t.qZA(),t.TgZ(14,"a",9),t._uU(15," Editar "),t.qZA(),t.TgZ(16,"button",10),t.NdJ("click",function(){const x=t.CHM(o).$implicit,v=t.oxw();return t.KtG(v.delete(x))}),t._uU(17,"Eliminar"),t.qZA()()()()}if(2&r){const o=e.$implicit,u=e.index;t.xp6(2),t.Oqu(u+1),t.xp6(2),t.Oqu(o.name),t.xp6(2),t.Oqu(t.xi3(7,6,o.price,"S/. ")),t.xp6(3),t.Q6J("src",o.imgUrl,t.LSH)("alt",o.name),t.xp6(5),t.Q6J("routerLink",t.VKq(9,q,o.id))}}class h{constructor(e){this.productService=e,this.products=[]}ngOnInit(){this.productService.getProducts().subscribe(e=>{this.products=e})}seeMore(e){}delete(e){var o=this;return(0,b.Z)(function*(){(yield s().fire({title:"\xbfEst\xe1s seguro de eliminar el producto?",text:"Recuerde que esta acci\xf3n no puede restablecerse",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed",cancelButtonText:"No"})).isConfirmed&&(yield o.productService.deleteProduct(e),s().fire({icon:"success",title:"Good Job!",text:"El producto ha sido eliminado correctamente"}))})()}}function J(r,e){if(1&r&&(t.TgZ(0,"button",13),t._uU(1,"Actualizar"),t.qZA()),2&r){const o=t.oxw();t.Q6J("disabled",o.updateForm.invalid)}}function F(r,e){1&r&&(t.TgZ(0,"div",14),t._UZ(1,"app-spinner"),t.qZA())}h.\u0275fac=function(e){return new(e||h)(t.Y36(a))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-list-product-page"]],decls:14,vars:1,consts:[[1,"table","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row",1,"align-middle"],[1,"align-middle"],["width","100","height","100",3,"src","alt"],[1,"align-middle","text-center"],["role","group","aria-label","Basic mixed styles example",1,"btn-group"],["type","button",1,"btn","btn-success",3,"click"],[1,"btn","btn-warning",3,"routerLink"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th",1),t._uU(6,"Nombre"),t.qZA(),t.TgZ(7,"th",1),t._uU(8,"Precio"),t.qZA(),t.TgZ(9,"th",1),t._uU(10,"Im\xe1gen"),t.qZA(),t._UZ(11,"th",1),t.qZA()(),t.TgZ(12,"tbody"),t.YNc(13,S,18,11,"tr",2),t.qZA()()),2&e&&(t.xp6(13),t.Q6J("ngForOf",o.products))},dependencies:[m.sg,d.rH,m.H9],encapsulation:2});class Z{constructor(e,o,u,P){this.fb=e,this.productService=o,this.route=u,this.router=P,this.productId="",this.showSpinner=!1,this.updateForm=this.fb.group({name:["",n.kI.required],price:["",n.kI.required],imgUrl:["",n.kI.required]})}ngOnInit(){const e=this.route.snapshot.paramMap.get("id");this.productService.getProduct(e).then(o=>{this.productId=o.id,this.updateForm.setValue({...o.data()})})}updateProduct(){var e=this;return(0,b.Z)(function*(){e.showSpinner=!0;try{yield e.productService.updateProduct(e.productId,e.updateForm.value),s().fire({icon:"success",title:"Good Job!",text:"Producto actualizado correctamente"})}catch{s().fire({icon:"error",title:"Oops...",text:"Ha ocurrido un error al actualizar el producto"})}finally{e.showSpinner=!1,e.router.navigate(["/dashboard/product/list"])}})()}}Z.\u0275fac=function(e){return new(e||Z)(t.Y36(n.qu),t.Y36(a),t.Y36(d.gz),t.Y36(d.F0))},Z.\u0275cmp=t.Xpm({type:Z,selectors:[["app-update-product-page"]],decls:21,vars:3,consts:[[1,"row"],[1,"col-6"],[1,"fw-bold","fs-4","text-center"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","txtName",1,"form-label"],["type","text","formControlName","name","id","txtName",1,"form-control"],["for","txtPrice",1,"form-label"],["type","number","formControlName","price","id","txtPrice",1,"form-control"],["for","txtImg",1,"form-label"],["type","text","formControlName","imgUrl","id","txtImg",1,"form-control"],["type","submit","class","btn btn-primary",3,"disabled",4,"ngIf"],["class","d-flex justify-content-center",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"d-flex","justify-content-center"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div")(3,"p",2),t._uU(4,"Actualizar producto"),t.qZA()(),t.TgZ(5,"form",3),t.NdJ("ngSubmit",function(){return o.updateProduct()}),t.TgZ(6,"div",4)(7,"label",5),t._uU(8,"Nombre"),t.qZA(),t._UZ(9,"input",6),t.qZA(),t.TgZ(10,"div",4)(11,"label",7),t._uU(12,"Precio"),t.qZA(),t._UZ(13,"input",8),t.qZA(),t.TgZ(14,"div",4)(15,"label",9),t._uU(16,"Im\xe1gen URL"),t.qZA(),t._UZ(17,"input",10),t.qZA(),t.YNc(18,J,2,1,"button",11),t.YNc(19,F,2,0,"div",12),t.qZA()(),t._UZ(20,"div",1),t.qZA()),2&e&&(t.xp6(5),t.Q6J("formGroup",o.updateForm),t.xp6(13),t.Q6J("ngIf",!o.showSpinner),t.xp6(1),t.Q6J("ngIf",o.showSpinner))},dependencies:[m.O5,n._Y,n.Fj,n.wV,n.JJ,n.JL,n.sg,n.u,U.O],encapsulation:2});const I=[{path:"",component:f,children:[{path:"create",component:g},{path:"update/:id",component:Z},{path:"list",component:h},{path:"**",pathMatch:"full",redirectTo:"list"}]}];class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[d.Bz.forChild(I),d.Bz]});var w=c(4466);class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[m.ez,p,n.UX,d.Bz,w.m]})}}]);