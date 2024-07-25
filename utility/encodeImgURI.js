const encodeImgURI = uri => {
  let arr = uri.split('/')

  for (let i = 0; i < arr.length; i++) {
    if(arr.length - 2 <= i) {
      arr[i] = encodeURIComponent(arr[i])
      console.log(arr[i])
      break
    }
  }


  return arr.join('/')
}

export default encodeImgURI
