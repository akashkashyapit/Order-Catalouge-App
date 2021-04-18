
export default function formatCurrency(num) {
  // let d = num.toFixed(1)
  return "Rs" + Number(num).toLocaleString() + " ";
}