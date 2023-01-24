"use strict";(self.webpackChunkauthentication=self.webpackChunkauthentication||[]).push([[956],{4956:(J,P,n)=>{n.r(P),n.d(P,{ProductModule:()=>s});var f=n(6895),h=n(1766),t=n(8256);class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-layout"]],decls:4,vars:0,consts:[[1,"mt-4"],[1,"mb-4","text-center","text-primary"]],template:function(e,o){1&e&&(t.TgZ(0,"main",0)(1,"h2",1),t._uU(2,"Secci\xf3n Producto"),t.qZA(),t._UZ(3,"router-outlet"),t.qZA())},dependencies:[h.lC],encapsulation:2});var b=n(5861),c=n(433),x=n(5226),g=n.n(x),u=n(89),C=n(5525);class i{constructor(e){this.firestore=e}addProduct(e){const o=(0,u.hJ)(this.firestore,"product");return(0,C.ET)(o,e)}getProducts(){const e=(0,u.hJ)(this.firestore,"product");return(0,u.BS)(e,{idField:"id"})}deleteProduct(e){const o=(0,u.JU)(this.firestore,`product/${e.id}`);return(0,u.oe)(o)}}i.\u0275fac=function(e){return new(e||i)(t.LFG(u.gg))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"});var v=n(2925);function y(r,e){if(1&r&&(t.TgZ(0,"button",13),t._uU(1,"Crear"),t.qZA()),2&r){const o=t.oxw();t.Q6J("disabled",o.createForm.invalid)}}function T(r,e){1&r&&(t.TgZ(0,"div",14),t._UZ(1,"app-spinner"),t.qZA())}class p{constructor(e,o){this.fb=e,this.productService=o,this.showSpinner=!1,this.createForm=this.fb.group({name:["",c.kI.required],price:["",c.kI.required],imgUrl:["",c.kI.required]})}createProduct(){var e=this;return(0,b.Z)(function*(){e.showSpinner=!0;try{yield e.productService.addProduct(e.createForm.value),e.createForm.reset(),g().fire({icon:"success",title:"Good Job!",text:"Producto registrado correctamente"})}catch{g().fire({icon:"error",title:"Oops...",text:"Ha ocurrido un error al registrar el producto"})}finally{e.showSpinner=!1}})()}}function U(r,e){if(1&r){const o=t.EpF();t.TgZ(0,"tr")(1,"th",3),t._uU(2),t.qZA(),t.TgZ(3,"td",4),t._uU(4),t.qZA(),t.TgZ(5,"td",4),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"td",4),t._UZ(9,"img",5),t.qZA(),t.TgZ(10,"td",6)(11,"div",7)(12,"button",8),t.NdJ("click",function(){t.CHM(o);const Z=t.oxw();return t.KtG(Z.seeMore())}),t._uU(13,"Ver m\xe1s"),t.qZA(),t.TgZ(14,"button",9),t.NdJ("click",function(){t.CHM(o);const Z=t.oxw();return t.KtG(Z.edit())}),t._uU(15,"Editar"),t.qZA(),t.TgZ(16,"button",10),t.NdJ("click",function(){const q=t.CHM(o).$implicit,S=t.oxw();return t.KtG(S.delete(q))}),t._uU(17,"Eliminar"),t.qZA()()()()}if(2&r){const o=e.$implicit,d=e.index;t.xp6(2),t.Oqu(d+1),t.xp6(2),t.Oqu(o.name),t.xp6(2),t.Oqu(t.xi3(7,5,o.price,"S/. ")),t.xp6(3),t.Q6J("src",o.imgUrl,t.LSH)("alt",o.name)}}p.\u0275fac=function(e){return new(e||p)(t.Y36(c.qu),t.Y36(i))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-create-product-page"]],decls:21,vars:3,consts:[[1,"row"],[1,"col-6"],[1,"fw-bold","fs-4","text-center"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","txtName",1,"form-label"],["type","text","formControlName","name","id","txtName",1,"form-control"],["for","txtPrice",1,"form-label"],["type","number","formControlName","price","id","txtPrice",1,"form-control"],["for","txtImg",1,"form-label"],["type","text","formControlName","imgUrl","id","txtImg",1,"form-control"],["type","submit","class","btn btn-primary",3,"disabled",4,"ngIf"],["class","d-flex justify-content-center",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"d-flex","justify-content-center"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div")(3,"p",2),t._uU(4,"Crear producto"),t.qZA()(),t.TgZ(5,"form",3),t.NdJ("ngSubmit",function(){return o.createProduct()}),t.TgZ(6,"div",4)(7,"label",5),t._uU(8,"Nombre"),t.qZA(),t._UZ(9,"input",6),t.qZA(),t.TgZ(10,"div",4)(11,"label",7),t._uU(12,"Precio"),t.qZA(),t._UZ(13,"input",8),t.qZA(),t.TgZ(14,"div",4)(15,"label",9),t._uU(16,"Im\xe1gen URL"),t.qZA(),t._UZ(17,"input",10),t.qZA(),t.YNc(18,y,2,1,"button",11),t.YNc(19,T,2,0,"div",12),t.qZA()(),t._UZ(20,"div",1),t.qZA()),2&e&&(t.xp6(5),t.Q6J("formGroup",o.createForm),t.xp6(13),t.Q6J("ngIf",!o.showSpinner),t.xp6(1),t.Q6J("ngIf",o.showSpinner))},dependencies:[f.O5,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.sg,c.u,v.O],encapsulation:2});class m{constructor(e){this.productService=e,this.products=[]}ngOnInit(){this.productService.getProducts().subscribe(e=>{this.products=e})}seeMore(){}edit(){}delete(e){var o=this;return(0,b.Z)(function*(){(yield g().fire({title:"\xbfEst\xe1s seguro de eliminar el producto?",text:"Recuerde que esta acci\xf3n no puede restablecerse",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed",cancelButtonText:"No"})).isConfirmed&&(yield o.productService.deleteProduct(e),g().fire({icon:"success",title:"Good Job!",text:"El producto ha sido eliminado correctamente"}))})()}}m.\u0275fac=function(e){return new(e||m)(t.Y36(i))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-list-product-page"]],decls:14,vars:1,consts:[[1,"table","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row",1,"align-middle"],[1,"align-middle"],["width","100","height","100",3,"src","alt"],[1,"align-middle","text-center"],["role","group","aria-label","Basic mixed styles example",1,"btn-group"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-warning",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th",1),t._uU(6,"Nombre"),t.qZA(),t.TgZ(7,"th",1),t._uU(8,"Precio"),t.qZA(),t.TgZ(9,"th",1),t._uU(10,"Im\xe1gen"),t.qZA(),t._UZ(11,"th",1),t.qZA()(),t.TgZ(12,"tbody"),t.YNc(13,U,18,8,"tr",2),t.qZA()()),2&e&&(t.xp6(13),t.Q6J("ngForOf",o.products))},dependencies:[f.sg,f.H9],encapsulation:2});const A=[{path:"",component:l,children:[{path:"create",component:p},{path:"list",component:m},{path:"**",pathMatch:"full",redirectTo:"list"}]}];class a{}a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[h.Bz.forChild(A),h.Bz]});var _=n(4466);class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[f.ez,a,c.UX,_.m]})}}]);