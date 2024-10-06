const encodeImgURI = uri => {
  if (!uri) return null

  let arr = uri.split('/')

  for (let i = 0; i < arr.length; i++) {
    if (arr.length - 2 <= i) {
      arr[i] = encodeURIComponent(arr[i])
      break
    }
  }

  return arr.join('/')
}

export default encodeImgURI
