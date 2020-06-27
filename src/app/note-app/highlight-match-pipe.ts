import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'highlightMatchCase'
  })

export class HighlightMatchCasePipe implements PipeTransform {
    transform(value: string, args: string): any {
        if (args && value) {
            const startIndex = value.toLowerCase().indexOf(args.toLowerCase());
            if (startIndex !== -1) {
                const endLength = args.length;
                const matchingString = value.substr(startIndex, endLength);
                return value.replace(matchingString, '<strong class="font-weight-bold">' + matchingString + '</strong>');
            }

        }
        return value;
    }

}
