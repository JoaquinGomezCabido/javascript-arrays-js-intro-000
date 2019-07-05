var chocolateBars = ['snickers', "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = (a[], b) => {
  return newArray = [b, ...a]
}

var destructivelyAddElementToBeginningOfArray = (a[],b) => {
  return a = [b, ...a]
}

var addElementToEndOfArray = (a[], b) => {
  return newArray = [...a, b]
}

var destructivelyAddElementToEndOfArray = (a[],b) => {
  return a = [...a, b]
}

var accessElementInArray = (a[], i) => {
  return a[i]
}

var destructivelyRemoveElementFromBeginningOfArray = (a[]) => {
  return a.shift()
}

var removeElementFromBeginningOfArray = (a[]) => {
  return a.slice(1)
}

var destructivelyRemoveElementFromEndOfArray = (a[]) => {
  return a.pop()
}

var removeElementFromEndOfArray = (a[]) => {
  return a.slice(0, a.length -1)
}
