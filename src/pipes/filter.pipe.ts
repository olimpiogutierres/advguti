import { Pipe, PipeTransform } from '@angular/core';  
  
  
@Pipe({  
    name: 'myfilter',  
    pure: false  
})  
  
export class MyFilterPipe implements PipeTransform {  
    transform(items: any[], filter: any): any {  
        if (!items || !filter) {  
            return items;  
        }  

        console.log();
        
        
        return items.filter(item => item.nome.toString().toLowerCase().indexOf(filter.toString().toLowerCase()) !== -1);  
    }  
}  