// src/app/pipes/translate.pipe.ts
// import { Pipe, PipeTransform } from '@angular/core';
// import { from, Observable, of } from 'rxjs';
// import translate from 'google-translate-api-browser';
// import { catchError } from 'rxjs/operators';

// @Pipe({
//   name: 'translateText',
//   standalone: true,
// })
// export class TranslateTextPipe implements PipeTransform {
//   transform(value: string, targetLang: string = 'pt'): Observable<string> {
//     if (!value) return of(''); // Retorna vazio se não houver valor

//     // Usa a API para traduzir o texto e converte para um Observable
//     return from(
//       translate(value, { to: targetLang }).then((res: any) => res.text)
//     ).pipe(
//       catchError(() => of('Erro na tradução')) // Tratar erros
//     );
//   }
// }
