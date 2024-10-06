import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ContrlFlowComponent } from './components/contrl-flow/contrl-flow.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { DecoratorsComponent } from './components/decorators/decorators.component';

export const routes: Routes = [

    // {
    //     path: '',
    //     redirectTo: 'login',
    //     pathMatch:'full'
    // },
    // {
    //     path:'login',
    //     component:LoginComponent
    // },
    // {
    //     path:'',
    //     component:LayoutComponent,
    //     children:[
            {
                path:'addemp',
                component:AddEmployeeComponent
            },
            {
                path:'controlflow',
                component:ContrlFlowComponent
            },
            {
                path:'databinding',
                component:DataBindingComponent
            },
            {
                path:'emplist',
                component:EmpListComponent
            },
            {
                path:'decorators',
                component:DecoratorsComponent
            }
        ]
    

