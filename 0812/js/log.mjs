// mjs : 
// log.mjs

// 원래대로 한다면
// export function log(msg) {
//   console.log(msg);
// }
// export function error(msg) {
//   console.log(msg);
// }
// export const MIN_VALLUE = 100;


// 간결하게 한다면
function log(msg) {
  console.log(msg);
}
function error(msg) {
  console.log(msg);
}
const MIN_VALLUE = 100;
export { log, error, MIN_VALLUE }; // 그룹

