// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
let task_number = 1;
module.exports = function check(str, bracketsConfig) {
   // function check(str, bracketsConfig) {
   let current = 0;
   let str2 = '';
   console.log('task_number', task_number++);
   console.log('bracketsConfig.length', bracketsConfig.length);
   while (current !== -1) {
      console.log('start str2', str2);
      console.log('start str', str);
      current = 0;
      for (let i = 0; i < bracketsConfig.length; i++) {
         console.log('looking for', bracketsConfig[i].join(''));
         current = str.indexOf(bracketsConfig[i].join(''));
         console.log('find at current', current);
         if (current > -1) {
            str2 = str.substr(0, current) + str.substr(current + 2);
            str = str2;
            console.log('end str2', str2);
            console.log('end str', str);
            break;
         }
      }
   }
   if (str.length) return false;
   return true;
}
// const res = check('|(|)', config5);
// console.log(res);