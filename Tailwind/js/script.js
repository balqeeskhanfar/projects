function toDark() {
  var big = document.getElementById('big')
  var Dimg = document.getElementById('Dimg')
  var Limg = document.getElementById('Limg')

  if (big.className == 'dark') {
    big.classList.remove('dark')
    Dimg.classList.remove('hidden')
    Limg.classList.add('hidden')
  } else {
    big.classList.add('dark')
    Limg.classList.remove('hidden')
    Dimg.classList.add('hidden')
  }
}
