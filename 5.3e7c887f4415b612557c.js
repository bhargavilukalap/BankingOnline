(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{zrcO:function(e,t,r){"use strict";r.r(t),r.d(t,"UsersModule",function(){return F});var s=r("8VHZ"),i=r("Yvf7"),n=r("Fk62"),b=r("Ub9n");let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Cb({type:e,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(e,t){1&e&&(b.Nb(0,"div",0),b.Nb(1,"div",1),b.Jb(2,"router-outlet"),b.Mb(),b.Mb())},directives:[n.g],encapsulation:2}),e})();var o=r("qIlG"),a=r("J9tS");function d(e,t){1&e&&b.Jb(0,"span",10)}function u(e,t){1&e&&(b.Nb(0,"span"),b.wc(1,"Delete"),b.Mb())}function f(e,t){if(1&e){const e=b.Ob();b.Nb(0,"tr"),b.Nb(1,"td"),b.wc(2),b.Mb(),b.Nb(3,"td"),b.wc(4),b.Mb(),b.Nb(5,"td"),b.wc(6),b.Mb(),b.Nb(7,"td"),b.wc(8),b.Mb(),b.Nb(9,"td",6),b.Nb(10,"a",7),b.wc(11,"Edit"),b.Mb(),b.Nb(12,"button",8),b.Xb("click",function(){b.nc(e);const r=t.$implicit;return b.Zb().deleteUser(r.id)}),b.uc(13,d,1,0,"span",9),b.uc(14,u,2,0,"span",5),b.Mb(),b.Mb(),b.Mb()}if(2&e){const e=t.$implicit;b.wb(2),b.xc(e.firstName),b.wb(2),b.xc(e.lastName),b.wb(2),b.xc(e.username),b.wb(2),b.xc(e.Role),b.wb(2),b.gc("routerLink","edit/",e.id,""),b.wb(2),b.ec("disabled",e.isDeleting),b.wb(1),b.ec("ngIf",e.isDeleting),b.wb(1),b.ec("ngIf",!e.isDeleting)}}function l(e,t){1&e&&(b.Nb(0,"tr"),b.Nb(1,"td",11),b.Jb(2,"span",12),b.Mb(),b.Mb())}let m=(()=>{class e{constructor(e){this.accountService=e}ngOnInit(){this.accountService.getAll().pipe(Object(o.a)()).subscribe(e=>this.users=e)}deleteUser(e){this.users.find(t=>t.id===e).isDeleting=!0,this.accountService.delete(e).pipe(Object(o.a)()).subscribe(()=>{this.users=this.users.filter(t=>t.id!==e)})}}return e.\u0275fac=function(t){return new(t||e)(b.Ib(a.a))},e.\u0275cmp=b.Cb({type:e,selectors:[["ng-component"]],decls:19,vars:2,consts:[["routerLink","add",1,"btn","btn-sm","btn-success","mb-2"],[1,"table","table-striped"],[2,"width","30%"],[2,"width","10%"],[4,"ngFor","ngForOf"],[4,"ngIf"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-primary","mr-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger","btn-delete-user",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(e,t){1&e&&(b.Nb(0,"h1"),b.wc(1,"Users"),b.Mb(),b.Nb(2,"a",0),b.wc(3,"Add User"),b.Mb(),b.Nb(4,"table",1),b.Nb(5,"thead"),b.Nb(6,"tr"),b.Nb(7,"th",2),b.wc(8,"First Name"),b.Mb(),b.Nb(9,"th",2),b.wc(10,"Last Name"),b.Mb(),b.Nb(11,"th",2),b.wc(12,"Username"),b.Mb(),b.Nb(13,"th",2),b.wc(14,"Role"),b.Mb(),b.Jb(15,"th",3),b.Mb(),b.Mb(),b.Nb(16,"tbody"),b.uc(17,f,15,8,"tr",4),b.uc(18,l,3,0,"tr",5),b.Mb(),b.Mb()),2&e&&(b.wb(17),b.ec("ngForOf",t.users),b.wb(1),b.ec("ngIf",!t.users))},directives:[n.e,i.j,i.k],encapsulation:2}),e})();function p(e,t){1&e&&(b.Nb(0,"h1"),b.wc(1,"Add User"),b.Mb())}function w(e,t){1&e&&(b.Nb(0,"h1"),b.wc(1,"Edit User"),b.Mb())}function N(e,t){1&e&&(b.Nb(0,"div"),b.wc(1,"First Name is required"),b.Mb())}function h(e,t){if(1&e&&(b.Nb(0,"div",18),b.uc(1,N,2,0,"div",0),b.Mb()),2&e){const e=b.Zb();b.wb(1),b.ec("ngIf",e.f.firstName.errors.required)}}function g(e,t){1&e&&(b.Nb(0,"div"),b.wc(1,"Last Name is required"),b.Mb())}function M(e,t){if(1&e&&(b.Nb(0,"div",18),b.uc(1,g,2,0,"div",0),b.Mb()),2&e){const e=b.Zb();b.wb(1),b.ec("ngIf",e.f.lastName.errors.required)}}function v(e,t){1&e&&(b.Nb(0,"div"),b.wc(1,"Last Name is required"),b.Mb())}function I(e,t){if(1&e&&(b.Nb(0,"div",18),b.uc(1,v,2,0,"div",0),b.Mb()),2&e){const e=b.Zb();b.wb(1),b.ec("ngIf",e.f.Role.errors.required)}}function C(e,t){1&e&&(b.Nb(0,"div"),b.wc(1,"Username is required"),b.Mb())}function k(e,t){if(1&e&&(b.Nb(0,"div",18),b.uc(1,C,2,0,"div",0),b.Mb()),2&e){const e=b.Zb();b.wb(1),b.ec("ngIf",e.f.username.errors.required)}}function q(e,t){1&e&&(b.Nb(0,"em"),b.wc(1,"(Leave blank to keep the same password)"),b.Mb())}function y(e,t){1&e&&(b.Nb(0,"div"),b.wc(1,"Password is required"),b.Mb())}function U(e,t){1&e&&(b.Nb(0,"div"),b.wc(1,"Password must be at least 6 characters"),b.Mb())}function J(e,t){if(1&e&&(b.Nb(0,"div",18),b.uc(1,y,2,0,"div",0),b.uc(2,U,2,0,"div",0),b.Mb()),2&e){const e=b.Zb();b.wb(1),b.ec("ngIf",e.f.password.errors.required),b.wb(1),b.ec("ngIf",e.f.password.errors.minlength)}}function S(e,t){1&e&&b.Jb(0,"span",19)}const A=function(e){return{"is-invalid":e}};let L=(()=>{class e{constructor(e,t,r,i){this.formBuilder=e,this.route=t,this.router=r,this.accountService=i,this.form=new s.d({}),this.id="",this.isAddMode=!1,this.loading=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id;const e=[s.n.minLength(6)];this.isAddMode&&e.push(s.n.required),this.form=this.formBuilder.group({firstName:["",s.n.required],lastName:["",s.n.required],username:["",s.n.required],password:["",e],Role:["",s.n.required]}),this.isAddMode||this.accountService.getById(this.id).pipe(Object(o.a)()).subscribe(e=>{this.f.firstName.setValue(e.firstName),this.f.lastName.setValue(e.lastName),this.f.username.setValue(e.username),this.f.Role.setValue(e.Role)})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.form.invalid||(this.loading=!0,this.isAddMode?this.createUser():this.updateUser())}createUser(){this.accountService.register(this.form.value).pipe(Object(o.a)()).subscribe(e=>{this.router.navigate([".",{relativeTo:this.route}])},e=>{this.loading=!1})}updateUser(){this.accountService.update(this.id,this.form.value).pipe(Object(o.a)()).subscribe(e=>{this.router.navigate(["..",{relativeTo:this.route}])},e=>{this.loading=!1})}}return e.\u0275fac=function(t){return new(t||e)(b.Ib(s.b),b.Ib(n.a),b.Ib(n.c),b.Ib(a.a))},e.\u0275cmp=b.Cb({type:e,selectors:[["ng-component"]],decls:37,vars:26,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col"],["for","firstName"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","lastName"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["for","Role"],["for","username"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,t){1&e&&(b.uc(0,p,2,0,"h1",0),b.uc(1,w,2,0,"h1",0),b.Nb(2,"form",1),b.Xb("ngSubmit",function(){return t.onSubmit()}),b.Nb(3,"div",2),b.Nb(4,"div",3),b.Nb(5,"label",4),b.wc(6,"First Name"),b.Mb(),b.Jb(7,"input",5),b.uc(8,h,2,1,"div",6),b.Mb(),b.Nb(9,"div",3),b.Nb(10,"label",7),b.wc(11,"Last Name"),b.Mb(),b.Jb(12,"input",8),b.uc(13,M,2,1,"div",6),b.Mb(),b.Nb(14,"div",3),b.Nb(15,"label",9),b.wc(16,"Last Name"),b.Mb(),b.Jb(17,"input",8),b.uc(18,I,2,1,"div",6),b.Mb(),b.Mb(),b.Nb(19,"div",2),b.Nb(20,"div",3),b.Nb(21,"label",10),b.wc(22,"Username"),b.Mb(),b.Jb(23,"input",11),b.uc(24,k,2,1,"div",6),b.Mb(),b.Nb(25,"div",3),b.Nb(26,"label",12),b.wc(27," Password "),b.uc(28,q,2,0,"em",0),b.Mb(),b.Jb(29,"input",13),b.uc(30,J,3,2,"div",6),b.Mb(),b.Mb(),b.Nb(31,"div",14),b.Nb(32,"button",15),b.uc(33,S,1,0,"span",16),b.wc(34," Save "),b.Mb(),b.Nb(35,"a",17),b.wc(36,"Cancel"),b.Mb(),b.Mb(),b.Mb()),2&e&&(b.ec("ngIf",t.isAddMode),b.wb(1),b.ec("ngIf",!t.isAddMode),b.wb(1),b.ec("formGroup",t.form),b.wb(5),b.ec("ngClass",b.ic(16,A,t.submitted&&t.f.firstName.errors)),b.wb(1),b.ec("ngIf",t.submitted&&t.f.firstName.errors),b.wb(4),b.ec("ngClass",b.ic(18,A,t.submitted&&t.f.lastName.errors)),b.wb(1),b.ec("ngIf",t.submitted&&t.f.lastName.errors),b.wb(4),b.ec("ngClass",b.ic(20,A,t.submitted&&t.f.Role.errors)),b.wb(1),b.ec("ngIf",t.submitted&&t.f.Role.errors),b.wb(5),b.ec("ngClass",b.ic(22,A,t.submitted&&t.f.username.errors)),b.wb(1),b.ec("ngIf",t.submitted&&t.f.username.errors),b.wb(4),b.ec("ngIf",!t.isAddMode),b.wb(1),b.ec("ngClass",b.ic(24,A,t.submitted&&t.f.password.errors)),b.wb(1),b.ec("ngIf",t.submitted&&t.f.password.errors),b.wb(2),b.ec("disabled",t.loading),b.wb(1),b.ec("ngIf",t.loading))},directives:[i.k,s.p,s.j,s.e,s.a,s.i,s.c,i.i,n.e],encapsulation:2}),e})();const O=[{path:"",component:c,children:[{path:"",component:m},{path:"add",component:L},{path:"edit/:id",component:L}]}];let j=(()=>{class e{}return e.\u0275mod=b.Gb({type:e}),e.\u0275inj=b.Fb({factory:function(t){return new(t||e)},imports:[[n.f.forChild(O)],n.f]}),e})(),F=(()=>{class e{}return e.\u0275mod=b.Gb({type:e}),e.\u0275inj=b.Fb({factory:function(t){return new(t||e)},imports:[[i.b,s.m,j]]}),e})()}}]);