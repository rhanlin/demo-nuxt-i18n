export const VUE_CONSOLE = (target, value) => {
  if (process.server) return
  console.log(
    `%c ${target} %c ${value} `,
    'background:#35495e; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
    'background:#41b883; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
  )
}
