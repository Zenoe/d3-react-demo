export const xScale = (d3, points, width) => (d3.scaleLinear().domain(d3.extent(points, d=>d[0])).range([ 0, width ]))
export const yScale = (d3, points, height, marginTop=0, marginBottom=0) => (d3.scaleLinear().domain(d3.extent(points, d=>d[1])).range([ height-marginBottom, marginTop ]))


export function promiseSome(promises) {
  return Promise.all(
    promises.map(p => p.catch(error => console.log(error)))
  )
}

export function historyPushWithReferer(history, state, pathname){
  history.push({
    pathname,
    state:{prevPath: window.location.href, ...state}
  })
}
