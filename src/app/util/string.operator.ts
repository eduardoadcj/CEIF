export class StringOperator{
    
    static connectives: string[] = [
        "da",
        "do",
        "de",
        "a",
        "á",
        "à",
        "e",
        "é",
        "o",
        "um",
        "uma",
        "uns",
        "mas",
        "por",
        "no",
        "na",
        "em",
        "com",
        "pra",
        "pro",
        "para",
        "as",
        "os"
    ];

    private static isConnective(term: string) : boolean {
        let result: boolean = false;
        for(let i = 0; i < StringOperator.connectives.length; i++){
            if(term == StringOperator.connectives[i]){
                result = true;
                break;
            }
        }
        return result;
    }

    public static capitalize(text: string): string{
        let fullterm: string;
        let array: string[] = text.split(' ');
        for(let i = 0; i < array.length; i++){
            let t = array[i];
            if(!this.isConnective(t)){
                fullterm += t.substr(1).toUpperCase() + t.substring(1, t.length).toLowerCase() + " ";        
            }else{
                fullterm += t + " ";
            }
        }
        return fullterm.trim();
    }

    public static abbreviate(text: string): string{
        let array: string[] = text.split(' ');
        let fullterm: string;
        fullterm = array[0] + " ";
        for(let i = 1; i < array.length-1; i++){
            if(!this.isConnective(array[i])){
                fullterm += array[i].substr(1) + ". ";
            }
        }
        fullterm += array[array.length-1];
        return fullterm;
    }

}