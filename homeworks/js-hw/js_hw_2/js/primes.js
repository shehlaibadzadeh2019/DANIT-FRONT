
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

//import { promptUsrInput } from '../js-utils/valudate_user_prompt.js';
//Components.utils.import("resource://../js-utils/valudate_user_prompt.js");

let min;
let max;
let usrInput = promptNUsrInputs(2);
if (isValidPair (usrInput)) {

}

