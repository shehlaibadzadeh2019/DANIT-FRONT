// public class SimpleV4 {
//     //public int count = 0;
//     private final int max;
//     private final int min;
//     private int simples[];
//     private int index =0;

//     public SimpleV4(int min, int max) {
//         this.max = max;
//         this.min = min;
//         this.simples = new int[this.max];
//     }

//     private boolean restIsZero(int orig, int idx) {
//         //count++;
//         return (orig % simples[idx]) == 0;
//     }

//     private boolean toBeAnalyzed(int idx, int max) {
//         return simples[idx]<=max;
//     }

//     private boolean isSimple(int num) {
//         if (num==1) return false;
//         if (num==2) return true;
//         int maxToAnalyze = (int) Math.sqrt(num);
//         for (int idx = 0; idx<index; idx++) {
//             if (toBeAnalyzed(idx, maxToAnalyze) && restIsZero(num, idx)) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     public int[] array() {
//         for (int i=1;i<=max;i++) {
//             if (isSimple(i)) {
//                 simples[index++] = i;
//             }
//         }
//         int min_index=0;
//         if (min>1) {
//             for (int i = 0; i< index; i++) {
//                 if (simples[i]>=min) {
//                     min_index=i;
//                     break;
//                 }
//             }
//         }
//         return Arrays.copyOfRange(simples,min_index, index);
//     }
// }

let min, max;
let simples = [1, 2, 3];
let index = 0;

function isValidPair(min, max) {
    return getNaturalNumberOrFalse(min) && getNaturalNumberOrFalse(max) && isMinMaxOrder(min, max);
}

function restIsZero(orig, idx) {
    return (orig % this.simples[idx]) == 0;
}

function toBeAnalyzed(idx, max) {
    return this.simples[idx] <= max;
}

function isSimple(num) {
    if (num <= 3) return false;
    let maxToAnalyze = Math.floor(Math.sqrt(num));
    for (let idx = 0; idx < this.index; idx++) {
        if (toBeAnalyzed(idx, maxToAnalyze) && restIsZero(num, idx)) {
            return false;
        }
    }
    return true;
}

function array() {
    for (let i = 1; i <= this.max; i++) {
        if (isSimple(i)) {
            this.simples[index++] = i;
        }
    }
    let min_index = 0;
    if (this.min > 1) {
        for (let i = 0; i < this.index; i++) {
            if (this.simples[i] >= this.min) {
                min_index = i;
                break;
            }
        }
    }
    return this.simples.copyWithin(min_index, index);
}

function printAllSimples(min, max) {
    for (let i = min; i <= max; i++) {
        if (isSimple(i)) {
            console.log(i);
        }
    }
}

while (!isValidPair(this.min, this.max)) {
	[this.min, this.max] = promptNUsrInputs(2);
}

array();

printAllSimples(this.min, this.max);
