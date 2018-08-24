import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByStatus' })
export class FilterByStatusPipe implements PipeTransform {

  transform(contatos: any, status: string) {
    if (status) {
      return contatos.filter(contato => contato.status == status);
    } else {
      return contatos;
    }
  }

}
